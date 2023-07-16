import { INavItem, ISlideImage } from "./interfaces";
import banner1 from "./../public/banner1.png"
import banner2 from "./../public/banner2.png"
import banner3 from "./../public/banner3.png"

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
      url: banner1, 
      alt: "black friday sale" },
    {
      id: 2, 
      url: banner2,
      alt: "ten top books for entrepreneures",
    },
    {
      id: 3, 
      url: banner3,
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