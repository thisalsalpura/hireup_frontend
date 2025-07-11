import {
  faSquareInstagram,
  faSquareXTwitter,
  faSquareFacebook,
  faSquareThreads,
} from "@fortawesome/free-brands-svg-icons";

export const socialLinks = [
  {
    id: "1",
    title: "Instagram",
    href: "/",
    icon: faSquareInstagram,
  },
  {
    id: "2",
    title: "X",
    href: "/",
    icon: faSquareXTwitter,
  },
  {
    id: "3",
    title: "Facebook",
    href: "/",
    icon: faSquareFacebook,
  },
  {
    id: "4",
    title: "Threads",
    href: "/",
    icon: faSquareThreads,
  },
];

import {
  faPenNib,
  faMicrochip,
  faVideo,
  faSignature,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

export const paths = [
  {
    id: "1",
    title: "Graphic & Design",
    icon: faPenNib,
  },
  {
    id: "2",
    title: "Programming & Tech",
    icon: faMicrochip,
  },
  {
    id: "3",
    title: "Video & Animation",
    icon: faVideo,
  },
  {
    id: "4",
    title: "Writing & Translation",
    icon: faSignature,
  },
  {
    id: "5",
    title: "Music & Audio",
    icon: faMusic,
  },
];

import SellerGigs from "../pages/SellerGigs";
import SellerProfile from "../pages/SellerProfile";

export const sellerDashboardTabs = [
  {
    id: "1",
    tabName: "Seller's Gigs",
    tabContent: SellerGigs,
  },
  {
    id: "2",
    tabName: "Seller's Profile",
    tabContent: SellerProfile,
  },
];

export const steps = [
  {
    id: 1,
    name: "Overview",
  },
  {
    id: 2,
    name: "Pricing",
  },
  {
    id: 3,
    name: "Description & FAQ",
  },
  {
    id: 4,
    name: "Requirements"
  },
  {
    id: 5,
    name: "Gallery"
  },
  {
    id: 6,
    name: "Publish"
  }
];

