import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { IMAGES } from "../constants";

interface WelcomeScreenProps {
  onNext: () => void;
}

export default function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="w-full">
      {/* Centered Content Card */}
      <div className="glass-card p-10 md:p-14 rounded-[3rem] text-center border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
        <div className="mb-10 flex justify-center">
          <span className="font-headline text-2xl font-bold text-white tracking-tight">EDA Monitoring System</span>
        </div>
        
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight font-bold tracking-tight">
          Environmental <br className="hidden md:block" /> Data Analysis
        </h1>
        
        <p className="font-sans text-lg md:text-xl mb-12 text-text-dim leading-relaxed max-w-xl mx-auto">
          Advanced analytics and precision monitoring for high-performance environmental management.
        </p>

        <div className="flex flex-col items-center gap-4">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="btn-primary px-12 py-5 rounded-full flex items-center gap-3 cursor-pointer shadow-[0_20px_40px_rgba(190,242,100,0.2)]"
          >
            Access Portal
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <p className="text-white/20 text-[10px] mt-12 font-bold uppercase tracking-[0.2em]">
            © 2024 EDA Monitoring System.
          </p>
        </div>
      </div>
    </div>
  );
}
