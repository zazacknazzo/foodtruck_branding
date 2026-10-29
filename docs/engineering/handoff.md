# Executor handoff contract

Finish each authorized execution with these Markdown headings, in order:

```markdown
## HANDOFF TO ORCHESTRATOR
### A. Estado
### B. Resumo executivo
### C. Skills utilizadas
### D. Alterações
### E. Evidências de validação
### F. Decisões técnicas
### G. Riscos e pendências
### H. Próximos tickets sugeridos
### I. Questões para o orquestrador
### J. Recomendação
### K. Evidências para revisão
```

A includes ticket ID, status (`COMPLETED`, `PARTIAL` or `BLOCKED`), branch, initial/final commits and uncommitted changes. C explains selected skills and conflicts with ticket limits. D lists created/modified/removed files. E lists commands, actual outcomes, failures and corrections; separate unrun checks.

Classify risks as CRITICAL, HIGH, MEDIUM or LOW. Suggested tickets need objective, scope, dependencies, acceptance criteria, tests, approximate complexity and possible parallelism. Questions require external judgment. Link commits, diffs, relevant files and the published branch if available.

End with **AWAITING ORCHESTRATOR REVIEW**. Stop; do not start a suggested ticket.
