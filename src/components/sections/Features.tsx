"use client";

import { Features, FeatureItem } from "@/types/page";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

interface FeatureProps {
  data: Features;
}

const FeatureCard = ({ item }: { item: FeatureItem }) => {
  const baseClasses =
    "flex flex-col cursor-pointer items-center text-center px-6 py-8 transition-transform duration-300 ease-in-out transform hover:-translate-y-2";

  const cardClasses = item.isHighlighted
    ? `${baseClasses} bg-accent dark:bg-accent/90 text-white shadow-md shadow-muted-foreground/30 rounded-tr-[5rem] rounded-tl-[2.5rem] rounded-bl-[5rem] rounded-br-lg relative`
    : `${baseClasses} bg-transparent backdrop-blur-sm`;

  return (
    <div className={cardClasses}>
      <div className="flex h-16 w-16 items-center justify-center rounded-full">
        <Image
          src={item.icon}
          alt={`${item.title} icon`}
          width={40}
          height={40}
          className={`${item.isHighlighted ? "size-15" : "size-12"} ${item.iconDark ? "dark:hidden" : ""}`}
        />
        {item.iconDark && (
          <Image
            src={item.iconDark}
            alt={`${item.title} icon`}
            width={40}
            height={40}
            className={`${item.isHighlighted ? "size-15" : "size-12"} hidden dark:block`}
          />
        )}
      </div>
      <h3 className="font-cormorant mt-5 text-2xl font-bold">{item.title}</h3>
      <p className="font-bitter mt-3 text-sm font-light">{item.content}</p>
      <Link
        href={item.learnMoreLink}
        className={`mt-5 flex w-full items-center justify-center gap-2.5 ${item.isHighlighted ? "text-white/80 hover:text-white" : "text-accent hover:text-primary/70"}`}
      >
        <span className={`font-bitter text-sm font-semibold`}>Learn More </span>
        <FaArrowRightLong />
      </Link>
      {item.isHighlighted && (
        <Image
          src="/scribbles.svg"
          alt="Decorative Scribble"
          width={60}
          height={60}
          className="absolute -bottom-12 -left-2 z-10 size-16 md:-left-6"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}
    </div>
  );
};

export default function FeatureSection({ data }: FeatureProps) {
  return (
    <section className="bg-background relative w-full pb-12 md:pt-8 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-primary font-cormorant text-4xl font-semibold sm:text-5xl lg:text-6xl">{data.title}</h1>
          {/* features */}
          <div className="mt-10 grid gap-2 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {data.items.map((item, index) => (
              <FeatureCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
