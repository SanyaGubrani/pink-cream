import aboutBG from "@/assets/images/about-bg2.jpg";
import member1 from "@/assets/images/member1.jpg";
import member2 from "@/assets/images/member2.jpg";
import member3 from "@/assets/images/member3.jpg";
import member4 from "@/assets/images/member4.jpg";
import member5 from "@/assets/images/member5.jpg";

export const aboutConfig = {
  hero: {
    heading: "Story of PinkCream",
    subheading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    image: aboutBG,
  },

  stats: {
    title: "We Don’t Just Think Outside the Box — We Redesign It",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et nisi volutpat, dapibus neque nec, aliquet lacus. Ut scelerisque dapibus placerat ac ipsum. Duis nec viverra nibh. Etiam lacus urna, accumsan a elit vitae, porttitor rhoncus purus.",
    metrics: [
      {
        value: "10+",
        label: "Years of industry Experience",
      },
      {
        value: "150+",
        label: "Successful Projects",
      },
      {
        value: "60+",
        label: "Happy Clients",
      },
      {
        value: "15+",
        label: "Awards & Recognition",
      },
      {
        value: "20+",
        label: "Talented Team Members",
      },
    ],
  },

  values: {
    title: "Our Core Values",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et nisi volutpat, dapibus neque nec, aliquet lacus.",
    content: [
      {
        title: "Bold Creativity",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.",
      },
      {
        title: "Relentless Innovation",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      },
      {
        title: "Seamless Collaboration",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
      },
      {
        title: "Meaningful Experience",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed.",
      },
    ],
  },

  members: {
    title: "Meet the Minds Behind PinkCream",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et nisi volutpat, dapibus neque nec.",
    members: [
      {
        name: "Alex Carter",
        role: "Founder of PinkCream",
        image: member1,
      },
      {
        name: "Max Brown",
        role: "CTO of PinkCream",
        image: member2,
      },
      {
        name: "Jamie Canes",
        role: "Managing Directior of PinkCream",
        image: member3,
      },
      {
        name: "Laura kelly",
        role: "Marketing Associate of PinkCream",
        image: member4,
      },
      {
        name: "Miami Curl",
        role: "Senior Developer of PinkCream",
        image: member5,
      },
    ],
  },
};
