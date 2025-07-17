"use client";
import Link from "next/link";
import Image from "next/image";
import { Pricing, PricingPlan } from "@/types/page";

interface PricingProps {
  data: Pricing;
}

// Pricing Card
const PricingCard = ({ plan }: { plan: PricingPlan }) => {
  const baseClasses =
    "flex flex-col py-14 px-8 max-w-sm mx-auto transition-transform duration-300 ease-in-out transform hover:-translate-y-2 relative rounded-tr-[5rem] rounded-tl-[2.5rem] rounded-bl-[5rem] rounded-br-md";

  const cardClasses = plan.isHighlighted
    ? `${baseClasses} bg-accent dark:bg-accent/80 text-white shadow-md z-10 shadow-muted-foreground`
    : `${baseClasses} bg-white dark:bg-primary/20 shadow-md shadow-muted-foreground/40`;

  const buttonClasses = plan.isHighlighted
    ? "bg-white text-primary dark:text-muted/80 hover:bg-muted dark:hover:bg-muted/40 hover:text-white dark:hover:text-white"
    : "bg-accent dark:bg-accent/80 text-white hover:bg-accent/80";

  return (
    <div className={cardClasses}>
      <h3 className="font-cormorant text-center text-[1.92rem] font-bold">{plan.name}</h3>
      <p
        className={`font-bitter mt-3 text-center text-xs font-light ${plan.isHighlighted ? "text-white" : "text-primary"}`}
      >
        {plan.content}
      </p>
      <p className={`font-cormorant my-2 text-center ${plan.isHighlighted ? "text-white" : "text-primary"}`}>
        <span className="-mr-2 text-[2.7rem] dark:text-white">$</span>
        <span className="text-6xl font-bold dark:text-white"> {plan.price}</span>
        <span className="ml-2 text-2xl dark:text-white">/{plan.period}</span>
      </p>
      <div className="mt-2 w-full"></div>
      <ul className="mb-8 space-y-4 text-center">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center justify-center gap-3">
            <span className="font-bitter">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href={plan.button.url}
        className={`font-bitter mx-auto mt-4 rounded-full px-12 py-4 text-center font-semibold shadow transition duration-300 ${buttonClasses}`}
      >
        {plan.button.text}
      </Link>
    </div>
  );
};

// Pricing Section
export default function PricingSection({ data }: PricingProps) {
  const plansWithHighlight = data.plans.map((plan, idx) => (idx === 1 ? { ...plan, isHighlighted: true } : plan));

  return (
    <section className="dark:bg-muted relative w-full overflow-hidden bg-white pt-8 pb-52">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="relative mx-auto flex w-full items-center justify-center">
            <Image
              src="/scribbles.svg"
              alt="Decorative Scribble"
              width={60}
              height={60}
              className="absolute -top-8 -right-1 z-10 sm:right-24 sm:size-16"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <h1 className="font-cormorant text-primary dark:text-primary mb-16 text-4xl font-semibold sm:text-5xl lg:text-6xl">
              {data.title}
            </h1>
          </div>

          <div className="mx-auto grid items-center gap-10 lg:grid-cols-3 lg:gap-8">
            {plansWithHighlight.map((plan, idx) => (
              <PricingCard key={idx} plan={plan} />
            ))}
          </div>
        </div>
      </div>
      {/* Shape Divider */}
      <div className="shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-muted dark:fill-primary/40"
          ></path>
        </svg>
      </div>
    </section>
  );
}
