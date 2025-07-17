export default function BlogsSection() {
  return (
    // 1. OUTER WRAPPER: Handles background and vertical space
    <section className="bg-white dark:bg-muted w-full pt-10 pb-32">
      {/* 2. INNER WRAPPER: Constrains content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-primary font-cormorant text-5xl font-bold">Blogs!</h2>
          <p className="text-muted mt-4 text-lg">This is the start of the next section.</p>
        </div>
      </div>
    </section>
  );
}
