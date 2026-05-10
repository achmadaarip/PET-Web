import { Leaf, Lock, LogIn, Mail, PersonStanding, ShieldCheck, Verified, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { IMAGES } from "../constants";

interface LoginScreenProps {
  onLogin: (role: "admin" | "staff") => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
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
    <div className="min-h-screen bg-bg-deep flex flex-col font-sans text-text-main relative overflow-hidden">
      <div className="flex-grow flex items-center justify-center px-4 md:px-12 py-12 relative z-10">
        <div className="max-w-md w-full">
          {/* Brand Logo */}
          <div className="text-center mb-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <h1 className="font-headline text-3xl font-bold text-white tracking-tight">EDA Monitoring System</h1>
            </motion.div>
          </div>

          {/* Login Card */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="glass-card p-10 rounded-[2rem]"
          >
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
                <label className="text-xs font-bold text-text-dim uppercase tracking-widest pl-1" htmlFor="email">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim/50 w-5 h-5" />
                  <input 
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/5 rounded-2xl focus:ring-2 focus:ring-accent/50 outline-none transition-all text-white placeholder:text-white/10"
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
                  <label className="text-xs font-bold text-text-dim uppercase tracking-widest pl-1" htmlFor="password">Password</label>
                  <button type="button" className="text-xs text-accent hover:text-accent-light transition-all">Lupa Password?</button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim/50 w-5 h-5" />
                  <input 
                    required
                    className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/5 rounded-2xl focus:ring-2 focus:ring-accent/50 outline-none transition-all text-white placeholder:text-white/10"
                    id="password"
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="btn-primary w-full py-5 text-sm uppercase tracking-widest shadow-xl shadow-accent/30"
              >
                Masuk ke Portal
                <LogIn className="w-5 h-5 inline-block ml-3 mb-0.5" />
              </button>
            </form>
          </motion.div>

          {/* Security Assurance */}
          <div className="mt-10 flex items-center justify-center gap-6 text-text-dim/30">
            <div className="flex items-center gap-2">
              <Verified className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Enkripsi 256-bit</span>
            </div>
            <div className="w-1 h-1 bg-white/10 rounded-full"></div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-wider">Akses Terjamin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="glass border-t-0 p-10 relative z-10 m-6 rounded-[2rem]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-headline text-lg font-bold text-white">EDA Monitoring System</span>
            <p className="text-xs text-text-dim font-medium tracking-wide">© 2024 EDA Monitoring System.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {['Privacy Policy', 'Contact Support', 'Global Certifications', 'Sustainability Report'].map(link => (
              <a key={link} className="text-xs text-text-dim hover:text-accent transition-colors font-semibold uppercase tracking-wider" href="#">{link}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
