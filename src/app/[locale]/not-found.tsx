import Link from "next/link";

export default function LocaleNotFound() {
  return (
    <div className="container-content flex min-h-[60vh] flex-col items-center justify-center gap-4 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-accent">404</p>
      <h1 className="font-display text-3xl font-semibold text-ink">This page doesn't exist.</h1>
      <Link href="/en" className="text-accent underline underline-offset-4">
        Back to home
      </Link>
    </div>
  );
}
