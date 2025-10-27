import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-3 sm:px-4 pt-24 sm:pt-28 pb-8 sm:pb-10">
      {/* Dark overlay to improve text visibility */}
      <div className="fixed inset-0 -z-20 bg-black/35 pointer-events-none"></div>
      {/* Animated gradient overlay behind the blurred background */}
      <div className="animated-gradient-overlay fixed inset-0 -z-30 opacity-60 blur-2xl pointer-events-none"></div>

      {/* Flipping logo header (small and centered) */}
      <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-20">
        <motion.img
          src="/dark-logo.png"
          alt="Green Plant Technologies"
          className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-lg shadow-2xl"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: [0, 180, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformPerspective: 600 }}
        />
      </div>

      {/* Main glassmorphism card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass-box relative z-10 max-w-xs sm:max-w-sm md:max-w-md w-full"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-700 tracking-wide drop-shadow-xl mb-2">
          Green Plant Technologies
        </h1>
        {/* Optional glowing underline */}
        

        <div className="space-y-5 sm:space-y-6 text-base sm:text-lg md:text-xl leading-relaxed text-white">
          <div>
            <h2 className="font-semibold text-white uppercase tracking-widest mb-1">1. Gazette Notification</h2>
            <p>S.O.3922 (E), Dated- 12-9-2024</p>
          </div>
          <div>
            <h2 className="font-semibold text-white uppercase tracking-widest mb-1">2. Title of Bio Stimulant</h2>
            <p>Humates and Fulvates – 22% (Liquid)</p>
          </div>
          <div>
            <h2 className="font-semibold text-white uppercase tracking-widest mb-1">3. Composition</h2>
            <ul className="mt-1 space-y-1">
              <li>(i) Total water soluble humates and fulvates: percent weight by volume, minimum 22</li>
              <li>(ii) pH (1:5 aqueous solution): 9.0 (min)</li>
              <li>(iii) Specific gravity: 1.05</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-white uppercase tracking-widest mb-1">4. Crops</h2>
            <p>Ground Nut</p>
          </div>
          <div>
            <h2 className="font-semibold text-white uppercase tracking-widest mb-1">5. Dosage</h2>
            <p>Two soil applications at 1.25L/ha</p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href="https://www.greenplanttechnologies.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold hover:scale-105 hover:bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 ease-in-out"
          >
            More Info
          </a>
        </div>
      </motion.div>
    </div>
  );
}
