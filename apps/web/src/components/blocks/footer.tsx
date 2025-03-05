import { Heart } from "@pooya-poi/vectonents";
import Link from "next/link";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Contact",
    url: "/contact",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

const Footer: React.FC = () => (
  <footer className="mb-14 grid h-44 w-full justify-center dark:bg-zinc-950 pb-10 text-center font-light md:mb-0 lg:grid-cols-3 lg:justify-between">
    <div className="order-last flex flex-col justify-center lg:order-first">
      <p className="flex items-center justify-center">
        Made with
        <Heart variants="filled" size={16} className="mx-1 text-rose-600" />
        by vectonents
      </p>
      <p>All rights reserved for Vectonents © {new Date().getFullYear()}</p>
    </div>
    <div className="flex items-center justify-center gap-x-5">
      <ul className="flex items-center justify-center gap-x-5">
        {links.map((link) => (
          <li key={link.title}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
    <div className="order-3 flex items-center justify-center gap-x-5">
      <Link href="#">npm</Link>
      <Link href="#">github</Link>
    </div>
  </footer>
);

Footer.displayName = "pageWidgets";
export default Footer;
