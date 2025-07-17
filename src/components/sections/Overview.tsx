"use client";

import { Overview } from "@/types/page";
import overviewImg from "@/assets/images/overview.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface OverviewProps {
  data: Overview;
}

export default function OverviewSection({ data }: OverviewProps) {
  return (
    <section className="dark:bg-muted relative w-full bg-white pb-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-y-12 px-4 sm:px-6 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 lg:px-8">
        {/* Image Column */}
        <div className="relative flex w-full items-center justify-center">
          <div className="bg-accent/20 absolute z-0 size-64 -translate-y-18 rounded-tl-[5.2rem] rounded-tr-[2.5rem] rounded-br-[6.5rem] sm:size-80 lg:size-96"></div>
          <div className="relative mx-auto w-full max-w-lg">
            <Image
              src={overviewImg}
              alt="Overview Image"
              width={300}
              height={300}
              className="z-10 mx-auto h-auto w-full lg:max-w-xl"
            />
            {/* Decorative Circles */}
            <div className="absolute bottom-5 z-20 flex flex-col gap-3 md:-left-3 xl:-left-10">
              <span className="bg-accent size-6 rounded-full md:size-7"></span>
              <span className="bg-primary size-6 rounded-full md:size-7"></span>
              <span className="bg-muted size-6 rounded-full md:size-7"></span>
            </div>
            {/* Decorative background shape */}
            <div className="absolute -top-4 -right-4 -z-10 h-full w-full rounded-lg bg-gray-100"></div>
          </div>
        </div>

        {/* Content Column */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h2 className="font-cormorant text-primary text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
            {data.title}
          </h2>
          <p className="text-muted-foreground font-bitter mt-5 max-w-xl text-base">{data.subtitle}</p>

          {/* Stats Section */}
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 md:w-full">
            {data.stats.map((stat, index) => (
              <div
                key={index}
                className={cn(
                  "shadow-muted-foreground/50 rounded-tl-[1.5rem] rounded-tr-[3.5rem] rounded-br-2xl p-4 text-center shadow-md duration-300 hover:shadow-md",
                  {
                    "bg-accent text-background": stat.isHighlighted,
                    "bg-background": !stat.isHighlighted,
                  }
                )}
              >
                <p
                  className={cn("font-cormorant text-4xl font-extrabold", {
                    "text-background": stat.isHighlighted,
                    "text-primary": !stat.isHighlighted,
                  })}
                >
                  {stat.number}
                </p>
                <p
                  className={cn("font-bitter mt-2 text-xs font-medium break-words lg:text-sm", {
                    "text-background/80": stat.isHighlighted,
                    "text-muted-foreground": !stat.isHighlighted,
                  })}
                >
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* SHAPE DIVIDER */}
      <div className="shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
}
