import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <p className="text-sm font-semibold text-stone-600">Erro 404</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Página não encontrada</h1>
      <p className="mt-5 max-w-lg leading-relaxed text-stone-600">
        Este endereço não está disponível. Volte ao início para conhecer o projeto.
      </p>
      <Link href="/" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-stone-900 px-6 py-3 font-semibold text-white hover:bg-stone-700">
        Voltar ao início
      </Link>
    </section>
  );
}
