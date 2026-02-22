import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CubeSection = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Phase flow:
  // 0.00 → 0.15 : entering — small rotated cube zooming in
  // 0.15 → 0.30 : zoom in — cube face grows to fill screen
  // 0.30 → 0.70 : visible — full size, flat, readable
  // 0.70 → 0.85 : zoom out — shrinks back into cube
  // 0.85 → 1.00 : exiting — small cube rotates away

  const rotateY = useTransform(
    scrollYProgress,
    [0,    0.15,  0.30, 0.70, 0.85,  1],
    [90,   45,    0,    0,    -45,   -90]
  );

  const scale = useTransform(
    scrollYProgress,
    [0,    0.15,  0.30, 0.70, 0.85,  1],
    [0.45, 0.45,  1,    1,    0.45,  0.45]
  );

  const translateZ = useTransform(
    scrollYProgress,
    [0,    0.15,  0.30, 0.70, 0.85,  1],
    [-400, -400,  0,    0,    -400,  -400]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0,  0.1, 0.25, 0.75, 0.9, 1],
    [0,  1,   1,    1,    1,   0]
  );

  // Border radius increases when small (looks like a card/cube face)
  const borderRadius = useTransform(
    scrollYProgress,
    [0,    0.15,  0.30, 0.70, 0.85,  1],
    [24,   24,    0,    0,    24,    24]
  );

  return (
    <div ref={ref} style={{ perspective: 1200 }}>
      <motion.div
        style={{
          rotateY,
          scale,
          translateZ,
          opacity,
          borderRadius,
          transformOrigin: 'center center',
          boxShadow: 'none',
        }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default CubeSection;
