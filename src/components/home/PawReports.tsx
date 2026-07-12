import Section from "@/components/shared/Section";
import Icon from "@/components/shared/Icon";
import type { IconName } from "@/types";

const features: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "camera",
    title: "Photos",
    body: "Candid snapshots from every visit — the tail wags, the sunny naps, the happy moments you'd hate to miss.",
  },
  {
    icon: "paw",
    title: "Videos",
    body: "Short clips of playtime and walks so you can see your dog's personality in action while you're away.",
  },
  {
    icon: "report",
    title: "Activity Reports",
    body: "A clear summary of walks, feedings, potty breaks, medication, and playtime for complete peace of mind.",
  },
  {
    icon: "heart",
    title: "Personal Notes",
    body: "A caring, human note about how your dog is doing — their mood, their appetite, and the little things that matter.",
  },
];

export default function PawReports() {
  return (
    <Section className="bg-white">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold-600">
            Daily Paw Reports
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-forest-900 sm:text-4xl">
            You&apos;ll never wonder how their day went.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-forest-700/80">
            After every single visit, you receive a Daily Paw Report — a warm,
            detailed update that turns time apart into total reassurance. It&apos;s
            the difference between hoping your dog is okay and knowing it.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="flex gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-forest-100 text-forest-700">
                  <Icon name={f.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-forest-900">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-forest-700/80">
                    {f.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mock report card */}
        <div className="relative">
          <div className="mx-auto max-w-sm rounded-3xl border border-forest-100 bg-cream p-6 shadow-soft">
            <div className="flex items-center justify-between border-b border-forest-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-forest-800 text-gold-400">
                  <Icon name="paw" className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-display font-semibold text-forest-900">
                    Cooper&apos;s Report
                  </p>
                  <p className="text-xs text-forest-500">Midday Walk • Today</p>
                </div>
              </div>
              <span className="rounded-full bg-forest-100 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-forest-700">
                Complete
              </span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["Walk", "Water", "Play"].map((label) => (
                <div
                  key={label}
                  className="rounded-xl bg-white p-3 text-center ring-1 ring-forest-100"
                >
                  <span className="mx-auto grid h-8 w-8 place-items-center rounded-full bg-forest-800 text-cream">
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.4}
                      aria-hidden
                    >
                      <path d="m5 13 4 4L19 7" />
                    </svg>
                  </span>
                  <p className="mt-1.5 text-xs font-medium text-forest-700">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-forest-200 to-forest-300" />
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-gold-200 to-gold-300" />
            </div>
            <p className="mt-4 rounded-xl bg-white p-3 text-sm leading-relaxed text-forest-700 ring-1 ring-forest-100">
              &ldquo;Cooper had a wonderful walk today — lots of energy and a
              happy tail! He drank plenty of water and got some good sniffs in
              at the park. 🐾&rdquo;
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
