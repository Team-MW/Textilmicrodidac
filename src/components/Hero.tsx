import { FabricMesh } from "./FabricMesh";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-dvh flex-col overflow-hidden">
      <div className="fabric-plane" aria-hidden="true">
        <div className="fabric-weave" />
        <div className="fabric-light" />
        <FabricMesh />
        <div className="fabric-grain" />
      </div>

      <header className="nav-bar relative z-10 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <a
          href="/"
          className="font-[family-name:var(--font-display)] text-sm font-bold tracking-[0.28em] text-chalk uppercase"
        >
          Trame
        </a>
        <nav className="flex items-center gap-8 text-[0.7rem] tracking-[0.22em] text-mist uppercase">
          <a href="#atelier" className="transition-colors hover:text-chalk">
            Atelier
          </a>
          <a href="#créer" className="transition-colors hover:text-chalk">
            Créer
          </a>
        </nav>
      </header>

      <div className="relative z-10 flex flex-1 flex-col justify-end px-6 pb-16 md:justify-center md:px-12 md:pb-24 lg:px-16">
        <div className="max-w-[min(100%,92rem)]">
          <p className="hero-line mb-4 font-[family-name:var(--font-display)] text-[0.7rem] font-semibold tracking-[0.35em] text-signal uppercase md:mb-6 md:text-xs">
            Atelier d&apos;impression textile
          </p>

          <h1 className="brand-print" aria-label="TRAME">
            <span className="brand-print__rise">
              <span
                className="brand-print__layer brand-print__layer--ghost brand-print__layer--c"
                aria-hidden="true"
              >
                Trame
              </span>
              <span
                className="brand-print__layer brand-print__layer--ghost brand-print__layer--m"
                aria-hidden="true"
              >
                Trame
              </span>
              <span
                className="brand-print__layer brand-print__layer--ghost brand-print__layer--y"
                aria-hidden="true"
              >
                Trame
              </span>
              <span className="brand-print__layer brand-print__layer--base">
                Trame
              </span>
            </span>
          </h1>

          <p className="hero-support mt-6 max-w-xl text-lg leading-relaxed text-mist md:mt-8 md:text-2xl md:leading-snug">
            Ton textile. Ta marque. Imprimé comme une affiche de cinéma.
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
