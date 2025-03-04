"use client";
import Logo from "@/components/logo";
import WhySection from "@/components/widgets/why-section";
import IconSample from "@/components/widgets/icon-sample";
import Footer from "@/components/widgets/footer";
import { Hero } from "@/components/widgets/hero";

export default function Home() {
  return (
    <>
      {/* <header className="hidden h-12   md:block">
        <nav className="mx-auto flex max-w-7xl justify-between">
          <Link href="/">Logo</Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <ToggleTheme />
      </header> */}
      

      {/* <LampContainer className="">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center font-medium tracking-tight text-transparent md:text-7xl"
        >
          <div className="mx-5 mt-8 flex items-center justify-center self-center">
            <div className="translate-z-12 rotate-x-25 -rotate-z-25 transform-3d">
              <Logo className="size-36 translate-z-12 rotate-x-25 -rotate-z-25 text-zinc-900/90 lg:size-80 dark:text-zinc-200/90" />
            </div>
          </div>
          <h1 className="font-rasgen text-4xl text-zinc-800 dark:text-zinc-200">
            Vectonents
          </h1>
          <p className="font-rasgen text-lg tracking-wide text-zinc-800 md:text-2xl dark:text-zinc-200">
            Lightweight & Customizable React SVG Icon Components
          </p>

          <Button className="animate-shimmer font-rasgen inline-flex items-center justify-center rounded-full border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-base font-medium tracking-wide text-zinc-400 transition-colors focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50 focus:outline-none">
            Get Start 🚀
          </Button>
        </motion.div>
      </LampContainer> */}

      <Hero
        title="Vectonents"
        subtitle="Lightweight & Customizable React SVG Icon Components"
        actions={[
          {
            label: "Get Start 🚀",
            href: "#",
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

      {/* Why section */}
      <WhySection />

      {/* icon samples section */}
      <IconSample />

      <Footer />
    </>
  );
}
