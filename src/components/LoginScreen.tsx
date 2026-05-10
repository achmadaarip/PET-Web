import { Leaf, Lock, LogIn, PersonStanding, ShieldCheck, Verified } from "lucide-react";
import { motion } from "motion/react";
import { IMAGES } from "../constants";

interface LoginScreenProps {
  onLogin: (role: "admin" | "staff") => void;
}

export default function LoginScreen({ onLogin }: LoginScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-on-background relative overflow-hidden">
      {/* Decorative gradient patches */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-container rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-container rounded-full blur-[120px]"></div>
      </div>

      <div className="flex-grow flex items-center justify-center px-4 md:px-12 py-12 relative z-10">
        <div className="max-w-md w-full">
          {/* Brand Logo */}
          <div className="text-center mb-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 mb-4"
            >
              <Leaf className="w-10 h-10 text-primary" />
              <h1 className="font-headline text-3xl font-bold text-primary">Properindo Enviro Tech</h1>
            </motion.div>
            <h2 className="font-headline text-lg text-on-surface-variant font-medium">Masuk ke Portal</h2>
            <p className="font-sans text-sm text-on-surface-variant/70 mt-2 italic">Silakan pilih role simulasi di bawah ini:</p>
          </div>

          {/* Role Selection Buttons (for demo purposes) */}
          <div className="flex gap-4 mb-8">
            <button 
              onClick={() => onLogin('admin')}
              className="flex-1 py-3 px-4 bg-primary text-white rounded-lg font-bold hover:bg-primary-container transition-all flex items-center justify-center gap-2"
            >
              SPV Role
            </button>
            <button 
              onClick={() => onLogin('staff')}
              className="flex-1 py-3 px-4 bg-secondary text-white rounded-lg font-bold hover:bg-secondary-container hover:text-primary transition-all flex items-center justify-center gap-2"
            >
              Staff Role
            </button>
          </div>

          {/* Login Card (visual only) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/30 shadow-xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1" htmlFor="username">Username atau Email</label>
                <div className="relative">
                  <PersonStanding className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                  <input 
                    className="w-full pl-10 pr-4 py-3 bg-background border border-outline-variant rounded-xl focus:ring-2 focus:ring-secondary outline-none transition-all"
                    id="username"
                    placeholder="nama@perusahaan.com"
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest pl-1" htmlFor="password">Password</label>
                  <a className="text-xs text-secondary hover:underline" href="#">Lupa Password?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
                  <input 
                    className="w-full pl-10 pr-4 py-3 bg-background border border-outline-variant rounded-xl focus:ring-2 focus:ring-secondary outline-none transition-all"
                    id="password"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input className="w-4 h-4 text-primary accent-primary rounded cursor-pointer" id="remember" type="checkbox" />
                <label className="text-xs text-on-surface-variant cursor-pointer select-none" htmlFor="remember">Tetap masuk selama 30 hari</label>
              </div>

              <button className="w-full py-4 bg-primary text-white font-headline font-bold rounded-xl hover:opacity-90 transition-all flex justify-center items-center gap-2 shadow-lg group">
                Masuk ke Portal
                <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-outline-variant/30 text-center">
              <p className="text-xs text-on-surface-variant">
                Butuh bantuan akses? <a className="text-secondary font-bold hover:underline" href="#">Hubungi Admin IT</a>
              </p>
            </div>
          </motion.div>

          {/* Security Assurance */}
          <div className="mt-8 flex items-center justify-center gap-6 text-outline-variant">
            <div className="flex items-center gap-1.5">
              <Verified className="w-4 h-4" />
              <span className="text-xs font-medium">Enkripsi 256-bit</span>
            </div>
            <div className="w-1 h-1 bg-outline-variant rounded-full"></div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-medium">Akses Terjamin</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-outline-variant/50 py-8 px-6 md:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-headline text-lg font-bold text-primary">Properindo Enviro Tech</span>
            <p className="text-xs text-on-surface-variant font-medium">© 2024 Properindo Enviro Tech.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {['Privacy Policy', 'Contact Support', 'Global Certifications', 'Sustainability Report'].map(link => (
              <a key={link} className="text-xs text-on-surface-variant hover:text-primary transition-colors font-medium" href="#">{link}</a>
            ))}
          </div>
        </div>
      </footer>

      {/* Decorative background image */}
      <div className="fixed top-20 right-10 opacity-[0.03] pointer-events-none hidden lg:block select-none">
        <img src={IMAGES.DECORATIVE_PATTERN} alt="Pattern" className="w-96 h-96 object-contain" />
      </div>
    </div>
  );
}
