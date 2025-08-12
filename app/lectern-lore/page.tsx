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
      {/* Route-unique background */}
      <GraphicBackground src="/netherblock.png" size={64} opacity={0.22} overlayColor="rgba(64,0,0,0.22)" />
      <EmeraldBackground imageSrc="/nether.png" count={22} minSize={14} maxSize={26} opacity={0.45} />

      <div className="relative z-10 py-12">
        <div className="mb-8 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-white">Lectern Lore (Technical Quiz)</h1>
          <p className="mt-2 text-gray-200 opacity-90 font-mono">Minecraft‑themed tech quiz — knowledge, speed, and a pinch of redstone logic.</p>
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
                  Step up to the lectern and prove your mettle. From command blocks to algorithms,
                  this quiz mixes Minecraft lore with real‑world tech fundamentals.
                </motion.p>
                <motion.p className="text-lg leading-relaxed mt-4" variants={textItem}>
                  Solo or duo — answer fast, think clearly, and watch out for trick questions.
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
            <MinecraftWindow title="Format" biome="nether" className="mb-8 text-stone-900">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Rounds</h3>
                  <motion.ul className="text-base space-y-1" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                    <motion.li variants={textItem}><strong>Warm‑up</strong>: MCQ — core concepts</motion.li>
                    <motion.li variants={textItem}><strong>Speedrun</strong>: Rapid‑fire short answers</motion.li>
                    <motion.li variants={textItem}><strong>Boss Round</strong>: Puzzles / command logic</motion.li>
                  </motion.ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Scoring</h3>
                  <motion.ol className="list-decimal list-inside space-y-1 text-base" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                    <motion.li variants={textItem}>Correct answer: +10 (Boss: +20)</motion.li>
                    <motion.li variants={textItem}>Time bonus: up to +5 for fastest correct</motion.li>
                    <motion.li variants={textItem}>No negative marking</motion.li>
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
                <motion.li variants={textItem}>No external help or devices during rounds</motion.li>
                <motion.li variants={textItem}>Decisions by quizmaster/judges are final</motion.li>
                <motion.li variants={textItem}>Ties broken by sudden‑death question</motion.li>
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
                biome="cherry"
                images={[
                  { src: "/globe.svg", alt: "Knowledge", title: "Knowledge", description: "From redstone to runtime — breadth matters." },
                  { src: "/window.svg", alt: "Speed", title: "Speed", description: "Answer quick, keep it accurate." },
                  { src: "/file.svg", alt: "Logic", title: "Logic", description: "Command blocks meet algorithms." },
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


