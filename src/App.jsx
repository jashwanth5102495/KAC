import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

function getPageFromPath(pathname) {
  const p = pathname.toLowerCase();
  if (p.startsWith('/groundnut')) return 'groundnut';
  return 'paddy';
}

export default function App() {
  const [page, setPage] = useState(getPageFromPath(window.location.pathname));
  const videoRef = useRef(null);

  // Ensure the background video starts immediately when ready
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true; // must be true for autoplay
    const attemptPlay = () => {
      const p = v.play();
      if (p && typeof p.then === 'function') {
        p.catch(() => {});
      }
    };
    if (v.readyState >= 2) {
      attemptPlay();
    } else {
      v.addEventListener('canplay', attemptPlay, { once: true });
    }
  }, []);

  // Sync document title and URL with current page
  useEffect(() => {
    document.title = page === 'paddy' ? 'Paddy' : 'Groundnut';
    const desired = page === 'paddy' ? '/paddy' : '/groundnut';
    if (window.location.pathname !== desired) {
      window.history.replaceState({}, '', desired);
    }
  }, [page]);

  // Listen to browser back/forward to update page state
  useEffect(() => {
    const onPop = () => setPage(getPageFromPath(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const goToGroundnut = () => {
    if (page !== 'groundnut') {
      window.history.pushState({}, '', '/groundnut');
      setPage('groundnut');
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-3 sm:px-4 pt-16 sm:pt-20 pb-8 sm:pb-10">
      {/* Video background */}
      <video ref={videoRef} className="fixed inset-0 -z-40 w-full h-full object-cover pointer-events-none" autoPlay loop muted playsInline preload="auto" poster="/bg.png">
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      {/* Gradient backdrop above video for subtle tint */}
      <div className="animated-gradient-overlay fixed inset-0 -z-30 opacity-20 pointer-events-none"></div>


      {/* Glassmorphism main panel */}
      <div className="relative z-10 w-full max-w-2xl rounded-3xl bg-white/25 border border-white/40 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.12)] p-5 sm:p-6">
        <h1 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-wide mb-4">
          Karnataka Agro Corporation
        </h1>

        {/* Image header replacing dial visuals */}
        <div className="rounded-2xl bg-white/20 border border-white/40 px-4 py-6 sm:px-6 sm:py-8 text-gray-900">
          <div className="flex items-center justify-center">
            <img src="/logoo.png" alt="Karnataka Agro Corporation" className="h-24 w-24 sm:h-28 sm:w-28 object-contain rounded-md img-fade-in" />
          </div>
        </div>

        {page === 'paddy' ? (
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">1. Gazette Notification</div>
                <div className="text-lg">S.O.3922(E), Dated 12-9-2024</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">2. Title of Bio Stimulant</div>
                <div className="text-lg">Potassium humate 49% (Powder)</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">3. Composition</div>
                <ul className="text-sm mt-1 space-y-1 list-disc pl-5">
                  <li>(i) Humic Acid per cent by weight, minimum: 21</li>
                  <li>(ii) pH (1% aqueous solution): 6.0 – 8.0</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">4. Crops</div>
                <div className="text-lg">Paddy</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">5. Dosage</div>
                <div className="text-lg">One soil application at 1 kg/ha</div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">1. Gazette Notification</div>
                <div className="text-lg">S.O.3922(E), Dated 12-9-2024</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">2. Title of Bio Stimulant</div>
                <div className="text-lg">Humates and Fulvates – 22% (Liquid)</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">3. Composition</div>
                <ul className="text-sm mt-1 space-y-1 list-disc pl-5">
                  <li>(i) Total water soluble humates and fulvates: percent weight by volume, minimum: 22</li>
                  <li>(ii) pH (1:5 aqueous solution): 9.0 (min)</li>
                  <li>(iii) Specific gravity: 1.05</li>
                </ul>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">4. Crops</div>
                <div className="text-lg">Ground Nut</div>
              </div>
              <div className="rounded-xl bg-white/20 border border-white/40 px-4 py-3 text-gray-900">
                <div className="text-gray-700 text-xs">5. Dosage</div>
                <div className="text-lg">Two soil applications at 1.25L/ha</div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
