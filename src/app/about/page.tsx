"use client";

import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { aboutConfig } from "@/config/pages/about";
import { AboutHero, AboutMembers, AboutStats, AboutValues, AboutConfig } from "@/types/about";
import Image from "next/image";

// --- SUB-COMPONENTS ---
const HeroSection = ({ hero }: { hero: AboutHero }) => (
  <section className="bg-background py-20">
    <div className="mx-auto max-w-7xl items-center gap-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-8 flex w-full flex-col items-center justify-between gap-2 md:mb-16 md:flex-row md:gap-10">
        <h1 className="font-cormorant text-primary mb-2 text-[2.5rem] font-bold md:mb-4 md:text-6xl lg:text-7xl">
          {hero.heading}
        </h1>
        <p className="font-bitter text-muted-foreground max-w-md text-base md:text-left md:text-lg">
          {hero.subheading}
        </p>
      </div>

      {/* Image */}
      <div>
        <Image
          src={hero.image}
          alt={hero.heading}
          width={1600}
          height={700}
          className="h-auto w-full rounded-sm object-cover object-center"
          priority
        />
      </div>
    </div>
  </section>
);

const StatsSection = ({ stats }: { stats: AboutStats }) => (
  <section className="relative bg-background pt-10 md:pt-20">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center md:pr-8">
        <h2 className="text-primary font-cormorant mb-4 text-3xl font-bold md:text-5xl">{stats.title}</h2>
        <p className="text-muted-foreground font-bitter text-lg tracking-wide md:text-2xl">{stats.subtitle}</p>
      </div>

      <div className="flex w-full max-w-2xl flex-col gap-y-6">
        {stats.metrics.map((metric) => (
          <div key={metric.label} className="flex items-center justify-between gap-6">
            <p className="text-accent font-cormorant text-5xl font-bold whitespace-nowrap md:text-6xl">
              {metric.value}
            </p>

            <div className="border-primary/20 mt-4 flex-1 border-t" />

            <p className="text-muted-foreground font-bitter mt-4 text-base whitespace-nowrap md:text-lg">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ValuesSection = ({ values }: { values: AboutValues }) => (
  <section className="relative bg-muted/15 py-20 md:pb-28 pt-52">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 className="text-primary font-cormorant mb-4 text-4xl font-bold md:text-5xl">{values.title}</h2>
        <p className="text-muted-foreground font-bitter text-lg">{values.subtitle}</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {values.content.map((value) => (
          <div key={value.title} className="border-accent/80 bg-background rounded-r-lg border-l-6 p-6 shadow-sm">
            <h3 className="text-primary font-cormorant mb-2 text-xl font-semibold md:text-2xl">{value.title}</h3>
            <p className="text-muted-foreground font-bitter">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
    {/* SHAPE DIVIDER */}
    <div className="shape-divider-top">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          className="fill-background"
        ></path>
      </svg>
    </div>
  </section>
);

const TeamSection = ({ members }: { members: AboutMembers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? members.members.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === members.members.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="dark:bg-muted bg-white py-20 md:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-primary font-cormorant mb-4 text-4xl font-bold md:text-5xl">{members.title}</h2>
          <p className="text-muted-foreground font-sans">{members.subtitle}</p>
        </div>

        <div className="relative mx-auto max-w-sm">
          <div className="relative h-[480px] overflow-hidden">
            {members.members.map((member, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 h-full w-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
              >
                <div className="text-center">
                  <div className="relative mx-auto mb-4 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-lg">
                    <Image src={member.image as string} alt={member.name} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="text-primary font-bitter mb-2 text-xl font-semibold">{member.name}</h3>
                  <p className="text-accent tracking-wider font-bitter text-lg font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="group bg-muted/50 hover:bg-accent absolute top-1/2 -left-2 -translate-y-1/2 rounded-full p-2 transition-colors md:-left-12"
          >
            <FiChevronLeft className="text-primary group-hover:text-accent-foreground h-6 w-6" />
          </button>
          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="group bg-muted/50 hover:bg-accent absolute top-1/2 -right-2 -translate-y-1/2 rounded-full p-2 transition-colors md:-right-12"
          >
            <FiChevronRight className="text-primary group-hover:text-accent-foreground h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

// --- MAIN ABOUT PAGE COMPONENT ---

export default function AboutPage() {
  return (
    <main>
      <HeroSection hero={aboutConfig.hero} />
      <StatsSection stats={aboutConfig.stats} />
      <ValuesSection values={aboutConfig.values} />
      <TeamSection members={aboutConfig.members} />
    </main>
  );
}
