import Image from "next/image";

const logos = {
  stack: {
    src: "/brand/logo-stack-blanc.png",
    width: 1200,
    height: 1200,
    alt: "MisterPrint — Où chaque détail compte",
  },
  ligne: {
    src: "/brand/logo-ligne-blanc.png",
    width: 1600,
    height: 600,
    alt: "MisterPrint",
  },
  mark: {
    src: "/brand/logo-mark.png",
    width: 1200,
    height: 1200,
    alt: "",
  },
} as const;

type LogoVariant = keyof typeof logos;

type BrandLogoProps = {
  variant?: LogoVariant;
  className?: string;
  priority?: boolean;
};

export function BrandLogo({
  variant = "ligne",
  className = "",
  priority = false,
}: BrandLogoProps) {
  const logo = logos[variant];

  return (
    <Image
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      priority={priority}
      className={`h-auto w-auto ${className}`}
    />
  );
}
