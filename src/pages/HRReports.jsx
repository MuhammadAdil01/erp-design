import React from 'react';
import {
    BarChart3,
    FileText,
    ChevronRight,
    Download,
    Share2,
    TrendingUp,
    Users2,
    CalendarCheck
} from 'lucide-react';
import { cn } from "@/lib/utils";

const ReportCard = ({ title, description, icon: Icon, color }) => (
    <div className="glass-card group p-6 rounded-3xl hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300">
        <div className={`w-14 h-14 rounded-2xl bg-${color}/10 text-${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
            <Icon size={28} />
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 mb-6 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
            <button className="text-sm font-bold text-primary hover:underline flex items-center gap-2">
                Generate Report <ChevronRight size={16} />
            </button>
            <div className="flex gap-2">
                <button className="p-2 rounded-xl bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors">
                    <Download size={16} />
                </button>
            </div>
        </div>
    </div>
);

export default function HRReports() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Human Resources</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">HR Reports</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary">Intelligence & Reports</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all font-semibold flex items-center gap-2">
                        <Share2 size={18} /> Export All
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Configuration Section */}
                <div className="lg:col-span-3 glass-card p-8 rounded-[2rem] bg-white border border-primary/10">
                    <div className="flex items-center gap-3 mb-6">
                        <BarChart3 size={18} className="text-primary" />
                        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Report Parameters</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="space-y-1.5 flex-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Reporting Year</label>
                            <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold cursor-pointer appearance-none">
                                <option>2023</option>
                                <option>2022</option>
                                <option>2021</option>
                            </select>
                        </div>
                        <div className="space-y-1.5 flex-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Department Scope</label>
                            <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold cursor-pointer appearance-none">
                                <option>Organization Wide</option>
                                <option>Operations Only</option>
                                <option>Finance & Admin</option>
                            </select>
                        </div>
                        <div className="space-y-1.5 flex-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Data Granularity</label>
                            <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold cursor-pointer appearance-none">
                                <option>Monthly Aggregate</option>
                                <option>Weekly Detailed</option>
                                <option>Daily Records</option>
                            </select>
                        </div>
                        <div className="space-y-1.5 flex-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Include Resigned</label>
                            <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold cursor-pointer appearance-none">
                                <option>No</option>
                                <option>Yes</option>
                            </select>
                        </div>
                        <div className="space-y-1.5 flex-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Reporting Manager</label>
                            <input type="text" placeholder="Filter by manager..." className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold" />
                        </div>
                        <div className="space-y-1.5 flex-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Branch Location</label>
                            <input type="text" placeholder="e.g. Dubai Office" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold" />
                        </div>
                        <div className="space-y-1.5 flex-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fiscal Quarter</label>
                            <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold cursor-pointer appearance-none">
                                <option>Q1</option>
                                <option>Q2</option>
                                <option>Q3</option>
                                <option>Q4</option>
                            </select>
                        </div>
                        <div className="flex items-end">
                            <button className="w-full py-2.5 bg-slate-900 text-white font-bold rounded-xl shadow-lg shadow-slate-200 hover:scale-[1.02] transition-all text-xs uppercase tracking-widest">
                                Run Reports
                            </button>
                        </div>
                    </div>
                </div>
                <ReportCard
                    title="Attendance Summary"
                    description="Detailed overview of employee clock-ins, clock-outs, and total active hours mapped by department."
                    icon={CalendarCheck}
                    color="primary"
                />
                <ReportCard
                    title="Performance Metrics"
                    description="Analyze employee performance scores, growth trends, and appraisal feedback cycles."
                    icon={TrendingUp}
                    color="blue-500"
                />
                <ReportCard
                    title="Payroll Distributions"
                    description="Complete breakdown of salary payouts, bonuses, and tax deductions for the current quarter."
                    icon={BarChart3}
                    color="green-500"
                />
                <ReportCard
                    title="Employee Turnover"
                    description="Insights into hiring rates, retention strategies, and exit interview summaries."
                    icon={Users2}
                    color="rose-500"
                />
                <ReportCard
                    title="Compliance Tracking"
                    description="Monitor legal documentation, certifications, and safety training completions."
                    icon={FileText}
                    color="purple-500"
                />
                <div className="rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-8 text-slate-400 group hover:border-primary/50 transition-colors cursor-pointer">
                    <div className="p-4 rounded-full bg-slate-50 mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                        <BarChart3 size={32} />
                    </div>
                    <p className="font-bold text-sm">Create custom analytic</p>
                </div>
            </div>
        </div>
    );
}
