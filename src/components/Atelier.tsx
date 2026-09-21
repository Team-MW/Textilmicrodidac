import { atelier } from "@/data/site";

export function Atelier() {
  return (
    <section
      id="atelier"
      className="relative border-t border-chalk/10 px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="font-[family-name:var(--font-display)] text-[0.7rem] font-semibold tracking-[0.35em] text-signal uppercase">
            {atelier.eyebrow}
          </p>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.05] tracking-tight text-chalk md:text-5xl lg:text-6xl">
            {atelier.title}
          </h2>
        </div>

        <div className="flex flex-col justify-between gap-12 lg:col-span-7">
          <p className="max-w-2xl text-lg leading-relaxed text-mist md:text-xl">
            {atelier.body}
          </p>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
            {atelier.facts.map((fact) => (
              <div key={fact.label} className="border-t border-chalk/15 pt-4">
                <dt className="text-[0.65rem] tracking-[0.25em] text-steel uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-chalk md:text-3xl">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
