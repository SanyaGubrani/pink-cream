"use client";

import Link from "next/link";
import { CTA } from "@/types/page";

interface CtaProps {
  data: CTA;
}

export default function CtaSection({ data }: CtaProps) {
  return (
    <section className="relative w-full overflow-hidden bg-transparent z-10 -mb-52">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="dark:bg-[#856a5d] bg-[#f5dcce] relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-tl-[3rem] rounded-tr-[2rem] rounded-br-[3rem] rounded-bl-sm px-8 py-16 text-center shadow-lg md:flex-row md:px-16 md:py-18 md:text-left">
          {/* Gradient Glow Effect */}
          <div
            aria-hidden="true"
            className="from-accent/85 absolute -top-8 left-1/2 -z-0 h-40 w-3/4 -translate-x-1/2 rounded-4xl bg-gradient-to-t to-transparent blur-3xl"
          ></div>

          <div className="relative z-10 flex w-full flex-col items-center justify-between gap-8 md:flex-row">
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="font-cormorant text-primary dark:text-foreground text-4xl font-bold sm:text-5xl">
                {data.title}
              </h2>
              <p className="font-bitter dark:text-foreground/90 text-muted-foreground mt-6 max-w-2xl leading-loose lg:mt-8">
                {data.subtitle}
              </p>
            </div>

            {/* Button */}
            <div className="flex-shrink-0 lg:mr-16">
              <Link
                href={data.button.url}
                className="font-bitter bg-accent text-background hover:bg-accent/80 inline-block cursor-pointer rounded-full px-10 py-4 font-semibold shadow-lg transition duration-300"
              >
                {data.button.text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
