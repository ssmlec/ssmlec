import { partners as defaultPartners } from "@/lib/site-data";

export function PartnerMarquee({
  partners = defaultPartners,
  reverse = false,
}: {
  partners?: string[];
  reverse?: boolean;
}) {
  const row = [...partners, ...partners];
  return (
    <div className="relative overflow-hidden py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" />
      <div className={`flex w-max gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>

        {row.map((p, i) => (
          <div
            key={i}
            className="flex h-16 min-w-[160px] items-center justify-center rounded-xl border bg-card px-6 font-display text-lg font-bold text-muted-foreground shadow-soft"
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
}
