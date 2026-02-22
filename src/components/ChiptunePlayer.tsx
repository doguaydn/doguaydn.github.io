import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const ChiptunePlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number>(0);

  // Simple RPG town melody (frequencies in Hz)
  const melody = [
    523.25, 659.25, 783.99, 1046.50, 783.99, 659.25,
    587.33, 698.46, 880.00, 1046.50, 880.00, 698.46,
    659.25, 783.99, 987.77, 1318.51, 987.77, 783.99,
    523.25, 659.25, 783.99, 1046.50, 1318.51, 1046.50,
  ];

  // Bass notes (triangle wave)
  const bass = [
    130.81, 130.81, 146.83, 146.83, 164.81, 164.81, 130.81, 130.81,
    130.81, 130.81, 146.83, 146.83, 164.81, 164.81, 130.81, 130.81,
    130.81, 130.81, 146.83, 146.83, 164.81, 164.81, 130.81, 130.81,
  ];

  const noteDur = 0.2;

  const playSequence = useCallback((ctx: AudioContext, masterGain: GainNode) => {
    const now = ctx.currentTime;

    // Melody (square wave)
    melody.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.06, now + i * noteDur);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * noteDur + noteDur * 0.85);
      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now + i * noteDur);
      osc.stop(now + (i + 1) * noteDur);
    });

    // Bass (triangle wave)
    bass.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.08, now + i * noteDur);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * noteDur + noteDur * 0.9);
      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now + i * noteDur);
      osc.stop(now + (i + 1) * noteDur);
    });
  }, []);

  const startMusic = useCallback(() => {
    const ctx = new AudioContext();
    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.2;
    masterGain.connect(ctx.destination);
    audioCtxRef.current = ctx;

    const seqDuration = melody.length * noteDur * 1000;

    playSequence(ctx, masterGain);
    intervalRef.current = window.setInterval(() => {
      playSequence(ctx, masterGain);
    }, seqDuration);

    setPlaying(true);
  }, [playSequence]);

  const stopMusic = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = 0;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setPlaying(false);
  };

  const toggle = () => {
    if (playing) stopMusic();
    else startMusic();
  };

  return (
    <motion.button
      onClick={toggle}
      className="z-50 w-10 h-10 bg-dark-900/90 border-2 border-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={playing ? 'Mute' : 'Play Music'}
      style={{ position: 'fixed', bottom: 16, right: 16, cursor: 'pointer' }}
    >
      <span className="text-sm">{playing ? '🔊' : '🔇'}</span>
    </motion.button>
  );
};

export default ChiptunePlayer;
