import { MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getDictionary } from "@/i18n/site";

export function WhatsAppFloat({ locale }: { locale: Locale }) {
  const dictionary = getDictionary(locale);
  return (
    <a
      href="#inquiry"
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition hover:bg-green-700"
      aria-label={dictionary.cta.whatsapp}
      title={dictionary.cta.whatsapp}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
