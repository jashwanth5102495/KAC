import { motion } from 'framer-motion';

export default function App() {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 py-8">
      {/* Animated gradient overlay behind the blurred background */}
      <div className="animated-gradient-overlay fixed inset-0 -z-10 opacity-60 blur-2xl"></div>

      {/* Flipping logo header (small and centered) */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2">
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
        className="max-w-md md:max-w-lg w-full bg-white/20 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl text-gray-900"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-sky-500 to-teal-400 text-transparent bg-clip-text tracking-wide drop-shadow-xl mb-2">
          HUMOLX
        </h1>
        {/* Optional glowing underline */}
        <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 via-sky-500 to-teal-400 rounded-full shadow-lg mb-6"></div>

        <div className="space-y-4 text-lg md:text-xl leading-relaxed">
          <div>
            <h2 className="font-semibold text-slate-800/90 uppercase tracking-widest mb-1">Gazette Notification</h2>
            <p>S.O. 2346 (E) Dated 26-05-2025</p>
          </div>
          <div>
            <h2 className="font-semibold text-slate-800/90 uppercase tracking-widest mb-1">Title of Bio Stimulant</h2>
            <p>Humates and Fulvates – 22% (Liquid)</p>
          </div>
          <div>
            <h2 className="font-semibold text-slate-800/90 uppercase tracking-widest mb-1">Composition</h2>
            <p>Total water soluble humates and fulvates: 22%</p>
            <p>pH (1:5 aqueous solution): 9.0 (min)</p>
            <p>Specific gravity: 1.05</p>
          </div>
          <div>
            <h2 className="font-semibold text-slate-800/90 uppercase tracking-widest mb-1">Crops</h2>
            <p>Ground Nut</p>
          </div>
          <div>
            <h2 className="font-semibold text-slate-800/90 uppercase tracking-widest mb-1">Dosage</h2>
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
