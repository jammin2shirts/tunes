const scribble = require('scribbletune');

let clip = scribble.clip({
  notes: scribble.scale('c', 'major', 3),
    pattern: 'x-'.repeat(8)
});

let clip1 = scribble.clip({
  notes: ['c2'],
    pattern: '--xx-x-xx-xxx---'.repeat(3)
});

scribble.midi(clip1);
