import Link from "next/link";
import Icon from "@/components/shared/Icon";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center bg-cream px-6 py-24 text-center">
      <div className="max-w-md">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-forest-800 text-gold-400">
          <Icon name="paw" className="h-8 w-8" />
        </span>
        <h1 className="mt-6 font-display text-4xl font-semibold text-forest-900">
          Page not found
        </h1>
        <p className="mt-3 text-forest-700/80">
          Looks like this one wandered off. Let&apos;s get you back home.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-400"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
