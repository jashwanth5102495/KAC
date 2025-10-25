import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 pt-28 pb-10">
      {/* Dark overlay to improve text visibility */}
      <div className="fixed inset-0 -z-5 bg-black/35"></div>
      {/* Animated gradient overlay behind the blurred background */}
      <div className="animated-gradient-overlay fixed inset-0 -z-10 opacity-60 blur-2xl"></div>

      {/* Flipping logo header (small and centered) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
        <motion.img
          src="/dark-logo.png"
          alt="Green Plant Technologies"
          className="h-20 w-20 md:h-24 md:w-24 rounded-lg shadow-2xl"
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
        className="glass-box max-w-sm md:max-w-md w-full"
      >
        <h1 className="text-5xl font-extrabold text-green-700 tracking-wide drop-shadow-xl mb-2">
          Green Plant Technologies
        </h1>
        {/* Optional glowing underline */}
        

        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-white">
          <div>
            <h2 className="font-semibold text-white uppercase tracking-widest mb-1">1. Gazette Notification</h2>
            <p>S.O3587 Dated 12-09-2024</p>
          </div>
          <div>
            <h2 className="font-semibold text-white uppercase tracking-widest mb-1">2. Title of Bio Stimulant</h2>
            <p>Humates and Fulvates – 22% (Liquid)</p>
          </div>
          <div>
            <h2 className="font-semibold text-white uppercase tracking-widest mb-1">3. Composition</h2>
            <ul className="mt-1 space-y-1">
              <li>(i) Total water soluble humates and fulvates: 22%</li>
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
          <button
            onClick={() => window.location.assign('https://www.greenplanttechnologies.in/')}
            className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:scale-105 hover:bg-gradient-to-r from-blue-500 to-purple-600 transition-transform duration-300 ease-in-out"
          >
            More Info
          </button>
        </div>
      </motion.div>
    </div>
  );
}
