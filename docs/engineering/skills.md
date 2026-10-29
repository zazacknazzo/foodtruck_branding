# Local engineering skills

## Inspected provenance and license

The existing `.agents/skills/` contains 27 skill folders and 81 files, including provenance and license records. Its source record declares `https://github.com/mattpocock/skills` at commit `a496f5513d4a4cf889bc48e189e579f4b0bdf6aa`. The accompanying MIT license identifies Matt Pocock, copyright 2026, and requires preserving its notice when redistributing copies.

These are editable local engineering/productivity copies, not an npm dependency. Inspection covered the local provenance record and license; this ticket does not claim a fresh independent upstream integrity audit. All files are preserved unchanged and excluded from Git through `.gitignore`.

## Reproduction recommendation

Keep third-party copies outside the application commit. For a new checkout that needs them, retrieve the declared upstream commit, copy the required engineering/productivity skill folders into `.agents/skills/`, and preserve the MIT notice and provenance. Review upstream instructions first and compare existing files before copying; preserve local edits. Prefer a full commit pin over an unpinned `latest` installer.

Alternative: use the upstream-supported Codex plugin or skills installer after consulting the current upstream README. This simplifies updates but requires version control and avoiding duplicate plugin/local installations. Vendoring selected skills with their license supports offline reproduction, but requires explicit approval before adding these files to Git.

The published cloud snapshot currently retains the local copies. A plain Git clone does not include them. Application installation and CI work independently of skills; `npm ci` does not download them.

## Ticket limits and management

Trello is the current board. Do not run upstream GitHub Issues/label setup automatically. The old local provenance note refers to unfinished tracker setup; the current directive and `AGENTS.md` take precedence while that file stays unchanged.

Read each selected skill. Some workflows write documents, publish tickets, commit or spawn subagents. Execute only authorized portions and disclose deviations. FTF-BOOT-001 permits application commits and branch publication, but prohibits subagents and external management changes; review is performed in-session.
