import React from 'react';
import {
    BarChart3,
    ChevronRight,
    Save,
    Plus,
    Search,
    ListTree
} from 'lucide-react';
import { cn } from "@/lib/utils";

const InputField = ({ label, placeholder, type = "text" }) => (
    <div className="space-y-1.5 flex-1 min-w-[240px]">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
        />
    </div>
);

const SelectField = ({ label, options }) => (
    <div className="space-y-1.5 flex-1 min-w-[240px]">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all appearance-none cursor-pointer">
            {options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

export default function ChartOfAccounts() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Financials</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Chart of Accounts</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary">Chart of Accounts Setup</h1>
                </div>
            </div>

            <div className="glass-card rounded-[2rem] overflow-hidden">
                <div className="bg-primary/5 p-8 border-b border-primary/10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-2xl bg-white shadow-sm border border-primary/10">
                            <ListTree size={24} className="text-primary" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-800">New Account Entry</h2>
                            <p className="text-sm text-slate-500">Define your ledger structure with precision</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <InputField label="Account Code" placeholder="e.g. 101001" />
                        <InputField label="Account Name" placeholder="e.g. Cash at Bank" />
                        <SelectField label="Account Type" options={['Assets', 'Liabilities', 'Equity', 'Revenue', 'Expenses']} />
                        <SelectField label="Category" options={['Current Assets', 'Fixed Assets', 'Operating Expenses', 'Direct Revenue']} />
                        <SelectField label="Sub-Category" options={['Bank Accounts', 'Cash Accounts', 'Inventory', 'Receivables']} />
                        <SelectField label="Currency" options={['PKR', 'USD', 'AED', 'SAR']} />
                        <InputField label="Opening Balance" placeholder="0.00" type="number" />
                        <InputField label="Target Balance" placeholder="0.00" type="number" />
                        <SelectField label="Tax Group" options={['Exempt', 'Standard 17%', 'Reduced 5%']} />
                        <InputField label="Reference No." placeholder="..." />
                        <InputField label="Integration Key" placeholder="ERP-ID-..." />
                        <SelectField label="Reporting Group" options={['Head Office', 'Retail', 'Online']} />
                    </div>
                </div>

                <div className="p-8 space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-1">Additional Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1.5 flex-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Description</label>
                                <textarea
                                    rows="3"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all resize-none"
                                    placeholder="Enter account description..."
                                />
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 pointer-events-auto cursor-pointer" />
                                    <span className="text-sm font-bold text-slate-700">Account is Active</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 cursor-pointer" />
                                    <span className="text-sm font-bold text-slate-700">Allow Manual Postings</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-3 border-t border-slate-100">
                        <button className="px-8 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all font-bold">
                            Discard
                        </button>
                        <button className="px-8 py-3 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                            <Save size={18} /> Create Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
