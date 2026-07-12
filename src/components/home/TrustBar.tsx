import Icon from "@/components/shared/Icon";
import type { IconName } from "@/types";

const items: { icon: IconName; title: string; sub: string }[] = [
  {
    icon: "shield",
    title: "Pet First Aid Certified",
    sub: "Trained for your dog's safety",
  },
  {
    icon: "heart",
    title: "Insured & Bonded",
    sub: "Your dog & home protected",
  },
  {
    icon: "report",
    title: "Daily Paw Reports",
    sub: "Photos & notes every visit",
  },
  {
    icon: "location",
    title: "Southern Indiana Local",
    sub: "Your neighbors, caring nearby",
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-forest-100 bg-cream">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="flex items-center gap-3.5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest-100 text-forest-700">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-forest-900">
                  {item.title}
                </p>
                <p className="text-xs text-forest-600/80">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
