"use client";

import Image from "next/image";
import Link from "next/link";
import { Expertise, ExpertiseLoader } from "@/types/page";
import expertiseImg from "@/assets/images/expertise.svg";

interface ExpertiseProps {
  data: Expertise;
}

export default function ExpertiseSection({ data }: ExpertiseProps) {
  // Array of color classes to apply to the loaders in sequence
  const loaderColors = ["bg-muted", "bg-accent", "bg-primary"];

  return (
    <section className="bg-background relative w-full overflow-hidden pt-2 pb-36">
      <div className="mx-auto flex max-w-7xl flex-col-reverse px-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-10 lg:px-8">
        <div className="mt-12 flex w-full flex-col items-center text-center md:mt-0 md:items-start md:text-left">
          {/* Title */}
          <h1 className="font-cormorant text-primary mb-4 text-4xl leading-[1.2] font-semibold tracking-tight sm:text-5xl md:max-w-lg md:text-[2.6rem] lg:text-6xl">
            {data.title}
          </h1>
          {/* Content */}
          <p className="font-bitter text-primary/80 mt-1 mb-8 max-w-sm text-sm md:max-w-lg">{data.content}</p>

          {/* Loaders Section */}
          <div className="mb-8 w-full max-w-lg space-y-6">
            {data.loaders.map((loader, idx) => (
              <div key={idx} className="dark:bg-muted-foreground/50 h-7 w-full rounded-full bg-white">
                <div
                  className={`flex h-7 items-center justify-between rounded-l-full rounded-r-lg px-3 ${loaderColors[idx % loaderColors.length]}`}
                  style={{ width: `${loader.percentage}%` }}
                >
                  <span className="font-bitter text-xs font-medium text-white">{loader.label}</span>
                  <span className="font-cormorant text-lg font-bold text-white">{loader.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
          {/* Action Button */}
          <Link
            href={data.button.url}
            className="font-bitter bg-accent text-background hover:bg-accent/80 rounded-3xl px-8 py-3 font-semibold shadow transition duration-300"
          >
            {data.button.text}
          </Link>
        </div>

        {/* Image */}
        <div className="relative flex w-full items-center justify-center">
          <div className="bg-accent/30 absolute top-6 z-0 size-64 rounded-tl-[5.2rem] rounded-tr-[2.5rem] rounded-br-[6.5rem] sm:size-80 md:right-10 lg:size-96"></div>
          <Image
            src={expertiseImg}
            alt="Our Expertise Image"
            width={500}
            height={500}
            className="z-10 mx-auto h-auto w-full max-w-md lg:max-w-xl"
          />
          {/* Decorative circles */}
          <div className="absolute -right-12 bottom-8 flex -translate-x-10 flex-col gap-3 sm:right-12 md:-right-12 lg:bottom-14">
            <span className="bg-muted size-6 rounded-full md:size-7"></span>
            <span className="bg-accent size-6 rounded-full md:size-7"></span>
            <span className="bg-primary size-6 rounded-full md:size-7"></span>
          </div>
        </div>
      </div>

      {/* Shape Divider */}
      <div className="shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="dark:fill-muted fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
