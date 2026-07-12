import Section from "@/components/shared/Section";
import SectionHeading from "@/components/shared/SectionHeading";

type Mark = "yes" | "no" | "maybe";

interface Row {
  feature: string;
  ballage: Mark;
  apps: Mark;
  kennels: Mark;
}

const rows: Row[] = [
  { feature: "One familiar caregiver who knows your dog", ballage: "yes", apps: "no", kennels: "no" },
  { feature: "Care in your own home", ballage: "yes", apps: "maybe", kennels: "no" },
  { feature: "Daily photo & video reports", ballage: "yes", apps: "maybe", kennels: "no" },
  { feature: "Adventure Outings (hikes & sniffaris)", ballage: "yes", apps: "no", kennels: "no" },
  { feature: "Rides to & from the vet", ballage: "yes", apps: "no", kennels: "no" },
  { feature: "Anxious & reactive dog specialists", ballage: "yes", apps: "no", kennels: "no" },
  { feature: "Insured, bonded & Pet First Aid certified", ballage: "yes", apps: "maybe", kennels: "maybe" },
  { feature: "Local, family-owned & accountable", ballage: "yes", apps: "no", kennels: "maybe" },
];

function Cell({ mark, emphasized = false }: { mark: Mark; emphasized?: boolean }) {
  if (mark === "yes") {
    return (
      <span
        className={`mx-auto grid h-7 w-7 place-items-center rounded-full ${
          emphasized ? "bg-gold-500 text-forest-950" : "bg-forest-100 text-forest-700"
        }`}
        aria-label="Yes"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden>
          <path d="m5 13 4 4L19 7" />
        </svg>
      </span>
    );
  }
  if (mark === "maybe") {
    return (
      <span className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-forest-50 text-forest-400" aria-label="Sometimes">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden>
          <path d="M6 12h12" />
        </svg>
      </span>
    );
  }
  return (
    <span className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-forest-50 text-forest-300" aria-label="No">
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden>
        <path d="M6 6l12 12M18 6 6 18" />
      </svg>
    </span>
  );
}

export default function WhyVsRest() {
  return (
    <Section className="bg-cream">
      <SectionHeading
        eyebrow="Why Ballage vs. the Rest"
        title="See the difference for yourself"
        description="Apps send a rotating cast of strangers. Kennels are stressful and one-size-fits-all. We're something better."
      />

      <div className="mx-auto mt-12 max-w-4xl overflow-x-auto">
        <table className="w-full min-w-[640px] border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="w-2/5 p-4 text-left text-sm font-semibold text-forest-700"></th>
              <th className="rounded-t-2xl bg-forest-900 p-4 text-center">
                <span className="font-display text-lg font-semibold text-cream">Ballage</span>
                <span className="block text-xs font-medium text-gold-300">Dog Care</span>
              </th>
              <th className="p-4 text-center text-sm font-semibold text-forest-600">
                Dog-walking apps
                <span className="block text-xs font-normal text-forest-400">Rover, Wag</span>
              </th>
              <th className="p-4 text-center text-sm font-semibold text-forest-600">
                Boarding kennels
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.feature}>
                <td className="border-t border-forest-100 p-4 text-sm font-medium text-forest-800">
                  {row.feature}
                </td>
                <td
                  className={`border-t border-forest-800/20 bg-forest-900/95 p-4 text-center ${
                    i === rows.length - 1 ? "rounded-b-2xl" : ""
                  }`}
                >
                  <Cell mark={row.ballage} emphasized />
                </td>
                <td className="border-t border-forest-100 p-4 text-center">
                  <Cell mark={row.apps} />
                </td>
                <td className="border-t border-forest-100 p-4 text-center">
                  <Cell mark={row.kennels} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-forest-500">
        <span className="font-semibold">✓</span> included &nbsp;·&nbsp;
        <span className="font-semibold">–</span> sometimes / varies &nbsp;·&nbsp;
        <span className="font-semibold">✕</span> not offered
      </p>
    </Section>
  );
}
