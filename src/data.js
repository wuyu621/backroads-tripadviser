import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  {
    text: "home",
    href: "#home",
    id: 1,
  },
  {
    text: "about",
    href: "#about",
    id: 2,
  },
  {
    text: "services",
    href: "#services",
    id: 3,
  },
  {
    text: "tours",
    href: "#tours",
    id: 4,
  },
];

export const socialLinks = [
  {
    href: "https://www.facebook.com",
    icon: "fab fa-facebook",
    id: 1,
  },
  {
    href: "https://www.twitter.com",
    icon: "fab fa-twitter",
    id: 2,
  },
  {
    href: "https://www.twitter.com",
    icon: "fab fa-squarespace",
    id: 3,
  },
];

export const services = [
  {
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    id: 1,
  },
  {
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    id: 2,
  },
  {
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    id: 3,
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    date: "August 26th, 2020",
    title: "Tibet Adventure",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "China",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    img: tour2,
    date: "October 1th, 2020",
    title: "Best Of Java",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Indonesia",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    img: tour3,
    date: "September 15th, 2020",
    title: "Explore Hong Kong",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Hong Kong",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    img: tour4,
    date: "December 5th, 2019",
    title: "Kenya Highlights",
    info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "Kenya",
    duration: 20,
    cost: 3300,
  },
];
