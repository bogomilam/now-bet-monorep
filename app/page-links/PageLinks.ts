import UserAccountLogo from "@/public/user-account.svg";

export type PageLinkType = {
  label: string;
  href: string;
  icon?: string;
};

const PageLinks: PageLinkType[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Account",
    href: "/account",
    icon:  UserAccountLogo,
  },
  {
    label: "About NowBet",
    href: "/about-nowbet",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

export default PageLinks;
