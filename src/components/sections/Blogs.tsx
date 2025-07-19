import { BlogSectionData, BlogPost } from "@/types/blog";
import { BlogList } from "@/components/blog/BlogList";
import Link from "next/link";

interface BlogSectionProps {
  posts: BlogPost[];
  data: BlogSectionData;
}

export default function BlogSection({ posts, data }: BlogSectionProps) {
  return (
    <section className="dark:bg-muted relative w-full overflow-hidden bg-white pt-3 pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-cormorant text-primary mb-16 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            {data.title}
          </h1>
          <BlogList posts={posts} />
        </div>

        {/* See More Button */}
        <div className="mt-16 text-center">
          <Link
            href={data.seeMoreUrl || "/blog"}
            className="font-bitter bg-accent dark:bg-accent/80 text-background hover:bg-accent/80 rounded-3xl px-10 py-4 font-semibold shadow transition duration-300"
          >
            See More Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
