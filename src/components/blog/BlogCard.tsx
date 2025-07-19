"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-background/45 flex cursor-pointer flex-col overflow-hidden rounded transition-all duration-300 hover:shadow-lg"
    >
      <div className="relative overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          width={400}
          height={250}
          className="h-full w-full object-cover opacity-95 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-grow flex-col px-5 pt-4 pb-8">
        <div className="text-muted-foreground my-5 flex items-center gap-2 text-sm">
          <FaCalendarAlt className="text-accent size-4" />
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </div>
        <h3 className="font-cormorant hover:text-accent text-primary text-start text-2xl font-bold dark:text-white/90">
          {post.title}
        </h3>
        <p className="font-bitter text-muted-foreground mt-3 flex-grow text-start text-sm">{post.summary}</p>
        {/* <Link
          href={`/blog/${post.slug}`}
          className="font-bitter bg-accent/15 text-accent hover:bg-accent mt-6 w-full self-center rounded-xl px-6 py-2.5 font-semibold shadow-sm transition duration-300 hover:text-white"
        >
          Learn More
        </Link> */}
      </div>
    </Link>
  );
};
