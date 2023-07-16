import { INavItem, ISlideImage } from "./interfaces";

export const navItems: INavItem[] = [
    {
      label: "BOOKS",
      href: "/",
    },
    {
      label: "AUDIOBOOKS",
      href: "/audiobooks",
    },
    {
      label: "STATIONARY & GIFTS",
      href: "/gifts",
    },
    {
      label: "BLOG",
      href: "/blog",
    }
  ]

export const slides: ISlideImage[] = [
    { id: 1, 
      url: "/../public/banner-1.png", 
      alt: "black friday sale" },
    {
      id: 2, 
      url: "/../public/banner-2.png",
      alt: "ten top books for entrepreneures",
    },
    {
      id: 3, 
      url: "/../public/banner-3.png",
      alt: "check our cozy books selection",
    },
  ];

export const filters = [
    "Architecture",
    "Art & Fashion",
    "Biography",
    "Business",
    "Crafts & Hobbies",
    "Drama",
    "Fiction",
    "Food & Drink",
    "Health & Wellbeing",
    "History & Politics",
    "Humor",
    "Poetry",
    "Psychology",
    "Science",
    "Technology",
    "Travel & Maps",
  ]