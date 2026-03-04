import React from 'react';
import {
    Scissors,
    ChevronRight,
    Search,
    Filter,
    ArrowDownWideNarrow,
    History,
    FileMinus,
    AlertCircle,
    Info,
    Save,
    LayoutList,
    Percent,
    ArrowUpRight
} from 'lucide-react';
import { cn } from "@/lib/utils";

const DeductionRow = ({ id, type, date, amount, status, color }) => (
    <tr className="group hover:bg-primary/[0.02] transition-colors border-b border-slate-50 last:border-0">
        <td className="py-4 px-6 text-sm font-bold text-slate-400">{id}</td>
        <td className="py-4 px-6">
            <span className="text-sm font-bold text-slate-800">{type}</span>
        </td>
        <td className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-tighter">{date}</td>
        <td className="py-4 px-6 text-sm font-bold text-rose-500">
            - {amount}
        </td>
        <td className="py-4 px-6 text-right">
            <span className={cn(
                "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border",
                color === 'blue' ? "bg-blue-50 text-blue-600 border-blue-100" : "bg-green-50 text-green-600 border-green-100"
            )}>
                {status}
            </span>
        </td>
    </tr>
);

export default function Deductions() {
    return (
        <div className="space-y-6 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Human Resources</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Payroll Deductions</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary tracking-tight">Financial Adjustments & Tax Registry</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-white transition-all font-bold shadow-sm flex items-center gap-2">
                        <History size={18} /> Historic Data
                    </button>
                    <button className="px-8 py-2.5 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                        <ArrowDownWideNarrow size={18} /> Manual Correction
                    </button>
                </div>
            </div>

            {/* Deduction Summary Header */}
            <div className="glass-card rounded-[2.5rem] bg-slate-900 text-white p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-full bg-primary/10 -skew-x-12 translate-x-32"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                    <div className="space-y-2 border-r border-white/10 pr-8">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Total Monthly Deductions</p>
                        <p className="text-2xl font-bold text-rose-400">- 4,200.00 <span className="text-xs text-slate-400 font-medium">PKR</span></p>
                    </div>
                    <div className="space-y-2 border-r border-white/10 pr-8">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Income Tax (WHT)</p>
                        <p className="text-2xl font-bold italic">1,850.00 <span className="text-xs text-slate-500 font-medium">PKR</span></p>
                    </div>
                    <div className="space-y-2 border-r border-white/10 pr-8">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Insurance & Benefits</p>
                        <p className="text-2xl font-bold">1,100.00 <span className="text-xs text-slate-500 font-medium">PKR</span></p>
                    </div>
                    <div className="flex items-center">
                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center gap-4">
                            <Percent size={24} className="text-primary" />
                            <div>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mb-1">Tax Bracket</p>
                                <p className="text-sm font-bold">Standard 17.5%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Manual Deduction Panel */}
                <div className="xl:col-span-1 glass-card p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-2xl bg-rose-50 text-rose-500">
                            <Scissors size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800">Add Manual Deduction</h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">One-time adjustments</p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Deduction Type</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer">
                                <option>Disciplinary Fine</option>
                                <option>Asset Damage Recovery</option>
                                <option>Overpaid Salary Reversal</option>
                                <option>Special Fund Contribution</option>
                                <option>Other Adjustments</option>
                            </select>
                        </div>
                        <div className="space-y-1.5 flex-1 min-w-[200px]">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Adjustment Amount</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 font-bold">PKR</span>
                                <input type="number" placeholder="0.00" className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-14 pr-4 py-2.5 text-sm font-bold text-rose-500 outline-none focus:ring-2 focus:ring-rose-500/20" />
                            </div>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Approval Reference</label>
                            <input type="text" placeholder="e.g. AD-2023-HR-001" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-primary/20" />
                        </div>
                        <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3">
                            <AlertCircle size={18} className="text-primary mt-1 shrink-0" />
                            <p className="text-[10px] font-semibold text-slate-500 leading-relaxed italic">
                                Manual deductions are processed in the following pay cycle. These actions are logged for audit purposes.
                            </p>
                        </div>
                        <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-200 hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                            <Save size={18} className="text-primary" /> Apply Deduction
                        </button>
                    </div>
                </div>

                {/* Tracking Table */}
                <div className="xl:col-span-2 glass-card rounded-[2.5rem] overflow-hidden border border-slate-100 bg-white shadow-sm flex flex-col">
                    <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-primary/5">
                        <div className="flex items-center gap-4">
                            <div className="p-2.5 rounded-xl bg-white shadow-sm border border-slate-100 text-primary">
                                <LayoutList size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800 tracking-tight">Active & Scheduled Deductions</h3>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Payroll impact for Nov 2023</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="relative">
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input type="text" placeholder="Search..." className="pl-9 pr-4 py-1.5 bg-white border border-slate-100 rounded-lg text-xs font-semibold outline-none focus:ring-1 focus:ring-primary" />
                            </div>
                            <button className="p-2 rounded-lg bg-white border border-slate-100 text-slate-400 hover:text-primary transition-colors">
                                <Filter size={18} />
                            </button>
                        </div>
                    </div>
                    <div className="p-0 overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">#</th>
                                    <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Deduction Type</th>
                                    <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Effective Date</th>
                                    <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Amount</th>
                                    <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Processing</th>
                                </tr>
                            </thead>
                            <tbody>
                                <DeductionRow id="01" type="Income Tax (WHT)" date="Nov 01, 2023" amount="1,850.00" status="Automatic" color="green" />
                                <DeductionRow id="02" type="Health Insurance" date="Nov 01, 2023" amount="750.00" status="Monthly" color="blue" />
                                <DeductionRow id="03" type="Life Assurance" date="Nov 01, 2023" amount="350.00" status="Monthly" color="blue" />
                                <DeductionRow id="04" type="Asset Fine - Laptop" date="Nov 15, 2023" amount="1,250.00" status="Manual" color="green" />
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-auto p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Info size={16} className="text-primary" />
                            <span className="text-xs font-semibold text-slate-500">Government taxes are calculated based on current fiscal slab (15% - 25%).</span>
                        </div>
                        <button className="flex items-center gap-2 text-primary font-bold text-xs hover:underline">
                            View Slab details <ArrowUpRight size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
