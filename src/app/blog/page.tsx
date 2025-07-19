import { getBlogPosts } from "@/lib/blog";
import { BlogList } from "@/components/blog/BlogList";

export default async function BlogPage() {
  const allPosts = await getBlogPosts();
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section className="bg-background dark:bg- py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-cormorant text-primary mb-16 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            All Blogs & Articles
          </h1>
          <BlogList posts={sortedPosts} />
        </div>
      </div>
    </section>
  );
}
