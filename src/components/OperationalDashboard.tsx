import { useState } from "react";
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
  PenTool,
  UserCircle,
  ClipboardList,
  CheckCircle,
  BarChart3,
  Plus,
  Clock,
  MapPin,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "../constants";

interface OperationalDashboardProps {
  onLogout: () => void;
}

export default function OperationalDashboard({ onLogout }: OperationalDashboardProps) {
  const [currentView, setCurrentView] = useState('Overview');

  const navItems = [
    { icon: LayoutDashboard, label: "Overview" },
    { icon: PenTool, label: "Data Input" },
    { icon: Calendar, label: "Work Schedule" },
    { icon: ClipboardList, label: "QC Document" },
  ];

  const renderOverview = () => (
    <motion.div 
      key="overview"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      {/* Operational Hub Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Input Data Banner */}
        <motion.div whileHover={{ y: -4 }} className="md:col-span-2 portal-card p-10 flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden">
           <div className="flex-1 relative z-10">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8 border border-accent/20">
                <PenTool className="w-8 h-8" />
              </div>
              <h4 className="font-headline text-3xl font-bold text-white tracking-tight mb-4">Input Data Harian</h4>
              <p className="text-sm text-text-dim font-medium mb-10 leading-relaxed opacity-80 max-w-md">
                Laporkan temuan lapangan dan metrik lingkungan harian Anda langsung ke sistem pusat melalui spreadsheet terintegrasi.
              </p>
              <a className="btn-primary inline-flex items-center gap-3 px-10 py-4 text-sm" href="#">
                Buka Spreadsheet
                <ExternalLink className="w-4 h-4" />
              </a>
           </div>
           <div className="w-full lg:w-2/5 aspect-square bg-slate-950/40 rounded-3xl overflow-hidden relative z-10 border border-white/5">
              <img src={IMAGES.OPERATIONAL_APP} alt="App Interface" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-40 brightness-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
           </div>
        </motion.div>

        {/* Schedule Section */}
        <motion.div whileHover={{ y: -4 }} className="portal-card p-10 flex flex-col justify-between group overflow-hidden">
           <div>
             <div className="w-16 h-16 bg-accent-light/10 text-accent-light rounded-2xl flex items-center justify-center mb-8 border border-accent-light/20">
                <Calendar className="w-8 h-8" />
             </div>
             <h4 className="font-headline text-2xl font-bold text-white tracking-tight mb-4">Jadwal Lapangan</h4>
             <p className="text-sm text-text-dim font-medium leading-relaxed opacity-80">
                Periksa lokasi penugasan dan waktu inspeksi terbaru minggu ini. Tetap sinkron dengan tim lapangan.
             </p>
           </div>
           <div className="mt-12">
              <button 
                onClick={() => setCurrentView('Work Schedule (Jadwal Dinas)')}
                className="text-accent font-bold text-xs uppercase tracking-[0.2em] hover:text-accent-light flex items-center gap-3 transition-all cursor-pointer group"
              >
                View Full Schedule
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
           </div>
        </motion.div>
      </div>

      {/* Tertiary Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Guide Card */}
        <motion.div whileHover={{ y: -4 }} className="md:col-span-2 bg-accent p-9 rounded-2xl flex items-center justify-between shadow-2xl overflow-hidden group text-bg-deep">
           <div className="relative z-10">
              <h4 className="font-headline text-2xl font-bold text-bg-deep mb-3">Panduan Teknis</h4>
              <p className="text-sm font-medium opacity-80 mb-8 max-w-sm leading-relaxed">Protokol standar operasional untuk pengambilan sampel tanah dan air di area konsesi.</p>
              <button className="flex items-center gap-2.5 bg-bg-deep text-accent px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-bg-deep/80 transition-all shadow-xl shadow-black/20 active:scale-95">
                <FileText className="w-5 h-5" />
                Unduh Protokol
              </button>
           </div>
           <BookOpen className="w-32 h-32 text-bg-deep/10 group-hover:text-bg-deep/20 transition-colors pointer-events-none hidden md:block" />
        </motion.div>

        {/* Emergency Support */}
        <motion.div whileHover={{ y: -4 }} className="portal-card p-8 flex flex-col items-center text-center justify-center group">
           <div className="p-4 bg-white/[0.03] rounded-2xl mb-6 border border-white/5">
              <Headphones className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-500" />
           </div>
           <h5 className="font-headline font-bold text-white mb-2">Technical Support</h5>
           <p className="text-xs font-bold text-text-dim mb-8 uppercase tracking-widest opacity-60">Field Assistance Needed?</p>
           <button className="btn-primary w-full py-3.5 text-[10px]">
              Contact Support
           </button>
        </motion.div>

        {/* Weather Widget */}
        <motion.div whileHover={{ y: -4 }} className="portal-card p-8 flex flex-col justify-between overflow-hidden relative">
           <div className="flex justify-between items-start relative z-10">
              <div>
                <p className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em] mb-1">Local Weather</p>
                <h5 className="text-lg font-bold text-white tracking-tight">Jakarta, ID</h5>
              </div>
              <CloudRain className="w-12 h-12 text-accent-light group-hover:scale-110 transition-transform duration-500" />
           </div>
           <div className="mt-10 relative z-10">
              <p className="font-headline text-5xl font-bold text-white tracking-tighter">28°C</p>
              <p className="text-[10px] text-text-dim font-bold mt-5 uppercase tracking-[0.15em] opacity-60">Humidity: 74% • Wind: 12km/h</p>
           </div>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderDataInput = () => (
    <motion.div 
      key="data-input"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "Today's Submissions", val: "12", icon: ClipboardList, color: "text-accent" },
          { label: "Pending Sync", val: "03", icon: Clock, color: "text-amber-400" },
          { label: "Approval Rate", val: "98%", icon: CheckCircle, color: "text-emerald-400" },
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h3 className="font-headline text-2xl font-bold text-white">Daily Data Submission</h3>
            <p className="text-sm text-text-dim mt-1">Review and manage your daily field data entries.</p>
          </div>
          <button className="btn-primary flex items-center gap-2 px-8">
            <Plus className="w-4 h-4" />
            New Entry
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                {["Entry Name", "Location", "Time", "Status", "Actions"].map((h) => (
                  <th key={h} className="pb-6 text-[10px] font-bold text-text-dim uppercase tracking-widest">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              {[
                { name: "Daily Area Monitoring", loc: "Site A-12", time: "09:30 AM", status: "Synced", sColor: "bg-emerald-400" },
                { name: "Water Level Record", loc: "River Gate 04", time: "11:15 AM", status: "Pending", sColor: "bg-amber-400" },
                { name: "SOP Safety Checklist", loc: "Main Facility", time: "01:20 PM", status: "Synced", sColor: "bg-emerald-400" },
                { name: "Soil Sample Metadata", loc: "Sector 09", time: "03:45 PM", status: "Draft", sColor: "bg-text-dim" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 group">
                  <td className="py-6 pr-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-white">{row.name}</span>
                    </div>
                  </td>
                  <td className="py-6 text-text-dim">{row.loc}</td>
                  <td className="py-6 text-text-dim">{row.time}</td>
                  <td className="py-6">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full ${row.sColor}`}></div>
                      <span className="text-white/80">{row.status}</span>
                    </div>
                  </td>
                  <td className="py-6">
                    <button className="p-2 hover:bg-white/5 rounded-lg text-text-dim hover:text-white transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );

  const renderWorkSchedule = () => (
    <motion.div 
      key="work-schedule"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: "Active Shift", val: "08:00 - 17:00", icon: Clock },
          { label: "Location Today", val: "Sector Delta-9", icon: MapPin },
          { label: "Team Count", val: "04 Staff", icon: UserCircle },
          { label: "Urgent Tasks", val: "02 Pending", icon: AlertCircle },
        ].map((item, i) => (
          <div key={i} className="portal-card p-6 border-l-4 border-accent">
            <div className="flex items-center gap-4 mb-4">
              <item.icon className="w-5 h-5 text-accent opacity-50" />
              <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{item.label}</span>
            </div>
            <p className="text-xl font-bold text-white tracking-tight">{item.val}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 portal-card p-10">
          <h3 className="font-headline text-2xl font-bold text-white mb-2">Weekly Schedule</h3>
          <p className="text-sm text-text-dim mb-10">Your assigned locations and activities for this week.</p>
          
          <div className="space-y-4">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day, i) => (
              <div key={day} className={`flex items-center justify-between p-6 rounded-2xl border border-white/5 ${i === 0 ? 'bg-accent/5 border-accent/20' : 'bg-white/[0.02]'}`}>
                <div className="flex items-center gap-6">
                  <div className="w-12 text-center">
                    <span className="block text-[10px] font-bold text-text-dim uppercase">{day.slice(0, 3)}</span>
                    <span className={`text-xl font-bold ${i === 0 ? 'text-accent' : 'text-white'}`}>{12 + i}</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-white">Area Inspection & Sampling</h5>
                    <p className="text-xs text-text-dim">Sector C-04 • Team Bravo</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-white bg-white/5 py-1.5 px-3 rounded-lg border border-white/10 uppercase tracking-widest">
                    {i === 0 ? 'Ongoing' : 'Scheduled'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="portal-card p-8">
            <h4 className="font-headline text-xl font-bold text-white mb-6">Upcoming Team Shifts</h4>
            <div className="space-y-6">
              {[
                { name: "Alex Johnson", role: "Field Tech", time: "08:00 AM" },
                { name: "Sarah Chen", role: "Specialist", time: "08:00 AM" },
                { name: "Marcus Wise", role: "Supervisor", time: "10:30 AM" },
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-accent">
                      {p.name[0]}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{p.name}</p>
                      <p className="text-[10px] text-text-dim uppercase font-bold">{p.role}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-accent">{p.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderQCDocument = () => (
    <motion.div 
      key="qc-document"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="portal-card p-10 md:col-span-2">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="font-headline text-2xl font-bold text-white">QC Status Tracker</h3>
              <p className="text-sm text-text-dim mt-1">Validation progress for your recent document formatting.</p>
            </div>
            <div className="flex items-center gap-2 text-accent">
              <BarChart3 className="w-5 h-5" />
              <span className="text-lg font-bold font-headline">88%</span>
            </div>
          </div>

          <div className="space-y-10">
            {[
              { doc: "Environmental Baseline Report", progress: 95, status: "Final Review" },
              { doc: "Waste Management Plan v2", progress: 60, status: "Formatting" },
              { doc: "Sustainability Disclosure", progress: 30, status: "Draft" },
            ].map((d, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-sm font-bold">
                  <span className="text-white">{d.doc}</span>
                  <span className="text-text-dim">{d.status}</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${d.progress}%` }}
                    className="h-full bg-accent relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="portal-card p-8 bg-accent/5 border-accent/10">
          <h4 className="font-headline text-xl font-bold text-white mb-6">QC Checklist</h4>
          <div className="space-y-4">
            {[
              { task: "Standard Layout Applied", done: true },
              { task: "Metadata Tags Included", done: true },
              { task: "Resolution Check Complete", done: false },
              { task: "Reference Cross-check", done: false },
              { task: "Final PDF Conversion", done: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${item.done ? 'bg-accent border-accent text-bg-deep' : 'bg-transparent border-white/20 group-hover:border-accent/50'}`}>
                  {item.done && <CheckCircle className="w-3.5 h-3.5" />}
                </div>
                <span className={`text-sm font-medium ${item.done ? 'text-white' : 'text-text-dim group-hover:text-white/80'}`}>{item.task}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div whileHover={{ y: -4 }} className="portal-card p-10 flex gap-8 items-start">
          <div className="p-4 rounded-2xl bg-white/[0.03] text-accent border border-white/5 shrink-0">
            <BookOpen className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-headline text-xl font-bold text-white mb-3">Formatting Guidelines</h4>
            <p className="text-sm text-text-dim leading-relaxed mb-6">Access the latest corporate document formatting standards and style guides.</p>
            <button className="text-accent text-xs font-bold uppercase tracking-widest hover:text-accent-light flex items-center gap-2">
              Read Standards
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        <motion.div whileHover={{ y: -4 }} className="portal-card p-10 flex gap-8 items-start">
          <div className="p-4 rounded-2xl bg-white/[0.03] text-accent-light border border-white/5 shrink-0">
            <ExternalLink className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-headline text-xl font-bold text-white mb-3">Validation Portal</h4>
            <p className="text-sm text-text-dim leading-relaxed mb-6">Quickly run your documents through the automated validation checker before submission.</p>
            <button className="text-accent-light text-xs font-bold uppercase tracking-widest hover:text-white flex items-center gap-2">
              Open Portal
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="flex min-h-screen bg-bg-deep text-text-main">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 sidebar-glass flex flex-col p-8 z-40">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center shrink-0">
            <Leaf className="w-6 h-6 text-bg-deep" />
          </div>
          <div>
            <h1 className="font-headline text-lg font-bold leading-tight text-white tracking-tight uppercase">EDA Operations</h1>
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
          <div className="mt-auto">
             <button
               onClick={() => setCurrentView('System Settings')}
               className={`flex items-center gap-3 p-4 rounded-2xl transition-all duration-300 w-full text-left ${currentView === 'System Settings' ? 'bg-accent/10 border border-accent/20 text-accent' : 'text-text-dim hover:text-white hover:bg-white/[0.03]'}`}
             >
                <Settings className="w-5 h-5" />
                <span className="font-sans text-sm font-bold tracking-tight">System Settings</span>
             </button>
          </div>
        </nav>

        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4 min-w-0">
             <div className="w-10 h-10 rounded-full bg-accent/10 border-2 border-accent/20 flex items-center justify-center shrink-0">
                <UserCircle className="w-6 h-6 text-accent" />
             </div>
             <div className="flex flex-col min-w-0">
                <span className="text-sm font-bold truncate text-white leading-none mb-1">Field Staff</span>
                <span className="text-[10px] uppercase font-bold text-text-dim tracking-widest opacity-60">Ops Team</span>
             </div>
          </div>
          <button onClick={onLogout} title="Logout" className="p-2.5 hover:bg-white/5 rounded-xl transition-all cursor-pointer text-text-dim hover:text-red-400 active:scale-90">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 flex flex-col min-w-0 min-h-screen p-8">
        <header className="glass h-[80px] rounded-3xl px-10 flex justify-between items-center mb-10">
          <div className="flex items-center gap-6">
             <h2 className="font-headline text-2xl font-bold text-white tracking-tight">{currentView === 'Overview' ? 'Operations Hub' : currentView}</h2>
             <div className="w-px h-6 bg-white/10 hidden md:block"></div>
             <p className="text-sm text-text-dim font-bold uppercase tracking-widest hidden md:block opacity-40">
                {currentView === 'Overview' ? 'Field Data Entry' : 'Module View'}
             </p>
          </div>
          <div className="flex items-center gap-4">
             <div className="relative hidden md:block group">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-dim/50 w-4 h-4 transition-colors group-focus-within:text-accent" />
                <input 
                  className="pl-11 pr-4 py-2.5 bg-white/[0.03] border border-white/5 rounded-2xl text-sm focus:ring-2 focus:ring-accent/40 outline-none w-64 transition-all placeholder:text-text-dim/40 text-white"
                  placeholder="Seach reports & assets..."
                />
             </div>
          </div>
        </header>

        <section className="flex-1">
          <AnimatePresence mode="wait">
            {currentView === 'Overview' && renderOverview()}
            {currentView === 'Data Input' && renderDataInput()}
            {currentView === 'Work Schedule (Jadwal Dinas)' && renderWorkSchedule()}
            {currentView === 'Document Formatting (QC Document)' && renderQCDocument()}
            {currentView === 'System Settings' && <div key="settings" className="portal-card p-10 font-headline text-white text-2xl font-bold">System Settings coming soon...</div>}
          </AnimatePresence>
        </section>

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
