// myslovitz-1.strudel.js — Polish alt-rock, Myslovitz-style no. 1
// Mood: melancholic, atmospheric indie rock. A steady live-feel kit,
// a brooding minor bassline, big reverb-washed chiming guitar chords
// and a wistful, soaring topline. Rain on a window, quiet longing.
//
// How to use:
//   1. Open https://strudel.cc
//   2. Paste this whole file into the editor
//   3. Press Ctrl+Enter (or Cmd+Enter) to play, Ctrl+. to stop
//   4. Edit here in nvim, paste back, re-run.
//
// Strudel docs / cheatsheet: https://strudel.cc/learn

setcpm(104 / 4) // ~104 bpm — mid-tempo, the unhurried alt-rock sway

stack(
  // --- DRUMS ---
  // Steady backbeat played soft — a real drummer holding back, not a club kick.
  s("bd ~ ~ bd ~ ~ bd ~").bank("RolandTR808").gain(0.7).shape(0.15),

  // Snare on 2 and 4, drenched in room — the ballad-rock heartbeat.
  s("~ sd ~ sd").bank("RolandTR808").gain(0.5).room(0.45).roomsize(4),

  // Ride-ish 8th hats, lightly swung, riding under everything.
  s("hh*8").bank("RolandTR909")
    .gain("0.22 0.12".fast(4)) // breathe between strokes
    .swingBy(1 / 4, 8)
    .pan(sine.range(0.4, 0.6).slow(8)),

  // A single crash to open every 4-bar phrase — the lift into the verse.
  s("cr").bank("RolandTR909").gain(0.4).room(0.6)
    .mask("<1 0 0 0>"),

  // Brushed tom fill that spills into the last bar of the phrase.
  s("~ ~ ~ lt ~ mt ~ ht").bank("RolandTR808")
    .gain(0.4).room(0.4)
    .mask("<0 0 0 1>"),

  // --- BASS ---
  // Brooding rounded bass walking the minor progression — the emotional floor.
  note("<e1 c2 g1 d2>")
    .sound("sine")
    .lpf(320)
    .gain(0.8)
    .attack(0.02).release(0.4)
    .shape(0.18) // a little fingered-string body
    .add(note("0,0.04")), // micro-detune for warmth

  // --- CHORDS / GUITAR ---
  // Chiming, reverb-washed arpeggiated guitar — the signature shimmer.
  // Em - C - G - D: the wistful Polish-alt staple.
  note("<Em9 Cmaj9 Gmaj9 Dadd9>")
    .arp("<0 1 2 3 2 1>") // gentle picked roll instead of a strum
    .voicing()
    .sound("triangle")
    .lpf(sine.range(900, 2600).slow(8)) // slow swell, like a swelling chorus pedal
    .lpq(3)
    .gain(0.3)
    .attack(0.02).release(0.5)
    .room(0.7).roomsize(6)
    .delay(0.35).delaytime(0.375).delayfeedback(0.6)
    .phaser(0.4), // slow swirl = wide, dreamy guitar

  // Sustained pad behind the guitar for body — only on bars 2 and 4.
  note("<Em9 Cmaj9 Gmaj9 Dadd9>")
    .voicing()
    .sound("sawtooth")
    .lpf(700).lpq(2)
    .gain(0.18)
    .attack(0.8).release(1.5)
    .room(0.8)
    .mask("<0 1 0 1>"), // swells in to fill, then steps back

  // --- MELODY / VOCAL LINE ---
  // Wistful soaring topline — the sung hook. Comes in, then leaves silence.
  note("e5 ~ d5 b4 ~ <c5 g4> ~ ~")
    .sound("triangle")
    .gain(0.4)
    .attack(0.03).release(0.4)
    .vib(4).vibmod(0.2) // human, breathy waver
    .room(0.6)
    .delay(0.4).delaytime(0.5).delayfeedback(0.7)
    .mask("<0 1 1 1>") // holds back on the first bar, then sings
    .off(0.25, x => x.add(note(12)).gain(0.14)) // octave-up shadow harmony
)
