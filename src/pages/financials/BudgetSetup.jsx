import React from 'react';
import {
    BarChart,
    ChevronRight,
    Save,
    Plus,
    TrendingUp,
    Target
} from 'lucide-react';
import { cn } from "@/lib/utils";

const InputField = ({ label, placeholder, type = "text" }) => (
    <div className="space-y-1.5 flex-1 min-w-[240px]">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
        />
    </div>
);

const BudgetRow = ({ department, allocated, utilized }) => (
    <div className="grid grid-cols-3 gap-6 p-4 hover:bg-slate-50 rounded-2xl transition-all border-b border-slate-50 last:border-0 border-dashed">
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                {department.charAt(0)}
            </div>
            <span className="text-sm font-bold text-slate-800">{department}</span>
        </div>
        <div className="text-sm font-semibold text-slate-600">$ {allocated}</div>
        <div className="text-sm font-bold text-primary">Utilized: {utilized}%</div>
    </div>
);

export default function BudgetSetup() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Financials</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Budget Setup</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary">Financial Budgeting</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="glass-card rounded-[2.5rem] p-8">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-2xl bg-white shadow-sm border border-primary/10">
                                <Target size={24} className="text-primary" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-slate-800">Assign New Budget</h2>
                                <p className="text-sm text-slate-500">Master allocation for the upcoming fiscal cycle</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 pb-8 border-b border-slate-50">
                            <InputField label="Fiscal Year" placeholder="2023-2024" />
                            <div className="space-y-1.5 flex-1 min-w-[240px]">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Department</label>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all appearance-none cursor-pointer">
                                    <option>Sales & Marketing</option>
                                    <option>R&D Engineering</option>
                                    <option>Human Resources</option>
                                    <option>Operations</option>
                                </select>
                            </div>
                            <InputField label="Budget Amount" placeholder="0.00" type="number" />
                            <InputField label="Currency" placeholder="USD / PKR" />
                            <InputField label="Allocation Date" type="date" />
                            <InputField label="Revision Number" placeholder="0" type="number" />
                            <InputField label="Approved By" placeholder="..." />
                            <InputField label="Strategic Goal" placeholder="e.g. Market Expansion" />
                            <InputField label="Priority Level" placeholder="High / Medium / Low" />
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">Existing Allocations</h3>
                            <div className="space-y-2">
                                <BudgetRow department="Engineering" allocated="500,000" utilized="45" />
                                <BudgetRow department="Marketing" allocated="250,000" utilized="12" />
                                <BudgetRow department="HR Services" allocated="100,000" utilized="82" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="glass-card rounded-[2.5rem] p-8 bg-primary/5 border-primary/20">
                        <TrendingUp size={32} className="text-primary mb-6" />
                        <h3 className="text-lg font-bold text-slate-800 mb-2">Budget Forecasting</h3>
                        <p className="text-xs text-slate-500 leading-relaxed mb-6">
                            Based on current trends, your department is likely to exceed the allocated budget by Q4.
                        </p>
                        <div className="p-4 bg-white rounded-2xl border border-primary/10 flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-500 uppercase">Est. Variance</span>
                            <span className="text-sm font-black text-rose-500">+14.2%</span>
                        </div>
                    </div>

                    <button className="w-full py-4 bg-primary text-white rounded-[2rem] font-black text-sm uppercase tracking-widest hover:shadow-2xl hover:shadow-primary/20 transition-all hover:-translate-y-1">
                        Finalize Budget
                    </button>
                </div>
            </div>
        </div>
    );
}
