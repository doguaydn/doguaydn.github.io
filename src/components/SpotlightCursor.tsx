import { useEffect, useRef } from 'react';

const SpotlightCursor = () => {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = 'ontouchstart' in window;
    if (isTouch) return;

    let rafId = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const update = () => {
      if (divRef.current) {
        divRef.current.style.transform = `translate(${mouseX - 200}px, ${mouseY - 200}px)`;
      }
      rafId = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className="pointer-events-none fixed w-[400px] h-[400px] rounded-full z-[60]"
      style={{
        background: 'radial-gradient(circle, rgba(168,85,247,0.06) 0%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
};

export default SpotlightCursor;
