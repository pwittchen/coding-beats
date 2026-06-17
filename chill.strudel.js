// rooftop.strudel.js — late-night rooftop electronic
// Mood: modern, deep, non-invasive. Soft kick, brushed hats, warm
// sub-bass and a hazy pad that drifts in over the city lights.
//
// How to use:
//   1. Open https://strudel.cc
//   2. Paste this whole file into the editor
//   3. Press Ctrl+Enter (or Cmd+Enter) to play, Ctrl+. to stop
//   4. Edit here in nvim, paste back, re-run.
//
// Strudel docs / cheatsheet: https://strudel.cc/learn

setcpm(120 / 4) // ~120 bpm — easy, head-nodding deep-house tempo

stack(
  // --- DRUMS ---
  // Gentle four-on-the-floor; soft, never punchy.
  s("bd ~ ~ bd ~ ~ bd ~").bank("RolandTR909").gain(0.5),

  // Off-beat open hat = the classic late-night shuffle, panned slightly.
  s("~ hh ~ hh").bank("RolandTR909").gain(0.3).pan(0.4),

  // Brushed closed hats with a swing for movement.
  s("hh*16").bank("RolandTR909").gain(0.16).swingBy(1 / 3, 4)
    .pan(sine.range(0.35, 0.65).slow(4)), // subtle stereo drift

  // Soft rim/clap on the backbeat, tucked deep in reverb.
  s("~ rim ~ rim").bank("RolandTR909").gain(0.25).room(0.5),

  // Airy shaker layer — adds high-end texture, duck it in every 4 bars.
  s("~ ~ ~ ~ ~ ~ ~ sh*2").bank("RolandTR909")
    .gain(0.22).pan(0.7).hpf(2000)
    .mask("<1 1 1 0>"), // drops out periodically for breathing room

  // --- SUB BASS ---
  // Warm rounded sub that breathes; a touch of saturation for body.
  note("<a1 a1 f1 g1>")
    .sound("sine")
    .lpf(220)
    .gain(0.85)
    .attack(0.04)
    .release(0.3)
    .shape(0.2) // gentle waveshaping = warmth, not grit
    .add(note("0,0.05")), // micro-detune thickening

  // Off-beat plucked bass note adds groove without clutter.
  note("~ <a2 ~ f2 ~> ~ <c3 ~ g2 ~>")
    .sound("sawtooth")
    .lpf(600).lpq(4)
    .gain(0.3)
    .attack(0.01).release(0.15)
    .degradeBy(0.2), // occasionally skips notes — keeps it human

  // --- CHORDS / PAD ---
  // Hazy minor 9th pad, slow filter sweep, lots of air.
  note("<Am9 Fmaj9 Cmaj9 G9>")
    .voicing()
    .sound("sawtooth")
    .lpf(sine.range(400, 1400).slow(8)) // drifting cutoff
    .lpq(6)
    .gain(0.3)
    .attack(0.6)
    .release(1.2)
    .room(0.7)
    .delay(0.3)
    .phaser(0.5), // slow swirl = modern, dreamy width

  // --- MELODY ---
  // Sparse, glassy pluck — appears, then leaves space.
  note("e5 ~ ~ c5 ~ <a4 g4> ~ ~")
    .sound("triangle")
    .gain(0.4)
    .room(0.6)
    .delay(0.4)
    .delaytime(0.375)
    .delayfeedback(0.85)
    .off(0.125, x => x.add(note(12)).gain(0.18)) // shimmering octave echo
)
