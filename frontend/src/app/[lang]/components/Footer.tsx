"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { CgWebsite, CgInstagram } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import {
  AiFillYoutube,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { PiFacebookLogo } from "react-icons/pi";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

interface CategoryLink {
  id: string;
  attributes: {
    name: string;
    slug: string;
  };
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li className="flex">
      <Link href={url} className="text-[20px] leading-[30px]">
        {text}
      </Link>
    </li>
  );
}

function CategoryLink({ attributes }: CategoryLink) {
  return (
    <li className="flex">
      <Link
        href={`/blog/${attributes.slug}`}
        className="hover:dark:text-violet-400"
      >
        {attributes.name}
      </Link>
    </li>
  );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  const iconSizeClass = "w-[38px] h-[38px]"; // Tailwind CSS for width and height

  switch (social) {
    case "WEBSITE":
      return <CgWebsite className={iconSizeClass} />;
    case "YOUTUBE":
      return <AiFillYoutube className={iconSizeClass} />;
    case "DISCORD":
      return <FaDiscord className={iconSizeClass} />;
    case "FACEBOOK":
      return <PiFacebookLogo className={iconSizeClass} />;
    case "INSTAGRAM":
      return <CgInstagram className={iconSizeClass} />;
    case "LINKEDIN":
      return <AiOutlineLinkedin className={iconSizeClass} />;
    case "TWITTER":
      return <BsTwitterX className={iconSizeClass} />;
    default:
      return null;
  }
}


export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
  legalLinks,
  socialLinks,
}: {
  logoUrl: string | null;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
  categoryLinks: Array<CategoryLink>;
  legalLinks: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
}) {
  return (
    <footer className="py-6 dark:bg-black dark:text-gray-50">
      <div className="container px-6 mx-auto space-y-6 ">
        <div className="">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <Logo src={logoUrl}>
              {logoText && <h2 className="text-2xl font-bold">{logoText}</h2>}
            </Logo>
          </div>
          <div className="ps-2 mt-8 ">
            <ul>
              {menuLinks.map((link: FooterLink) => (
                <FooterLink key={link.id} {...link} />
              ))}
            </ul>
            <ul className="mt-10">
              {legalLinks.map((link: FooterLink) => (
                <li className="flex">
                  <Link
                    href={link.url}
                    key={link.id}
                    className="text-[20px] leading-[30px]"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex  mt-10 space-x-4 ">
            {socialLinks.map((link: FooterLink) => {
              return (
                <a
                  key={link.id}
                  rel="noopener noreferrer"
                  href={link.url}
                  title={link.text}
                  target={link.newTab ? "_blank" : "_self"}
                  className="flex items-center justify-center dark:text-white-900"
                >
                  <RenderSocialIcon social={link.social}  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
