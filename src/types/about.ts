import { StaticImageData } from "next/image";

export type AboutHero = {
  heading: string;
  subheading: string;
  image: string | StaticImageData;
};

export type AboutMetric = {
  value: string;
  label: string;
};

export type AboutStats = {
  title: string;
  subtitle: string;
  metrics: AboutMetric[];
};

export type CoreValue = {
  title: string;
  description: string;
};

export type AboutValues = {
  title: string;
  subtitle: string;
  content: CoreValue[];
};

export type TeamMember = {
  name: string;
  role: string;
  image: string | StaticImageData;
};

export type AboutMembers = {
  title: string;
  subtitle: string;
  members: TeamMember[];
};

export type AboutConfig = {
  hero: AboutHero;
  stats: AboutStats;
  values: AboutValues;
  members: AboutMembers;
};
