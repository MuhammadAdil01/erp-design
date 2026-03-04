import React from 'react';
import {
    Activity,
    ChevronRight,
    Save,
    TrendingUp,
    TrendingDown,
    Calendar,
    Percent,
    DollarSign,
    RefreshCcw,
    Plus,
    History,
    ArrowUpRight,
    ArrowDownRight,
    Info
} from 'lucide-react';
import { cn } from "@/lib/utils";

const RateCard = ({ title, rate, trend, isUp, color }) => (
    <div className="glass-card p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-primary/50 transition-all">
        <div className="flex justify-between items-start mb-4">
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{title}</h4>
            <div className={cn(
                "flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold",
                isUp ? "bg-green-50 text-green-600" : "bg-rose-50 text-rose-600"
            )}>
                {isUp ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {trend}
            </div>
        </div>
        <div>
            <p className="text-2xl font-bold text-slate-800">{rate}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Base Currency: PKR</p>
        </div>
        <div className={cn("w-full h-1 rounded-full mt-4 bg-slate-50 overflow-hidden")}>
            <div className={cn("h-full transition-all duration-1000", `bg-${color}`)} style={{ width: '65%' }}></div>
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

export default function PMSRate() {
    return (
        <div className="space-y-6 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Financials</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">PMS Rate Manager</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary tracking-tight">Performance & Property Rates</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-white transition-all font-bold shadow-sm flex items-center gap-2">
                        <RefreshCcw size={18} /> Sync ERP
                    </button>
                    <button className="px-8 py-2.5 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                        <Save size={18} /> Apply Rates
                    </button>
                </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <RateCard title="Occupancy Rate" rate="84.2%" trend="+5.4%" isUp={true} color="primary" />
                <RateCard title="Avg Daily Rate" rate="12,500" trend="+1.2%" isUp={true} color="blue-500" />
                <RateCard title="RevPAR Index" rate="10,520" trend="-2.1%" isUp={false} color="rose-500" />
                <RateCard title="Tax Variance" rate="1.42%" trend="+0.05%" isUp={true} color="green-500" />
            </div>

            {/* Rate Adjustment Panel */}
            <div className="glass-card rounded-[2.5rem] bg-white border border-slate-100 overflow-hidden shadow-sm">
                <div className="p-8 bg-primary/5 border-b border-primary/10 flex flex-wrap items-end gap-6">
                    <div className="space-y-1.5 flex-1 min-w-[240px]">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Select Target Property / Entity</label>
                        <select className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 text-lg font-bold outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                            <option>Head Office - Corporate Branch</option>
                            <option>Retail Store - Zone A</option>
                            <option>Warehouse Complex - North</option>
                            <option>Resort & Spa - Phase 1</option>
                        </select>
                    </div>
                    <div className="flex gap-3">
                        <InputField label="Fiscal Period" placeholder="FY2024 - Q3" className="w-[180px]" />
                        <div className="p-4 bg-white border border-slate-200 rounded-2xl flex items-center gap-4 shadow-sm h-14 translate-y-[-1px]">
                            <Calendar size={20} className="text-primary" />
                            <span className="text-xs font-bold text-slate-700">Effective from: Oct 01, 2023</span>
                        </div>
                    </div>
                </div>

                <div className="p-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Rate Entry Grid */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <TrendingUp size={20} className="text-primary" />
                                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Base Rate Structure</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <InputField label="Standard Rack Rate" placeholder="25,000.00" type="number" />
                                <InputField label="Corporate Negotiated" placeholder="18,500.00" type="number" />
                                <InputField label="Long-term Lease Rate" placeholder="15,000.00" type="number" />
                                <InputField label="Daily Operational Cost" placeholder="4,200.00" type="number" />
                            </div>
                        </div>

                        {/* Adjustments & Markups */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <Percent size={20} className="text-primary" />
                                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">dynamic Surcharges & Taxes</h3>
                            </div>
                            <div className="p-8 bg-slate-50/50 rounded-[2rem] border border-slate-100 space-y-6">
                                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                                    <span className="text-sm font-bold text-slate-700">Service Charge (Fixed)</span>
                                    <div className="flex items-center gap-3">
                                        <input type="text" defaultValue="10" className="w-12 bg-white border border-slate-200 rounded-lg py-1 px-2 text-xs font-bold text-center outline-none focus:ring-1 focus:ring-primary h-8" />
                                        <span className="text-xs font-bold text-slate-400">%</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                                    <span className="text-sm font-bold text-slate-700">Municipality Fee</span>
                                    <div className="flex items-center gap-3">
                                        <input type="text" defaultValue="5" className="w-12 bg-white border border-slate-200 rounded-lg py-1 px-2 text-xs font-bold text-center outline-none focus:ring-1 focus:ring-primary h-8" />
                                        <span className="text-xs font-bold text-slate-400">%</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-slate-700">Seasonal Peak Markup</span>
                                    <div className="flex items-center gap-3">
                                        <input type="text" placeholder="Value" className="w-12 bg-white border border-slate-200 rounded-lg py-1 px-2 text-xs font-bold text-center outline-none focus:ring-1 focus:ring-primary h-8" />
                                        <span className="text-xs font-bold text-slate-400">%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Analysis */}
                <div className="p-8 border-t border-slate-50 flex items-center justify-between bg-slate-900 text-white">
                    <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary">
                            <Activity size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Calculated Net Effective Rate</p>
                            <p className="text-xl font-bold">28,750.00 <span className="text-xs text-primary">PKR / Unit</span></p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all font-bold text-xs flex items-center gap-2">
                            <History size={16} /> View Change Log
                        </button>
                        <button className="px-5 py-2.5 rounded-xl bg-white text-slate-900 hover:bg-slate-50 transition-all font-bold text-xs flex items-center gap-2">
                            <Info size={16} className="text-primary" /> View Documentation
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
