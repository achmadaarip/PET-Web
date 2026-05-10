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
  AlertCircle,
  X,
  CheckSquare,
  Info,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "../constants";

interface OperationalDashboardProps {
  onLogout: () => void;
}

export default function OperationalDashboard({ onLogout }: OperationalDashboardProps) {
  const [currentView, setCurrentView] = useState('Overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<any>(null);

  const navItems = [
    { icon: LayoutDashboard, label: "Overview" },
    { icon: TrendingUp, label: "Progress" },
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
      {/* Section 1: Hero Card & Schedule */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Overall Progress Hero Card */}
        <motion.div whileHover={{ y: -4 }} className="md:col-span-2 portal-card p-10 flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden group">
           <div className="flex-1 relative z-10">
              <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-8 border border-accent/20 shadow-lg shadow-accent/10">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h4 className="font-headline text-3xl font-bold text-white tracking-tight mb-4">Overall Progress Pekerjaan</h4>
              <p className="text-sm text-text-dim font-medium mb-10 leading-relaxed opacity-80 max-w-md">
                Ringkasan akumulasi seluruh progress pekerjaan teknis dan administratif periode berjalan.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                   <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest block mb-1">Active Documents</span>
                   <p className="text-2xl font-bold text-white">42 <span className="text-xs text-text-dim">Files</span></p>
                </div>
                <div>
                   <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest block mb-1">Completed Tasks</span>
                   <p className="text-2xl font-bold text-white">128 <span className="text-xs text-accent-light">+12</span></p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                   <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Weekly Productivity</span>
                   <span className="text-sm font-bold text-white">68%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                   <motion.div 
                     initial={{ width: 0 }}
                     animate={{ width: "68%" }}
                     className="h-full bg-accent relative shadow-[0_0_15px_rgba(var(--accent),0.3)]"
                   >
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                   </motion.div>
                </div>
              </div>
           </div>
           
           <div className="w-full lg:w-2/5 portal-card bg-slate-950/40 p-8 flex flex-col justify-between relative z-10 border border-white/5 h-full min-h-[320px]">
              <div className="flex justify-between items-start">
                 <h5 className="text-[10px] font-bold text-text-dim uppercase tracking-widest">Productivity Trend</h5>
                 <TrendingUp className="w-4 h-4 text-emerald-400" />
              </div>
              {/* Smooth Line Chart with Glow */}
              <div className="flex-1 relative my-8 min-h-[120px] group/chart">
                <svg viewBox="0 0 400 120" className="w-full h-full overflow-visible">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(var(--accent), 0.3)" />
                      <stop offset="100%" stopColor="rgba(var(--accent), 0)" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Area */}
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M 0,120 L 0,80 C 40,70 80,40 120,50 S 160,90 200,60 S 240,20 280,30 S 320,80 360,40 L 400,30 L 400,120 Z"
                    fill="url(#chartGradient)"
                  />
                  
                  {/* Line */}
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    d="M 0,80 C 40,70 80,40 120,50 S 160,90 200,60 S 240,20 280,30 S 320,80 360,40 L 400,30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-accent"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(var(--accent), 0.5))' }}
                  />
                  
                  {/* Data Points */}
                  {[
                    { x: 0, y: 80 }, { x: 120, y: 50 }, { x: 200, y: 60 }, 
                    { x: 280, y: 30 }, { x: 360, y: 40 }, { x: 400, y: 30 }
                  ].map((p, i) => (
                    <motion.circle
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + i * 0.1 }}
                      cx={p.x}
                      cy={p.y}
                      r="4"
                      className="fill-bg-deep stroke-accent stroke-2"
                    />
                  ))}
                </svg>
              </div>
              <div className="flex justify-between text-[8px] font-bold text-text-dim/60 uppercase">
                 <span>Mon</span>
                 <span>Sun</span>
              </div>
              <div className="mt-8 pt-8 border-t border-white/5">
                 <p className="text-[10px] font-bold text-white mb-2">Recent activity summary</p>
                 <div className="flex items-center gap-2 text-[9px] text-text-dim">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                    <span>12 Docs validated in Sector A</span>
                 </div>
              </div>
           </div>
           <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none"></div>
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
                onClick={() => setCurrentView('Work Schedule')}
                className="text-accent font-bold text-xs uppercase tracking-[0.2em] hover:text-accent-light flex items-center gap-3 transition-all cursor-pointer group"
              >
                View Full Schedule
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
           </div>
        </motion.div>
      </div>

      {/* NEW Middle Section: Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Performance Analytics */}
        <motion.div whileHover={{ y: -4 }} className="portal-card p-8 flex flex-col h-full group">
          <div className="flex justify-between items-center mb-8">
            <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest">Performance Analytics</span>
            <div className="p-2 bg-accent/5 rounded-lg border border-accent/10">
               <TrendingUp className="w-3 h-3 text-accent" />
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center py-4">
             {/* Simple Circular Progress Chart */}
             <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90">
                   <circle cx="64" cy="64" r="56" className="fill-none stroke-white/5 stroke-[8]" />
                   <motion.circle 
                     cx="64" cy="64" r="56" 
                     className="fill-none stroke-accent stroke-[8]"
                     strokeDasharray="351.8"
                     initial={{ strokeDashoffset: 351.8 }}
                     animate={{ strokeDashoffset: 351.8 * (1 - 0.74) }}
                     transition={{ duration: 1.5, ease: "easeOut" }}
                   />
                </svg>
                <div className="absolute text-center">
                   <p className="text-2xl font-bold text-white">74%</p>
                   <p className="text-[8px] font-bold text-text-dim uppercase">Rating</p>
                </div>
             </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
             <div>
                <p className="text-[9px] font-bold text-text-dim uppercase tracking-wider mb-1">Efficiency</p>
                <p className="text-sm font-bold text-accent">+12.4%</p>
             </div>
             <div>
                <p className="text-[9px] font-bold text-text-dim uppercase tracking-wider mb-1">SLA Met</p>
                <p className="text-sm font-bold text-white">98.2%</p>
             </div>
          </div>
        </motion.div>

        {/* Workload Distribution */}
        <motion.div whileHover={{ y: -4 }} className="portal-card p-8 flex flex-col h-full group">
           <div className="flex justify-between items-center mb-8">
            <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest">Workload Distribution</span>
            <div className="p-2 bg-accent-light/5 rounded-lg border border-accent-light/10">
               <Layers className="w-3 h-3 text-accent-light" />
            </div>
          </div>
          <div className="flex-1 space-y-6">
             {[
               { label: "QC Document", val: 45, color: "bg-accent" },
               { label: "Data Progress", val: 30, color: "bg-accent-light" },
               { label: "Field Survey", val: 25, color: "bg-white/10" }
             ].map((item, i) => (
               <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[9px] font-bold uppercase tracking-widest text-text-dim">
                     <span>{item.label}</span>
                     <span className="text-white">{item.val}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: `${item.val}%` }}
                       className={`h-full ${item.color}`}
                     ></motion.div>
                  </div>
               </div>
             ))}
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
             <span className="text-[9px] font-bold text-text-dim uppercase">Total Workload</span>
             <span className="text-xs font-bold text-white uppercase tracking-widest px-2 py-0.5 rounded bg-accent/10 border border-accent/20">Optimal</span>
          </div>
        </motion.div>

        {/* Weekly Completion Stats */}
        <motion.div whileHover={{ y: -4 }} className="portal-card p-8 flex flex-col h-full group">
           <div className="flex justify-between items-center mb-8">
            <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest">Weekly Completion</span>
            <div className="p-2 bg-emerald-400/5 rounded-lg border border-emerald-400/10">
               <CheckCircle className="w-3 h-3 text-emerald-400" />
            </div>
          </div>
          <div className="flex-1 flex items-end gap-3 justify-between pb-2 px-2">
             {[50, 40, 70, 45, 90].map((h, i) => (
               <div key={i} className="flex-1 h-full flex flex-col justify-end items-center gap-3">
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    className="w-full bg-emerald-400/40 rounded-t-lg group-hover:bg-emerald-400 transition-colors"
                  ></motion.div>
                  <span className="text-[8px] font-bold text-text-dim uppercase">{['M','T','W','T','F'][i]}</span>
               </div>
             ))}
          </div>
          <div className="mt-8 pt-8 border-t border-white/5">
             <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-400/10 rounded border border-emerald-400/20">
                   <Plus className="w-3 h-3 text-emerald-400" />
                </div>
                <div>
                   <p className="text-[9px] font-bold text-text-dim uppercase mb-0.5">Peak Productivity</p>
                   <p className="text-xs font-bold text-white">Friday <span className="text-text-dim font-medium text-[10px] ml-1">90% Completion Rate</span></p>
                </div>
             </div>
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

  const renderProgress = () => (
    <motion.div 
      key="progress"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-12"
    >
      {/* Section 1: Document Progress Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Dokumen Proper */}
        <motion.div whileHover={{ y: -4 }} className="portal-card p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none"></div>
          <div className="flex justify-between items-start mb-10">
            <div>
              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-2 block">Document Category</span>
              <h4 className="font-headline text-3xl font-bold text-white tracking-tight">Dokumen Proper</h4>
            </div>
            <div className="p-4 bg-accent/10 border border-accent/20 rounded-2xl text-accent">
              <Layers className="w-6 h-6" />
            </div>
          </div>
          
          <div className="flex items-end gap-6 mb-8">
            <div className="font-headline text-6xl font-bold text-white tracking-tighter">72%</div>
            <div className="mb-2">
              <span className="text-xl font-bold text-white/80">45 <span className="text-text-dim text-sm">/ 62</span></span>
              <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest mt-1">Files Completed</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "72%" }}
                className="h-full bg-accent relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
              </motion.div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-text-dim">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Sync Active</span>
              </div>
              <span className="text-accent-light">Recent activity: 2h ago</span>
            </div>
          </div>
        </motion.div>

        {/* Dokumen Non-Proper */}
        <motion.div whileHover={{ y: -4 }} className="portal-card p-10 relative overflow-hidden group border-amber-500/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none"></div>
          <div className="flex justify-between items-start mb-10">
            <div>
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-2 block">Priority Category</span>
              <h4 className="font-headline text-3xl font-bold text-white tracking-tight">Dokumen Non-Proper</h4>
            </div>
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-500">
              <CheckSquare className="w-6 h-6" />
            </div>
          </div>
          
          <div className="flex items-end gap-6 mb-8">
            <div className="font-headline text-6xl font-bold text-white tracking-tighter text-shadow-glow">48%</div>
            <div className="mb-2">
              <span className="text-xl font-bold text-white/80">14 <span className="text-text-dim text-sm">/ 29</span></span>
              <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest mt-1">Files Verified</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "48%" }}
                className="h-full bg-amber-500 relative shadow-[0_0_15px_rgba(245,158,11,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
              </motion.div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-text-dim">
              <div className="flex items-center gap-2 text-amber-400">
                <Clock className="w-2.5 h-2.5" />
                <span>Urgent Review</span>
              </div>
              <span className="text-amber-200/50">Recent activity: 5h ago</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section 2: Overall Summary */}
      <div className="space-y-8">
        <h3 className="font-headline text-2xl font-bold text-white tracking-tight flex items-center gap-4">
          Overall Summary
          <div className="h-px bg-white/5 flex-1"></div>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Overall Progress", val: "64.5%", icon: TrendingUp, trend: "+4.2%", color: "text-accent" },
            { label: "Total Beban Teknis", val: "148h", icon: BarChart3, trend: "Stable", color: "text-blue-400" },
            { label: "Total Dokumen Diampu", val: "91", icon: Layers, trend: "+5 new", color: "text-emerald-400" },
            { label: "Total Dokumen Selesai", val: "59", icon: CheckCircle, trend: "65% Rate", color: "text-purple-400" },
          ].map((stat, i) => (
            <div key={i} className="portal-card p-8 group">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl bg-white/[0.03] border border-white/5 ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded bg-white/5 border border-white/10 uppercase tracking-widest ${stat.trend.includes('+') ? 'text-emerald-400' : 'text-text-dim'}`}>
                  {stat.trend}
                </span>
              </div>
              <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-white tracking-tight">{stat.val}</p>
              <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className={`h-full opacity-40 ${stat.color.replace('text', 'bg')}`} style={{ width: '60%' }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Company Data Table */}
      <div className="portal-card p-10 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h3 className="font-headline text-2xl font-bold text-white">Company Progress Hub</h3>
            <p className="text-sm text-text-dim mt-1">Real-time monitoring of consultant data synchronization.</p>
          </div>
          <div className="flex gap-4">
             <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">34 On Track</span>
             </div>
             <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">12 Delayed</span>
             </div>
          </div>
        </div>

        <div className="overflow-x-auto -mx-10 px-10">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="py-6 px-4 text-[10px] font-bold text-text-dim uppercase tracking-widest first:rounded-tl-2xl">Nama Perusahaan</th>
                <th className="py-6 px-4 text-[10px] font-bold text-text-dim uppercase tracking-widest">% Data Diterima</th>
                <th className="py-6 px-4 text-[10px] font-bold text-text-dim uppercase tracking-widest">% Progress</th>
                <th className="py-6 px-4 text-[10px] font-bold text-text-dim uppercase tracking-widest">Status</th>
                <th className="py-6 px-4 text-[10px] font-bold text-text-dim uppercase tracking-widest text-right last:rounded-tr-2xl">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              {[
                { name: "EcoGuard Solutions", received: 95, progress: 88, status: "Active" },
                { name: "TerraForm Consulting", received: 100, progress: 45, status: "Review" },
                { name: "GreenPath Logistics", received: 60, progress: 20, status: "Draft" },
                { name: "BioMetric Systems", received: 85, progress: 92, status: "Active" },
                { name: "AquaPure Environment", received: 30, progress: 15, status: "Delayed" },
                { name: "Solaris Industrial", received: 90, progress: 75, status: "Active" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-all group">
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                        {row.name[0]}
                      </div>
                      <span className="text-white font-bold">{row.name}</span>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-3">
                      <span className="text-text-dim w-10">{row.received}%</span>
                      <div className="flex-1 h-1 bg-white/5 rounded-full max-w-[60px] overflow-hidden">
                        <div className="h-full bg-accent-light" style={{ width: `${row.received}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-3">
                      <span className="text-white w-10">{row.progress}%</span>
                      <div className="flex-1 h-1 bg-white/5 rounded-full max-w-[60px] overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: `${row.progress}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                      row.status === 'Active' ? 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400' :
                      row.status === 'Review' ? 'bg-amber-400/10 border-amber-400/20 text-amber-400' :
                      row.status === 'Delayed' ? 'bg-red-400/10 border-red-400/20 text-red-400' :
                      'bg-white/5 border-white/10 text-text-dim'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-right">
                    <button 
                      onClick={() => {
                        setSelectedCompany(row);
                        setIsModalOpen(true);
                      }}
                      className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-xl text-accent text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-bg-deep transition-all active:scale-95"
                    >
                      View Detail
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-bg-deep/80 backdrop-blur-md"
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl glass shadow-2xl rounded-[40px] overflow-hidden flex flex-col max-h-[85vh] border border-white/10"
            >
              {/* Modal Header */}
              <div className="p-8 pb-4 flex justify-between items-start">
                <div className="flex gap-6 items-center">
                  <div className="w-16 h-16 rounded-3xl bg-accent flex items-center justify-center text-bg-deep">
                    <BarChart3 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{selectedCompany?.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Detail Checklist</span>
                      <div className="w-1 h-1 rounded-full bg-white/20"></div>
                      <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest">ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-3 bg-white/5 border border-white/10 rounded-2xl text-text-dim hover:text-white transition-all hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest mb-3 block">Data Transmission</span>
                    <div className="flex items-end gap-3 font-headline">
                      <span className="text-3xl font-bold text-white">{selectedCompany?.received}%</span>
                      <span className="text-sm font-bold text-accent-light mb-1.5 uppercase">Syncing</span>
                    </div>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5">
                    <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest mb-3 block">Validation Status</span>
                    <div className="flex items-end gap-3 font-headline">
                      <span className={`text-3xl font-bold ${selectedCompany?.progress > 80 ? 'text-emerald-400' : 'text-amber-400'}`}>{selectedCompany?.progress}%</span>
                      <span className="text-sm font-bold text-text-dim mb-1.5 uppercase">Passed</span>
                    </div>
                  </div>
                </div>

                {/* Checklist Form */}
                <div className="space-y-6">
                  <h4 className="font-headline text-lg font-bold text-white flex items-center gap-3">
                    <CheckSquare className="w-5 h-5 text-accent" />
                    Validation Checklist
                  </h4>
                  <div className="space-y-4">
                    {[
                      { task: "Struktur Dokumen Sesuai Format", status: "Verified" },
                      { task: "Legalitas Perusahaan Terlampir", status: "Verified" },
                      { task: "Metadata Koordinat Lapangan", status: "Pending" },
                      { task: "Hasil Uji Lab Terakreditasi", status: "In Reviews" },
                      { task: "Tanda Tangan Elektronik Pengampu", status: "Awaiting" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-white/10 transition-all">
                        <div className="flex items-center gap-4">
                          <div className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${item.status === 'Verified' ? 'bg-accent/20 border-accent text-accent' : 'border-white/10 text-white/10'}`}>
                            {item.status === 'Verified' && <CheckCircle className="w-3.5 h-3.5" />}
                          </div>
                          <span className="text-sm font-medium text-white/80">{item.task}</span>
                        </div>
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${
                          item.status === 'Verified' ? 'text-accent' : 
                          item.status === 'Pending' ? 'text-amber-400' : 'text-text-dim'
                        }`}>{item.status}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notes Section */}
                <div className="space-y-4">
                  <h4 className="font-headline text-lg font-bold text-white flex items-center gap-3">
                    <Info className="w-5 h-5 text-accent" />
                    Operational Notes
                  </h4>
                  <textarea 
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-sm text-white/70 focus:ring-2 focus:ring-accent/40 outline-none transition-all placeholder:text-text-dim/30 min-h-[120px]"
                    placeholder="Add validation notes or internal feedback here..."
                    defaultValue="Data koordinat masih perlu divalidasi ulang dengan tim SIG. Dokumen legalitas sudah lengkap dan sesuai dengan standar terbaru."
                  ></textarea>
                </div>

                {/* Status Indicator */}
                <div className="p-6 rounded-3xl bg-accent-light/5 border border-accent-light/10 flex items-center gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-accent-light/10 flex items-center justify-center text-accent-light">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                       <p className="text-sm font-bold text-white">Verification Deadline</p>
                       <p className="text-xs text-text-dim mt-1">Sistem akan mengunci entry ini dalam <span className="text-accent-light font-bold">48 jam</span></p>
                    </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-8 pt-4 bg-white/[0.02] border-t border-white/5 flex gap-4">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  Close Detail
                </button>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 py-4 bg-accent rounded-2xl text-bg-deep font-bold text-xs uppercase tracking-widest hover:bg-accent-light transition-all shadow-lg shadow-accent/20"
                >
                  Save Changes
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
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
      className="space-y-12"
    >
      {/* Section 1: QC Progress Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* QC Proper */}
        <motion.div whileHover={{ y: -4 }} className="portal-card p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none"></div>
          <div className="flex justify-between items-start mb-10">
            <div>
              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-2 block">Quality Control</span>
              <h4 className="font-headline text-3xl font-bold text-white tracking-tight">QC Proper</h4>
            </div>
            <div className="p-4 bg-accent/10 border border-accent/20 rounded-2xl text-accent">
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
          
          <div className="flex items-end gap-6 mb-8">
            <div className="font-headline text-6xl font-bold text-white tracking-tighter">84%</div>
            <div className="mb-2">
              <span className="text-xl font-bold text-white/80">52 <span className="text-text-dim text-sm">/ 62</span></span>
              <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest mt-1">QC Passed</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "84%" }}
                className="h-full bg-accent relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
              </motion.div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-text-dim">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Validator Online</span>
              </div>
              <span className="text-accent-light">Recent QC: 45m ago</span>
            </div>
          </div>
        </motion.div>

        {/* QC Non-Proper */}
        <motion.div whileHover={{ y: -4 }} className="portal-card p-10 relative overflow-hidden group border-amber-500/20">
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none"></div>
          <div className="flex justify-between items-start mb-10">
            <div>
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-2 block">Quality Control</span>
              <h4 className="font-headline text-3xl font-bold text-white tracking-tight">QC Non-Proper</h4>
            </div>
            <div className="p-4 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-500">
              <ClipboardList className="w-6 h-6" />
            </div>
          </div>
          
          <div className="flex items-end gap-6 mb-8">
            <div className="font-headline text-6xl font-bold text-white tracking-tighter">35%</div>
            <div className="mb-2">
              <span className="text-xl font-bold text-white/80">10 <span className="text-text-dim text-sm">/ 29</span></span>
              <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest mt-1">QC Passed</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "35%" }}
                className="h-full bg-amber-500 relative shadow-[0_0_15px_rgba(245,158,11,0.3)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
              </motion.div>
            </div>
            <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-text-dim">
              <div className="flex items-center gap-2 text-amber-400">
                <AlertCircle className="w-2.5 h-2.5" />
                <span>Pending Review</span>
              </div>
              <span className="text-amber-200/50">Recent QC: 3h ago</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Section 2: Company Progress Table */}
      <div className="portal-card p-10 overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h3 className="font-headline text-2xl font-bold text-white text-shadow-sm">QC Company Progress</h3>
            <p className="text-sm text-text-dim mt-1">Reviewing document formatting and technical compliance.</p>
          </div>
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-accent-light"></div>
             <span className="text-[10px] font-bold text-white uppercase tracking-widest">Formatting Portal Active</span>
          </div>
        </div>

        <div className="overflow-x-auto -mx-10 px-10">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="py-6 px-4 text-[10px] font-bold text-text-dim uppercase tracking-widest first:rounded-tl-2xl">Nama Perusahaan</th>
                <th className="py-6 px-4 text-[10px] font-bold text-text-dim uppercase tracking-widest">% Progress</th>
                <th className="py-6 px-4 text-[10px] font-bold text-text-dim uppercase tracking-widest">Status</th>
                <th className="py-6 px-4 text-[10px] font-bold text-text-dim uppercase tracking-widest text-right last:rounded-tr-2xl">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              {[
                { name: "EcoGuard Solutions", progress: 92, status: "Verified" },
                { name: "TerraForm Consulting", progress: 48, status: "In Review" },
                { name: "GreenPath Logistics", progress: 15, status: "Revision" },
                { name: "BioMetric Systems", progress: 85, status: "Verified" },
                { name: "AquaPure Environment", progress: 60, status: "In Review" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-all group">
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                        {row.name[0]}
                      </div>
                      <span className="text-white font-bold">{row.name}</span>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-3">
                      <span className="text-white w-10">{row.progress}%</span>
                      <div className="flex-1 h-1 bg-white/5 rounded-full max-w-[100px] overflow-hidden">
                        <div className="h-full bg-accent" style={{ width: `${row.progress}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                      row.status === 'Verified' ? 'bg-emerald-400/10 border-emerald-400/20 text-emerald-400' :
                      row.status === 'In Review' ? 'bg-amber-400/10 border-amber-400/20 text-amber-400' :
                      'bg-red-400/10 border-red-400/20 text-red-400'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-6 px-4 text-right">
                    <button 
                      onClick={() => {
                        setSelectedCompany({...row, received: row.progress + 5}); // Dummy received data for modal
                        setIsModalOpen(true);
                      }}
                      className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-xl text-accent text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:text-bg-deep transition-all active:scale-95"
                    >
                      QC Checklist
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3: Guidelines & Portal (Existing) */}
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
            {currentView === 'Progress' && renderProgress()}
            {currentView === 'Work Schedule' && renderWorkSchedule()}
            {currentView === 'QC Document' && renderQCDocument()}
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
