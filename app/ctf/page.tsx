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
      {/* Themed background */}
      <GraphicBackground src="/grass.png" size={64} opacity={0.25} overlayColor="rgba(0,0,0,0.15)" />
      <EmeraldBackground imageSrc="/Emerald.png" count={24} minSize={16} maxSize={32} opacity={0.5} />

      <div className="relative z-10 py-12">
        <div className="mb-8 text-center px-4">
          <h1 className="text-5xl font-bold font-mono tracking-tight text-white">Capture the Crafting Table</h1>
          <p className="mt-2 text-gray-200 opacity-90 font-mono">A fast-paced team event inspired by Capture the Flag — Minecraft style.</p>
        </div>

        {/* Big, separate sections */}
        <div className="flex justify-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }}
            className="w-full md:w-[calc(60%-1rem)] md:pr-2 md:ml-8"
          >
            <MinecraftWindow title="Introduction" biome="grassland" className="mb-8 text-stone-900">
              <motion.div className="max-w-none" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                <motion.p className="text-lg leading-relaxed" variants={textItem}>
                  Capture the Crafting Table is a fast‑paced team event inspired by classic Capture the Flag.
                  Two squads face off to steal the enemy crafting table and return it to their base—while
                  defending their own with smart building, traps, and teamwork.
                </motion.p>
                <motion.p className="text-lg leading-relaxed mt-4" variants={textItem}>
                  Expect tight rotations, resource control, and coordinated pushes. Every decision matters—
                  from when to craft to when to dive for the steal.
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
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
            whileHover={{ scale: 1.01 }}
            className="w-full md:w-[calc(60%-1rem)] md:pl-2 md:mr-8"
          >
            <MinecraftWindow title="How It Works" biome="grassland" className="mb-8 text-stone-900">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Match Format</h3>
                  <motion.ul className="text-base space-y-1" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                    <motion.li variants={textItem}><strong>Teams</strong>: 5v5</motion.li>
                    <motion.li variants={textItem}><strong>Series</strong>: Best of 3</motion.li>
                    <motion.li variants={textItem}><strong>Map</strong>: Symmetric lanes with resource nodes</motion.li>
                    <motion.li variants={textItem}><strong>Win</strong>: Secure enemy crafting table at your base</motion.li>
                  </motion.ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Flow</h3>
                  <motion.ol className="list-decimal list-inside space-y-1 text-base" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                    <motion.li variants={textItem}>Gather early resources and gear up</motion.li>
                    <motion.li variants={textItem}>Coordinate split pushes and defenses</motion.li>
                    <motion.li variants={textItem}>Break defenses, grab the table (must stay visible)</motion.li>
                    <motion.li variants={textItem}>Rotate and secure at your base to score</motion.li>
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
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="w-full md:w-[calc(60%-1rem)] md:pr-2 md:ml-8"
          >
            <MinecraftWindow title="Rules" biome="grassland" className="mb-8 text-stone-900">
              <motion.ul className="list-disc list-inside text-base space-y-1" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                <motion.li variants={textItem}>No breaking bedrock or leaving the playable arena</motion.li>
                <motion.li variants={textItem}>Crafting table carrier must keep it visible—no hiding exploits</motion.li>
                <motion.li variants={textItem}>Respawn timers scale up with consecutive deaths</motion.li>
                <motion.li variants={textItem}>No third‑party clients or mods that give competitive advantage</motion.li>
              </motion.ul>
            </MinecraftWindow>
          </motion.div>
        </div>

        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.15 }}
            whileHover={{ scale: 1.01 }}
            className="w-full md:w-[calc(60%-1rem)] md:pl-2 md:mr-8"
          >
            <MinecraftWindow title="Prizes" biome="grassland" className="mb-8 text-stone-900">
              <motion.ul className="text-base space-y-1" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                <motion.li variants={textItem}>1st Place: Champion role + Homepage showcase</motion.li>
                <motion.li variants={textItem}>2nd Place: Event MVP mention</motion.li>
                <motion.li variants={textItem}>Best Play: Community highlight feature</motion.li>
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
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
            className="w-full md:w-[calc(60%-1rem)] md:pr-2 md:ml-8"
          >
            <MinecraftWindow title="Arena Preview" biome="grassland" className="mb-8 text-stone-900">
              <MinecraftImageCarousel
                biome="grassland"
                images={[
                  {
                    src: "/globe.svg",
                    alt: "Arena layout",
                    title: "Arena Layout",
                    description: "Symmetric lanes, resource spawns, and mid control points.",
                  },
                  {
                    src: "/window.svg",
                    alt: "Base and crafting table",
                    title: "Base & Crafting Table",
                    description: "Protect your table with walls and traps. Coordinate defenses.",
                  },
                  {
                    src: "/file.svg",
                    alt: "Resource routes",
                    title: "Resource Routes",
                    description: "Plan rotations to gear up faster than your opponents.",
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
            <MinecraftButton biome="grassland">📝 Register on Google Forms</MinecraftButton>
          </a>
        </div>

        <div className="mt-8 text-center px-4">
          <a href="/" className="inline-block">
            <MinecraftButton biome="grassland">← Back to Home</MinecraftButton>
          </a>
        </div>
      </div>
    </main>
  );
}



