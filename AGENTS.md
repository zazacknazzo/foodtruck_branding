# Food Truck Federal — agent instructions

The external ChatGPT session is the technical orchestrator. Codex executes only the currently authorized ticket, makes local implementation choices, and stops after its handoff. Relevant architecture or scope changes require orchestrator review.

- Read `docs/product/brief.md` for product scope and school versus commercial milestones.
- Read `docs/architecture/overview.md` and relevant `docs/decisions/` records before changing architecture. Preserve the approved modular monolith.
- Discover available skills and read their `SKILL.md` before use. Select relevant skills autonomously; ticket limits override incompatible skill actions. See `docs/engineering/skills.md` for local copies and reproduction options.
- Trello is the current management board; GitHub hosts code and reviews. Do not automatically create GitHub Issues, labels, or modify Trello.
- Keep changes scoped, strictly typed, input-validated and testable. Run the checks in `README.md` and functional checks appropriate to the change. Distinguish actual results from unrun checks.
- Preserve existing work and local skills. Destructive changes, main-branch merges, commercial deployment, paid provisioning and real payment activation require explicit authorization. Subagents require authorization in the active ticket.
- Each cloud task is already isolated: use the existing checkout; create a worktree only when explicitly requested.
- Keep secrets and unnecessary personal data out of files, logs and commits.
- Finish with `HANDOFF TO ORCHESTRATOR`, following `docs/engineering/handoff.md`. Do not start the next ticket automatically.
