// party.strudel.js — modern peak-time party beat
// Mood: loud, driving tech-house / EDM. Punchy four-on-the-floor,
// rolling bassline, stabby chords, a bright hook and a filter-build
// drop that breaks every 4 bars. Hands in the air.
//
// How to use:
//   1. Open https://strudel.cc
//   2. Paste this whole file into the editor
//   3. Press Ctrl+Enter (or Cmd+Enter) to play, Ctrl+. to stop
//   4. Edit here in nvim, paste back, re-run.
//
// Strudel docs / cheatsheet: https://strudel.cc/learn

setcpm(126 / 4) // 126 bpm — proper peak-time club tempo

stack(
  // --- DRUMS ---
  // Hard four-on-the-floor kick — the engine of the whole track.
  s("bd*4").bank("RolandTR909").gain(0.95).shape(0.3),

  // Layered clap + snare on the backbeat for a big, wide hit.
  s("~ cp ~ cp").bank("RolandTR909").gain(0.6).room(0.3),
  s("~ sd ~ sd").bank("RolandTR808").gain(0.3).hpf(400),

  // Driving offbeat open hat — the relentless "tss" of house music.
  s("~ oh ~ oh").bank("RolandTR909").gain(0.4).pan(0.45),

  // Tight 16th closed hats with swing + velocity accents for groove.
  s("hh*16").bank("RolandTR909")
    .gain("0.3 0.15 0.22 0.15".fast(4)) // accent the downbeats
    .swingBy(1 / 3, 8),

  // Build-up snare roll that fills the last bar of every 4-bar phrase.
  s("sd*16").bank("RolandTR909")
    .gain(saw.range(0.1, 0.6).fast(2))   // crescendo
    .mask("<0 0 0 1>")                     // only the 4th bar
    .hpf(300),

  // Crash to mark the top of every 4-bar phrase (the "drop").
  s("cr").bank("RolandTR909").gain(0.5).room(0.4)
    .mask("<1 0 0 0>"),

  // --- BASS ---
  // Rolling offbeat plucked bass — the classic tech-house engine room.
  note("<a1 a1 c2 g1>".fast(2))
    .struct("~ x ~ x ~ x ~ x")            // sits between the kicks
    .sound("sawtooth")
    .lpf(sine.range(400, 1100).slow(8))   // moving filter for life
    .lpq(8)
    .gain(0.7)
    .attack(0.005).decay(0.12).sustain(0).release(0.05) // punchy pluck
    .shape(0.25),

  // Deep sub underneath to anchor the low end on the root.
  note("<a1 a1 c2 g1>")
    .sound("sine")
    .lpf(120)
    .gain(0.6),

  // --- CHORDS / STABS ---
  // Off-beat minor stabs — bright, plucky, the hands-up element.
  note("<Am7 Am7 Cmaj7 G7>")
    .voicing()
    .struct("~ x ~ x ~ x ~ x")
    .sound("supersaw")
    .lpf(2200).lpq(3)
    .gain(0.32)
    .attack(0.005).release(0.12)
    .room(0.35).delay(0.25).delaytime(0.1875).delayfeedback(0.5)
    .pan(0.6),

  // --- LEAD HOOK ---
  // Bright catchy topline that comes in for 2 bars, rests for 2 — the
  // earworm that makes people sing along.
  note("a4 c5 e5 c5 ~ e5 g5 e5")
    .sound("square")
    .lpf(3000)
    .gain(0.34)
    .attack(0.01).release(0.18)
    .room(0.4).delay(0.3).delaytime(0.375).delayfeedback(0.7)
    .mask("<0 1 0 1>")                     // appears every other 2 bars
    .off(0.125, x => x.add(note(12)).gain(0.14)) // octave shimmer
)
