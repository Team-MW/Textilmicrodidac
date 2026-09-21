import { collections } from "@/data/site";

export function Collections() {
  return (
    <section
      id="collections"
      className="relative border-t border-chalk/10 px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-[family-name:var(--font-display)] text-[0.7rem] font-semibold tracking-[0.35em] text-signal uppercase">
              03 — Collections
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.05] tracking-tight text-chalk md:text-5xl">
              Supports studio, prêts à porter ton print.
            </h2>
          </div>
          <p className="max-w-sm text-mist md:text-right">
            Stocks blank en atelier. Personnalisation à la commande.
          </p>
        </div>

        <ul className="mt-16">
          {collections.map((item) => (
            <li
              key={item.code}
              className="group grid grid-cols-2 gap-4 border-t border-chalk/10 py-8 transition-colors hover:border-signal/40 sm:grid-cols-3 lg:grid-cols-6 lg:items-center lg:gap-6"
            >
              <span className="text-[0.65rem] tracking-[0.25em] text-steel uppercase">
                {item.code}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-chalk sm:col-span-2 lg:col-span-2 lg:text-2xl">
                {item.name}
              </h3>
              <span className="text-sm text-mist">{item.weight}</span>
              <span className="hidden text-sm text-mist sm:block">
                {item.finish}
              </span>
              <div className="col-span-2 flex items-baseline justify-between gap-4 sm:col-span-3 lg:col-span-1 lg:flex-col lg:items-end lg:justify-center">
                <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-signal">
                  {item.price}
                </span>
                <span className="text-xs text-steel lg:text-right">
                  {item.note}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
