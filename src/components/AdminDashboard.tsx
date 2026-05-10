import { 
  LayoutDashboard, 
  Leaf, 
  ShieldCheck, 
  TrendingUp, 
  Settings, 
  Search, 
  ArrowRight, 
  MoreVertical,
  CheckCircle2,
  Activity,
  LogOut
} from "lucide-react";
import { motion } from "motion/react";
import { IMAGES } from "../constants";

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const reports = [
    {
      title: "Laporan Dampak Lingkungan",
      desc: "Akses data emisi, pengelolaan limbah, dan efisiensi energi secara real-time di seluruh unit operasional.",
      img: IMAGES.REPORT_IMPACT
    },
    {
      title: "Monitoring Kepatuhan",
      desc: "Pantau status audit, sertifikasi internasional, dan regulasi pemerintah yang harus dipenuhi setiap kuartal.",
      img: IMAGES.REPORT_COMPLIANCE
    },
    {
      title: "Data Strategis",
      desc: "Kumpulan data analitik untuk perencanaan jangka panjang dan mitigasi risiko lingkungan di masa depan.",
      img: IMAGES.REPORT_STRATEGIC
    },
    {
      title: "Manajemen Tim",
      desc: "Kelola jadwal inspeksi lapangan, penugasan personel, dan evaluasi kinerja konsultan di bawah pengawasan Anda.",
      img: IMAGES.REPORT_TEAM
    }
  ];

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
            { icon: Settings, label: "Settings" },
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
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
             <img src={IMAGES.ADMIN_PROFILE} alt="Profile" className="w-10 h-10 rounded-full border-2 border-white/10 select-none object-cover" />
             <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold truncate text-white">Admin SPV</span>
                <span className="text-[10px] uppercase font-bold text-text-dim tracking-wider">Supervisor</span>
             </div>
          </div>
          <button onClick={onLogout} title="Logout" className="p-2 hover:bg-white/10 rounded-lg transition-colors cursor-pointer text-text-dim hover:text-white">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-72 flex-1 flex flex-col min-w-0 pr-8">
        {/* Top Header */}
        <header className="sticky top-4 z-30 glass h-[70px] rounded-2xl px-10 flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
             <h2 className="font-headline text-xl font-bold text-white">Properindo Enviro Tech</h2>
             <div className="w-px h-6 bg-white/10"></div>
             <p className="text-sm text-text-dim font-medium">Dashboard Pengawas Strategis</p>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="relative hidden lg:block group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim w-4 h-4 transition-colors" />
                <input 
                  className="pl-11 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm focus:ring-2 focus:ring-accent/30 outline-none w-64 transition-all placeholder:text-text-dim/50"
                  placeholder="Search spreadsheet data..."
                />
             </div>
             <button className="px-6 py-2.5 bg-accent text-white font-sans text-xs font-bold rounded-xl shadow-lg shadow-accent/10 hover:opacity-90 transition-all active:scale-95">
                New Project
             </button>
          </div>
        </header>

        <div className="pb-12">
          {/* Summary Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {/* Impact Score */}
            <motion.div whileHover={{ y: -4 }} className="portal-card p-7 flex flex-col justify-between group overflow-hidden">
               <div className="flex justify-between items-start relative z-10">
                  <span className="text-xs font-bold text-text-dim uppercase tracking-widest">Skor Dampak</span>
                  <div className="p-2.5 bg-white/5 text-white rounded-xl border border-white/10">
                    <Activity className="w-5 h-5" />
                  </div>
               </div>
               <div className="mt-8 relative z-10">
                  <div className="font-headline text-5xl font-bold text-white">94.2</div>
                  <div className="flex items-center gap-1 text-primary text-xs font-bold mt-4">
                    <TrendingUp className="w-4 h-4" />
                    <span>+2.4% last month</span>
                  </div>
               </div>
            </motion.div>

            {/* Compliance */}
            <motion.div whileHover={{ y: -4 }} className="portal-card p-7 flex flex-col justify-between group overflow-hidden">
               <div className="flex justify-between items-start relative z-10">
                  <span className="text-xs font-bold text-text-dim uppercase tracking-widest">Kepatuhan</span>
                  <div className="p-2.5 bg-white/5 text-white rounded-xl border border-white/10">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
               </div>
               <div className="mt-8 relative z-10">
                  <div className="font-headline text-5xl font-bold text-white">100%</div>
                  <p className="text-xs font-bold text-text-dim mt-4 uppercase tracking-widest opacity-60">All Sites Compliant</p>
               </div>
            </motion.div>

            {/* Active Projects Banner */}
            <motion.div whileHover={{ y: -4 }} className="portal-card bg-accent p-8 md:col-span-2 shadow-2xl relative overflow-hidden flex flex-col justify-between group text-white">
               <div className="flex justify-between items-start relative z-10">
                  <div>
                    <h3 className="font-headline text-2xl font-bold">Status Proyek Aktif</h3>
                    <p className="text-sm opacity-70 font-medium">Quarterly overview of field operations</p>
                  </div>
                  <Activity className="w-12 h-12 text-white/20 group-hover:text-white/40 transition-colors" />
               </div>
               <div className="flex gap-12 mt-10 relative z-10">
                  {[
                    { label: "Running", val: 28 },
                    { label: "Review", val: "04", border: true },
                    { label: "Done", val: 12, border: true }
                  ].map(stat => (
                    <div key={stat.label} className={stat.border ? 'border-l border-white/20 pl-12' : ''}>
                      <span className="block text-[10px] font-bold opacity-60 uppercase tracking-widest">{stat.label}</span>
                      <span className="text-4xl font-bold mt-1 block tracking-tight">{stat.val}</span>
                    </div>
                  ))}
               </div>
               <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
            </motion.div>
          </div>

          {/* Navigation Hub */}
          <section className="mb-12">
            <h3 className="font-headline text-2xl font-bold text-white mb-8">Hub Navigasi Laporan</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {reports.map((report) => (
                <motion.a 
                  key={report.title}
                  whileHover={{ y: -6 }}
                  href="#" 
                  className="portal-card overflow-hidden group flex flex-col"
                >
                  <div className="h-44 relative overflow-hidden">
                    <img src={report.img} alt={report.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/90 via-bg-deep/20 to-transparent p-6 flex items-end">
                      <span className="text-white font-headline text-xl font-bold">{report.title}</span>
                    </div>
                  </div>
                  <div className="p-7">
                    <p className="text-sm text-text-dim font-medium leading-relaxed mb-6 italic opacity-80">{report.desc}</p>
                    <div className="flex items-center gap-2 text-accent font-bold text-sm group-hover:text-white transition-colors">
                      Buka Spreadsheet
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* Activities Section */}
          <section className="portal-card h-fit p-8 relative overflow-hidden backdrop-blur-3xl">
            <div className="flex justify-between items-center mb-8 relative z-10">
              <h4 className="font-headline text-xl font-bold text-white">Aktivitas Terkini</h4>
              <button className="text-xs font-bold text-accent hover:text-white transition-all uppercase tracking-widest">Lihat Semua</button>
            </div>
            
            <div className="space-y-4 relative z-10">
              {[
                { title: "Laporan Dampak Q3 telah diperbarui", subtitle: "Oleh: Senior Consultant • 2 jam yang lalu", color: "bg-accent" },
                { title: "Audit ISO 14001 Berhasil", subtitle: "Sertifikasi diperpanjang hingga 2026 • 5 jam yang lalu", color: "bg-primary" },
                { title: "Peringatan Kepatuhan: Site C-04", subtitle: "Memerlukan tinjauan SPV segera • Kemarin", color: "bg-secondary" }
              ].map((activity, idx) => (
                <div key={idx} className="flex items-center gap-5 p-5 bg-white/5 rounded-2xl border border-white/5 group hover:bg-white/10 transition-all cursor-pointer">
                  <div className={`w-1.5 h-12 ${activity.color} rounded-full shadow-lg opacity-80`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white mb-1 truncate">{activity.title}</p>
                    <p className="text-xs text-text-dim font-medium">{activity.subtitle}</p>
                  </div>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-text-dim">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

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
