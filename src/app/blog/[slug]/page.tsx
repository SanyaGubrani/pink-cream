import { getBlogPosts, getPost } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaArrowLeft } from "react-icons/fa";
import { Metadata } from "next";
import { cn } from "@/lib/utils";

type PostMetadata = {
  title: string;
  date: string;
  summary: string;
  author: string;
  slug: string;
  image?: string | StaticImageData;
};

// Generate Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {};
  }
  return {
    title: post.metadata.title,
    description: post.metadata.summary,
  };
}

// Generate Static Paths for all posts
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

//  Author Card Component
const AuthorCard = ({ authorName }: { authorName: string }) => {
  return (
    <div className="bg-muted/80 dark:bg-primary/20 mt-16 rounded-2xl p-6 shadow-lg">
      <div className="flex items-center gap-4">
        <Image src="/blog01.jpg" alt={authorName} width={60} height={60} className="rounded-full" />
        <div>
          <p className="text-muted-foreground text-sm font-semibold">WRITTEN BY</p>
          <p className="font-cormorant text-primary text-xl font-bold dark:text-white">{authorName}</p>
        </div>
      </div>
    </div>
  );
};

//  Main Blog Post Page Component
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const metadata = post.metadata as PostMetadata;

  return (
    <div className="dark:bg-muted bg-white">
      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Post Header */}
        <header className="mb-12 text-center">
          <Link
            href="/blog"
            className="text-accent hover:text-primary mb-8 inline-flex items-center gap-2 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to all articles</span>
          </Link>
          <h1 className="font-cormorant text-primary mb-4 text-4xl leading-tight font-bold md:text-5xl dark:text-white">
            {metadata.title}
          </h1>
          <div className="text-muted-foreground flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-accent" />
              <time dateTime={metadata.date}>
                {new Date(metadata.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-2">
              <FaUser className="text-accent" />
              <span>{metadata.author}</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {metadata.image && (
          <div className="mb-12 overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={metadata.image}
              alt={metadata.title}
              width={1200}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        )}

        {/* Post Content */}
        <div
          className={cn(
            "prose prose-lg dark:prose-invert max-w-none",
            // General typography
            "prose-p:font-bitter prose-p:leading-relaxed",
            "prose-headings:font-cormorant prose-headings:font-bold prose-headings:text-primary dark:prose-headings:text-white",
            // Lists
            "prose-li:font-bitter",
            "prose-li:marker:text-accent",
            // Links
            "prose-a:text-accent prose-a:transition-colors hover:prose-a:text-primary",
            // Code blocks
            "prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:rounded-xl prose-pre:p-4",
            // Blockquotes
            "prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:pl-4 prose-blockquote:italic"
          )}
          dangerouslySetInnerHTML={{ __html: post.source }}
        />

        {/* Author Card */}
        <AuthorCard authorName={metadata.author} />
      </article>
    </div>
  );
}
