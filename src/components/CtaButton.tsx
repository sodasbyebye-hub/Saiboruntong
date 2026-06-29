import Link from "next/link";
import { ArrowRight, Download, MessageCircle } from "lucide-react";

type Variant = "primary" | "secondary" | "dark" | "ghost";
type Icon = "arrow" | "download" | "whatsapp" | "none";

const variants: Record<Variant, string> = {
  primary: "bg-red-700 text-white hover:bg-red-800 border-red-700",
  secondary: "bg-white text-zinc-950 hover:bg-zinc-100 border-white",
  dark: "bg-zinc-950 text-white hover:bg-zinc-800 border-zinc-950",
  ghost: "bg-transparent text-zinc-950 hover:bg-zinc-100 border-zinc-300",
};

function IconMark({ icon }: { icon: Icon }) {
  if (icon === "download") return <Download className="h-4 w-4" aria-hidden="true" />;
  if (icon === "whatsapp") return <MessageCircle className="h-4 w-4" aria-hidden="true" />;
  if (icon === "arrow") return <ArrowRight className="h-4 w-4" aria-hidden="true" />;
  return null;
}

export function CtaButton({
  href,
  children,
  variant = "primary",
  icon = "arrow",
  download,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  icon?: Icon;
  download?: boolean;
}) {
  return (
    <Link
      href={href}
      download={download}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold transition ${variants[variant]}`}
    >
      {children}
      <IconMark icon={icon} />
    </Link>
  );
}
