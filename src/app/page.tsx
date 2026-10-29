export default function HomePage() {
  return (
    <>
      <section
        aria-labelledby="titulo-inicial"
        className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-10 sm:py-24 lg:grid-cols-[1.3fr_1fr] lg:items-center"
      >
        <div>
          <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-stone-600 uppercase">
            Food Truck Federal · São Paulo
          </p>
          <h1
            id="titulo-inicial"
            className="max-w-2xl text-5xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-6xl"
          >
            Uma história de bairro. Um novo encontro digital.
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-stone-600">
            Em frente ao IFSP — Campus São Paulo, o Federal faz parte da rotina
            de quem passa por aqui. Estamos preparando nosso espaço online,
            com o mesmo cuidado de sempre.
          </p>
          <a
            href="#projeto"
            className="mt-8 inline-flex min-h-12 items-center gap-5 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-700 motion-reduce:transition-none"
          >
            Conheça o projeto <span aria-hidden="true">↓</span>
          </a>
        </div>

        <aside
          aria-labelledby="aviso-titulo"
          className="rounded-3xl border border-stone-200 bg-stone-100 p-8 sm:p-10"
        >
          <span aria-hidden="true" className="mb-12 block h-1 w-12 bg-stone-500" />
          <p className="text-xs font-semibold tracking-widest text-stone-600 uppercase">
            Nosso próximo capítulo
          </p>
          <h2 id="aviso-titulo" className="mt-4 text-3xl font-semibold tracking-tight">
            Estamos preparando a casa.
          </h2>
          <p className="mt-5 leading-relaxed text-stone-700">
            Este site está em desenvolvimento. Pedidos e pagamentos online
            ainda não estão disponíveis.
          </p>
          <p className="mt-6 border-t border-stone-300 pt-6 text-sm leading-relaxed text-stone-600">
            No atendimento presencial, o negócio aceita Pix, cartão e dinheiro.
          </p>
        </aside>
      </section>

      <section id="projeto" aria-labelledby="projeto-titulo" className="border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10 sm:py-20">
          <p className="text-xs font-semibold tracking-[0.2em] text-stone-600 uppercase">
            O que estamos construindo
          </p>
          <h2 id="projeto-titulo" className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Mais praticidade para a sua pausa.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-12">
            <div>
              <h3 className="text-lg font-semibold">Conhecer antes de chegar</h3>
              <p className="mt-3 leading-relaxed text-stone-600">
                Um futuro catálogo com fotografias e informações para ajudar na
                sua escolha.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Uma rotina com menos fila</h3>
              <p className="mt-3 leading-relaxed text-stone-600">
                Estamos estudando pedidos antecipados e retirada, respeitando a
                capacidade de preparo do Federal.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Feito junto com quem atende</h3>
              <p className="mt-3 leading-relaxed text-stone-600">
                Cada etapa será validada com a proprietária antes de colocar
                pedidos e pagamentos reais em funcionamento.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
