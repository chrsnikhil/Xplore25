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
      {/* Route-unique background: caves */}
      <GraphicBackground src="/blackstone.png" size={64} opacity={0.22} overlayColor="rgba(0,0,0,0.22)" />
      <EmeraldBackground imageSrc="/Torch.png" count={22} minSize={16} maxSize={30} opacity={0.5} />

      <div className="relative z-10 py-12">
        <div className="mb-8 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-white">Blocksmith’s Showcase (Best Building Competition)</h1>
          <p className="mt-2 text-gray-200 opacity-90 font-mono">Display your finest builds. Depth, detail, and creativity — forged in the caves.</p>
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
            <MinecraftWindow title="Introduction" biome="caves" className="mb-8 text-stone-900">
              <motion.div className="max-w-none" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                <motion.p className="text-lg leading-relaxed" variants={textItem}>
                  Welcome to Blocksmith’s Showcase — the celebration of structural mastery.
                  Present your best builds: from survival ingenuity to creative marvels.
                </motion.p>
                <motion.p className="text-lg leading-relaxed mt-4" variants={textItem}>
                  Judges score on detail, originality, atmosphere, and technical execution.
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
            <MinecraftWindow title="Submission Format" biome="caves" className="mb-8 text-stone-900">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">What to Submit</h3>
                  <motion.ul className="text-base space-y-1" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                    <motion.li variants={textItem}>Screenshots (3–5) or short showcase video (≤ 60s)</motion.li>
                    <motion.li variants={textItem}>Brief description: theme, materials, techniques</motion.li>
                    <motion.li variants={textItem}>Optional world download or schematic</motion.li>
                  </motion.ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Categories</h3>
                  <motion.ol className="list-decimal list-inside space-y-1 text-base" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                    <motion.li variants={textItem}>Survival Builds</motion.li>
                    <motion.li variants={textItem}>Creative Builds</motion.li>
                    <motion.li variants={textItem}>Redstone / Technical</motion.li>
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
            <MinecraftWindow title="Judging Criteria" biome="caves" className="mb-8 text-stone-900">
              <motion.ul className="list-disc list-inside text-base space-y-1" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                <motion.li variants={textItem}>Detail and craftsmanship</motion.li>
                <motion.li variants={textItem}>Originality and theme cohesion</motion.li>
                <motion.li variants={textItem}>Atmosphere and lighting</motion.li>
                <motion.li variants={textItem}>Functionality or technical novelty</motion.li>
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
            <MinecraftWindow title="Gallery" biome="caves" className="mb-8 text-stone-900">
              <MinecraftImageCarousel
                biome="caves"
                images={[
                  { src: "/globe.svg", alt: "Detail", title: "Detail", description: "Show off block choices and fine details." },
                  { src: "/window.svg", alt: "Atmosphere", title: "Atmosphere", description: "Mood, lighting, environment." },
                  { src: "/file.svg", alt: "Scale", title: "Scale", description: "Tiny huts or massive fortresses — all welcome." },
                ]}
              />
            </MinecraftWindow>
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-center px-4">
          <a href="https://forms.gle/your-form-id" target="_blank" rel="noopener noreferrer" className="inline-block">
            <MinecraftButton biome="caves">📝 Register on Google Forms</MinecraftButton>
          </a>
        </div>

        <div className="mt-8 text-center px-4">
          <a href="/" className="inline-block">
            <MinecraftButton biome="caves">← Back to Home</MinecraftButton>
          </a>
        </div>
      </div>
    </main>
  );
}


