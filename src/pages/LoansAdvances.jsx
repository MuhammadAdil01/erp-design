import React from 'react';
import {
    Banknote,
    ChevronRight,
    Save,
    History,
    FileText,
    Percent,
    ArrowUpRight,
    LayoutDashboard,
    Plus,
    Trash2,
    CheckCircle2,
    Clock,
    UserCircle2,
    Calendar,
    Wallet
} from 'lucide-react';
import { cn } from "@/lib/utils";

const LoanSummaryCard = ({ title, value, sub, icon: Icon, color }) => (
    <div className="glass-card p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center gap-6 group hover:border-primary/50 transition-all">
        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110", `bg-${color}/10 text-${color}`)}>
            <Icon size={28} />
        </div>
        <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</h4>
            <p className="text-2xl font-bold text-slate-800">{value}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{sub}</p>
        </div>
    </div>
);

const InputField = ({ label, placeholder, type = "text", className = "" }) => (
    <div className={cn("space-y-1.5 flex-1 min-w-[200px]", className)}>
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold text-slate-700"
        />
    </div>
);

export default function LoansAdvances() {
    return (
        <div className="space-y-6 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Human Resources</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Loans & Advances</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary tracking-tight">Employee Financial Support Registry</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-white transition-all font-bold shadow-sm flex items-center gap-2">
                        <History size={18} /> Loan Statements
                    </button>
                    <button className="px-8 py-2.5 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                        <Plus size={18} /> New Request
                    </button>
                </div>
            </div>

            {/* Financial Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <LoanSummaryCard title="Outstanding Balance" value="120,000" sub="Across 01 Active Loan" icon={Wallet} color="primary" />
                <LoanSummaryCard title="Total installments Paid" value="45,000" sub="Last Payment: Oct 30" icon={CheckCircle2} color="green-500" />
                <LoanSummaryCard title="Remaining Tenure" value="18 Months" sub="Ends: April 2025" icon={Calendar} color="blue-500" />
                <LoanSummaryCard title="Pending Applications" value="00" sub="All requests processed" icon={Clock} color="rose-500" />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Application & Details Panel */}
                <div className="xl:col-span-2 glass-card p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                            <Banknote size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">Support Request Details</h3>
                            <p className="text-sm text-slate-500 font-medium">Configure loan terms and repayment plan</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1.5 flex-1 min-w-[200px]">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Support Category</label>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer">
                                    <option>Salary Advance (Short Term)</option>
                                    <option>Personal Loan (Long Term)</option>
                                    <option>Vehicle Purchase Support</option>
                                    <option>Home Renovation / Mortgage Aid</option>
                                    <option>Medical Emergency Advance</option>
                                </select>
                            </div>
                            <InputField label="Principal Amount Requested" placeholder="0.00" type="number" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <InputField label="Repayment Tenure (Months)" placeholder="12" type="number" />
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Interest / Markup Rate</label>
                                <div className="flex items-center gap-3 h-11 px-4 bg-slate-50 rounded-xl border border-slate-200">
                                    <Percent size={16} className="text-primary" />
                                    <span className="text-xs font-bold text-slate-700">0.00% (Interest-Free)</span>
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Monthly Installment (Auto)</label>
                                <div className="h-11 px-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center font-bold text-sm text-primary italic">
                                    Calculated...
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Justification / Request Reason</label>
                            <textarea
                                rows="3"
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none font-semibold text-slate-600"
                                placeholder="Please provide specific reasoning for the financial support..."
                            />
                        </div>

                        <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -translate-y-16 translate-x-16"></div>
                            <div className="flex flex-wrap items-center justify-between gap-8 relative z-10">
                                <div className="flex items-center gap-4">
                                    <LayoutDashboard size={24} className="text-primary" />
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Impact on Net Salary</p>
                                        <p className="text-sm font-bold">~ 15% Reduction <span className="text-[10px] text-slate-400 font-normal ml-2">Estimated</span></p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <button className="px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all text-xs">
                                        Preview Repayment Schedule
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Status Tracking */}
                <div className="space-y-8">
                    <div className="glass-card p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 mb-6">
                            <UserCircle2 size={48} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">John Doe</h3>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Eligibility Score: 85/100</p>

                        <div className="w-full space-y-4">
                            <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                <span>Max Entitlement Limit</span>
                                <span className="text-slate-800">500,000</span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-50 rounded-full overflow-hidden">
                                <div className="w-[60%] h-full bg-primary"></div>
                            </div>
                            <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-widest pt-2">
                                <span>Current Exposure</span>
                                <span className="text-rose-500 font-bold">120,000</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <FileText size={18} className="text-primary" />
                            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Policy Prerequisites</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                { text: 'Minimum 6 months tenure', ok: true },
                                { text: 'No active disciplinary warnings', ok: true },
                                { text: 'Outstanding balance < 3x Salary', ok: false },
                                { text: 'Guarantor required for items > 200k', ok: true },
                            ].map((policy, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-slate-500">{policy.text}</span>
                                    {policy.ok ? <CheckCircle2 size={14} className="text-green-500" /> : <Clock size={14} className="text-amber-500" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
