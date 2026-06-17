# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Experiments with musical live coding using [Strudel](https://strudel.cc) (a JavaScript-based port of TidalCycles). Each `*.strudel.js` file is a self-contained, standalone pattern — there is no build, no test runner, no package manager, and no dependencies. The `.js` extension is for editor syntax highlighting only; these files are never executed by Node.

## Running a pattern

These files run inside the Strudel web REPL, not on the command line:

1. Open https://strudel.cc
2. Paste the whole file into the editor
3. `Ctrl+Enter` (or `Cmd+Enter`) to play, `Ctrl+.` to stop
4. Edit the file locally, paste back, re-run

Docs / cheatsheet: https://strudel.cc/learn

## Pattern conventions

Every file follows the same shape, and new ones should match it:

- A header comment block: filename, a short mood/description, the "How to use" steps above, and the docs link.
- `setcpm(bpm / 4)` to set tempo. Strudel counts in cycles per minute; a 4-beat bar means `cpm = bpm / 4`. Comment the intended bpm.
- A single top-level `stack(...)` that layers all voices, grouped with `// --- DRUMS ---`, `// --- BASS ---`, `// --- CHORDS / PAD ---`, `// --- MELODY ---` section comments.
- Drums via `s("bd ~ sd ~").bank("RolandTR909")`. Pitched voices via `note(...).sound(...)`.
- 4-bar phrasing is created with `.mask("<1 0 0 0>")` / `<0 1 0 1>` style patterns so elements drop in and out across a 4-cycle phrase. Movement comes from `sine`/`saw`-modulated `.lpf(...)`, `.swingBy(...)`, `.degradeBy(...)`, and `.off(...)` echoes.

Inline comments explain *why* a knob is set (groove, warmth, breathing room) rather than what the function does — keep that style.

Note: `chill.strudel.js` still carries a `rooftop.strudel.js` filename in its header comment — a known leftover, fix it if you touch that file.
