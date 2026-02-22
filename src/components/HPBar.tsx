import { motion, useScroll, useTransform } from 'framer-motion';

const HPBar = () => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="fixed top-16 left-0 right-0 z-40 h-4 bg-dark-900/90 border-b border-gray-800/50">
      <div className="h-full relative" style={{ background: '#1a1a1a', border: '1px solid #333' }}>
        <motion.div
          className="h-full relative"
          style={{
            width,
            background: 'linear-gradient(90deg, #22c55e, #16a34a)',
          }}
        >
          {/* Shine effect */}
          <div
            className="absolute top-0 left-0 right-0 h-[40%]"
            style={{ background: 'rgba(255,255,255,0.2)' }}
          />
        </motion.div>
        {/* HP label - always visible with shadow for contrast */}
        <div className="absolute inset-0 flex items-center px-1.5 pointer-events-none">
          <span
            className="font-pixel text-[6px] text-white"
            style={{ textShadow: '0 0 4px #000, 0 0 4px #000, 1px 1px 0 #000' }}
          >
            HP
          </span>
        </div>
      </div>
    </div>
  );
};

export default HPBar;
