# coding-beats 🎛️

Repo containing experiments with musical coding with [strudel.cc](https://strudel.cc).

Each `*.strudel.js` file is a self-contained Strudel pattern. The `.js` extension is
only there for editor syntax highlighting — these files are not run by Node.

## Running a pattern

The quickest way: open <https://strudel.cc>, paste a pattern into the editor, and press
`Ctrl+Enter` (or `Cmd+Enter`) to play, `Ctrl+.` to stop. No install required.

Docs and cheatsheet: <https://strudel.cc/learn>.

## Installing Strudel locally (optional)

To run the REPL offline from source:

```sh
git clone https://github.com/tidalcycles/strudel.git
cd strudel
npm i -g pnpm   # if you don't have pnpm
pnpm i          # needs Node.js 18+
pnpm dev        # serves the REPL at http://localhost:4321
```

To embed the REPL in a web page instead, use the [`@strudel/repl`](https://www.npmjs.com/package/@strudel/repl)
web component (`npm i @strudel/repl`, or load it from a CDN).

## Editing from Neovim

[`gruvw/strudel.nvim`](https://github.com/gruvw/strudel.nvim) lets you live-code Strudel
straight from Neovim, with two-way buffer/cursor sync to a browser-controlled editor.

Install with [lazy.nvim](https://github.com/folke/lazy.nvim):

```lua
{
  "gruvw/strudel.nvim",
  build = "npm install",          -- pulls in Puppeteer; needs Node.js + npm
  config = function()
    require("strudel").setup()    -- required before use
  end,
}
```

Usage:

- `:StrudelLaunch` — open Strudel in the browser with the current buffer
- `:StrudelToggle` — play / stop
- `:StrudelUpdate` — push the latest code (remote "Update" press)
- `:StrudelSetBuffer` — change which buffer is synced
- `:StrudelQuit` — stop and close

See the [plugin README](https://github.com/gruvw/strudel.nvim) for headless mode, Hydra
visuals, and other options.
