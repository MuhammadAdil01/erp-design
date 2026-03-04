import React from 'react';
import {
    BarChart3,
    ChevronRight,
    Save,
    Search,
    ListTree,
    Edit3,
    History,
    FileText,
    ArrowUpDown,
    CheckCircle2
} from 'lucide-react';
import { cn } from "@/lib/utils";

const InputField = ({ label, placeholder, type = "text", className = "" }) => (
    <div className={cn("space-y-1.5 flex-1 min-w-[240px]", className)}>
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all font-semibold text-slate-700"
        />
    </div>
);

const SelectField = ({ label, options, className = "" }) => (
    <div className={cn("space-y-1.5 flex-1 min-w-[240px]", className)}>
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all appearance-none cursor-pointer font-semibold text-slate-700">
            {options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

export default function EditChartOfAccounts() {
    return (
        <div className="space-y-6 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Financials</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Edit Chart of Accounts</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary tracking-tight">Modify Financial Structure</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-white transition-all font-bold shadow-sm">
                        Cancel Changes
                    </button>
                    <button className="px-8 py-2.5 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                        <Save size={18} /> Update Account
                    </button>
                </div>
            </div>

            {/* Account Search/Select */}
            <div className="glass-card rounded-[2rem] p-8 bg-slate-900 text-white flex flex-wrap items-center gap-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-full bg-primary/10 -skew-x-12 translate-x-32"></div>

                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-primary relative z-10">
                    <Search size={32} />
                </div>

                <div className="flex-1 min-w-[300px] relative z-10">
                    <label className="text-[10px] font-bold text-primary uppercase tracking-widest mb-2 block">Search Existing Account</label>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Type Account Code or Name (e.g. 101001 - Petty Cash)"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-lg font-bold outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-white/20"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-2">
                            <span className="px-3 py-1 bg-primary/20 rounded-lg text-[10px] font-bold uppercase tracking-widest">Active</span>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex flex-col gap-2 relative z-10 border-l border-white/10 pl-8">
                    <div className="flex items-center gap-3">
                        <History size={16} className="text-primary" />
                        <span className="text-xs font-semibold text-slate-300">Last modified: 2 hours ago</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-green-400" />
                        <span className="text-xs font-semibold text-slate-300">Audited: FY2023-Q4</span>
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="glass-card rounded-[2.5rem] overflow-hidden border border-slate-100 bg-white">
                <div className="bg-primary/5 p-8 border-b border-primary/10">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-2xl bg-white shadow-sm border border-primary/10">
                            <Edit3 size={24} className="text-primary" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-800">Core Account Details</h2>
                            <p className="text-sm text-slate-500 font-medium">Update foundational ledger parameters</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <InputField label="Account Code" placeholder="101001" />
                        <InputField label="Account Name" placeholder="Petty Cash - Head Office" />
                        <SelectField label="Account Type" options={['Assets', 'Liabilities', 'Equity', 'Revenue', 'Expenses']} />
                        <SelectField label="Category" options={['Current Assets', 'Fixed Assets', 'Operating Expenses', 'Direct Revenue']} />
                        <SelectField label="Sub-Category" options={['Bank Accounts', 'Cash Accounts', 'Inventory', 'Receivables']} />
                        <SelectField label="Currency" options={['PKR', 'USD', 'AED', 'SAR']} />
                        <InputField label="Opening Balance" placeholder="25,000.00" type="number" />
                        <InputField label="Current Balance" placeholder="18,450.00" type="number" />
                        <SelectField label="Tax Group" options={['Exempt', 'Standard 17%', 'Reduced 5%']} />
                        <InputField label="Integration Key" placeholder="ERP-ID-101-PETTY" />
                        <SelectField label="Reporting Group" options={['Head Office', 'Retail', 'Online']} />
                        <InputField label="External Reference" placeholder="REF-BANK-009" />
                    </div>
                </div>

                <div className="p-10 space-y-10">
                    {/* Advanced Controls */}
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1 flex items-center gap-2">
                            <ArrowUpDown size={14} className="text-primary" /> Posting Controls & Behavior
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-slate-50/50 rounded-[2rem] border border-slate-100 group hover:shadow-lg hover:shadow-primary/5 transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded-lg text-primary focus:ring-primary border-slate-300 cursor-pointer" />
                                    <span className="text-sm font-bold text-slate-700">Manual Postings Allowed</span>
                                </div>
                                <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">System permits manual journal entries to this account.</p>
                            </div>
                            <div className="p-6 bg-slate-50/50 rounded-[2rem] border border-slate-100 group hover:shadow-lg hover:shadow-primary/5 transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <input type="checkbox" className="w-5 h-5 rounded-lg text-primary focus:ring-primary border-slate-300 cursor-pointer" />
                                    <span className="text-sm font-bold text-slate-700">Block Sub-Ledger Posting</span>
                                </div>
                                <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">Prevent automatic postings from sales or purchase modules.</p>
                            </div>
                            <div className="p-6 bg-slate-50/50 rounded-[2rem] border border-slate-100 group hover:shadow-lg hover:shadow-primary/5 transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <input type="checkbox" className="w-5 h-5 rounded-lg text-primary focus:ring-primary border-slate-300 cursor-pointer" />
                                    <span className="text-sm font-bold text-slate-700">Reconciliation Account</span>
                                </div>
                                <p className="text-[10px] text-slate-400 font-semibold leading-relaxed">Designate this as a control account for AR/AP modules.</p>
                            </div>
                        </div>
                    </div>

                    {/* Metadata & Description */}
                    <div className="space-y-6">
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1 flex items-center gap-2">
                            <FileText size={14} className="text-primary" /> Detailed Documentation
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="space-y-1.5 flex-1">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Internal Memo / Notes</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all resize-none font-semibold text-slate-600"
                                        placeholder="Detailed explanation of the account's purpose..."
                                    />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <InputField label="Reporting Tag / Label" placeholder="Operations_Budget_2024" />
                                <div className="p-5 border-2 border-dashed border-slate-100 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer">
                                    <ListTree size={20} className="mb-2" />
                                    <p className="text-[10px] font-bold uppercase tracking-widest">Assign to Parent Account</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
