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
      {/* Route-unique background: desert */}
      <GraphicBackground src="/desert.png" size={64} opacity={0.22} overlayColor="rgba(128,96,0,0.18)" />
      <EmeraldBackground imageSrc="/desertbuilding.png" count={20} minSize={16} maxSize={32} opacity={0.45} />

      <div className="relative z-10 py-12">
        <div className="mb-8 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight text-white">Crafting the Interface (UI/UX Design)</h1>
          <p className="mt-2 text-gray-200 opacity-90 font-mono">Design systems in the dunes — clarity, consistency, and delight.</p>
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
            <MinecraftWindow title="Introduction" biome="desert" className="mb-8 text-stone-900">
              <motion.div className="max-w-none" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                <motion.p className="text-lg leading-relaxed" variants={textItem}>
                  Crafting the Interface is a UI/UX challenge focused on creating intuitive, accessible, and
                  visually coherent designs inspired by the desert biome.
                </motion.p>
                <motion.p className="text-lg leading-relaxed mt-4" variants={textItem}>
                  Bring wireframes, style guides, and prototypes — distill complexity into clarity.
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
            <MinecraftWindow title="Brief & Deliverables" biome="desert" className="mb-8 text-stone-900">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Design Brief</h3>
                  <motion.ul className="text-base space-y-1" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                    <motion.li variants={textItem}>Define target users and primary tasks</motion.li>
                    <motion.li variants={textItem}>Outline information architecture</motion.li>
                    <motion.li variants={textItem}>Specify accessibility considerations</motion.li>
                  </motion.ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Deliverables</h3>
                  <motion.ol className="list-decimal list-inside space-y-1 text-base" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                    <motion.li variants={textItem}>Wireframes or low‑fi prototypes</motion.li>
                    <motion.li variants={textItem}>Component style guide / design tokens</motion.li>
                    <motion.li variants={textItem}>Interactive prototype (optional)</motion.li>
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
            <MinecraftWindow title="Judging Criteria" biome="desert" className="mb-8 text-stone-900">
              <motion.ul className="list-disc list-inside text-base space-y-1" variants={textContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
                <motion.li variants={textItem}>Usability and clarity</motion.li>
                <motion.li variants={textItem}>Visual hierarchy and consistency</motion.li>
                <motion.li variants={textItem}>Accessibility and inclusivity</motion.li>
                <motion.li variants={textItem}>Creativity and polish</motion.li>
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
            <MinecraftWindow title="Inspiration" biome="desert" className="mb-8 text-stone-900">
              <MinecraftImageCarousel
                biome="desert"
                images={[
                  { src: "/globe.svg", alt: "Wireframes", title: "Wireframes", description: "Plan flows before pixels." },
                  { src: "/window.svg", alt: "Components", title: "Components", description: "Build consistent UI blocks." },
                  { src: "/file.svg", alt: "Prototypes", title: "Prototypes", description: "Test ideas quickly with users." },
                ]}
              />
            </MinecraftWindow>
          </motion.div>
        </div>

        <div className="mt-6 flex items-center justify-center px-4">
          <a href="https://forms.gle/your-form-id" target="_blank" rel="noopener noreferrer" className="inline-block">
            <MinecraftButton biome="desert">📝 Register on Google Forms</MinecraftButton>
          </a>
        </div>

        <div className="mt-8 text-center px-4">
          <a href="/" className="inline-block">
            <MinecraftButton biome="desert">← Back to Home</MinecraftButton>
          </a>
        </div>
      </div>
    </main>
  );
}


