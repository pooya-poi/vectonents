import Logo from "@/components/logo";
import { Hero } from "@/components/widgets/hero";

const HeroSection: React.FC = () => (
  <Hero
    title="Vectonents"
    subtitle="Lightweight & Customizable React SVG Icon Components"
    actions={[
      {
        label: "Get Start 🚀",
        href: "/guide",
        variant: "outline",
      },
    ]}
    titleClassName="text-5xl md:text-6xl font-extrabold"
    subtitleClassName="text-lg md:text-xl max-w-[600px]"
    actionsClassName="mt-8"
  >
    <div className="mx-5 -mt-12 flex items-center justify-center self-center">
      <div className="translate-z-12 rotate-x-25 -rotate-z-25 transform-3d">
        <Logo className="size-36 translate-z-12 rotate-x-25 -rotate-z-25 text-zinc-900/90 lg:size-80 dark:text-zinc-200/90" />
      </div>
    </div>
  </Hero>
);

HeroSection.displayName = "pageBlocks";
export default HeroSection;
