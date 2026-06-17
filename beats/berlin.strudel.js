// berlin.strudel.js — underground Berlin techno
// Mood: dark, hypnotic, hard. The Berghain basement at 4am — relentless
// four-on-the-floor, a rumbling distorted sub, metallic hats, a single
// dubby stab drenched in delay, and an industrial clang that stalks the
// 4-bar phrase. Minimal, repetitive, built to hypnotise.
//
// How to use:
//   1. Open https://strudel.cc
//   2. Paste this whole file into the editor
//   3. Press Ctrl+Enter (or Cmd+Enter) to play, Ctrl+. to stop
//   4. Edit here in nvim, paste back, re-run.
//
// Strudel docs / cheatsheet: https://strudel.cc/learn

setcpm(134 / 4) // 134 bpm — proper dark warehouse techno tempo

stack(
  // --- DRUMS ---
  // Relentless four-on-the-floor kick, slightly overdriven — the hammer
  // that never stops. This is the whole point of the room.
  s("bd*4").bank("RolandTR909").gain(1).shape(0.4).lpf(180),

  // Sub-tail "rumble" off the kick — that washed-out low-end pressure
  // you feel in the chest on a big Berlin system.
  s("bd*4").bank("RolandTR909")
    .gain(0.5).shape(0.2)
    .lpf(110)
    .room(0.6).roomsize(4)               // reverb tail = the rumble
    .orbit(2),

  // Dry industrial clap on the backbeat — no warmth, just snap.
  s("~ cp ~ cp").bank("RolandTR909").gain(0.45).hpf(600).room(0.15),

  // Offbeat open hat — the hypnotic "tss" that carries the groove.
  s("~ oh ~ oh").bank("RolandTR909").gain(0.32).hpf(7000).pan(0.55),

  // Tight 16th closed hats, metallic and quiet, with swing so the
  // machine feels human enough to dance to but never loosens its grip.
  s("hh*16").bank("RolandTR909")
    .gain("0.22 0.1 0.16 0.1".fast(4))   // soft downbeat accents
    .hpf(9000)
    .swingBy(1 / 3, 8)
    .degradeBy(0.1),                       // occasional dropouts = life

  // Metallic ride/rim ticking on the offbeat 16ths for forward drive,
  // panned opposite the open hat to widen the field.
  s("rim*8").bank("RolandTR909")
    .struct("~ x ~ x ~ x ~ x")
    .gain(0.18).hpf(4000).pan(0.4)
    .mask("<0 1 1 1>"),                    // holds back on bar 1

  // --- BASS ---
  // One-note hypnotic sub on the offbeats — pumping between the kicks.
  // Stays on the root for bars and only shifts late in the phrase.
  note("<a1 a1 a1 c2>".fast(2))
    .struct("~ x ~ x ~ x ~ x")
    .sound("sawtooth")
    .lpf(sine.range(220, 600).slow(16))   // slow filter breath
    .lpq(6)
    .gain(0.6)
    .attack(0.005).decay(0.1).sustain(0).release(0.04) // short stab
    .shape(0.3),

  // --- CHORDS / STAB ---
  // A single dubby minor stab, soaked in long ping-pong delay — the lone
  // melodic element echoing off the warehouse walls. Classic dub-techno.
  note("<Am7 ~ ~ Fmaj7>")
    .voicing()
    .struct("~ ~ x ~")                     // one hit, late in the bar
    .sound("sawtooth")
    .lpf(sine.range(500, 1400).slow(32))   // very slow opening filter
    .lpq(8)
    .gain(0.3)
    .attack(0.01).release(0.2)
    .room(0.5).roomsize(6)
    .delay(0.5).delaytime(0.375).delayfeedback(0.72) // dub echoes
    .pan(0.45),

  // --- TEXTURE / FX ---
  // Industrial clang that stalks the phrase — hits the top of every
  // 4-bar cycle, heavily filtered and reverbed into the distance.
  s("metal").bank("RolandTR909").gain(0.25)
    .hpf(1500)
    .room(0.7).roomsize(8)
    .delay(0.4).delaytime(0.75).delayfeedback(0.5)
    .mask("<1 0 0 0>"),

  // Filtered noise riser that swells across the last bar of the phrase —
  // the tension before the loop slams back to the top.
  s("white*16").gain(saw.range(0, 0.25).fast(4))
    .lpf(saw.range(400, 6000).fast(4))    // sweep upward
    .mask("<0 0 0 1>")                     // only the 4th bar
    .room(0.4)
)
