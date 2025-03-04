const Footer: React.FC = () => (
  <footer className="mb-14 flex w-full items-center justify-center bg-zinc-950 md:mb-0">
    <p>All rights reserved for Vectonents © {new Date().getFullYear()}</p>
  </footer>
);

Footer.displayName = "pageWidgets";
export default Footer;
