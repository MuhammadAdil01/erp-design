import React from 'react';
import {
    Repeat,
    ChevronRight,
    Save,
    Calendar,
    Bell,
    CheckCircle2,
    CalendarClock,
    ArrowRightLeft,
    Clock,
    Plus,
    Trash2,
    Power
} from 'lucide-react';
import { cn } from "@/lib/utils";

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

const LineItem = ({ id }) => (
    <tr className="group hover:bg-primary/[0.02] transition-colors border-b border-slate-50 last:border-0">
        <td className="py-4 px-6 text-sm font-bold text-slate-400">{id}</td>
        <td className="py-4 px-6">
            <input type="text" placeholder="Account Code..." className="w-full bg-transparent border-none p-0 text-sm font-semibold text-slate-700 outline-none focus:ring-0 placeholder:text-slate-300" />
        </td>
        <td className="py-4 px-6 text-sm font-semibold text-slate-400 italic">Automatic Lookup...</td>
        <td className="py-4 px-6">
            <input type="number" placeholder="0.00" className="w-[100px] bg-transparent border-none p-0 text-sm font-bold text-slate-700 outline-none focus:ring-0 placeholder:text-slate-200" />
        </td>
        <td className="py-4 px-6">
            <input type="number" placeholder="0.00" className="w-[100px] bg-transparent border-none p-0 text-sm font-bold text-slate-700 outline-none focus:ring-0 placeholder:text-slate-200" />
        </td>
        <td className="py-4 px-6">
            <input type="text" placeholder="Add Memo..." className="w-full bg-transparent border-none p-0 text-sm font-semibold text-slate-700 outline-none focus:ring-0 placeholder:text-slate-300" />
        </td>
        <td className="py-4 px-6 text-right">
            <button className="p-1.5 text-slate-300 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100">
                <Trash2 size={16} />
            </button>
        </td>
    </tr>
);

export default function RecurringPostings() {
    return (
        <div className="space-y-6 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Financials</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Recurring Postings</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary tracking-tight">Recurring Journal Management</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-5 py-2.5 rounded-xl border border-rose-100 text-rose-500 hover:bg-rose-50 transition-all font-bold flex items-center gap-2">
                        <Power size={18} /> Deactivate
                    </button>
                    <button className="px-8 py-2.5 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                        <Save size={18} /> Schedule Posting
                    </button>
                </div>
            </div>

            {/* Scheduler Settings Card */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 glass-card p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                            <CalendarClock size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800">Process Automation Schedule</h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Configure frequency and timing</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <InputField label="Agreement Code" placeholder="REC-772-2024" />
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Recurrence Frequency</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm font-semibold text-slate-700 cursor-pointer outline-none focus:ring-2 focus:ring-primary/20">
                                <option>Daily</option>
                                <option>Weekly</option>
                                <option>Monthly</option>
                                <option>Quarterly</option>
                                <option>Annually</option>
                            </select>
                        </div>
                        <InputField label="Start Date" type="date" />
                        <InputField label="Next Execution" type="date" />
                        <InputField label="End Date (Optional)" type="date" />
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Transaction Mode</label>
                            <div className="flex items-center gap-3 h-10 px-4 bg-slate-50 rounded-xl border border-slate-100">
                                <ArrowRightLeft size={16} className="text-primary" />
                                <span className="text-xs font-bold text-slate-700">Auto-Reversing</span>
                                <input type="checkbox" className="ml-auto w-4 h-4 rounded text-primary" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-card p-8 rounded-[2rem] bg-slate-900 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-16 translate-x-16"></div>
                    <div className="relative z-10 flex items-center justify-between">
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Current Status</p>
                            <p className="text-2xl font-bold flex items-center gap-2">
                                <CheckCircle2 size={24} className="text-green-400" /> Active
                            </p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-primary">
                            <Bell size={24} />
                        </div>
                    </div>
                    <div className="relative z-10 mt-8 space-y-4">
                        <div className="flex justify-between items-center text-slate-400 text-xs font-bold uppercase tracking-widest">
                            <span>Total Executions</span>
                            <span className="text-white">12 / Unlimited</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-[45%] h-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                        </div>
                        <p className="text-[10px] text-slate-500 font-semibold italic">Last successful run: Oct 01, 2023</p>
                    </div>
                </div>
            </div>

            {/* Transaction Data */}
            <div className="glass-card rounded-[2.5rem] overflow-hidden border border-slate-100 bg-white">
                <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-primary/5">
                    <div className="flex items-center gap-4">
                        <div className="p-2.5 rounded-xl bg-white shadow-sm border border-slate-100 text-primary">
                            <Repeat size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 tracking-tight">Recurring Line Items</h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Define standard values for each period</p>
                        </div>
                    </div>
                    <button className="px-5 py-2 rounded-xl bg-white border border-slate-100 text-primary hover:bg-primary hover:text-white transition-all shadow-sm flex items-center gap-2 text-xs font-bold">
                        <Plus size={16} /> New Row
                    </button>
                </div>
                <div className="p-0 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 w-16">#</th>
                                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">G/L Account</th>
                                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 italic">Desc</th>
                                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Debit Amount</th>
                                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Credit Amount</th>
                                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Line Remarks</th>
                                <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3].map((i) => (
                                <LineItem key={i} id={i} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-8 bg-slate-50 flex flex-wrap gap-12 items-center justify-between border-t border-slate-100">
                    <div className="flex gap-12">
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status Indicators</p>
                            <div className="flex gap-4">
                                <span className="flex items-center gap-2 text-xs font-bold text-slate-600">
                                    <Clock size={14} className="text-primary" /> Pending: 0.00
                                </span>
                                <span className="flex items-center gap-2 text-xs font-bold text-slate-600">
                                    <Repeat size={14} className="text-primary" /> Cycles Remaining: 12
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6 items-center">
                        <div className="text-right">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Recurring Balance</p>
                            <p className="text-lg font-bold text-slate-800">Total: 15,500.00 <span className="text-xs text-slate-400 font-normal">PKR</span></p>
                        </div>
                        <div className="w-px h-10 bg-slate-200 mx-2"></div>
                        <CheckCircle2 size={32} className="text-primary" />
                    </div>  
                </div>
            </div>
        </div>
    );
}
