import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { IMAGES } from "../constants";

interface WelcomeScreenProps {
  onNext: () => void;
}

export default function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.WELCOME_BG} 
          alt="Forest Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Centered Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 px-4 md:px-12 w-full max-w-2xl text-center"
      >
        <div className="glass-card p-8 md:p-12 rounded-[2rem]">
          <div className="mb-8 flex justify-center">
            <span className="font-headline text-2xl font-bold text-white tracking-tight">Properindo Enviro Tech</span>
          </div>
          
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight font-bold">
            Welcome Environment Data Analyst
          </h1>
          
          <p className="font-sans text-lg md:text-xl mb-10 text-on-primary-container/90 leading-relaxed max-w-xl mx-auto">
            Kelola data keberlanjutan dan analisis dampak lingkungan dalam satu dasbor strategis.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={onNext}
              className="bg-tertiary-fixed text-on-tertiary-fixed px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-lg group cursor-pointer"
            >
              Akses Portal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-white/60 text-sm mt-8 font-medium">
              © 2024 Properindo Enviro Tech.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
