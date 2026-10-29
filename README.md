# Food Truck Federal

Base da aplicação web do Food Truck Federal, comércio independente em frente ao IFSP — Campus São Paulo, sem vínculo institucional com a escola.

**Em desenvolvimento:** a página inicial é informativa. Pedidos, catálogo completo, checkout e pagamentos online ainda não estão disponíveis. A direção visual é provisória.

## Desenvolvimento

Requisitos: Node.js **24.19.0** (veja `.nvmrc`) e npm **11.9.0**. Com nvm já instalado, execute `nvm install` e `nvm use` na raiz do checkout. Também é possível usar uma instalação compatível de Node.js sem nvm.

```bash
npm ci
npm run dev
```

Execute na raiz do repositório. O servidor informa o endereço local no terminal. Abra a página no navegador e confirme o aviso de desenvolvimento. Uma rota inexistente deve exibir a página de conteúdo não encontrado.

Esta base não exige variáveis de ambiente, credenciais, banco ou serviços externos; por isso não há `.env.example`. Mantenha segredos fora do repositório.

## Verificações

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

`test` executa uma vez e preserva o código de saída para CI. Use `npm run test:watch` durante o desenvolvimento. `formatPriceInCents` recebe centavos inteiros não negativos e retorna BRL em `pt-BR`. É apresentação, não validação de preços de pedidos.

Após o build, execute o servidor de produção com:

```bash
npm run start
```

Evite executar build e servidor de desenvolvimento simultaneamente no mesmo checkout, pois usam a saída `.next`. O workflow `.github/workflows/ci.yml` instala pelo lockfile e roda as quatro verificações em pull requests. Ele não publica o site.

## Estrutura e contexto

- `src/app/`: App Router, layout, início, estilos e rota não encontrada.
- `src/components/`: apresentação compartilhada.
- `src/lib/`: utilitários e testes unitários.
- [Brief de produto](docs/product/brief.md): objetivos, equipe, pendências e entregas escolares de 12/11/2026.
- [Arquitetura](docs/architecture/overview.md) e [ADR inicial](docs/decisions/0001-initial-stack.md): decisões e limites da fundação.
- [AGENTS.md](AGENTS.md): contrato de execução supervisionada.
- [Skills locais](docs/engineering/skills.md): origem, licença e alternativas de reprodução; cópias preservadas e fora do Git.

Trello é o quadro de gestão; GitHub é usado para código e revisão. PostgreSQL é planejado e Supabase é candidato de infraestrutura; nenhum deles está configurado. Pagamentos começarão por simulador em ticket separado.

A entrega escolar e a ativação comercial são marcos distintos. Esta base não faz deploy e não autoriza pedidos ou pagamentos reais.
