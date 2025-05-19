// hooks/useBeatPulse.js
import { useEffect, useState, useRef } from "react";

export function useBeatPulse(audioRef, isPlaying) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!audioRef.current || !isPlaying) return;

    const audioCtx = new AudioContext();
    const source = audioCtx.createMediaElementSource(audioRef.current);
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;

    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    let animationFrameId;

    const tick = () => {
      analyser.getByteFrequencyData(dataArray);
      const avg = dataArray.reduce((a, b) => a + b) / dataArray.length;
      const beatScale = 1 + Math.min(avg / 256, 0.25); // Pulse scale between 1 and 1.25
      setScale(beatScale);
      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animationFrameId);
      audioCtx.close();
    };
  }, [audioRef, isPlaying]);

  return scale;
}
