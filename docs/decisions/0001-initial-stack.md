# ADR 0001 — Initial application stack

- Status: approved preliminary direction, implemented for the foundation
- Date: 2026-10-29
- Authority: orchestrator directive FTF-BOOT-001

## Context

The repository started with a rebranding README and no application. It needs a maintainable mobile-first website, a short path to the school milestone and room for reliable commercial ordering. Operational details remain under investigation.

## Decision

Use a modular monolith with Next.js App Router, strict TypeScript and Tailwind CSS. Use ESLint, Vitest and GitHub Actions for verification. Node.js 24 is the development and CI runtime; commit the npm lockfile and install with `npm ci`.

PostgreSQL is planned; Supabase remains an infrastructure candidate. Neither is configured in this ticket. Future payment work starts with a simulator behind an isolated interface. GitHub is for code/review; Trello is the management board. This supersedes the earlier conversational preference for GitHub Issues as the tracker.

The initial page is informational, explicitly under development and uses a provisional neutral identity. It has no official products, prices, purchase flow or institutional branding.

Disable Next.js automatic agent-rule generation (`agentRules: false`) so development startup preserves the project's reviewed `AGENTS.md` contract without framework-managed additions.

## Alternatives and consequences

A static-only site covers publicity but requires additional server behavior for commercial orders. Separate frontend/backend deployments add operating cost and coordination before justified by scale. The approved single application simplifies initial delivery while allowing internal modules to grow.

Framework upgrades and major changes to persistence, hosting or payment strategy require review. Dependencies are pinned in the lockfile; updates require the documented checks. This decision does not authorize commercial deployment or vendor provisioning.

## Tool compatibility

Vitest 4.1.12 includes the available security fixes. Its supported Vite 7 dependency is pinned to 7.3.7 through an npm override because the newer toolchain's Rolldown artifact was unavailable from the registry during setup. Keep integrity/TLS verification enabled and review the override when upgrading the runner.

ESLint 9 is retained because the current Next.js React/accessibility plugins declare support through that major. npm marks it as end-of-support; moving to ESLint 10 requires compatible plugin releases rather than forcing peer dependencies. TypeScript 5.9 is a stable compatible compiler for this foundation.
