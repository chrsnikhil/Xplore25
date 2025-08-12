"use client";

import { GraphicBackground } from "@/components/graphic-background";
import { EmeraldBackground } from "@/components/emerald-background";
import { MinecraftWindow } from "@/components/minecraft-window";
import { MinecraftButton } from "@/components/minecraft-button";
import { MinecraftImageCarousel } from "@/components/minecraft-image-carousel";
import { motion, type Variants } from "framer-motion";

const textContainer: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06 },
  },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Themed background (ice tone) */}
      <GraphicBackground src="/snow.png" size={64} opacity={0.22} overlayColor="rgba(0, 32, 64, 0.18)" />
      <EmeraldBackground imageSrc="/snowball.png" count={20} minSize={14} maxSize={26} opacity={0.35} />

      <div className="relative z-10 py-12">
        <div className="mb-8 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-white">Mine Your Ideas (Idea Pitching)</h1>
          <p className="mt-2 text-gray-200 opacity-90 font-mono">Pitch your boldest concepts. Cool heads, sharp ideas — ice biome edition.</p>
        </div>

        {/* Big, separate sections */}
        <div className="flex justify-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.01 }}
            className="w-full md:w-[calc(60%-1rem)] md:pr-2 md:ml-8"
          >
            <MinecraftWindow title="Introduction" biome="ice" className="mb-8 text-stone-900">
              <motion.div className="max-w-none" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                <motion.p className="text-lg leading-relaxed" variants={textItem}>
                  Welcome to Mine Your Ideas — a focused pitching arena where you present your most impactful ideas
                  in a crisp, time‑boxed format. Bring clarity, creativity, and feasibility to the table.
                </motion.p>
                <motion.p className="text-lg leading-relaxed mt-4" variants={textItem}>
                  Whether it’s a feature, a product concept, or a community initiative, convince the judges with
                  a cool, structured narrative.
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
            <MinecraftWindow title="How It Works" biome="ice" className="mb-8 text-stone-900">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Pitch Format</h3>
                  <motion.ul className="text-base space-y-1" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                    <motion.li variants={textItem}><strong>Time</strong>: 3–5 minutes per pitch</motion.li>
                    <motion.li variants={textItem}><strong>Slides</strong>: Optional (max 5)</motion.li>
                    <motion.li variants={textItem}><strong>Q&A</strong>: 2 minutes with judges</motion.li>
                    <motion.li variants={textItem}><strong>Focus</strong>: Problem → Solution → Impact</motion.li>
                  </motion.ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Evaluation</h3>
                  <motion.ol className="list-decimal list-inside space-y-1 text-base" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                    <motion.li variants={textItem}>Clarity of problem and solution</motion.li>
                    <motion.li variants={textItem}>Originality and feasibility</motion.li>
                    <motion.li variants={textItem}>User value and potential impact</motion.li>
                    <motion.li variants={textItem}>Presentation quality and time use</motion.li>
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
            <MinecraftWindow title="Rules" biome="ice" className="mb-8 text-stone-900">
              <motion.ul className="list-disc list-inside text-base space-y-1" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                <motion.li variants={textItem}>No plagiarism — cite inspiration when applicable</motion.li>
                <motion.li variants={textItem}>Respect the time limit; concise is key</motion.li>
                <motion.li variants={textItem}>Prototypes/demos are welcome but optional</motion.li>
                <motion.li variants={textItem}>One speaker per pitch; team credits allowed</motion.li>
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
            <MinecraftWindow title="Prizes" biome="ice" className="mb-8 text-stone-900">
              <motion.ul className="text-base space-y-1" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                <motion.li variants={textItem}>Top Pitch: Spotlight feature + mentorship</motion.li>
                <motion.li variants={textItem}>Runner Up: Judge’s mention</motion.li>
                <motion.li variants={textItem}>Audience Favorite: Community pick</motion.li>
              </motion.ul>
            </MinecraftWindow>
          </motion.div>
        </div>

        {/* Media & Registration */}
        <div className="flex justify-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="w-full md:w-[calc(60%-1rem)] md:pr-2 md:ml-8"
          >
            <MinecraftWindow title="Tips & Highlights" biome="ice" className="mb-8 text-stone-900">
              <MinecraftImageCarousel
                biome="ice"
                images={[
                  {
                    src: "/globe.svg",
                    alt: "Pitch structure",
                    title: "Pitch Structure",
                    description: "Problem → Solution → Impact — keep it tight and clear.",
                  },
                  {
                    src: "/window.svg",
                    alt: "Slide tips",
                    title: "Slide Tips",
                    description: "Max 5 slides. Use visuals. Cut fluff.",
                  },
                  {
                    src: "/file.svg",
                    alt: "Delivery",
                    title: "Delivery",
                    description: "Own the narrative. Stay calm. Hit the clock.",
                  },
                ]}
              />
            </MinecraftWindow>
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-center px-4">
          <a
            href="https://forms.gle/your-form-id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <MinecraftButton biome="ice">📝 Register on Google Forms</MinecraftButton>
          </a>
        </div>

        <div className="mt-8 text-center px-4">
          <a href="/" className="inline-block">
            <MinecraftButton biome="ice">← Back to Home</MinecraftButton>
          </a>
        </div>
      </div>
    </main>
  );
}


