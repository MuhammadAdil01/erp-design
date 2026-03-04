import React from 'react';
import {
    FilePlus,
    ChevronRight,
    Save,
    Plus,
    Trash2,
    Layout,
    Type,
    ClipboardList,
    Copy,
    Settings2,
    CheckCircle2
} from 'lucide-react';
import { cn } from "@/lib/utils";

const InputField = ({ label, placeholder, type = "text", className = "" }) => (
    <div className={cn("space-y-1.5 flex-1 min-w-[200px]", className)}>
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
        <div className="relative">
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all font-semibold text-slate-700"
            />
        </div>
    </div>
);

const LineItem = ({ id }) => (
    <tr className="group hover:bg-primary/[0.02] transition-colors border-b border-slate-50 last:border-0">
        <td className="py-4 px-6 text-sm font-bold text-slate-400">{id}</td>
        <td className="py-4 px-6">
            <input type="text" placeholder="Account Code..." className="w-full bg-transparent border-none p-0 text-sm font-semibold text-slate-700 outline-none focus:ring-0 placeholder:text-slate-300" />
        </td>
        <td className="py-4 px-6">
            <input type="text" placeholder="Account Name (Auto)..." className="w-full bg-transparent border-none p-0 text-sm font-semibold text-slate-400 outline-none focus:ring-0 placeholder:text-slate-300" readOnly />
        </td>
        <td className="py-4 px-6">
            <select className="bg-transparent border-none p-0 text-sm font-semibold text-slate-700 outline-none focus:ring-0 cursor-pointer w-full">
                <option>Debit</option>
                <option>Credit</option>
            </select>
        </td>
        <td className="py-4 px-6">
            <input type="text" placeholder="Formula / %" className="w-full bg-transparent border-none p-0 text-sm font-semibold text-slate-700 outline-none focus:ring-0 placeholder:text-slate-300" />
        </td>
        <td className="py-4 px-6">
            <input type="text" placeholder="Default Remarks" className="w-full bg-transparent border-none p-0 text-sm font-semibold text-slate-700 outline-none focus:ring-0 placeholder:text-slate-300" />
        </td>
        <td className="py-4 px-6 text-right">
            <button className="p-1.5 text-slate-300 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100">
                <Trash2 size={16} />
            </button>
        </td>
    </tr>
);

export default function PostingTemplates() {
    return (
        <div className="space-y-6 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Financials</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Posting Templates</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary tracking-tight">Voucher & Posting Templates</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-white transition-all font-bold shadow-sm flex items-center gap-2">
                        <Copy size={18} /> Duplicate
                    </button>
                    <button className="px-8 py-2.5 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                        <Save size={18} /> Save Template
                    </button>
                </div>
            </div>

            {/* Template Identification Card */}
            <div className="glass-card rounded-[2rem] p-8 bg-white border border-slate-100 flex flex-wrap items-end gap-6 shadow-sm">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <ClipboardList size={28} />
                </div>
                <div className="flex-1 min-w-[240px] space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <InputField label="Template Name" placeholder="e.g. Monthly Rent Accrual" />
                        <InputField label="Template Code" placeholder="TEMP-001" />
                        <div className="space-y-1.5 flex-1 min-w-[200px]">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Voucher Type</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold text-slate-700 cursor-pointer appearance-none">
                                <option>Journal Voucher</option>
                                <option>Payment Voucher</option>
                                <option>Receipt Voucher</option>
                                <option>Contra Voucher</option>
                            </select>
                        </div>
                        <div className="space-y-1.5 flex-1 min-w-[200px]">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Automation Mode</label>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-500 italic">
                                Manual Trigger (Template Only)
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Template Lines Table */}
            <div className="glass-card rounded-[2.5rem] overflow-hidden border border-slate-100 bg-white shadow-sm">
                <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-primary/5">
                    <div className="flex items-center gap-4">
                        <div className="p-2.5 rounded-xl bg-white shadow-sm border border-slate-100 text-primary">
                            <Layout size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-800 tracking-tight">Template Structures</h3>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Define debit/credit rules for this template</p>
                        </div>
                    </div>
                    <button className="px-5 py-2 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20 flex items-center gap-2 text-xs">
                        <Plus size={16} /> Add Position
                    </button>
                </div>
                <div className="p-0 overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50">
                                <th className="py-5 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 w-16">#</th>
                                <th className="py-5 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">G/L Account Code</th>
                                <th className="py-5 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">G/L Account Name</th>
                                <th className="py-5 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Side</th>
                                <th className="py-5 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Amount / Base %</th>
                                <th className="py-5 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Default Memo</th>
                                <th className="py-5 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <LineItem key={i} id={i} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-8 bg-slate-50/30 border-t border-slate-100 flex justify-between items-center">
                    <div className="flex gap-8">
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Configuration Check</p>
                            <p className="text-xs font-bold text-green-600 flex items-center gap-2">
                                <CheckCircle2 size={14} /> Totals Balanced (100.00%)
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advanced Settings Bottom Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="glass-card p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent"></div>
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                        <Settings2 size={24} className="text-primary" />
                        <h3 className="font-bold">Posting Frequency Settings</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-6 relative z-10">
                        <div className="space-y-4">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="w-5 h-5 rounded-lg border-white/20 bg-white/5 text-primary focus:ring-primary" />
                                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Enable Auto-Generation</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="w-5 h-5 rounded-lg border-white/20 bg-white/5 text-primary focus:ring-primary" />
                                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Requires Approval</span>
                            </label>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Execution Priority</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm font-semibold outline-none focus:ring-1 focus:ring-primary/50">
                                    <option>High</option>
                                    <option>Normal</option>
                                    <option>Low</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-card p-8 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4 text-slate-400">
                        <Type size={20} />
                        <h3 className="text-xs font-bold uppercase tracking-widest">User Access & permissions</h3>
                    </div>
                    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                        Templates are global by default but can be restricted to specific departments or financial roles.
                    </p>
                    <div className="flex gap-2">
                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-600 uppercase tracking-widest">Finance Admin</span>
                        <span className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-bold text-slate-600 uppercase tracking-widest">Audit Manager</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
