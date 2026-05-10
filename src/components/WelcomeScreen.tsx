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
          alt="Environmental Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-[4px]"></div>
      </div>

      {/* Centered Content Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 px-4 md:px-12 w-full max-w-2xl text-center"
      >
        <div className="glass-card p-10 md:p-14 rounded-[3rem]">
          <div className="mb-10 flex justify-center">
            <span className="font-headline text-2xl font-bold text-white tracking-tight">EDA Monitoring System</span>
          </div>
          
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight font-bold tracking-tight">
            Environmental Data Analysis
          </h1>
          
          <p className="font-sans text-lg md:text-xl mb-12 text-text-dim leading-relaxed max-w-xl mx-auto">
            Advanced analytics and precision monitoring for high-performance environmental management.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={onNext}
              className="btn-primary px-12 py-5 rounded-full flex items-center gap-3 cursor-pointer"
            >
              Access Portal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-white/30 text-xs mt-12 font-bold uppercase tracking-widest">
              © 2024 EDA Monitoring System.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
