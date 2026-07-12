import type { ReactNode, SelectHTMLAttributes } from "react";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const controlBase =
  "w-full rounded-xl border border-forest-200 bg-white px-4 py-3 text-forest-900 placeholder:text-forest-400 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20";

export function Field({
  label,
  htmlFor,
  required,
  children,
  hint,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="text-sm font-medium text-forest-800"
      >
        {label}
        {required && <span className="ml-0.5 text-gold-600">*</span>}
      </label>
      {children}
      {hint && <p className="text-xs text-forest-500">{hint}</p>}
    </div>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={`${controlBase} ${props.className ?? ""}`} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={`${controlBase} min-h-[120px] resize-y ${props.className ?? ""}`}
    />
  );
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...props} className={`${controlBase} ${props.className ?? ""}`}>
      {props.children}
    </select>
  );
}

export function SuccessCard({
  title,
  message,
}: {
  title: string;
  message: string;
}) {
  return (
    <div
      role="status"
      className="rounded-2xl border border-forest-200 bg-forest-50 p-8 text-center"
    >
      <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-forest-800 text-cream">
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path d="m5 13 4 4L19 7" />
        </svg>
      </div>
      <h3 className="font-display text-2xl font-semibold text-forest-900">
        {title}
      </h3>
      <p className="mt-2 text-forest-700">{message}</p>
    </div>
  );
}
