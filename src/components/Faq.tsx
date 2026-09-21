"use client";

import { useState } from "react";
import { faqItems } from "@/data/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative border-t border-chalk/10 bg-[#10141a] px-6 py-24 md:px-12 md:py-32 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="font-[family-name:var(--font-display)] text-[0.7rem] font-semibold tracking-[0.35em] text-signal uppercase">
            04 — FAQ
          </p>
          <h2 className="mt-5 font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.05] tracking-tight text-chalk md:text-5xl">
            Questions avant de presser.
          </h2>
          <p className="mt-5 text-mist">
            Pas trouvé ta réponse ?{" "}
            <a
              href="mailto:hello@trame.studio"
              className="text-chalk underline decoration-signal/60 underline-offset-4 transition-colors hover:decoration-signal"
            >
              Écris à l&apos;atelier
            </a>
            .
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="border-t border-chalk/10">
            {faqItems.map((item, i) => {
              const isOpen = open === i;
              return (
                <li key={item.q} className="border-b border-chalk/10">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors hover:text-signal"
                  >
                    <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-chalk md:text-xl">
                      {item.q}
                    </span>
                    <span
                      className="mt-1 shrink-0 font-[family-name:var(--font-display)] text-signal transition-transform duration-300"
                      style={{
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 pr-10 text-base leading-relaxed text-mist md:text-lg">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
