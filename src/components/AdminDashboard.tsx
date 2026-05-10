import { useState } from "react";
import { 
  LayoutDashboard, 
  Briefcase, 
  ShieldCheck, 
  TrendingUp, 
  Settings, 
  Search, 
  ArrowRight, 
  MoreVertical,
  CheckCircle2,
  Activity,
  LogOut,
  UserCircle,
  ClipboardList,
  BarChart3,
  Clock,
  CheckCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "../constants";

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [currentView, setCurrentView] = useState('Dashboard');

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Briefcase, label: "Worktracking" },
    { icon: ShieldCheck, label: "Compliance" },
    { icon: TrendingUp, label: "Insights" },
    { icon: Settings, label: "Settings" },
  ];

  const reports = [
    {
      title: "EDA Work Tracking",
      desc: "Monitor pekerjaan harian dan progres aktivitas tim EDA secara real-time.",
      img: IMAGES.REPORT_IMPACT,
      link: "https://docs.google.com/spreadsheets/d/1KQ5M9SSq4xG7cpP8M9ZtLH9Xt8Z0hnSZBpnxQT2oBDM/edit?gid=1455439243#gid=1455439243"
    },
    {
      title: "Progress QC Dokumen",
      desc: "Pantau status quality control dokumen dan proses validasi data.",
      img: IMAGES.REPORT_COMPLIANCE,
      link: "https://docs.google.com/spreadsheets/d/1yLXEZgLKp68uH8wCpKu8oGA_Y-xFlC2Gs_z4mVVRa4/edit?gid=1275939715#gid=1275939715"
    },
    {
      title: "Plotting Beban EDA",
      desc: "Kelola distribusi workload dan pemetaan beban kerja tim EDA.",
      img: IMAGES.REPORT_STRATEGIC,
      link: "https://docs.google.com/spreadsheets/d/1JpfCkYpxHAZtVT348vFKSwhgUDsGCmWxy4YX56mfQps/edit?gid=324883841#gid=324883841"
    },
    {
      title: "KPI Monitoring",
      desc: "Analisis performa KPI dan pencapaian target operasional EDA.",
      img: IMAGES.REPORT_TEAM,
      link: "https://docs.google.com/spreadsheets/d/1CPm4d0KtmzL7dW9WBuZv8uQZ2s-c863imm3ZkaFeM70/edit?gid=0#gid=0"
    }
  ];

  const renderDashboard = () => (
    <motion.div 
      key="dashboard"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* Summary Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {/* Impact Score */}
        <motion.div whileHover={{ y: -4 }} className="portal-card p-8 flex flex-col justify-between group h-full">
           <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em]">Impact Score</span>
              <div className="p-3 bg-accent/10 text-accent rounded-xl border border-accent/20">
                <Activity className="w-5 h-5" />
              </div>
           </div>
           <div className="mt-10">
              <div className="font-headline text-5xl font-bold text-white tracking-tighter">94.2</div>
              <div className="flex items-center gap-2 text-accent-light text-[10px] font-bold mt-5 uppercase tracking-widest">
                <TrendingUp className="w-4 h-4" />
                <span>+2.4% last month</span>
              </div>
           </div>
        </motion.div>

        {/* Compliance */}
        <motion.div whileHover={{ y: -4 }} className="portal-card p-8 flex flex-col justify-between group h-full">
           <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em]">Compliance</span>
              <div className="p-3 bg-accent-light/10 text-accent-light rounded-xl border border-accent-light/20">
                <CheckCircle2 className="w-5 h-5" />
              </div>
           </div>
           <div className="mt-10">
              <div className="font-headline text-5xl font-bold text-white tracking-tighter">100%</div>
              <p className="text-[10px] font-bold text-text-dim mt-5 uppercase tracking-widest opacity-40">All Sites Compliant</p>
           </div>
        </motion.div>

        {/* Active Projects Banner */}
        <motion.div whileHover={{ y: -4 }} className="portal-card bg-accent p-10 md:col-span-2 relative overflow-hidden flex flex-col justify-between group">
           <div className="flex justify-between items-start relative z-10">
              <div>
                <h3 className="font-headline text-2xl font-bold text-bg-deep tracking-tight">Active Projects</h3>
                <p className="text-bg-deep/60 text-sm font-medium mt-1">Quarterly overview of field operations</p>
              </div>
              <Activity className="w-14 h-14 text-bg-deep/20 group-hover:text-bg-deep/40 transition-all duration-500" />
           </div>
           <div className="flex gap-16 mt-14 relative z-10">
              {[
                { label: "Running", val: 28 },
                { label: "Review", val: "04", border: true },
                { label: "Done", val: 12, border: true }
              ].map(stat => (
                <div key={stat.label} className={stat.border ? 'border-l border-bg-deep/10 pl-16' : ''}>
                  <span className="block text-[10px] font-bold text-bg-deep uppercase tracking-[0.2em] opacity-50">{stat.label}</span>
                  <span className="text-4xl font-bold mt-2 block tracking-tight text-bg-deep">{stat.val}</span>
                </div>
              ))}
           </div>
           <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Navigation Hub */}
        <div className="lg:col-span-2 space-y-10">
          <div className="flex items-center justify-between">
            <h3 className="font-headline text-2xl font-bold text-white tracking-tight">Report Hub</h3>
            <div className="h-px bg-white/5 flex-1 mx-8 hidden md:block"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reports.map((report) => (
              <motion.a 
                key={report.title}
                whileHover={{ scale: 1.02, y: -4 }}
                href={report.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portal-card overflow-hidden group flex flex-col h-full"
              >
                <div className="h-44 relative overflow-hidden">
                  <img src={report.img} alt={report.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-40 brightness-50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex items-end p-8">
                    <span className="text-white font-headline text-xl font-bold tracking-tight">{report.title}</span>
                  </div>
                </div>
                <div className="p-8 pb-10 flex-1 flex flex-col">
                  <p className="text-sm text-text-dim font-medium leading-relaxed mb-10 opacity-80">{report.desc}</p>
                  <div className="mt-auto flex items-center gap-2 text-accent font-bold text-xs uppercase tracking-widest group-hover:text-accent-light transition-colors">
                    Access Data Hub
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <h4 className="font-headline text-2xl font-bold text-white tracking-tight">Activity</h4>
            <button className="text-[10px] font-bold text-accent hover:text-accent-light transition-all uppercase tracking-widest">See All</button>
          </div>
          
          <div className="glass-card p-6 rounded-3xl space-y-2">
            {[
              { title: "Impact Report Q3 Updated", subtitle: "Senior Consultant • 2h ago", color: "bg-accent" },
              { title: "ISO 14001 Audit Success", subtitle: "Valid until 2026 • 5h ago", color: "bg-accent-light" },
              { title: "Compliance Alert: Site C-04", subtitle: "SPV Review Required • Yesterday", color: "bg-red-400" }
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 hover:bg-white/[0.03] group cursor-pointer border border-transparent hover:border-white/5">
                <div className={`w-1.5 h-10 ${activity.color} rounded-full opacity-80 shrink-0`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white mb-1 truncate">{activity.title}</p>
                  <p className="text-[11px] text-text-dim font-semibold uppercase tracking-wider opacity-60">{activity.subtitle}</p>
                </div>
                <button className="p-2 hover:bg-white/5 rounded-xl transition-all text-text-dim hover:text-white">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderWorktracking = () => (
    <motion.div 
      key="worktracking"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Team Productivity", val: "88%", icon: Briefcase, color: "text-accent" },
          { label: "Tasks Completed", val: "248", icon: CheckCircle, color: "text-emerald-400" },
          { label: "Pending Reviews", val: "14", icon: Clock, color: "text-amber-400" },
        ].map((stat, i) => (
          <div key={i} className="portal-card p-8 flex items-center gap-6">
            <div className={`p-4 rounded-2xl bg-white/[0.03] ${stat.color} border border-white/5`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{stat.label}</p>
              <p className="text-3xl font-bold text-white mt-1">{stat.val}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="portal-card p-10">
        <h3 className="font-headline text-2xl font-bold text-white mb-8">Activity Timeline</h3>
        <div className="space-y-8">
          {[
            { user: "Sarah", action: "Completed QC for 12 documents", time: "10 mins ago", project: "Sector A" },
            { user: "Marcus", action: "Logged field data entry", time: "45 mins ago", project: "Site B-04" },
            { user: "Elena", action: "Started new assessment", time: "2 hours ago", project: "River Monitoring" },
            { user: "David", action: "Updated KPI targets", time: "4 hours ago", project: "Operations" },
          ].map((item, i) => (
            <div key={i} className="flex gap-6 relative">
              {i !== 3 && <div className="absolute left-5 top-12 bottom-[-32px] w-px bg-white/5"></div>}
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-accent font-bold shrink-0">
                {item.user[0]}
              </div>
              <div>
                <p className="text-sm font-bold text-white">{item.user} <span className="text-text-dim font-medium">{item.action}</span></p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-[10px] font-bold text-text-dim/40 uppercase tracking-widest">{item.time}</span>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/5 px-2 py-0.5 rounded border border-accent/10">{item.project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderCompliance = () => (
    <motion.div 
      key="compliance"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="portal-card p-10">
          <h3 className="font-headline text-2xl font-bold text-white mb-2">Consultant Performance</h3>
          <p className="text-sm text-text-dim mb-10">Service quality metrics across all contracted consultants.</p>
          
          <div className="space-y-8">
            {[
              { name: "EcoGuard Solutions", score: 92, status: "Top Performer" },
              { name: "TerraForm Consulting", score: 85, status: "Consistent" },
              { name: "GreenPath Logistics", score: 78, status: "Needs Review" },
              { name: "BioMetric Systems", score: 88, status: "Top Performer" },
            ].map((c, i) => (
              <div key={i} className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h5 className="font-bold text-white">{c.name}</h5>
                    <p className="text-[10px] text-accent uppercase font-bold tracking-widest">{c.status}</p>
                  </div>
                  <span className="text-xl font-bold text-white">{c.score}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: `${c.score}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="portal-card p-10 flex flex-col justify-center items-center text-center">
            <div className="w-24 h-24 rounded-full border-4 border-accent/20 flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 rounded-full border-4 border-accent border-t-transparent animate-spin-slow"></div>
                <span className="text-3xl font-bold text-white">96%</span>
            </div>
            <h4 className="font-headline text-2xl font-bold text-white mb-4">Overall Compliance Rating</h4>
            <p className="text-sm text-text-dim leading-relaxed max-w-xs mb-10">All systems are currently performing within the established regulatory boundaries for Q2.</p>
            <div className="grid grid-cols-2 gap-8 w-full border-t border-white/5 pt-10">
                <div>
                   <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest opacity-40">Audit Success</span>
                   <p className="text-xl font-bold text-white mt-1">24/24</p>
                </div>
                <div>
                   <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest opacity-40">On-Time SSR</span>
                   <p className="text-xl font-bold text-white mt-1">100%</p>
                </div>
            </div>
        </div>
      </div>
    </motion.div>
  );

  const renderInsight = () => (
    <motion.div 
      key="insight"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 portal-card p-10 h-full">
          <h3 className="font-headline text-2xl font-bold text-white mb-10">Aktivitas Internal Perusahaan</h3>
          <div className="h-64 flex items-end gap-4">
            {[45, 60, 85, 70, 95, 80, 100, 65, 85, 75, 90, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-accent/20 rounded-t-lg relative group transition-all hover:bg-accent/40">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className="w-full bg-accent rounded-t-lg absolute bottom-0"
                ></motion.div>
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 p-2 bg-bg-deep border border-accent/20 rounded opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold text-accent whitespace-nowrap">
                   Value: {h}%
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-12 gap-4 mt-8">
            {['J','F','M','A','M','J','J','A','S','O','N','D'].map(m => (
              <div key={m} className="text-center text-[10px] font-bold text-text-dim uppercase">{m}</div>
            ))}
          </div>
        </div>

        <div className="portal-card p-10 space-y-10">
          <h4 className="font-headline text-xl font-bold text-white">Insight Summary</h4>
          {[
            { label: "Operational Efficiency", val: "+14.2%", desc: "vs last quarter" },
            { label: "Resource Allocation", val: "Optimal", desc: "No bottlenecks found" },
            { label: "Team Velocity", val: "Top 5%", desc: "Global benchmark" },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5">
                <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{item.label}</span>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-xl font-bold text-white">{item.val}</p>
                    <span className="text-[11px] font-bold text-accent-light">{item.desc}</span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="flex min-h-screen bg-bg-deep text-text-main">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 sidebar-glass flex flex-col p-8 z-40">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center shrink-0">
            <Briefcase className="w-6 h-6 text-bg-deep" />
          </div>
          <div>
            <h1 className="font-headline text-lg font-bold leading-tight text-white tracking-tight uppercase">EDA Monitoring</h1>
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          {navItems.map((item) => (
            <button 
              key={item.label}
              onClick={() => setCurrentView(item.label)}
              className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 group text-left ${currentView === item.label ? 'bg-accent/10 border border-accent/20 text-accent' : 'hover:bg-white/[0.03] text-text-dim hover:text-white'}`}
            >
              <item.icon className={`w-5 h-5 ${currentView === item.label ? 'text-accent' : 'text-text-dim group-hover:text-white'}`} />
              <span className="font-sans text-sm font-bold tracking-tight">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4 min-w-0">
             <div className="w-10 h-10 rounded-full bg-white/5 border-2 border-white/10 flex items-center justify-center shrink-0">
                <UserCircle className="w-10 h-10 text-white/40" />
             </div>
             <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold truncate text-white leading-none mb-1">Admin SPV</span>
                <span className="text-[10px] uppercase font-bold text-text-dim tracking-widest opacity-60">Supervisor</span>
             </div>
          </div>
          <button onClick={onLogout} title="Logout" className="p-2.5 hover:bg-white/5 rounded-xl transition-all cursor-pointer text-text-dim hover:text-red-400 active:scale-90">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 flex flex-col min-w-0 min-h-screen p-8">
        {/* Top Header */}
        <header className="glass h-[80px] rounded-3xl px-10 flex justify-between items-center mb-10">
          <div className="flex items-center gap-6">
             <h2 className="font-headline text-2xl font-bold text-white tracking-tight">{currentView === 'Dashboard' ? 'Main Dashboard' : currentView}</h2>
             <div className="w-px h-6 bg-white/10 hidden md:block"></div>
             <p className="text-sm text-text-dim font-bold uppercase tracking-widest hidden md:block opacity-40">
                {currentView === 'Dashboard' ? 'Strategic Overview' : 'Operational Insight'}
             </p>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="relative hidden lg:block group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim/50 w-4 h-4 transition-colors group-focus-within:text-accent" />
                <input 
                  className="pl-11 pr-4 py-2.5 bg-white/[0.03] border border-white/5 rounded-2xl text-sm focus:ring-2 focus:ring-accent/40 outline-none w-64 transition-all placeholder:text-text-dim/40 text-white"
                  placeholder="Seach files & data..."
                />
             </div>
          </div>
        </header>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            {currentView === 'Dashboard' && renderDashboard()}
            {currentView === 'Worktracking' && renderWorktracking()}
            {currentView === 'Compliance' && renderCompliance()}
            {currentView === 'Insights' && renderInsight()}
            {currentView === 'Settings' && <div key="settings" className="portal-card p-10 font-headline text-white text-2xl font-bold">Admin Settings coming soon...</div>}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 pb-10">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-headline text-xl font-bold text-white tracking-tight">EDA Monitoring System</span>
            <p className="text-[10px] text-text-dim font-bold uppercase tracking-widest opacity-40">© 2024 PRECISION MONITORING SYSTEMS.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-3">
            {['Privacy Policy', 'Contact Support', 'Certifications', 'Sustainability'].map(link => (
              <a key={link} className="text-[11px] font-bold text-text-dim uppercase tracking-widest hover:text-accent transition-colors" href="#">{link}</a>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}
