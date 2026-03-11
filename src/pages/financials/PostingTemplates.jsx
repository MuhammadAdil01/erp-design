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
                      <button className="px-8 py-2.5 mt-10 rounded-xl text-white font-bold shadow-lg flex items-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all"
                            style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
                        >
                        save files
                        </button>
                </div>
            </div>
        </div>
    );
}
