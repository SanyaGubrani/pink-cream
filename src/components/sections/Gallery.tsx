"use client";

import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Gallery } from "@/types/page";

interface GalleryProps {
  data: Gallery;
}

// Gallery Section
export default function GallerySection({ data }: GalleryProps) {
  return (
    <section className="bg-background relative w-full overflow-hidden pt-4 pb-52">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-cormorant text-primary mb-16 text-4xl font-semibold sm:text-5xl lg:text-6xl dark:text-white">
            {data.title}
          </h1>
        </div>

        {/* Carousel Container */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {data.images.map((image, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="aspect-w-4 aspect-h-3 w-full overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary dark:bg-primary hover:bg-muted ml-8 size-14 bg-white sm:ml-4 sm:size-16 dark:text-black dark:hover:bg-white" />
          <CarouselNext className="text-primary dark:bg-primary hover:bg-muted mr-8 size-14 bg-white sm:mr-4 sm:size-16 dark:text-black dark:hover:bg-white" />
        </Carousel>

        {/* See More Button */}
        <div className="mt-20 text-center">
          <Link
            href="/"
            className="font-bitter bg-accent dark:text-background dark:bg-accent/90 dark:hover:bg-accent hover:bg-accent/80 cursor-pointer rounded-full px-14 py-4 font-semibold text-white shadow transition duration-300"
          >
            See More
          </Link>
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
