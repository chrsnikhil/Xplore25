"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import * as THREE from "three";

const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;

const Scene = () => {
  return (
    <>
      <OrbitControls
        enableZoom={!isMobile}
        enablePan={!isMobile}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={isMobile ? 1.2 : 3}
        target={[0, 0, 0]}
        maxPolarAngle={Math.PI * 0.6}
        minPolarAngle={Math.PI * 0.3}
        maxAzimuthAngle={Math.PI * 0.8}
        minAzimuthAngle={-Math.PI * 0.8}
      />

      <ambientLight intensity={isMobile ? 0.9 : 0.5} />
      <directionalLight position={[5, 5, 5]} intensity={isMobile ? 0.7 : 0.5} color="#ffffff" />
      <pointLight position={[0, 10, 0]} intensity={isMobile ? 0.5 : 0.3} color="#ffffff" />

      <Environment files="/assets/skybox.jpg" background resolution={isMobile ? 256 : 512} />
    </>
  );
};



const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
      const playMusic = async () => {
        try {
          await audioRef.current?.play();
        } catch (error) {
          console.log("Autoplay prevented by browser. User interaction required.");
        }
      };
      playMusic();
    }
  }, []);

  return <audio ref={audioRef} src="/assets/bgm.mp3" preload="auto" />;
};

export default function SkyboxPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isCanvasReady, setIsCanvasReady] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    // Show loading for at least 3 seconds, then wait for canvas to be ready
    const timer = setTimeout(() => {
      if (isCanvasReady) {
        setIsLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isCanvasReady]);

  useEffect(() => {
    // Set canvas as ready after a short delay to simulate loading
    const canvasTimer = setTimeout(() => setIsCanvasReady(true), 1500);
    return () => clearTimeout(canvasTimer);
  }, []);

  const handleExplore = () => {
    router.push("/events");
  };

  return (
    <div className="w-full h-screen bg-gray-900 relative overflow-hidden" style={{ touchAction: "none" }}>
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Heavily Blurred Background */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-xl"></div>
          
          {/* Loading Popup */}
          <div className="relative bg-gray-800/80 backdrop-blur-sm border-4 border-gray-600 rounded-lg p-8 max-w-md mx-4 text-center shadow-2xl">
            {/* Minecraft-style border */}
            <div className="absolute inset-1 border-2 border-t-gray-400 border-l-gray-400 border-r-gray-700 border-b-gray-700 rounded pointer-events-none"></div>
            
            <div className="relative z-10">
              {/* Loading Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-700 rounded-lg border-2 border-gray-500 mb-4">
                  <div className="w-8 h-8 border-4 border-gray-400 border-t-white rounded-full animate-spin"></div>
                </div>
              </div>
              
              {/* Loading Text */}
              <h2 className="text-2xl font-bold text-white mb-2 font-mono">Generating World...</h2>
              <p className="text-gray-300 text-sm font-mono">Loading skybox and assets</p>
              
              {/* Progress Bar */}
              <div className="mt-6 mb-4">
                <div className="w-full bg-gray-700 rounded-full h-3 border-2 border-gray-600">
                  <div 
                    className="bg-gradient-to-r from-gray-400 via-white to-gray-300 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${isCanvasReady ? 100 : 60}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Status Text */}
              <p className="text-gray-400 text-xs font-mono">
                {isCanvasReady ? "Ready to explore!" : "Loading 3D environment..."}
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="w-full h-full absolute inset-0">
        <Canvas
          camera={{ position: [12, 0, -20], fov: isMobile ? 60 : 50, near: 0.1, far: 1000 }}
          gl={{ antialias: !isMobile, alpha: false, powerPreference: isMobile ? "high-performance" : "default", failIfMajorPerformanceCaveat: false }}
          dpr={isMobile ? 1 : [1, 2]}
          performance={{ min: isMobile ? 0.1 : 0.5 }}
          onCreated={({ gl }) => {
            gl.setClearColor("#000000", 1);
            if (!isMobile) {
              gl.toneMapping = THREE.ACESFilmicToneMapping;
              gl.toneMappingExposure = 1.2;
            }
          }}
        >
          <Scene />
        </Canvas>
      </div>

      {/* XPLORE Image Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div className="relative flex flex-col items-center gap-2">
          {/* XPLORE Logo */}
          <img
            src="/xplore.png"
            alt="XPLORE"
            className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl w-auto h-auto drop-shadow-2xl cursor-pointer transition-transform duration-200 hover:scale-105"
            style={{ filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))", imageRendering: "pixelated" }}
            onClick={handleExplore}
          />
        </div>
      </div>
      <BackgroundMusic />
    </div>
  );
}
