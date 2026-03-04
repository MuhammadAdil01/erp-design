import React from 'react';
import {
    CalendarDays,
    ChevronRight,
    Plus,
    Clock,
    CheckCircle2,
    XCircle,
    Calendar,
    UserCircle2,
    Briefcase,
    FileText,
    History,
    AlertCircle,
    ArrowRight
} from 'lucide-react';
import { cn } from "@/lib/utils";

const BalanceCard = ({ title, balance, total, icon: Icon, color }) => (
    <div className="glass-card p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center gap-6 group hover:border-primary/50 transition-all">
        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", `bg-${color}/10 text-${color}`)}>
            <Icon size={28} />
        </div>
        <div className="flex-1">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</h4>
            <div className="flex items-end gap-2 text-slate-800">
                <span className="text-2xl font-bold leading-none">{balance}</span>
                <span className="text-xs font-bold text-slate-400">/ {total} Days</span>
            </div>
            <div className="w-full h-1 bg-slate-50 rounded-full mt-3 overflow-hidden">
                <div className={cn("h-full transition-all duration-1000", `bg-${color}`)} style={{ width: `${(balance / total) * 100}%` }}></div>
            </div>
        </div>
    </div>
);

const InputField = ({ label, placeholder, type = "text", className = "" }) => (
    <div className={cn("space-y-1.5 flex-1 min-w-[200px]", className)}>
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold text-slate-700"
        />
    </div>
);

export default function LeaveManagement() {
    return (
        <div className="space-y-6 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Human Resources</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Leave Management</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary tracking-tight">Time Off & Attendance Registry</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-white transition-all font-bold shadow-sm flex items-center gap-2">
                        <History size={18} /> Leave History
                    </button>
                    <button className="px-8 py-2.5 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                        <Plus size={18} /> Apply for Leave
                    </button>
                </div>
            </div>

            {/* Balances Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <BalanceCard title="Annual Leave" balance={15} total={22} icon={CalendarDays} color="primary" />
                <BalanceCard title="Sick Leave" balance={8} total={12} icon={Clock} color="rose-500" />
                <BalanceCard title="Casual Leave" balance={4} total={10} icon={Briefcase} color="blue-500" />
                <BalanceCard title="Compensatory" balance={2} total={5} icon={CheckCircle2} color="green-500" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Application Form */}
                <div className="lg:col-span-1 glass-card p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex flex-col">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                            <FileText size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800">Quick Application</h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Submit new leave request</p>
                        </div>
                    </div>

                    <div className="space-y-6 flex-1">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Leave Type</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer">
                                <option>Annual Leave</option>
                                <option>Sick Leave</option>
                                <option>Personal Leave</option>
                                <option>Emergency Leave</option>
                            </select>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <InputField label="Start Date" type="date" />
                            <InputField label="End Date" type="date" />
                        </div>
                        <InputField label="Reason / Description" placeholder="Briefly explain the reason..." />
                        <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 space-y-3">
                            <div className="flex justify-between items-center text-xs font-bold">
                                <span className="text-slate-500 uppercase tracking-widest">Total Days</span>
                                <span className="text-primary">5.0 Working Days</span>
                            </div>
                            <div className="flex justify-between items-center text-xs font-bold">
                                <span className="text-slate-500 uppercase tracking-widest">Available Balance</span>
                                <span className="text-slate-700">15 / 22 Days</span>
                            </div>
                        </div>
                        <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-200 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group">
                            Submit Request <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-primary" />
                        </button>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Status Tracker */}
                    <div className="glass-card p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-full bg-primary/10 -skew-x-12 translate-x-32"></div>
                        <div className="flex flex-wrap items-center justify-between gap-8 relative z-10">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-primary">
                                    <UserCircle2 size={32} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold">John Doe</h2>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Senior Software Engineer • Full-time</p>
                                </div>
                            </div>
                            <div className="flex gap-8 border-l border-white/10 pl-8">
                                <div className="text-center">
                                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Approved This Year</p>
                                    <p className="text-2xl font-bold">12 <span className="text-xs text-slate-400 font-normal">Days</span></p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mb-1">Pending Approval</p>
                                    <p className="text-2xl font-bold">03 <span className="text-xs text-slate-400 font-normal">Days</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Applications Table */}
                    <div className="glass-card rounded-[2.5rem] overflow-hidden border border-slate-100 bg-white shadow-sm flex-1">
                        <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-primary/5">
                            <div className="flex items-center gap-4">
                                <div className="p-2.5 rounded-xl bg-white shadow-sm border border-slate-100 text-primary">
                                    <History size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-800 tracking-tight">Recent Applications</h3>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Track your submission statuses</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="p-2 rounded-lg bg-white border border-slate-100 text-slate-400 hover:text-primary transition-colors">
                                    <Calendar size={18} />
                                </button>
                            </div>
                        </div>
                        <div className="p-0 overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/50">
                                        <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Type</th>
                                        <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Period</th>
                                        <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Duration</th>
                                        <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { type: 'Annual Leave', period: 'Oct 01 - Oct 05', days: '5 Days', status: 'Approved', color: 'green' },
                                        { type: 'Sick Leave', period: 'Sep 12 - Sep 13', days: '2 Days', status: 'Approved', color: 'green' },
                                        { type: 'Emergency', period: 'Aug 20 - Aug 20', days: '1 Day', status: 'Declined', color: 'rose' },
                                        { type: 'Casual Leave', period: 'Jul 15 - Jul 18', days: '4 Days', status: 'Approved', color: 'green' },
                                    ].map((app, i) => (
                                        <tr key={i} className="group hover:bg-primary/[0.02] transition-colors border-b border-slate-50 last:border-0">
                                            <td className="py-4 px-6">
                                                <span className="text-sm font-bold text-slate-800">{app.type}</span>
                                            </td>
                                            <td className="py-4 px-6 text-[11px] font-bold text-slate-400">{app.period}</td>
                                            <td className="py-4 px-6 text-sm font-bold text-slate-600">{app.days}</td>
                                            <td className="py-4 px-6 text-right">
                                                <span className={cn(
                                                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border",
                                                    app.color === 'green' ? "bg-green-50 text-green-600 border-green-100" : "bg-rose-50 text-rose-600 border-rose-100"
                                                )}>
                                                    {app.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Warning / Alert Bar */}
            <div className="glass-card p-4 rounded-2xl bg-amber-50 border border-amber-100 flex items-center gap-3 text-amber-700">
                <AlertCircle size={18} className="text-amber-500 shrink-0" />
                <p className="text-[11px] font-semibold leading-relaxed">
                    <span className="font-bold">Important:</span> You have used 68% of your annual leave quota. Requests during year-end (Dec 20 - Jan 05) must be submitted 30 days in advance for operational planning.
                </p>
            </div>
        </div>
    );
}
