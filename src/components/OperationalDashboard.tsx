import { 
  LayoutDashboard, 
  Leaf, 
  ShieldCheck, 
  TrendingUp, 
  Settings, 
  Search, 
  ArrowRight,
  BookOpen,
  Calendar,
  CloudRain,
  ExternalLink,
  FileText,
  Headphones,
  LogOut,
  PenTool
} from "lucide-react";
import { motion } from "motion/react";
import { IMAGES } from "../constants";

interface OperationalDashboardProps {
  onLogout: () => void;
}

export default function OperationalDashboard({ onLogout }: OperationalDashboardProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 sidebar-glass flex flex-col p-6 z-40">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-lg shadow-accent/20 shrink-0">
            <Leaf className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-headline text-lg font-bold leading-tight text-white uppercase tracking-tight">Properindo Enviro Tech</h1>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          {[
            { icon: LayoutDashboard, label: "Dashboard", active: true },
            { icon: Leaf, label: "Environmental Impact" },
            { icon: ShieldCheck, label: "Compliance Monitoring" },
            { icon: TrendingUp, label: "Strategic Insights" },
          ].map((item) => (
            <a 
              key={item.label}
              href="#" 
              className={`flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200 group ${item.active ? 'sidebar-active' : 'hover:bg-white/5 text-text-dim hover:text-white'}`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-sans text-sm font-semibold">{item.label}</span>
            </a>
          ))}
          <div className="mt-auto">
             <a href="#" className="flex items-center gap-3 p-3.5 rounded-xl transition-all duration-200 text-text-dim hover:text-white hover:bg-white/5">
                <Settings className="w-5 h-5" />
                <span className="font-sans text-sm font-semibold">Settings</span>
             </a>
          </div>
        </nav>

        <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
             <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold shadow-lg shrink-0">
                JD
             </div>
             <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold truncate text-white">User Operasional</span>
                <span className="text-[10px] uppercase font-bold text-text-dim tracking-wider">Field Staff</span>
             </div>
          </div>
          <button onClick={onLogout} title="Logout" className="p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer text-text-dim hover:text-white">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-72 flex-1 flex flex-col min-w-0 pr-8">
        <header className="sticky top-4 z-30 glass h-[70px] rounded-2xl px-10 flex justify-between items-center mb-8">
          <h2 className="font-headline text-xl font-bold text-white">Properindo Enviro Tech</h2>
          <div className="flex items-center gap-6">
             <div className="relative hidden md:block group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim w-4 h-4 transition-colors" />
                <input 
                  className="pl-11 pr-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm focus:ring-2 focus:ring-accent/30 outline-none w-64 transition-all placeholder:text-text-dim/50"
                  placeholder="Search field reports..."
                />
             </div>
             <button className="bg-accent text-white px-6 py-2 rounded-xl font-bold text-xs hover:opacity-90 shadow-lg shadow-accent/10 flex items-center gap-2 group">
                Portal Access
                <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
             </button>
          </div>
        </header>

        <section className="pb-12">
          <div className="mb-10">
            <h3 className="font-headline text-4xl font-bold text-white mb-3">Selamat Datang, Rekan Lapangan</h3>
            <p className="text-lg text-text-dim font-medium leading-relaxed max-w-2xl">
              Akses cepat ke alat kerja harian dan panduan teknis operasional Anda di satu tempat terpusat.
            </p>
          </div>

          {/* Operational Hub Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Input Data Banner */}
            <motion.div whileHover={{ y: -4 }} className="md:col-span-2 portal-card p-10 flex flex-col md:flex-row gap-10 items-center overflow-hidden">
               <div className="flex-1 relative z-10">
                  <div className="w-14 h-14 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-accent/20">
                    <PenTool className="w-8 h-8" />
                  </div>
                  <h4 className="font-headline text-2xl font-bold text-white mb-4">Input Data Harian</h4>
                  <p className="text-sm text-text-dim font-medium mb-8 leading-relaxed italic opacity-80">
                    Laporkan temuan lapangan dan metrik lingkungan harian Anda langsung ke sistem pusat.
                  </p>
                  <a className="inline-flex items-center gap-2.5 bg-accent text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all shadow-lg active:scale-95 group" href="#">
                    Buka Spreadsheet
                    <ExternalLink className="w-4 h-4" />
                  </a>
               </div>
               <div className="w-full md:w-2/5 aspect-video md:aspect-square bg-white/5 rounded-3xl overflow-hidden relative z-10 shadow-lg border border-white/10">
                  <img src={IMAGES.OPERATIONAL_APP} alt="App Interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" />
               </div>
            </motion.div>

            {/* Schedule Section */}
            <motion.div whileHover={{ y: -4 }} className="portal-card p-10 flex flex-col overflow-hidden">
               <div className="w-14 h-14 bg-white/5 text-accent rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white/10">
                  <Calendar className="w-8 h-8" />
               </div>
               <h4 className="font-headline text-2xl font-bold text-white mb-4">Jadwal Lapangan</h4>
               <p className="text-sm text-text-dim font-medium leading-relaxed opacity-80 mb-auto italic">
                  Periksa lokasi penugasan dan waktu inspeksi terbaru minggu ini.
               </p>
               <div className="mt-10">
                  <a className="text-accent font-bold text-sm hover:text-white flex items-center gap-2 transition-all cursor-pointer group" href="#">
                    Lihat Jadwal Lengkap
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
               </div>
            </motion.div>
          </div>

          {/* Tertiary Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Guide Card */}
            <motion.div whileHover={{ y: -4 }} className="md:col-span-2 bg-accent p-9 rounded-2xl flex items-center justify-between shadow-2xl overflow-hidden group text-white">
               <div className="relative z-10">
                  <h4 className="font-headline text-2xl font-bold text-white mb-3">Panduan Teknis</h4>
                  <p className="text-sm font-medium opacity-80 mb-8 max-w-sm">Protokol standar operasional untuk pengambilan sampel tanah dan air.</p>
                  <button className="flex items-center gap-2.5 bg-white text-accent px-6 py-3 rounded-xl font-bold text-sm hover:bg-white/90 transition-all active:scale-95">
                    <FileText className="w-5 h-5" />
                    Unduh PDF Protokol
                  </button>
               </div>
               <BookOpen className="w-32 h-32 text-white/10 group-hover:text-white/20 transition-colors pointer-events-none hidden md:block" />
            </motion.div>

            {/* Emergency Support */}
            <motion.div whileHover={{ y: -4 }} className="portal-card p-6 flex flex-col items-center text-center justify-center transition-all group">
               <div className="p-3 bg-white/5 rounded-full shadow-sm mb-4 border border-white/10">
                  <Headphones className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
               </div>
               <h5 className="font-headline font-bold text-white mb-1">Dukungan Teknis</h5>
               <p className="text-xs font-semibold text-text-dim mb-5">Butuh bantuan di lapangan?</p>
               <button className="px-6 py-2.5 border border-accent text-accent rounded-xl font-bold text-xs hover:bg-accent hover:text-white transition-all active:scale-95 select-none">
                  Hubungi Admin
               </button>
            </motion.div>

            {/* Weather Widget */}
            <motion.div whileHover={{ y: -4 }} className="portal-card p-8 flex flex-col justify-between group overflow-hidden">
               <div className="flex justify-between items-start relative z-10">
                  <div>
                    <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest mb-1">Cuaca Lokasi</p>
                    <h5 className="text-lg font-bold text-white">Jakarta, ID</h5>
                  </div>
                  <CloudRain className="w-10 h-10 text-secondary group-hover:scale-110 transition-transform" />
               </div>
               <div className="mt-6 relative z-10">
                  <p className="font-headline text-4xl font-bold text-white">28°C</p>
                  <p className="text-[10px] text-text-dim font-bold mt-2 uppercase tracking-wide">Kelembaban: 74% • Angin: 12km/h</p>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-auto px-10 py-10 glass rounded-t-3xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-headline text-lg font-bold text-white">Properindo Enviro Tech</span>
            <p className="text-xs text-text-dim font-medium mt-1">© 2024 Properindo Enviro Tech.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {['Privacy Policy', 'Contact Support', 'Global Certifications', 'Sustainability Report'].map(link => (
              <a key={link} className="text-xs font-semibold text-text-dim hover:text-white transition-colors" href="#">{link}</a>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}
