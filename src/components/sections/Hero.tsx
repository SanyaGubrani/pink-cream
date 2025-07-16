import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/types/page";
import HeroImg from "@/assets/images/Hero.svg";
import { BiSolidRightArrow } from "react-icons/bi";

interface HeroProps {
  data: Hero;
}

export default function HeroSection({ data }: HeroProps) {
  return (
    <section className="bg-background relative w-full overflow-hidden pb-32 md:pt-12 xl:pt-6">
      <div className="mx-auto flex max-w-7xl flex-col-reverse px-4 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-10 lg:px-8">
        <div className="flex w-full flex-col items-center text-center md:items-start md:text-left">
          {/* Hero Content */}
          <div className="relative inline-block">
            <h1 className="font-cormorant text-primary mb-4 text-4xl leading-[1.2] font-semibold tracking-tight sm:text-5xl md:max-w-lg md:text-[2.6rem] lg:text-6xl">
              {data.heading}
            </h1>
            {/* scribbles */}
            <Image
              src="/scribbles.png"
              alt="Decorative Scribble"
              width={60}
              height={60}
              className="absolute -top-8 -right-2 size-12 sm:-top-3 sm:-right-8 md:size-16 lg:-top-8"
            />
          </div>
          <p className="font-bitter text-primary/80 mt-1 mb-6 max-w-sm md:max-w-lg">{data.subheading}</p>
          <div className="flex items-center justify-center gap-6 md:gap-8">
            {/* Action buttons */}
            <div>
              {data.actions.map((action, idx) => (
                <Link
                  key={idx}
                  href={action.url}
                  className={`font-bitter px-10 py-4 font-semibold shadow transition duration-300 ${
                    idx === 0 ? "bg-accent text-background hover:bg-accent/80 rounded-3xl" : `text-primary rounded-full`
                  }`}
                >
                  {action.text}
                </Link>
              ))}
            </div>
            {/* Icon action button */}
            <div className="flex items-center justify-center">
              <Link
                href="/"
                className="border-muted text-primary hover:border-accent/80 hover:text-muted-foreground flex size-16 items-center justify-center rounded-full border-[10px] shadow transition duration-300 md:size-20"
              >
                <BiSolidRightArrow className="size-6 md:size-7" />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-center">
          {/* Hero Image with background */}
          <div className="bg-accent/30 absolute z-0 size-64 rounded-tl-[5.2rem] rounded-tr-[2.5rem] rounded-br-[6.5rem] sm:size-80 lg:size-96"></div>
          <Image
            src={HeroImg}
            alt="Hero Image"
            width={300}
            height={300}
            className="z-10 mx-auto h-auto w-full lg:max-w-xl"
          />
          {/* Circles design */}
          <div className="absolute -right-4 bottom-20 flex -translate-x-10 flex-col gap-3">
            <span className="bg-muted size-6 rounded-full md:size-7"></span>
            <span className="bg-accent size-6 rounded-full md:size-7"></span>
            <span className="bg-primary size-6 rounded-full md:size-7"></span>
          </div>
        </div>
      </div>

      {/* SHAPE DIVIDER */}
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
