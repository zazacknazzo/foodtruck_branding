# Architecture overview

## Approved direction

One Next.js application using App Router, strict TypeScript and Tailwind CSS forms a modular monolith. PostgreSQL is planned. Supabase is a managed infrastructure candidate, not a selected or provisioned dependency. See `../decisions/0001-initial-stack.md` for the decision and trade-offs.

FTF-BOOT-001 contains a neutral, responsive informational page, global layout, not-found handling, a shared price formatter and local/CI checks. There are no database connections, payment integrations, ordering endpoints or customer records.

## Organization

- `src/app/`: routes, metadata, global layout and styles.
- `src/components/`: presentation shared by routes through the layout.
- `src/lib/`: small shared functions with colocated tests.
- `docs/product/`: goals, milestones and open decisions.
- `docs/decisions/`: architecture decision records.
- `docs/engineering/`: agent workflow, skills and handoff contract.

Create domain modules when authorized features require them. Avoid empty service/repository layers or distributed infrastructure.

## Future critical behavior

Specify server-authoritative prices, explicit order/payment states, server-side payment confirmation, authenticated and idempotent webhooks, duplicate-order prevention, expiring capacity reservations, concurrent collection-slot allocation, administrative authorization and minimized personal data before implementing these areas. Approve transaction and compensation rules before commercial activation.

Isolate eventual payment integration behind a small interface, starting with a simulator. Separate test and production configuration. The formatter handles presentation only; it is not a pricing engine or server-side price validator.

## Runtime and verification

Use Node.js 24 and npm 11, with the development version in `.nvmrc` and resolved dependencies in `package-lock.json`. Builds require no external font or image downloads. Follow `../../README.md` for commands. CI runs lint, strict typechecking, unit tests and a production build. Functional validation complements those checks.
