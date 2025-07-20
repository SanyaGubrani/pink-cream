import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { PiStarFourFill } from "react-icons/pi";

export const footerConfig = {
    brand: {
      name: 'Femine',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.',
      icon: PiStarFourFill,
    },
    newsletter: {
      title: 'Our Newsletters',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      buttonText: 'Subscribe Now',
    },
    linkSections: [
      {
        title: 'Navigation',
        links: [
          { label: 'Home', href: '#' },
          { label: 'Pages', href: '#' },
          { label: 'About Us', href: '#' },
          { label: 'Services', href: '#' },
          { label: '404', href: '#' },
        ],
      },
      {
        title: 'Quick Link',
        links: [
          { label: 'Contact Us', href: '#' },
          { label: 'FAQs', href: '#' },
          { label: 'Blog', href: '#' },
          { label: 'Gallery', href: '#' },
          { label: 'Pricing', href: '#' },
        ],
      },
    ],
    contactSection: {
      title: 'Work Hours',
      details: ['7 AM - 5 PM, Mon - Sat', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
      buttonText: 'Call Us',
    },
    socialLinks: [
      { href: '#', icon: FaTwitter },
      { href: '#', icon: FaFacebookF },
      { href: '#', icon: FaInstagram },
    ],
    copyrightText: 'Femine Template ● All Rights Reserved',
  };