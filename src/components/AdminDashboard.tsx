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
  CheckCircle,
  Map as MapIcon,
  Globe,
  Navigation,
  Layers,
  ArrowUpRight,
  ChevronDown,
  Filter,
  Calendar,
  AlertTriangle,
  Users,
  Target,
  Clock3,
  Percent,
  Menu,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { IMAGES } from "../constants";

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [currentView, setCurrentView] = useState('Dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [worktrackingSort, setWorktrackingSort] = useState<'Progress' | 'Workload'>('Progress');
  const [selectedCompany, setSelectedCompany] = useState<string>('All Companies');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard" },
    { icon: Briefcase, label: "Worktracking" },
    { icon: ShieldCheck, label: "KPI Monitoring" },
    { icon: TrendingUp, label: "Workload" },
    { icon: Settings, label: "Settings" },
  ];

  const reports = [
    {
      title: "Worktracking",
      desc: "Monitor pekerjaan harian dan progres aktivitas tim EDA secara real-time.",
      img: IMAGES.REPORT_IMPACT,
      link: "https://docs.google.com/spreadsheets/d/1KQ5M9SSq4xG7cpP8M9ZtLH9Xt8Z0hnSZBpnxQT2oBDM/edit?gid=1455439243#gid=1455439243",
      icon: Briefcase
    },
    {
      title: "QC Monitoring",
      desc: "Pantau status quality control dokumen dan proses validasi data Dokumen Proper.",
      img: IMAGES.REPORT_COMPLIANCE,
      link: "https://docs.google.com/spreadsheets/d/1yLXEZgLKp68uH8wCpKu8oGA_Y-xFlC2Gs_z4mVVRa4/edit?gid=1275939715#gid=1275939715",
      icon: ShieldCheck
    },
    {
      title: "KPI Monitoring",
      desc: "Analisis performa KPI dan pencapaian target operasional EDA.",
      img: IMAGES.REPORT_TEAM,
      link: "https://docs.google.com/spreadsheets/d/1CPm4d0KtmzL7dW9WBuZv8uQZ2s-c863imm3ZkaFeM70/edit?gid=0#gid=0",
      icon: Target
    },
    {
      title: "Plotting Beban",
      desc: "Kelola distribusi workload dan pemetaan beban kerja tim EDA.",
      img: IMAGES.REPORT_STRATEGIC,
      link: "https://docs.google.com/spreadsheets/d/1JpfCkYpxHAZtVT348vFKSwhgUDsGCmWxy4YX56mfQps/edit?gid=324883841#gid=324883841",
      icon: Layers
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {/* Impact Score */}
        <motion.div whileHover={{ y: -4 }} className="portal-card p-6 flex flex-col justify-between group h-full">
           <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em]">Impact Score</span>
              <div className="p-2.5 bg-accent/10 text-accent rounded-xl border border-accent/20">
                <Activity className="w-5 h-5" />
              </div>
           </div>
           <div className="mt-8">
              <div className="font-headline text-5xl font-bold text-white tracking-tighter">94.2</div>
              <div className="flex items-center gap-2 text-accent-light text-[10px] font-bold mt-4 uppercase tracking-widest">
                <TrendingUp className="w-4 h-4" />
                <span>+2.4% last month</span>
              </div>
           </div>
        </motion.div>

        {/* Compliance */}
        <motion.div whileHover={{ y: -4 }} className="portal-card p-6 flex flex-col justify-between group h-full">
           <div className="flex justify-between items-start">
              <span className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em]">Compliance</span>
              <div className="p-2.5 bg-accent-light/10 text-accent-light rounded-xl border border-accent-light/20">
                <CheckCircle2 className="w-5 h-5" />
              </div>
           </div>
           <div className="mt-8">
              <div className="font-headline text-5xl font-bold text-white tracking-tighter">100%</div>
              <p className="text-[10px] font-bold text-text-dim mt-4 uppercase tracking-widest opacity-40">All Sites Compliant</p>
           </div>
        </motion.div>

        {/* Active Projects Banner */}
        <motion.div whileHover={{ y: -4 }} className="portal-card bg-accent p-8 md:col-span-2 relative overflow-hidden flex flex-col justify-between group">
           <div className="flex justify-between items-start relative z-10">
              <div>
                <h3 className="font-headline text-2xl font-bold text-bg-deep tracking-tight">Active Projects</h3>
                <p className="text-bg-deep/60 text-sm font-medium mt-1">Quarterly field operations</p>
              </div>
              <Activity className="w-12 h-12 text-bg-deep/20 group-hover:text-bg-deep/40 transition-all duration-500" />
           </div>
           <div className="flex gap-12 mt-10 relative z-10">
              {[
                { label: "Running", val: 28 },
                { label: "Review", val: "04", border: true },
                { label: "Done", val: 12, border: true }
              ].map(stat => (
                <div key={stat.label} className={stat.border ? 'border-l border-bg-deep/10 pl-12' : ''}>
                  <span className="block text-[10px] font-bold text-bg-deep uppercase tracking-[0.2em] opacity-50">{stat.label}</span>
                  <span className="text-4xl font-bold mt-2 block tracking-tight text-bg-deep">{stat.val}</span>
                </div>
              ))}
           </div>
           <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        </motion.div>
      </div>

      {/* Section 2: 4-Card Navigation Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {reports.map((report, idx) => (
          <motion.a 
            key={report.title}
            whileHover={{ y: -6, scale: 1.02 }}
            href={report.link}
            target="_blank"
            rel="noopener noreferrer"
            className="portal-card p-6 flex flex-col group relative overflow-hidden h-full border-white/5 hover:border-accent/30 selection-none"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none opacity-[0.03] ${
              idx === 0 ? 'bg-accent' : idx === 1 ? 'bg-emerald-400' : idx === 2 ? 'bg-amber-400' : 'bg-red-400'
            }`}></div>
            
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl border transition-all ${
                idx === 0 ? 'bg-accent/10 text-accent border-accent/20 group-hover:bg-accent group-hover:text-bg-deep' : 
                idx === 1 ? 'bg-emerald-400/10 text-emerald-400 border-emerald-400/20 group-hover:bg-emerald-400 group-hover:text-bg-deep' : 
                idx === 2 ? 'bg-amber-400/10 text-amber-400 border-amber-400/20 group-hover:bg-amber-400 group-hover:text-bg-deep' : 
                'bg-red-400/10 text-red-400 border-red-400/20 group-hover:bg-red-400 group-hover:text-bg-deep'
              }`}>
                <report.icon className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-text-dim group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>

            <h3 className="font-headline text-lg font-bold text-white mb-2 leading-tight tracking-tight group-hover:text-accent transition-colors">{report.title}</h3>
            <p className="text-[11px] text-text-dim leading-relaxed font-medium opacity-80 mb-4">{report.desc}</p>
            
            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[9px] font-bold text-text-dim/60 uppercase tracking-widest">Analytics Hub</span>
              <div className="flex items-center gap-1">
                 {[1,2,3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-accent/40 transition-colors"></div>)}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Section 3: Supporting Analytics & Project Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Project Analytics Relocated */}
         <motion.div whileHover={{ y: -4 }} className="portal-card p-10 flex flex-col group relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-light/5 rounded-bl-full pointer-events-none"></div>
            <div className="flex justify-between items-start mb-6">
               <div className="p-3 bg-accent-light/10 text-accent-light rounded-2xl border border-accent-light/20 relative z-10">
                 <BarChart3 className="w-6 h-6" />
               </div>
               <div className="text-right relative z-10">
                  <p className="text-[10px] font-bold text-accent-light uppercase tracking-widest">Global Analytics</p>
                  <p className="text-sm font-bold text-white mt-1">KPI Index: 91.2%</p>
               </div>
            </div>
            <h3 className="font-headline text-2xl font-bold text-white mb-6 tracking-tight">Project Analytics</h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center group-hover:bg-white/10 transition-colors">
                  <p className="text-3xl font-bold text-white">12</p>
                  <p className="text-[9px] font-bold text-text-dim uppercase tracking-widest mt-1">Active Phases</p>
               </div>
               <div className="p-4 bg-white/5 rounded-2xl border border-white/5 text-center group-hover:bg-white/10 transition-colors">
                  <p className="text-3xl font-bold text-accent">94</p>
                  <p className="text-[9px] font-bold text-text-dim uppercase tracking-widest mt-1">Hub Score</p>
               </div>
            </div>
            
            <div className="space-y-4 flex-1">
               {[
                  { label: "Milestone Accuracy", val: 88, color: "bg-accent" },
                  { label: "Effort Distribution", val: 94, color: "bg-accent-light" }
               ].map(p => (
                  <div key={p.label}>
                     <div className="flex justify-between text-[10px] font-bold text-text-dim uppercase tracking-widest mb-2">
                        <span>{p.label}</span>
                        <span className="text-white">{p.val}%</span>
                     </div>
                     <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <div className={`h-full ${p.color}`} style={{ width: `${p.val}%` }}></div>
                     </div>
                  </div>
               ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
               <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Updated 1h ago</span>
               <button className="text-[10px] font-bold text-accent hover:text-white uppercase tracking-widest transition-colors">Deep Analysis</button>
            </div>
         </motion.div>

         {/* Project Overview / Distribution */}
         <div className="lg:col-span-2 portal-card p-10 relative overflow-hidden group">
            <div className="flex justify-between items-start mb-8">
               <div>
                  <h3 className="font-headline text-2xl font-bold text-white tracking-tight">Operational Distribution</h3>
                  <p className="text-sm text-text-dim mt-1">Resource allocation by sector cluster.</p>
               </div>
               <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Globe className="w-6 h-6 text-accent" />
               </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {[
                 { sector: "Sector Alpha", load: 84, color: "bg-accent" },
                 { sector: "Sector Bravo", load: 62, color: "bg-accent-light" },
                 { sector: "Sector Charlie", load: 91, color: "bg-red-400" },
                 { sector: "Sector Delta", load: 45, color: "bg-emerald-400" },
               ].map((s, i) => (
                 <div key={i} className="flex flex-col items-center">
                    <div className="relative w-full aspect-square flex items-center justify-center mb-4">
                       <svg className="w-full h-full -rotate-90">
                          <circle cx="50%" cy="50%" r="45%" className="fill-none stroke-white/5 stroke-[4]" />
                          <circle cx="50%" cy="50%" r="45%" className={`fill-none stroke-[6] ${s.color.replace('bg', 'stroke')} transition-all duration-1000`} strokeDasharray="283" strokeDashoffset={283 - (283 * s.load) / 100} strokeLinecap="round" />
                       </svg>
                       <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-white">{s.load}%</span>
                    </div>
                    <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest text-center">{s.sector}</span>
                 </div>
               ))}
            </div>
            
            <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                     <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                     <p className="text-sm font-bold text-white">Resource Sync</p>
                     <p className="text-[10px] text-text-dim font-bold uppercase tracking-widest mt-0.5">Automated re-balancing active</p>
                  </div>
               </div>
               <button className="w-full md:w-auto px-6 py-3 bg-accent text-bg-deep rounded-xl font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-accent/20">Manage Allocation</button>
            </div>
         </div>
      </div>
    </motion.div>
  );

  const renderWorktracking = () => {
    const topTeam = [
      { name: "Sarah Johnson", role: "Senior Consultant", progress: 94, workload: 82, status: "Active" },
      { name: "Marcus Chen", role: "Field Analyst", progress: 88, workload: 95, status: "Overload" },
      { name: "Elena Rodriguez", role: "Environmental Specialist", progress: 85, workload: 70, status: "Active" },
      { name: "David Kim", role: "Operational Lead", progress: 82, workload: 65, status: "Active" },
      { name: "Ahmad Rifai", role: "Field Staff", progress: 78, workload: 40, status: "Underutilized" },
      { name: "Jessica Walsh", role: "Data Validator", progress: 75, workload: 85, status: "Active" },
      { name: "Kevin Varma", role: "Remote Sensing", progress: 72, workload: 60, status: "Active" },
      { name: "Lin Zhao", role: "GIS Analyst", progress: 68, workload: 92, status: "Overload" },
      { name: "Robert Smith", role: "Compliance Auditor", progress: 65, workload: 55, status: "Active" },
      { name: "Siti Aminah", role: "Admin Support", progress: 60, workload: 30, status: "Underutilized" },
    ].sort((a, b) => worktrackingSort === 'Progress' ? b.progress - a.progress : b.workload - a.workload);

    return (
      <motion.div 
        key="worktracking"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Team Productivity", val: "88%", icon: Briefcase, color: "text-accent" },
            { label: "Tasks Completed", val: "248", icon: CheckCircle, color: "text-emerald-400" },
            { label: "Pending Reviews", val: "14", icon: Clock, color: "text-amber-400" },
          ].map((stat, i) => (
            <div key={i} className="portal-card p-6 flex items-center gap-6">
              <div className={`p-3 rounded-2xl bg-white/[0.03] ${stat.color} border border-white/5`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{stat.label}</p>
                <p className="text-3xl font-bold text-white mt-1">{stat.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Top 10 Team Overview Section */}
        <div className="portal-card p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <h3 className="font-headline text-2xl font-bold text-white tracking-tight">Top 10 Team Overview</h3>
              <p className="text-sm text-text-dim mt-0.5">Team performance leaderboard</p>
            </div>
            <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10">
              <button 
                onClick={() => setWorktrackingSort('Progress')}
                className={`px-5 py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${worktrackingSort === 'Progress' ? 'bg-accent text-bg-deep shadow-lg shadow-accent/20' : 'text-text-dim hover:text-white'}`}
              >
                Progress
              </button>
              <button 
                onClick={() => setWorktrackingSort('Workload')}
                className={`px-5 py-2 rounded-xl text-[10px] font-bold uppercase transition-all ${worktrackingSort === 'Workload' ? 'bg-accent text-bg-deep shadow-lg shadow-accent/20' : 'text-text-dim hover:text-white'}`}
              >
                Workload
              </button>
            </div>
          </div>

          <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            <div className="space-y-4">
              {topTeam.map((member, i) => (
                <div key={member.name} className="flex items-center gap-8 p-5 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-accent/10 transition-all group">
                  {/* Name Section */}
                  <div className="flex items-center gap-6 w-1/4 min-w-0">
                    <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center font-headline font-bold text-lg text-white/20 group-hover:bg-accent/10 group-hover:text-accent transition-all shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-white truncate leading-tight">{member.name}</p>
                      <p className="text-[10px] text-text-dim uppercase font-bold tracking-widest opacity-60 mt-0.5">{member.role}</p>
                    </div>
                  </div>
                  
                  {/* Progress Section (Middle) */}
                  <div className="flex-1 flex items-center gap-8">
                    <div className="flex-1">
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                        <motion.div 
                          initial={{ width: 0 }} 
                          animate={{ width: `${member.progress}%` }} 
                          className="h-full bg-accent shadow-[0_0_10px_rgba(190,242,100,0.2)]" 
                        />
                      </div>
                    </div>
                    <div className="w-16 text-right">
                       <span className="text-sm font-bold text-white leading-none">{member.progress}%</span>
                       <p className="text-[8px] font-bold text-text-dim uppercase tracking-widest mt-0.5">Progress</p>
                    </div>
                  </div>

                  {/* Status Section */}
                  <div className="w-32 flex justify-end">
                    <div className={`px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border transition-all ${
                      member.status === 'Overload' ? 'bg-red-400/10 text-red-400 border-red-400/20' :
                      member.status === 'Underutilized' ? 'bg-amber-400/10 text-amber-400 border-amber-400/20' :
                      'bg-emerald-400/10 text-emerald-400 border-emerald-400/20 group-hover:bg-emerald-400 group-hover:text-bg-deep'
                    }`}>
                      {member.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Progress Summary Progress Section */}
        <div className="portal-card p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div>
              <h3 className="font-headline text-2xl font-bold text-white tracking-tight">Aktivitas Summary Progress Perusahaan</h3>
              <p className="text-sm text-text-dim mt-0.5">Detailed lifecycle and KPI monitoring</p>
            </div>
            <div className="relative group min-w-[200px]">
              <select 
                value={selectedCompany}
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-white outline-none focus:ring-2 focus:ring-accent/40 appearance-none cursor-pointer"
              >
                <option value="All Companies" className="bg-slate-900">All Companies</option>
                <option value="PT Eco Energy" className="bg-slate-900">PT Eco Energy</option>
                <option value="Global Mining Group" className="bg-slate-900">Global Mining Group</option>
                <option value="Indo Resources" className="bg-slate-900">Indo Resources</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim pointer-events-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/5 space-y-6">
               <h4 className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Quick Metrics</h4>
               {[
                 { label: "Milestone Completion", val: "14/20", trend: "+2", color: "text-accent" },
                 { label: "Workload Status", val: "Balanced", trend: "0.2%", color: "text-emerald-400" },
                 { label: "QC Progress", val: "92%", trend: "High", color: "text-accent-light" },
               ].map((m, i) => (
                 <div key={i}>
                    <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{m.label}</p>
                    <div className="flex items-center justify-between mt-1.5">
                       <p className="text-xl font-bold text-white">{m.val}</p>
                       <span className={`text-[10px] font-bold ${m.color} uppercase tracking-widest`}>{m.trend}</span>
                    </div>
                 </div>
               ))}
            </div>

            <div className="lg:col-span-3 p-6 rounded-3xl bg-white/[0.03] border border-white/5 relative overflow-hidden">
               <div className="flex justify-between items-start mb-6 relative z-10">
                  <h4 className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Summary Overview: {selectedCompany}</h4>
                  <div className="flex gap-4">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent"></div>
                        <span className="text-[9px] font-bold text-text-dim uppercase">Done</span>
                     </div>
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-white/20"></div>
                        <span className="text-[9px] font-bold text-text-dim uppercase">Pending</span>
                     </div>
                  </div>
               </div>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
                  {[
                    { label: "Recent Docs", val: "128", icon: ClipboardList },
                    { label: "KPI Progress", val: "94.2%", icon: Target },
                    { label: "Active Team", val: "08", icon: Users },
                    { label: "Risk Level", val: "Verified", icon: ShieldCheck },
                  ].map((info, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-accent/5 hover:border-accent/20 transition-all">
                       <info.icon className="w-4 h-4 text-accent mb-3" />
                       <p className="text-[9px] font-bold text-text-dim uppercase tracking-widest mb-1">{info.label}</p>
                       <p className="text-base font-bold text-white">{info.val}</p>
                    </div>
                  ))}
               </div>
               
               <div className="mt-8 relative z-10">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-[10px] font-bold text-white uppercase">Project Milestone Timeline</p>
                    <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Stage 4 / 6</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {[1, 2, 3, 4, 5, 6].map(step => (
                      <div key={step} className="flex-1 h-1.5 relative">
                        <div className={`absolute inset-0 rounded-full ${step <= 4 ? 'bg-accent shadow-[0_0_10px_rgba(190,242,100,0.3)]' : 'bg-white/10'}`}></div>
                        {step === 4 && <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg-deep animate-pulse"></div>}
                      </div>
                    ))}
                  </div>
               </div>

               <div className="absolute top-1/2 right-[-100px] w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Revised Activities & Shortcut Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side: Recent Activities (2/3) */}
          <div className="lg:col-span-2 portal-card p-10">
            <h3 className="font-headline text-2xl font-bold text-white mb-8">Recent Activities</h3>
            <div className="space-y-8">
              {[
                { user: "Sarah Johnson", action: "Completed QC for 12 documents", time: "10 mins ago", project: "Sector A" },
                { user: "Marcus Chen", action: "Logged field data entry", time: "45 mins ago", project: "Site B-04" },
                { user: "Elena Rodriguez", action: "Started new assessment", time: "2 hours ago", project: "River Monitoring" },
                { user: "David Kim", action: "Updated KPI targets", time: "4 hours ago", project: "Operations" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 relative group">
                  {i !== 3 && <div className="absolute left-[20px] top-12 bottom-[-32px] w-px bg-white/5 group-hover:bg-accent/20 transition-colors"></div>}
                  <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent font-bold shrink-0 group-hover:bg-accent/10 transition-colors">
                    {item.user[0]}
                  </div>
                  <div className="py-1 min-w-0">
                    <p className="text-sm font-bold text-white group-hover:text-accent transition-colors">{item.user} <span className="text-text-dim/60 font-medium">{item.action}</span></p>
                    <div className="flex items-center gap-4 mt-2">
                       <div className="flex items-center gap-1.5 opacity-40">
                         <Clock3 className="w-3 h-3 text-text-dim" />
                         <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{item.time}</span>
                       </div>
                       <span className="text-[10px] font-bold text-accent uppercase tracking-widest bg-accent/5 px-2.5 py-1 rounded-lg border border-accent/10">{item.project}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Shortcut Card (1/3) */}
          <motion.a 
            whileHover={{ y: -4 }}
            href="https://docs.google.com/spreadsheets/d/1KQ5M9SSq4xG7cpP8M9ZtLH9Xt8Z0hnSZBpnxQT2oBDM/edit?gid=1455439243#gid=1455439243"
            target="_blank"
            rel="noopener noreferrer"
            className="portal-card bg-accent p-10 flex flex-col justify-between group overflow-hidden relative shadow-[0_20px_50px_rgba(190,242,100,0.1)]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform"></div>
            
            <div className="relative z-10">
               <div className="w-14 h-14 bg-bg-deep rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform">
                  <ClipboardList className="w-7 h-7 text-accent" />
               </div>
               <h3 className="font-headline text-2xl font-bold text-bg-deep leading-tight mb-3">Work Summary Spreadsheet</h3>
               <p className="text-bg-deep/60 text-sm font-medium leading-relaxed">Direct access to legacy data tracking and full document history hub.</p>
            </div>

            <div className="mt-auto relative z-10">
               <div className="w-full py-4 bg-bg-deep text-accent rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 group-hover:gap-5 transition-all shadow-xl">
                  Open Spreadsheet
                  <ArrowRight className="w-4 h-4" />
               </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
          </motion.a>
        </div>
      </motion.div>
    );
  };

  const renderKPIMonitoring = () => (
    <motion.div 
      key="kpi-monitoring"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Active Project", val: "12", icon: BarChart3, color: "text-accent" },
          { label: "KPI Score", val: "91.2%", icon: Target, color: "text-accent-light" },
          { label: "Milestones", val: "84/110", icon: Clock3, color: "text-emerald-400" },
          { label: "Risk Level", val: "Low", icon: ShieldCheck, color: "text-white" },
        ].map((item, i) => (
           <div key={i} className="portal-card p-5 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start mb-3">
                 <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{item.label}</span>
                 <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 ${item.color}`}>
                   <item.icon className="w-4 h-4" />
                 </div>
              </div>
              <p className="text-xl font-bold text-white">{item.val}</p>
           </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gantt Chart Section */}
        <div className="lg:col-span-2 portal-card p-10 overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div>
              <h3 className="font-headline text-2xl font-bold text-white tracking-tight">Project Timeline Gantt</h3>
              <p className="text-sm text-text-dim mt-1">Lifecycle phase tracking and milestone dependencies.</p>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-xl">
              <Calendar className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Q2 2024</span>
            </div>
          </div>
          
          <div className="space-y-8">
            {[
              { name: "Environmental Assessment A", progress: 85, start: 10, duration: 60, color: "bg-accent" },
              { name: "Site C Operations Audit", progress: 62, start: 30, duration: 45, color: "bg-accent-light" },
              { name: "Baseline Monitoring Alpha", progress: 94, start: 5, duration: 80, color: "bg-emerald-400" },
              { name: "Quarterly Proper Doc Review", progress: 45, start: 50, duration: 40, color: "bg-white/30" },
            ].map((proj, i) => (
              <div key={i} className="relative">
                <div className="flex justify-between items-center mb-3">
                   <span className="text-xs font-bold text-white">{proj.name}</span>
                   <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{proj.progress}% Complete</span>
                </div>
                <div className="h-6 bg-white/[0.03] rounded-lg border border-white/5 relative overflow-hidden group">
                   <motion.div 
                     initial={{ width: 0, x: `${proj.start}%` }}
                     animate={{ width: `${proj.duration}%`, x: `${proj.start}%` }}
                     className={`absolute h-full ${proj.color} rounded-lg shadow-lg flex items-center px-3 min-w-[20px]`}
                   >
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${proj.progress}%` }}
                        className="absolute left-0 top-0 bottom-0 bg-black/10"
                      />
                   </motion.div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 pt-6 border-t border-white/5 grid grid-cols-4 text-[9px] font-bold text-text-dim uppercase tracking-[0.2em]">
             <span>April</span>
             <span>May</span>
             <span>June</span>
             <span>July</span>
          </div>
        </div>

        <div className="space-y-6">
           {/* Calendar Section */}
           <div className="portal-card p-10 flex flex-col justify-between">
              <div>
                <h4 className="font-headline text-xl font-bold text-white mb-6">Project Calendar</h4>
                <div className="grid grid-cols-7 gap-2 mb-8">
                   {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => (
                     <div key={d} className="text-center text-[10px] font-bold text-text-dim opacity-40 py-2">{d}</div>
                   ))}
                   {Array.from({ length: 31 }).map((_, i) => (
                     <div 
                      key={i} 
                      className={`aspect-square flex items-center justify-center text-[10px] font-bold rounded-lg transition-all ${
                        [12, 18, 25].includes(i+1) ? 'bg-accent/20 text-accent border border-accent/30' : 
                        i+1 === 20 ? 'bg-red-400/20 text-red-400 border border-red-400/30' :
                        'text-white hover:bg-white/5 cursor-pointer'
                      }`}
                     >
                       {i + 1}
                     </div>
                   ))}
                </div>
              </div>
              
              <div className="space-y-4">
                 <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(190,242,100,0.5)]"></div>
                    <div className="flex-1">
                       <p className="text-xs font-bold text-white">Baseline Data Sync</p>
                       <p className="text-[10px] text-text-dim font-medium">Tomorrow, 09:00 AM</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                    <div className="w-2 h-2 rounded-full bg-red-400 shadow-[0_0_8px_rgba(248,113,113,0.5)]"></div>
                    <div className="flex-1">
                       <p className="text-xs font-bold text-white">Audit Submission</p>
                       <p className="text-[10px] text-text-dim font-medium">May 25, 2024</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>

      {/* Project Strategic Timeline View */}
      <div className="portal-card p-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 relative z-10">
          <div>
            <h3 className="font-headline text-2xl font-bold text-white tracking-tight">Project Strategic Timeline</h3>
            <p className="text-sm text-text-dim mt-1">Cross-sector milestone flow and deadline markers.</p>
          </div>
          <div className="flex gap-4">
            <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Live Tracking</span>
            </div>
          </div>
        </div>

        <div className="relative pt-12 pb-16 px-4 overflow-x-auto no-scrollbar relative z-10">
          {/* Main Timeline Line */}
          <div className="absolute top-[108px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <div className="flex justify-between min-w-[1000px] relative">
            {[
              { label: "Initiation", date: "Apr 01", status: "Done", phase: "Phase 01" },
              { label: "Data Collection", date: "Apr 20", status: "Done", phase: "Phase 01" },
              { label: "Initial Analysis", date: "May 10", status: "Current", phase: "Phase 02" },
              { label: "Draft Review", date: "Jun 05", status: "Pending", phase: "Phase 02" },
              { label: "Final Validation", date: "Jun 25", status: "Pending", phase: "Phase 03" },
              { label: "Submission", date: "Jul 10", status: "Pending", phase: "Phase 03" },
            ].map((milestone, i) => (
              <div key={i} className="flex flex-col items-center relative group">
                {/* Phase Indicator */}
                <div className="absolute -top-12 text-[10px] font-bold text-text-dim uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity">
                  {milestone.phase}
                </div>

                {/* Node */}
                <div className={`w-6 h-6 rounded-full border-4 border-bg-deep z-10 mb-8 transition-all duration-500 ${
                  milestone.status === 'Done' ? 'bg-accent shadow-[0_0_15px_rgba(190,242,100,0.5)]' :
                  milestone.status === 'Current' ? 'bg-accent animate-pulse shadow-[0_0_20px_rgba(190,242,100,0.8)]' :
                  'bg-white/10'
                }`}>
                  {milestone.status === 'Done' && <CheckCircle2 className="w-3 h-3 text-bg-deep m-auto mt-0.5" />}
                </div>

                {/* Info Card */}
                <div className={`text-center transition-all duration-300 ${milestone.status === 'Current' ? 'scale-110' : 'group-hover:translate-y-1'}`}>
                  <h4 className={`text-sm font-bold mb-1 ${milestone.status === 'Pending' ? 'text-white/40' : 'text-white'}`}>{milestone.label}</h4>
                  <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{milestone.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-bg-deep/80 backdrop-blur-2xl"
          >
            <div className="portal-card max-w-2xl w-full p-12 relative overflow-hidden">
               <button onClick={() => setSelectedProject(null)} className="absolute top-8 right-8 p-3 bg-white/5 rounded-xl hover:text-white transition-all"><X className="w-5 h-5"/></button>
               <h3 className="font-headline text-3xl font-bold text-white mb-2">{selectedProject.name} Detail Review</h3>
               <p className="text-text-dim mb-10">Project-specific KPI metrics and team completion status.</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-8">
                     <div>
                        <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">Milestones Check</p>
                        <div className="space-y-4">
                           {['Data Gathering', 'Initial Assessment', 'Draft Submission', 'Final Approval'].map((m, idx) => (
                             <div key={m} className={`flex items-center gap-4 text-xs font-bold ${idx < 3 ? 'text-white' : 'text-text-dim opacity-40'}`}>
                               <div className={`w-2 h-2 rounded-full ${idx < 3 ? 'bg-accent' : 'bg-white/10'}`}></div>
                               {m}
                             </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="space-y-8">
                     <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-4">Team Assignment</p>
                     <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(u => (
                          <div key={u} className="w-10 h-10 rounded-full bg-white/10 border-2 border-bg-deep flex items-center justify-center font-bold text-xs text-white">
                            User {u}
                          </div>
                        ))}
                        <div className="w-10 h-10 rounded-full bg-accent/20 border-2 border-bg-deep flex items-center justify-center font-bold text-xs text-accent">
                          +2
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  const renderWorkload = () => (
    <motion.div 
      key="workload"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Total Beban", val: "428.5", icon: Layers, color: "text-white" },
          { label: "Rata-rata Beban", val: "84.2%", icon: Percent, color: "text-accent" },
          { label: "Balance Level", val: "Steady", icon: ShieldCheck, color: "text-emerald-400" },
          { label: "Capacity Ratio", val: "92/100", icon: TrendingUp, color: "text-accent-light" },
        ].map((stat, i) => (
          <div key={i} className="portal-card p-6 group">
            <div className="flex justify-between items-start mb-4">
               <span className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{stat.label}</span>
               <div className={`p-1.5 rounded-lg bg-white/5 border border-white/10 ${stat.color}`}>
                 <stat.icon className="w-4 h-4" />
               </div>
            </div>
            <p className="text-2xl font-bold text-white">{stat.val}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 portal-card p-8 h-full">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="font-headline text-2xl font-bold text-white tracking-tight">Workload Analytics</h3>
              <p className="text-sm text-text-dim mt-0.5">Team capacity utilization trends</p>
            </div>
            <div className="flex gap-4">
               {['Over', 'Steady', 'Under'].map(tag => (
                 <div key={tag} className="flex items-center gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${tag === 'Over' ? 'bg-red-400' : tag === 'Steady' ? 'bg-accent' : 'bg-amber-400'}`}></div>
                    <span className="text-[9px] font-bold text-text-dim uppercase">{tag}</span>
                 </div>
               ))}
            </div>
          </div>
          
          <div className="h-60 flex flex-col justify-end">
            <div className="flex items-end gap-3 h-full mb-2">
              {[
                { range: "0-20%", count: 1, label: "Low" },
                { range: "20-40%", count: 3, label: "Under" },
                { range: "40-60%", count: 2, label: "Steady" },
                { range: "60-80%", count: 8, label: "Ideal" },
                { range: "80-100%", count: 6, label: "Peak" },
              ].map((group, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end group relative h-full">
                  {/* Frequency Label */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 px-2 py-0.5 rounded text-[10px] font-bold text-white z-20 whitespace-nowrap">
                    {group.count} team members
                  </div>

                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${(group.count / 8) * 100}%` }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                    className={`w-full rounded-t-lg relative overflow-hidden flex flex-col justify-end ${
                      group.range === "80-100%" ? 'bg-red-400 shadow-[0_0_20px_rgba(248,113,113,0.3)]' : 
                      group.range === "0-20%" ? 'bg-amber-400' : 
                      'bg-accent shadow-[0_0_15px_rgba(190,242,100,0.2)]'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    {/* Visual pattern on bars */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.5)_1px,_transparent_0)] bg-[size:2px_2px]"></div>
                  </motion.div>
                  
                  <div className="mt-2 text-center">
                    <p className="text-[10px] font-bold text-white mb-0">{group.count}</p>
                    <p className="text-[8px] font-bold text-text-dim uppercase tracking-tighter whitespace-nowrap opacity-60">{group.range}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Histogram X-Axis Baseline */}
            <div className="h-px bg-white/5 w-full"></div>
          </div>
        </div>

        <div className="portal-card p-10 space-y-10 flex flex-col justify-between">
          <div>
            <h4 className="font-headline text-xl font-bold text-white tracking-tight mb-2">Utilization Frequency</h4>
            <p className="text-xs text-text-dim">Distribution of personnel across workload tiers.</p>
          </div>
          
          <div className="space-y-6">
             {[
               { status: "Peak Load", count: 6, color: "bg-red-400", desc: "Above 80% utilization" },
               { status: "Optimal / Ideal", count: 10, color: "bg-accent", desc: "40% - 80% utilization" },
               { status: "Capacity Available", count: 4, color: "bg-amber-400", desc: "Below 40% utilization" },
             ].map((u, i) => (
               <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-8 rounded-full ${u.color}`}></div>
                    <div>
                      <span className="text-sm font-bold text-white block leading-none">{u.status}</span>
                      <p className="text-[10px] text-text-dim font-bold uppercase tracking-widest mt-1 opacity-60">{u.desc}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xl font-bold text-white">{u.count}</span>
                    <p className="text-[8px] font-bold text-text-dim uppercase tracking-widest">Members</p>
                  </div>
               </div>
             ))}
          </div>
          
          <div className="pt-6 border-t border-white/5">
             <div className="bg-accent/5 p-4 rounded-xl border border-accent/10 flex items-center gap-3">
                <Target className="w-4 h-4 text-accent" />
                <p className="text-[10px] font-bold text-accent uppercase tracking-widest">Recommended Re-balancing: {Math.round((6/20)*100)}%</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
         {/* Overloaded Members */}
         <div className="portal-card p-10 border-red-400/10">
            <div className="flex justify-between items-center mb-8">
               <h4 className="font-headline text-xl font-bold text-white flex items-center gap-4">
                 <AlertTriangle className="w-5 h-5 text-red-400" /> Overloaded Members
               </h4>
               <span className="text-2xl font-bold text-red-400">03</span>
            </div>
            <div className="space-y-4">
               {[
                 { name: "Marcus Chen", workload: 95 },
                 { name: "Lin Zhao", workload: 92 },
                 { name: "Diana Prince", workload: 98 },
               ].map(m => (
                 <div key={m.name} className="p-5 rounded-2xl bg-red-400/5 border border-red-400/10 flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{m.name}</span>
                    <span className="text-sm font-bold text-red-400">{m.workload}%</span>
                 </div>
               ))}
            </div>
         </div>

         {/* Underutilized Members */}
         <div className="portal-card p-10 border-amber-400/10">
            <div className="flex justify-between items-center mb-8">
               <h4 className="font-headline text-xl font-bold text-white flex items-center gap-4">
                 <Users className="w-5 h-5 text-amber-400" /> Underutilized Members
               </h4>
               <span className="text-2xl font-bold text-amber-400">04</span>
            </div>
            <div className="space-y-4">
               {[
                 { name: "Ahmad Rifai", workload: 40 },
                 { name: "Siti Aminah", workload: 30 },
                 { name: "Sakti Wijaya", workload: 38 },
                 { name: "Budi Utomo", workload: 35 },
               ].map(m => (
                 <div key={m.name} className="p-5 rounded-2xl bg-amber-400/5 border border-amber-400/10 flex items-center justify-between">
                    <span className="text-sm font-bold text-white">{m.name}</span>
                    <span className="text-sm font-bold text-amber-400">{m.workload}%</span>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </motion.div>
  );

  const activeItem = navItems.find(item => item.label === currentView);
  const ActiveIcon = activeItem ? activeItem.icon : LayoutDashboard;

  return (
    <div className="flex min-h-screen bg-bg-deep text-text-main overflow-x-hidden">
      {/* Sidebar - Desktop */}
      <aside className="fixed left-6 top-6 bottom-6 w-24 sidebar-glass hidden lg:flex flex-col items-center py-10 z-40 rounded-[3rem] border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
        {/* Top Section */}
        <div className="mb-14">
          <div className="w-14 h-14 bg-white/5 rounded-[1.5rem] flex items-center justify-center border border-white/10 group cursor-pointer hover:bg-accent/5 transition-all shadow-lg">
             <Briefcase className="w-7 h-7 text-accent group-hover:scale-110 transition-transform" />
          </div>
        </div>

        {/* Middle Navigation Dock */}
        <nav className="flex-1 flex flex-col gap-6">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <button 
                onClick={() => setCurrentView(item.label)}
                className={`w-14 h-14 rounded-[1.5rem] flex items-center justify-center transition-all duration-500 relative ${
                  currentView === item.label 
                    ? 'bg-accent text-bg-deep shadow-[0_0_25px_rgba(190,242,100,0.5)] scale-110' 
                    : 'text-text-dim hover:bg-white/[0.05] hover:text-white'
                }`}
              >
                <item.icon className={`w-6 h-6 transition-transform duration-300 ${currentView === item.label ? 'scale-110' : 'group-hover:scale-110'}`} />
              </button>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-6 px-4 py-2 bg-slate-900/95 backdrop-blur-xl border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap z-50 shadow-2xl">
                {item.label}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="mt-auto flex flex-col gap-6 items-center">
          <button 
            onClick={onLogout}
            title="Logout"
            className="w-14 h-14 rounded-[1.5rem] flex items-center justify-center text-text-dim hover:bg-red-400/10 hover:text-red-400 transition-all group"
          >
            <LogOut className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
          
          <div className="w-14 h-14 rounded-full border-2 border-white/5 p-0.5 overflow-hidden cursor-pointer hover:border-accent transition-all shadow-inner">
             <div className="w-full h-full rounded-full bg-white/5 flex items-center justify-center overflow-hidden">
                <UserCircle className="w-full h-full text-white/20 scale-110" />
             </div>
          </div>
        </div>
      </aside>

      {/* Mobile Menu - Floating Dock Interaction */}
      <div className="lg:hidden fixed bottom-8 right-8 z-[70] flex flex-col items-end gap-4">
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-bg-deep/60 backdrop-blur-md z-[60] h-screen w-screen cursor-zoom-out"
              />
              
              {/* Floating Dock Menu */}
              <motion.div 
                layoutId="mobile-dock"
                initial={{ opacity: 0, scale: 0.5, y: 50, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.5, y: 50, filter: "blur(20px)" }}
                transition={{ type: "spring", damping: 25, stiffness: 400 }}
                className="glass w-20 flex flex-col items-center py-6 gap-6 z-[65] rounded-[2.5rem] border border-white/10 relative"
              >
                {/* Close Button Inside Dock */}
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-text-dim hover:text-white"
                >
                  <motion.div initial={{ rotate: -90 }} animate={{ rotate: 0 }} transition={{ duration: 0.5 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                </button>

                <div className="w-8 h-px bg-white/10"></div>

                <div className="flex flex-col gap-6">
                  {navItems.map((item, i) => (
                    <motion.button 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                      key={item.label}
                      onClick={() => {
                        setCurrentView(item.label);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                        currentView === item.label 
                          ? 'bg-accent text-bg-deep scale-110' 
                          : 'text-text-dim bg-white/[0.03]'
                      }`}
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.button>
                  ))}
                  
                  <div className="w-8 h-px bg-white/10"></div>
                  
                  <motion.button 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.length * 0.05 + 0.1 }}
                    onClick={onLogout}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-red-400 bg-red-400/10 border border-red-400/20"
                  >
                    <LogOut className="w-6 h-6" />
                  </motion.button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Floating Toggle Button (Appears only when menu is closed) */}
        {!isMobileMenuOpen && (
          <motion.button 
            layoutId="mobile-dock"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(true)}
            className="w-16 h-16 rounded-full bg-accent text-bg-deep shadow-[0_20px_40px_rgba(190,242,100,0.2)] flex items-center justify-center border border-white/20 backdrop-blur-xl z-[70] group"
          >
            <div className="relative">
              <ActiveIcon className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-accent"></div>
            </div>
          </motion.button>
        )}
      </div>

      {/* Main Content */}
      <main className="lg:ml-32 flex-1 flex flex-col min-w-0 min-h-screen p-6 lg:p-8">
        {/* Top Header */}
        <header className="glass h-[80px] rounded-3xl px-6 lg:px-10 flex justify-between items-center mb-10">
          <div className="flex items-center gap-6">
             <h2 className="font-headline text-xl lg:text-2xl font-bold text-white tracking-tight">{currentView === 'Dashboard' ? 'Main Dashboard' : currentView}</h2>
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
            {currentView === 'KPI Monitoring' && renderKPIMonitoring()}
            {currentView === 'Workload' && renderWorkload()}
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
