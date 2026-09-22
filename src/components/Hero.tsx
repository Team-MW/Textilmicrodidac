import Image from "next/image";
import { BrandLogo } from "./BrandLogo";
// import { ModelShowcase } from "./ModelShowcase"; // gardé de côté — pas affiché

const LOGO_TILES = [
  { className: "logo-tile logo-tile--hero" },
  { className: "logo-tile logo-tile--a" },
  { className: "logo-tile logo-tile--b" },
  { className: "logo-tile logo-tile--c" },
  { className: "logo-tile logo-tile--d" },
  { className: "logo-tile logo-tile--e" },
  { className: "logo-tile logo-tile--f" },
  { className: "logo-tile logo-tile--g" },
  { className: "logo-tile logo-tile--h" },
  { className: "logo-tile logo-tile--i" },
  { className: "logo-tile logo-tile--j" },
  { className: "logo-tile logo-tile--k" },
  { className: "logo-tile logo-tile--l" },
];

export function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden">
      <div className="fabric-plane" aria-hidden="true">
        <div className="fabric-weave" />
        <div className="fabric-light" />
        <div className="fabric-grain" />

        <div className="logo-field">
          {LOGO_TILES.map((tile) => (
            <Image
              key={tile.className}
              src="/brand/logo-stack-blanc.png"
              alt=""
              width={1200}
              height={1200}
              priority
              className={tile.className}
            />
          ))}
        </div>
      </div>

      <div className="logo-bg-veil" aria-hidden="true" />

      {/* <ModelShowcase /> — modèles prêts, non affichés */}

      <header className="nav-bar relative z-10 flex items-center justify-between px-6 py-5 md:px-12 md:py-7">
        <a href="/" className="block shrink-0" aria-label="MisterPrint accueil">
          <BrandLogo
            variant="ligne"
            priority
            className="logo-knockout h-9 w-auto max-w-[min(52vw,280px)] object-contain object-left md:h-11 md:max-w-[320px]"
          />
        </a>
        <nav className="flex items-center gap-5 text-[0.65rem] tracking-[0.22em] text-mist uppercase md:gap-8 md:text-[0.7rem]">
          <a href="#atelier" className="transition-colors hover:text-chalk">
            Atelier
          </a>
          <a href="#créer" className="transition-colors hover:text-chalk">
            Créer
          </a>
          <a
            href="#collections"
            className="hidden transition-colors hover:text-chalk sm:inline"
          >
            Collections
          </a>
          <a href="#faq" className="transition-colors hover:text-chalk">
            FAQ
          </a>
        </nav>
      </header>

      <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 md:px-12 md:pb-20 lg:px-16">
        <div className="max-w-lg">
          <p className="hero-line mb-4 font-[family-name:var(--font-display)] text-[0.7rem] font-semibold tracking-[0.35em] text-signal uppercase md:text-xs">
            Atelier d&apos;impression textile
          </p>

          <h1 className="hero-support font-[family-name:var(--font-display)] text-3xl font-extrabold leading-tight tracking-tight text-chalk md:text-5xl">
            Ton textile.
            <br />
            Ta marque.
          </h1>

          <div className="hero-cta mt-8 flex flex-wrap items-center gap-8 md:mt-10">
            <a href="#créer" className="cta-primary">
              Créer mon textile
            </a>
            <a href="#atelier" className="cta-ghost">
              Voir l&apos;atelier
              <span className="cta-ghost__arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-4 z-20 border border-chalk/10 md:inset-6"
        aria-hidden="true"
      >
        <span className="absolute top-0 left-0 h-5 w-5 border-t-2 border-l-2 border-signal" />
        <span className="absolute top-0 right-0 h-5 w-5 border-t-2 border-r-2 border-signal" />
        <span className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-signal" />
        <span className="absolute right-0 bottom-0 h-5 w-5 border-r-2 border-b-2 border-signal" />
      </div>
    </section>
  );
}
