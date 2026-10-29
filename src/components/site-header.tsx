import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 sm:px-10">
        <Link href="/" className="text-lg font-bold tracking-tight">
          Food Truck Federal<span aria-hidden="true">.</span>
        </Link>
        <span className="rounded-full border border-stone-300 bg-white px-3 py-1 text-xs font-medium text-stone-700">
          Site em desenvolvimento
        </span>
      </div>
    </header>
  );
}
