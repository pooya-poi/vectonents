import { Github, Heart, Npm } from "@pooya-poi/vectonents";
import Link from "next/link";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Icons",
    url: "/icons",
  },
  {
    title: "Guide",
    url: "/guide",
  },
];

const Footer: React.FC = () => (
  <footer className="mb-14 grid h-44 w-full justify-center pb-10 text-center font-light md:mb-0 lg:grid-cols-3 lg:justify-between dark:bg-zinc-950">
    <div className="order-last flex flex-col justify-center lg:order-first">
      <p className="flex items-center justify-center">
        Made with
        <Heart variants="filled" size={16} className="mx-1 text-rose-600" />
        by vectonents
      </p>
      <p>All rights reserved for Vectonents - pooya © {new Date().getFullYear()}</p>
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
      <Link
        target="_blank"
        href="https://www.npmjs.com/package/@pooya-poi/vectonents?activeTab=readme"
      >
        <Npm className="w-12 text-amber-400" />
      </Link>
      <Link target="_blank" href="https://github.com/pooya-poi/vectonents">
        <Github size={45} />
      </Link>
    </div>
  </footer>
);

Footer.displayName = "pageWidgets";
export default Footer;
