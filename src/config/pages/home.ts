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
  welcome: {
    image: "https://placehold.co/600x400/d1d5db/374151?text=Welcome",
    title: "Welcome to Our Creative Studio",
    subtitle: "We are a team of passionate designers and developers dedicated to creating amazing digital experiences.",
    stats: [
      {
        number: "12+",
        text: "Years of Experience",
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
        icon: "https://placehold.co/80x80/e0e7ff/4338ca?text=Icon1",
        title: "Creative Design",
        content: "Our designs are modern, clean, and tailored to your brand's identity.",
        learnMoreLink: "/features/creative-design",
      },
      {
        icon: "https://placehold.co/80x80/e0e7ff/4338ca?text=Icon2",
        title: "Cutting-Edge Technology",
        content: "We use the latest technologies to build fast, secure, and scalable solutions.",
        learnMoreLink: "/features/technology",
      },
      {
        icon: "https://placehold.co/80x80/e0e7ff/4338ca?text=Icon3",
        title: "Dedicated Support",
        content: "Our team is always here to help you with any questions or issues.",
        learnMoreLink: "/features/support",
      },
      {
        icon: "https://placehold.co/80x80/e0e7ff/4338ca?text=Icon4",
        title: "Proven Results",
        content: "We have a track record of delivering projects that exceed expectations.",
        learnMoreLink: "/features/results",
      },
    ],
  },
  expertise: {
    image: "https://placehold.co/600x450/dbeafe/1e40af?text=Expertise",
    title: "Our Expertise",
    content:
      "We specialize in a wide range of services, from web development to digital marketing. Our team has the skills and experience to handle any challenge.",
    loaders: [
      {
        label: "Web Development",
        percentage: 95,
      },
      {
        label: "UI/UX Design",
        percentage: 90,
      },
      {
        label: "Digital Marketing",
        percentage: 85,
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
        price: "$49/mo",
        features: ["5 Pages", "Basic SEO", "1GB Storage", "Email Support"],
        button: {
          text: "Choose Plan",
          url: "/pricing/basic",
        },
      },
      {
        name: "Pro",
        price: "$99/mo",
        features: ["10 Pages", "Advanced SEO", "10GB Storage", "Priority Support"],
        button: {
          text: "Choose Plan",
          url: "/pricing/pro",
        },
      },
      {
        name: "Enterprise",
        price: "Contact Us",
        features: ["Unlimited Pages", "Full SEO Suite", "Unlimited Storage", "24/7 Support"],
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
        quote: "This is the best service I have ever used. The team is amazing and the results are outstanding!",
        author: "Jane Doe",
        role: "CEO, Company Inc.",
        avatar: "https://placehold.co/100x100/f3e8ff/8b5cf6?text=JD",
      },
      {
        quote: "I was blown away by the quality of work and the professionalism of the team. Highly recommended!",
        author: "John Smith",
        role: "Marketing Director, Another Co.",
        avatar: "https://placehold.co/100x100/ecfccb/4d7c0f?text=JS",
      },
    ],
  },
  gallery: {
    title: "Our Gallery",
    images: [
      { src: "https://placehold.co/400x300/fee2e2/991b1b?text=Gallery+1", alt: "Gallery Image 1" },
      { src: "https://placehold.co/400x300/dcfce7/166534?text=Gallery+2", alt: "Gallery Image 2" },
      { src: "https://placehold.co/400x300/fef9c3/854d0e?text=Gallery+3", alt: "Gallery Image 3" },
      { src: "https://placehold.co/400x300/f5d0fe/86198f?text=Gallery+4", alt: "Gallery Image 4" },
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
