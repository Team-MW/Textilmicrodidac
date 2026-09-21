import Image from "next/image";
import { BrandLogo } from "./BrandLogo";
import { FabricMesh } from "./FabricMesh";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden">
      <div className="fabric-plane" aria-hidden="true">
        <div className="fabric-weave" />
        <div className="fabric-light" />
        <FabricMesh />
        <div className="fabric-grain" />

        {/* Logo mark — fond d'accueil géant */}
        <div className="logo-bg">
          <Image
            src="/brand/logo-mark.png"
            alt=""
            width={1200}
            height={1200}
            priority
            className="logo-bg__img"
          />
        </div>
      </div>

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

      <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 md:justify-center md:px-12 md:pb-24 lg:px-16">
        <div className="max-w-[min(100%,48rem)]">
          <p className="hero-line mb-6 font-[family-name:var(--font-display)] text-[0.7rem] font-semibold tracking-[0.35em] text-signal uppercase md:mb-8 md:text-xs">
            Atelier d&apos;impression textile
          </p>

          <h1 className="brand-logo-hero" aria-label="MisterPrint">
            <span className="brand-print__rise block">
              <BrandLogo
                variant="stack"
                priority
                className="logo-knockout h-auto w-[min(88vw,34rem)] object-contain object-left drop-shadow-[0_20px_60px_rgba(0,0,0,0.55)] md:w-[min(70vw,40rem)]"
              />
            </span>
          </h1>

          <p className="hero-support mt-8 max-w-xl text-lg leading-relaxed text-mist md:mt-10 md:text-2xl md:leading-snug">
            Ton textile. Ta marque. Où chaque détail compte.
          </p>

          <div className="hero-cta mt-10 flex flex-wrap items-center gap-8 md:mt-12">
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
