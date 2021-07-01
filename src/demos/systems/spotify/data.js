export const exampleTrack = {
  artist: 'Brown Fox',
  song: 'The quick brown fox jumps over the lazy dog',
  current: 42,
  duration: 260,
};

export const exampleCards = Array.from({length: 6}).map(() => ({
  title: exampleTrack.artist,
  description: exampleTrack.song,
}));
