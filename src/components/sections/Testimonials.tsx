"use client";

import Image from "next/image";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { Testimonials, Testimonial } from "@/types/page";

interface TestimonialsProps {
  data: Testimonials;
}

// Testimonial Card
const TestimonialCard = ({ item }: { item: Testimonial }) => {
  return (
    <div className="dark:bg-muted/90 relative flex flex-col rounded-tl-[3rem] rounded-tr-[1.5rem] rounded-br-[4rem] rounded-bl-sm bg-white p-8 shadow-md">
      {/* 5-Star Rating */}
      <div className="text-accent mb-10 flex items-center gap-2.5">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="size-5" />
        ))}
      </div>

      {/* Quote */}
      <p className="font-bitter text-muted-foreground mb-6 flex-grow text-start">{item.quote}</p>

      {/* Author Info */}
      <div className="flex items-center gap-5">
        <Image
          src={item.avatar}
          alt={item.author}
          width={60}
          height={60}
          className="size-17 rounded-full object-cover"
        />
        <div className="text-start">
          <p className="font-cormorant text-primary text-lg font-bold dark:text-white">{item.author}</p>
          <p className="font-bitter text-muted-foreground text-sm">{item.role}</p>
        </div>
      </div>

      {/* Quotation Mark Icon */}
      <Image
        src="/quote.svg"
        alt="quotation"
        width={48}
        height={48}
        className="absolute right-8 bottom-4 -z-0 size-16"
      />
    </div>
  );
};

// Testimonials Section
export default function TestimonialsSection({ data }: TestimonialsProps) {
  return (
    <section className="bg-muted dark:bg-primary/50 relative w-full overflow-hidden pt-4 pb-52">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-cormorant text-primary mb-16 text-4xl font-semibold sm:text-5xl lg:text-6xl dark:text-white">
            {data.title}
          </h1>
          {/* Testimonials Grid */}
          <div className="mx-auto grid max-w-md gap-8 lg:max-w-none lg:grid-cols-3 lg:gap-8">
            {data.items.map((item, idx) => (
              <TestimonialCard key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
      {/* Shape Divider */}
      <div className="shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-background dark:bg-muted"
          ></path>
        </svg>
      </div>
    </section>
  );
}
