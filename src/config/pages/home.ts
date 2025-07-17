import avatarOne from "@/assets/images/avatar-one.jpg";
import avatarTwo from "@/assets/images/avatar-two.jpg";
import avatarThree from "@/assets/images/avatar-three.jpg";
import imgOne from "@/assets/images/img1.jpg";
import imgTwo from "@/assets/images/img2.jpg";
import imgThree from "@/assets/images/img3.jpg";
import imgFour from "@/assets/images/img4.jpg";
import imgFive from "@/assets/images/img5.jpg";
import imgSix from "@/assets/images/img6.jpg";
import imgSeven from "@/assets/images/img7.jpg";

export const homeConfig = {
  hero: {
    image: "/assets/images/hero.svg",
    heading: "Innovative Solutions for a Digital World By PinkCream",
    subheading:
      "PinkCream build beautiful, functional, and user-friendly websites and applications that help your business grow.",
    actions: [
      {
        text: "Get Started",
        url: "/contact",
      },
      //   {
      //     text: 'Learn more',
      //     url: "/about",
      //   },
    ],
  },
  overview: {
    image: "/assets/images/overview.svg",
    title: "Welcome to Our PinkCream Studio",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, ullamco laboris ex ea commodo consequat. Duis aute irure dolor in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    stats: [
      {
        number: "12+",
        text: "Years of Experience",
        isHighlighted: true,
      },
      {
        number: "500+",
        text: "Projects Completed",
      },
      {
        number: "99%",
        text: "Client Satisfaction",
      },
    ],
  },
  features: {
    title: "Why Choose Us?",
    items: [
      {
        icon: "/bulb.svg",
        iconDark: "/bulb-light.svg",
        title: "Creative Design",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        learnMoreLink: "/features/creative-design",
      },
      {
        icon: "/diamond-cream.svg",
        title: "Technology",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        learnMoreLink: "/features/technology",
        isHighlighted: true,
      },
      {
        icon: "/support-dark.svg",
        iconDark: "/support-light.svg",
        title: "Dedicated Support",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        learnMoreLink: "/features/support",
      },
      {
        icon: "/growth.svg",
        iconDark: "/growth-dark.svg",
        title: "Proven Results",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        learnMoreLink: "/features/results",
      },
    ],
  },
  expertise: {
    image: "https://placehold.co/600x450/dbeafe/1e40af?text=Expertise",
    title: "Our Expertise",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et nisi volutpat, dapibus neque nec, aliquet lacus. Ut scelerisque dapibus placerat ac ipsum. Duis nec viverra nibh. Etiam lacus urna, accumsan a elit vitae, porttitor rhoncus purus.",
    loaders: [
      {
        label: "Web Development",
        percentage: 85,
      },
      {
        label: "UI/UX Design",
        percentage: 95,
      },
      {
        label: "Digital Marketing",
        percentage: 90,
      },
    ],
    button: {
      text: "View Our Work",
      url: "/portfolio",
    },
  },
  pricing: {
    title: "Our Pricing Plans",
    plans: [
      {
        name: "Basic",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit at tempor varius. ",
        price: "50",
        period: "month",
        features: ["Aliquam imperdiet lorem ut lorem", "Imperdiet lorem ut lorem", "Aliquam imperdiet lorem lorem"],
        button: {
          text: "Choose Plan",
          url: "/pricing/basic",
        },
      },
      {
        name: "Premium",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit at tempor varius. ",
        price: "82",
        period: "month",
        features: ["Aliquam imperdiet lorem ut lorem", "Imperdiet lorem ut lorem", "Aliquam imperdiet lorem lorem"],
        button: {
          text: "Choose Plan",
          url: "/pricing/pro",
        },
        isHighlighted: true,
      },
      {
        name: "Standard",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit at tempor varius. ",
        price: "68",
        period: "month",
        features: ["Aliquam imperdiet lorem ut lorem", "Imperdiet lorem ut lorem", "Aliquam imperdiet lorem lorem"],
        button: {
          text: "Contact Us",
          url: "/contact",
        },
      },
    ],
  },
  testimonials: {
    title: "What Our Clients Say",
    items: [
      {
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
        author: "Jane",
        role: "CEO",
        avatar: avatarOne,
      },
      {
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
        author: "Diana",
        role: "Director",
        avatar: avatarTwo,
      },
      {
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",
        author: "Maxicas",
        role: "Manager",
        avatar: avatarThree,
      },
    ],
  },
  gallery: {
    title: "Our Gallery",
    images: [
      { src: imgOne, alt: "Gallery Image 1" },
      { src: imgTwo, alt: "Gallery Image 2" },
      { src: imgThree, alt: "Gallery Image 3" },
      { src: imgFour, alt: "Gallery Image 4" },
      { src: imgFive, alt: "Gallery Image 5" },
      { src: imgSix, alt: "Gallery Image 6" },
      { src: imgSeven, alt: "Gallery Image 7" },
    ],
  },
  blogs: {
    title: "Blogs & Articles",
    posts: [
      {
        image: "https://placehold.co/400x250/e0f2fe/0891b2?text=Blog+1",
        date: "July 15, 2024",
        title: "The Future of Web Design",
        shortContent: "Discover the latest trends that are shaping the future of web design and user experience.",
        button: {
          text: "Read More",
          url: "/blog/future-of-web-design",
        },
      },
      {
        image: "https://placehold.co/400x250/fae8ff/9333ea?text=Blog+2",
        date: "July 10, 2024",
        title: "How to Optimize Your Site for SEO",
        shortContent: "A comprehensive guide to improving your website's ranking on search engines.",
        button: {
          text: "Read More",
          url: "/blog/seo-optimization",
        },
      },
    ],
  },
  cta: {
    title: "Ready to Start Your Project?",
    subtitle: "Let's work together to create something amazing. Contact us today to get a free quote.",
    button: {
      text: "Get a Free Quote",
      url: "/contact",
    },
  },
};
