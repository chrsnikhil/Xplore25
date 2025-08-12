"use client";

import { GraphicBackground } from "@/components/graphic-background";
import { EmeraldBackground } from "@/components/emerald-background";
import { MinecraftWindow } from "@/components/minecraft-window";
import { MinecraftButton } from "@/components/minecraft-button";
import { MinecraftImageCarousel } from "@/components/minecraft-image-carousel";
import { motion, type Variants } from "framer-motion";

const textContainer: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Route-unique background: red bricks + blaze rod particles */}
      <GraphicBackground src="/red-bricks.png" size={64} opacity={0.22} overlayColor="rgba(64,0,0,0.22)" />
      <EmeraldBackground imageSrc="/Blaze_Rod.png" count={24} minSize={14} maxSize={28} opacity={0.5} />

      <div className="relative z-10 py-12">
        <div className="mb-8 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-white">Nether Quest 2.0 (Treasure Hunt)</h1>
          <p className="mt-2 text-gray-200 opacity-90 font-mono">Track clues through the fiery depths — puzzles, paths, and peril.</p>
        </div>

        {/* Sections */}
        <div className="flex justify-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.01 }}
            className="w-full md:w-[calc(60%-1rem)] md:pr-2 md:ml-8"
          >
            <MinecraftWindow title="Introduction" biome="nether" className="mb-8 text-stone-900">
              <motion.div className="max-w-none" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                <motion.p className="text-lg leading-relaxed" variants={textItem}>
                  Your team races through nether‑themed stations, solving clues and cracking codes to reach the treasure.
                </motion.p>
                <motion.p className="text-lg leading-relaxed mt-4" variants={textItem}>
                  Smart splits, risk management, and observation skills are key. Pace yourselves — the blaze won’t wait.
                </motion.p>
              </motion.div>
            </MinecraftWindow>
          </motion.div>
        </div>

        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            whileHover={{ scale: 1.01 }}
            className="w-full md:w-[calc(60%-1rem)] md:pl-2 md:mr-8"
          >
            <MinecraftWindow title="How It Works" biome="nether" className="mb-8 text-stone-900">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Hunt Format</h3>
                  <motion.ul className="text-base space-y-1" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                    <motion.li variants={textItem}>Teams of 3–4 players</motion.li>
                    <motion.li variants={textItem}>Stages with coded hints and puzzles</motion.li>
                    <motion.li variants={textItem}>Checkpoints require proof/answers to advance</motion.li>
                    <motion.li variants={textItem}>First team to the treasure wins</motion.li>
                  </motion.ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Pro Tips</h3>
                  <motion.ol className="list-decimal list-inside space-y-1 text-base" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                    <motion.li variants={textItem}>Split tasks logically (cipher, pathing, lookup)</motion.li>
                    <motion.li variants={textItem}>Verify before moving — avoid backtracking</motion.li>
                    <motion.li variants={textItem}>Track time and communicate roles</motion.li>
                  </motion.ol>
                </div>
              </div>
            </MinecraftWindow>
          </motion.div>
        </div>

        <div className="flex justify-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="w-full md:w-[calc(60%-1rem)] md:pr-2 md:ml-8"
          >
            <MinecraftWindow title="Rules" biome="nether" className="mb-8 text-stone-900">
              <motion.ul className="list-disc list-inside text-base space-y-1" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                <motion.li variants={textItem}>No external devices beyond permitted materials</motion.li>
                <motion.li variants={textItem}>Respect boundaries; no skipping checkpoints</motion.li>
                <motion.li variants={textItem}>Judges may issue penalties for rule breaks</motion.li>
              </motion.ul>
            </MinecraftWindow>
          </motion.div>
        </div>

        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            whileHover={{ scale: 1.01 }}
            className="w-full md:w-[calc(60%-1rem)] md:pl-2 md:mr-8"
          >
            <MinecraftWindow title="Highlights" biome="nether" className="mb-8 text-stone-900">
              <MinecraftImageCarousel
                biome="nether"
                images={[
                  { src: "/globe.svg", alt: "Clues", title: "Clues", description: "Decode riddles and ciphers." },
                  { src: "/window.svg", alt: "Paths", title: "Paths", description: "Navigate branching routes." },
                  { src: "/file.svg", alt: "Teamwork", title: "Teamwork", description: "Coordinate under pressure." },
                ]}
              />
            </MinecraftWindow>
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-center px-4">
          <a href="https://forms.gle/your-form-id" target="_blank" rel="noopener noreferrer" className="inline-block">
            <MinecraftButton biome="nether">📝 Register on Google Forms</MinecraftButton>
          </a>
        </div>

        <div className="mt-8 text-center px-4">
          <a href="/" className="inline-block">
            <MinecraftButton biome="nether">← Back to Home</MinecraftButton>
          </a>
        </div>
      </div>
    </main>
  );
}


