import { Leaf, Lock, LogIn, Mail, PersonStanding, ShieldCheck, Verified, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState, FormEvent } from "react";
import { IMAGES } from "../constants";

interface LoginScreenProps {
  onLogin: (role: "admin" | "staff") => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (email === "admin@eda.com" && password === "admin123") {
      onLogin("admin");
    } else if (email === "staff@eda.com" && password === "staff123") {
      onLogin("staff");
    } else {
      setError("Email atau password salah. Silakan coba lagi.");
    }
  };

  return (
    <div className="w-full">
      <div className="glass-card p-10 md:p-14 rounded-[3rem] border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
        {/* Brand Logo */}
        <div className="text-center mb-10">
          <h1 className="font-headline text-3xl font-bold text-white tracking-tight">Access Portal</h1>
          <p className="text-text-dim text-sm mt-2">Enter your credentials to continue</p>
        </div>

        {error && (
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 text-red-400 text-sm"
          >
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </motion.div>
        )}

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3">
            <label className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em] pl-1" htmlFor="email">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-text-dim/40 w-5 h-5 group-focus-within:text-accent transition-colors" />
              <input 
                required
                className="w-full pl-14 pr-5 py-5 bg-white/[0.04] border border-white/5 rounded-2xl focus:ring-2 focus:ring-accent/20 focus:border-accent/40 outline-none transition-all text-white placeholder:text-white/10"
                id="email"
                placeholder="email@eda.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em] pl-1" htmlFor="password">Password</label>
              <button type="button" className="text-[10px] font-bold text-accent hover:text-accent-light transition-all uppercase tracking-widest pl-1">Forgot?</button>
            </div>
            <div className="relative group">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-text-dim/40 w-5 h-5 group-focus-within:text-accent transition-colors" />
              <input 
                required
                className="w-full pl-14 pr-5 py-5 bg-white/[0.04] border border-white/5 rounded-2xl focus:ring-2 focus:ring-accent/20 focus:border-accent/40 outline-none transition-all text-white placeholder:text-white/10"
                id="password"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="btn-primary w-full py-5 text-sm uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(190,242,100,0.2)] rounded-2xl"
          >
            Authenticate
            <LogIn className="w-5 h-5 inline-block ml-3 mb-0.5" />
          </motion.button>
        </form>

        {/* Security Assurance */}
        <div className="mt-12 flex items-center justify-center gap-6 text-text-dim/20">
          <div className="flex items-center gap-2">
            <Verified className="w-4 h-4" />
            <span className="text-[9px] font-bold uppercase tracking-[0.1em]">AES-256</span>
          </div>
          <div className="w-px h-3 bg-white/10"></div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[9px] font-bold uppercase tracking-[0.1em]">Protected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
