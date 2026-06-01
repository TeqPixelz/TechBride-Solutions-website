import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "header" | "footer";
};

export function Logo({ variant = "header" }: LogoProps) {
  const dimensions = variant === "footer" ? "h-16 w-64" : "h-12 w-48 sm:w-56";

  return (
    <Link href="/" className={`relative block ${dimensions}`} aria-label="TechBridge Solutions home">
      <Image
        src="/images/techbridge-logo.png"
        alt="TechBridge Solutions"
        fill
        priority={variant === "header"}
        sizes={variant === "footer" ? "256px" : "(min-width: 640px) 224px, 192px"}
        className="object-contain object-left"
      />
    </Link>
  );
}
