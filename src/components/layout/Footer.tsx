import { footerConfig } from "@/config/footer";
import Image from "next/image";
import { Footer } from "@/types/footer";

interface FooterProps {
  data: Footer;
}

export default function FooterSection({ data }: FooterProps) {
  return (
    <section className="bg-background dark:bg-primary-foreground/80 relative z-0 pt-[17rem] pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="pr-4">
            <div className="relative mb-4 flex items-center space-x-2">
              <span className="text-primary font-serif text-3xl font-bold">{data.brand.name}</span>
              <Image
                src="/scribbles.svg"
                alt="Decorative Scribble"
                width={60}
                height={60}
                className="absolute -top-12 size-12 md:-left-4 xl:-top-4 xl:-left-16"
              />
            </div>
            <p className="text-muted-foreground mb-6">{data.brand.description}</p>
            <div className="flex space-x-4">
              {data.socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-muted-foreground hover:text-accent transition-colors">
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2 & 3: Dynamic Link Sections */}
          {data.linkSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-primary mb-5 font-serif text-xl font-semibold">{section.title}</h3>
              <ul className="text-muted-foreground space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-accent transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 4: Work Hours */}
          <div>
            <h3 className="text-primary mb-5 font-serif text-xl font-semibold">{data.contactSection.title}</h3>
            {data.contactSection.details.map((line, index) => (
              <p key={index} className="text-muted-foreground mb-2">
                {line}
              </p>
            ))}
            <button className="dark:text-primary-foreground font-bitter bg-accent hover:bg-accent/90 focus:ring-accent shadow-accent/20 mt-4 cursor-pointer rounded-full px-12 py-2.5 font-semibold text-white shadow-lg transition-colors duration-300 focus:ring-2 focus:ring-offset-2 focus:outline-none">
              {data.contactSection.buttonText}
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-muted dark:border-primary/30 mt-16 border-t py-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {data.copyrightText}
          </p>
        </div>
      </div>

      <div className="shape-divider-top absolute">
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
