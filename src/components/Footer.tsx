import { BrandLogo } from "./BrandLogo";
import { footer } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative border-t border-chalk/10 px-6 pt-20 pb-10 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 border-b border-chalk/10 pb-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <BrandLogo
              variant="stack"
              className="logo-knockout h-auto w-[min(70vw,16rem)] object-contain object-left"
            />
            <p className="mt-6 max-w-sm text-lg text-mist">{footer.tagline}</p>
            <a href="#créer" className="cta-primary mt-8 inline-flex">
              Lancer un tirage
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7 lg:gap-8">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <p className="text-[0.65rem] tracking-[0.25em] text-steel uppercase">
                  {col.title}
                </p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-mist transition-colors hover:text-chalk"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs tracking-wide text-steel">{footer.legal}</p>
          <p className="font-[family-name:var(--font-display)] text-[0.65rem] tracking-[0.3em] text-steel uppercase">
            Print · Press · Wear
          </p>
        </div>
      </div>
    </footer>
  );
}
