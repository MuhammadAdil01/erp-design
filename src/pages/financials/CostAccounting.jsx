import React from 'react';
import {
    PieChart,
    ChevronRight,
    Save,
    Plus,
    Layers,
    Activity,
    ArrowUpRight
} from 'lucide-react';
import { cn } from "@/lib/utils";

const InputField = ({ label, placeholder, type = "text" }) => (
    <div className="space-y-1.5 flex-1 min-w-[200px]">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold text-slate-700"
        />
    </div>
);

export default function CostAccounting() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Financials</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Cost Accounting</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary">Cost Center Management</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                    <div className="glass-card rounded-[2.5rem] p-8">
                        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-50">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                                <Layers size={24} />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-slate-800">Cost Allocation Setup</h2>
                                <p className="text-sm text-slate-500">Distribute expenses across business units</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            <div className="space-y-6">
                                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Primary Center
                                </h3>
                                <div className="grid grid-cols-1 gap-6">
                                    <InputField label="Cost Center Code" placeholder="CC-101" />
                                    <InputField label="Name" placeholder="Engineering Dept" />
                                    <div className="space-y-1.5 flex-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Center Type</label>
                                        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm cursor-pointer outline-none focus:ring-2 focus:ring-primary/20 font-semibold text-slate-700">
                                            <option>Production Center</option>
                                            <option>Service Center</option>
                                            <option>Administrative Center</option>
                                        </select>
                                    </div>
                                    <InputField label="Parent Center" placeholder="Corporate HQ" />
                                    <InputField label="Manager" placeholder="Robert Fox" />
                                    <InputField label="Functional Area" placeholder="Product Dev" />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                    Allocation Basis
                                </h3>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="space-y-1.5 flex-1">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Base Factor</label>
                                        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm cursor-pointer outline-none focus:ring-2 focus:ring-primary/20 font-semibold text-slate-700">
                                            <option>Direct Man Hours</option>
                                            <option>Machine Hours</option>
                                            <option>Square Footage</option>
                                            <option>Number of Employees</option>
                                            <option>Electricity Consumption</option>
                                        </select>
                                    </div>
                                    <InputField label="Allocation Rate" placeholder="0.00" type="number" />
                                    <InputField label="Surcharge %" placeholder="0.00" type="number" />
                                    <InputField label="Budget Cap" placeholder="100,000" type="number" />
                                    <InputField label="Effective Date" type="date" />
                                    <InputField label="Expiry Date" type="date" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex justify-end">
                            <button className="px-12 py-3.5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                                Initialize Center
                            </button>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="glass-card rounded-[2.5rem] p-8">
                        <Activity size={24} className="text-primary mb-4" />
                        <h3 className="font-bold text-slate-800 mb-2">Cost Audit</h3>
                        <p className="text-xs text-slate-500 leading-relaxed mb-6">
                            Weekly analysis of overhead efficiency and indirect cost absorption rates.
                        </p>
                        <div className="space-y-3">
                            {[
                                { label: 'Variance', val: '-2.4%', up: false },
                                { label: 'Efficiency', val: '98.1%', up: true },
                            ].map((stat, i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                                    <span className="text-[10px] font-bold text-slate-500 uppercase">{stat.label}</span>
                                    <span className={cn("text-xs font-black", stat.up ? "text-green-500" : "text-rose-500")}>
                                        {stat.val}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white">
                        <h4 className="text-sm font-bold opacity-60 uppercase mb-4 tracking-widest">Absorption Rate</h4>
                        <div className="text-3xl font-black italic mb-6">1.42x</div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-[72%]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
