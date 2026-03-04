import React from 'react';
import {
    ArrowLeftRight,
    ChevronRight,
    Save,
    Search,
    Divide,
    CheckCircle2,
    Calendar,
    Filter,
    Plus,
    Scale,
    Trash2,
    AlertCircle,
    ArrowRight
} from 'lucide-react';
import { cn } from "@/lib/utils";

const TransactionRow = ({ id, date, ref, amount, side }) => (
    <tr className="group hover:bg-primary/[0.02] transition-colors border-b border-slate-50 last:border-0">
        <td className="py-3 px-4">
            <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 cursor-pointer" />
        </td>
        <td className="py-3 px-4 text-[11px] font-bold text-slate-400 uppercase tracking-tighter">{date}</td>
        <td className="py-3 px-4 text-xs font-bold text-slate-700">{ref}</td>
        <td className={cn("py-3 px-4 text-xs font-bold text-right", side === 'debit' ? 'text-primary' : 'text-slate-600')}>
            {amount}
        </td>
    </tr>
);

const ReconcilePanel = ({ title, accountName, icon: Icon }) => (
    <div className="flex-1 min-w-[300px] glass-card rounded-[2rem] border border-slate-100 overflow-hidden bg-white shadow-sm flex flex-col">
        <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white shadow-sm border border-slate-100 text-primary">
                    <Icon size={18} />
                </div>
                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">{title}</h3>
                    <p className="text-sm font-bold text-slate-800">{accountName}</p>
                </div>
            </div>
            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                <Search size={16} />
            </button>
        </div>
        <div className="flex-1 min-h-[400px] overflow-y-auto">
            <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-white/90 backdrop-blur-md z-10 border-b border-slate-50">
                    <tr>
                        <th className="py-3 px-4 w-10"></th>
                        <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date</th>
                        <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ref</th>
                        <th className="py-3 px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest text-right">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <TransactionRow date="01-10-2023" ref="JV-0091" amount="12,500.00" side="debit" />
                    <TransactionRow date="05-10-2023" ref="PV-2201" amount="4,200.00" side="credit" />
                    <TransactionRow date="08-10-2023" ref="RV-1102" amount="750.00" side="debit" />
                    <TransactionRow date="12-10-2023" ref="JV-0098" amount="1,800.00" side="credit" />
                    <TransactionRow date="15-10-2023" ref="JV-0102" amount="9,000.00" side="debit" />
                    <TransactionRow date="20-10-2023" ref="PV-2250" amount="3,150.00" side="credit" />
                </tbody>
            </table>
        </div>
        <div className="p-4 bg-slate-50/50 border-t border-slate-100">
            <div className="flex justify-between items-center px-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Unbalanced Sum</span>
                <span className="text-sm font-bold text-slate-800">14,200.00 <span className="text-[10px] text-slate-400 ml-1">PKR</span></span>
            </div>
        </div>
    </div>
);

export default function InternalReconciliations() {
    return (
        <div className="space-y-6 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Financials</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Internal Reconciliations</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary tracking-tight">Manual & Semi-Auto Reconciliation</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-white transition-all font-bold shadow-sm flex items-center gap-2">
                        <Plus size={18} /> New Batch
                    </button>
                    <button className="px-8 py-2.5 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                        <CheckCircle2 size={18} /> Execute Matching
                    </button>
                </div>
            </div>

            {/* Reconciliation Workspace */}
            <div className="flex flex-col xl:flex-row gap-8 items-stretch">
                <ReconcilePanel title="Source Account" accountName="102001 - Accounts Receivable (Local)" icon={Scale} />
                <div className="flex items-center justify-center p-4">
                    <div className="w-12 h-12 rounded-full border-2 border-slate-100 flex items-center justify-center text-primary bg-white shadow-sm animate-pulse">
                        <ArrowLeftRight size={24} />
                    </div>
                </div>
                <ReconcilePanel title="Target / Contra" accountName="201001 - Customer Deposits (General)" icon={ArrowLeftRight} />
            </div>

            {/* Reconciliation Summary Bar */}
            <div className="glass-card p-10 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-24"></div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                    <div className="space-y-2 border-r border-white/10 pr-8">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Total Selected (Source)</p>
                        <p className="text-2xl font-bold">25,450.00 <span className="text-xs text-slate-400 font-medium">PKR</span></p>
                    </div>
                    <div className="space-y-2 border-r border-white/10 pr-8">
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Total Selected (Target)</p>
                        <p className="text-2xl font-bold text-slate-300">25,000.00 <span className="text-xs text-slate-400 font-medium">PKR</span></p>
                    </div>
                    <div className="space-y-2 border-r border-white/10 pr-8">
                        <p className="text-[10px] font-bold text-rose-400 uppercase tracking-widest flex items-center gap-2">
                            <AlertCircle size={12} /> Out of Balance
                        </p>
                        <p className="text-2xl font-bold text-rose-400 italic">450.00 <span className="text-xs text-slate-400 font-medium">PKR</span></p>
                    </div>
                    <div className="flex items-center">
                        <button className="w-full flex items-center justify-center gap-3 py-4 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/10 transition-all font-bold group">
                            Full Settlement <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-primary" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Advanced Filters Drawer (Peek) */}
            <div className="glass-card p-6 rounded-[2rem] border border-slate-100 bg-white shadow-sm flex items-center gap-8">
                <div className="flex items-center gap-3 text-slate-400">
                    <Filter size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest">Workspace Filters:</span>
                </div>
                <div className="flex gap-4">
                    <span className="px-4 py-1.5 bg-slate-50 text-[10px] font-bold text-slate-600 rounded-lg border border-slate-100 flex items-center gap-2 shadow-sm">
                        <Calendar size={12} className="text-primary" /> Date Range: Oct 2023
                    </span>
                    <span className="px-4 py-1.5 bg-slate-50 text-[10px] font-bold text-slate-600 rounded-lg border border-slate-100 flex items-center gap-2 shadow-sm">
                        <Divide size={12} className="text-primary" /> Multi-Currency Match: Off
                    </span>
                    <span className="px-4 py-1.5 border-2 border-dashed border-slate-200 text-slate-300 text-[10px] font-bold uppercase tracking-widest rounded-lg hover:border-primary/50 hover:text-primary transition-all cursor-pointer">
                        + Add Custom Filter
                    </span>
                </div>
            </div>
        </div>
    );
}
