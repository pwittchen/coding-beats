// sample.strudel.js — a basic Strudel pattern
// How to use:
//   1. Open https://strudel.cc
//   2. Paste this whole file into the editor
//   3. Press Ctrl+Enter (or Cmd+Enter) to play, Ctrl+. to stop
//   4. Edit here in nvim, paste back, re-run.
//
// Strudel docs / cheatsheet: https://strudel.cc/learn

setcpm(90 / 4) // tempo: ~90 bpm (cpm = cycles per minute)

stack(
  // --- DRUMS ---
  // bd = kick, sd = snare, hh = hi-hat. "~" is a rest.
  s("bd ~ bd ~").bank("RolandTR909"),
  s("~ sd ~ sd").bank("RolandTR909"),
  s("hh*8").gain(0.4).bank("RolandTR909"),

  // --- BASS ---
  // play a note pattern with a synth sound
 note("c2 ~ g2 ~ c2 ~ <f2 g2> ~")
   .sound("sawtooth")
   .lpf(600) // low-pass filter cutoff
   .gain(0.7),

  // --- MELODY ---
  // <...> picks one item per cycle. "*2" repeats faster.
  note("<c4 e4 g4 b4> e4 g4 a4")
    .sound("triangle")
    .gain(0.5)
    .room(0.4) // reverb
)
