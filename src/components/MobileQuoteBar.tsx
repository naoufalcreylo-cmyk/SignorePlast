import { QuoteButton } from "@/components/QuoteButton";

export function MobileQuoteBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-steel-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <QuoteButton size="lg" className="w-full" />
    </div>
  );
}
