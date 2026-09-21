import { processSteps } from "@/data/site";

export function Process() {
  return (
    <section
      id="créer"
      className="relative border-t border-chalk/10 bg-[#10141a] px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="font-[family-name:var(--font-display)] text-[0.7rem] font-semibold tracking-[0.35em] text-signal uppercase">
            02 — Créer
          </p>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.05] tracking-tight text-chalk md:text-5xl">
            Trois étapes. Zéro flou.
          </h2>
          <p className="mt-5 text-lg text-mist">
            Du fichier à la pièce physique — un process court, calibré pour les
            marques qui veulent du vrai.
          </p>
        </div>

        <ol className="mt-16 divide-y divide-chalk/10 border-y border-chalk/10">
          {processSteps.map((step) => (
            <li
              key={step.n}
              className="grid gap-4 py-10 md:grid-cols-12 md:items-baseline md:gap-8"
            >
              <span className="font-[family-name:var(--font-display)] text-sm tracking-[0.2em] text-signal md:col-span-2">
                {step.n}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-chalk md:col-span-4 md:text-3xl">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-mist md:col-span-6 md:text-lg">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <a href="#collections" className="cta-primary">
            Choisir un support
          </a>
        </div>
      </div>
    </section>
  );
}
