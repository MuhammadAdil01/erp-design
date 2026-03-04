import React, { useState } from 'react';
import {
    FileEdit,
    ChevronRight,
    Save,
    Plus,
    Trash2,
    AlertCircle,
    Link as LinkIcon
} from 'lucide-react';
import { cn } from "@/lib/utils";

const InputField = ({ label, placeholder, type = "text", value }) => (
    <div className="space-y-1.5 flex-1 min-w-[200px]">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
        <input
            type={type}
            defaultValue={value}
            placeholder={placeholder}
            className="w-full bg-slate-50/50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
        />
    </div>
);

export default function JournalEntry() {
    const [rows, setRows] = useState([1, 2]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Financials</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Journal Entry</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary">Post Journal Entry</h1>
                </div>
            </div>

            <div className="glass-card rounded-[2.5rem] overflow-hidden">
                {/* Entry Information */}
                <div className="p-8 bg-primary/5 border-b border-primary/10">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                            <FileEdit size={24} className="text-primary" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-800">Batch Details</h2>
                            <p className="text-sm text-slate-500">Reference: JE-2023-11-004</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <InputField label="Posting Date" type="date" value="2023-11-01" />
                        <InputField label="Document Date" type="date" value="2023-11-01" />
                        <InputField label="Reference No." placeholder="e.g. INV-8821" />
                        <InputField label="External Doc No." placeholder="..." />
                        <div className="lg:col-span-2">
                            <InputField label="General Remarks" placeholder="Enter batch memo..." />
                        </div>
                        <div className="lg:col-span-1">
                            <InputField label="Journal Type" placeholder="Standard / Recurring" />
                        </div>
                        <div className="lg:col-span-1">
                            <InputField label="Currency Rate" placeholder="1.000" />
                        </div>
                    </div>
                </div>

                {/* Entry Rows */}
                <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Entry Rows</h3>
                        <button
                            onClick={() => setRows([...rows, rows.length + 1])}
                            className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-bold hover:bg-slate-900 transition-all flex items-center gap-2"
                        >
                            <Plus size={14} /> Add Line Item
                        </button>
                    </div>

                    <div className="space-y-4">
                        {rows.map((row, i) => (
                            <div key={i} className="flex flex-wrap items-end gap-4 p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100 group transition-all hover:bg-white hover:shadow-xl hover:shadow-primary/5">
                                <div className="flex-1 min-w-[300px]">
                                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1.5 block">Account</label>
                                    <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                                        <option>Select Ledger Account...</option>
                                        <option>101001 - Cash in Hand</option>
                                        <option>202005 - Accounts Payable</option>
                                        <option>405001 - Sales Revenue</option>
                                        <option>501001 - Cost of Goods Sold</option>
                                    </select>
                                </div>
                                <InputField label="Debit" placeholder="0.00" />
                                <InputField label="Credit" placeholder="0.00" />
                                <InputField label="Tax Code" placeholder="VAT-17" />
                                <InputField label="Cost Center" placeholder="CC-001" />
                                <div className="flex-1 min-w-[200px]">
                                    <InputField label="Line Memo" placeholder="..." />
                                </div>
                                <InputField label="Reference" placeholder="Ref..." />
                                <button className="p-2 mb-0.5 text-slate-300 hover:text-rose-500 transition-colors">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Footer Totals */}
                    <div className="mt-8 p-8 bg-slate-800 rounded-[2rem] text-white flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex gap-12">
                            <div>
                                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Total Debit</p>
                                <p className="text-2xl font-bold italic">$ 0.00</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Total Credit</p>
                                <p className="text-2xl font-bold italic">$ 0.00</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-primary bg-primary/10 px-4 py-2 rounded-xl border border-primary/20">
                                <AlertCircle size={16} />
                                <span className="text-xs font-bold uppercase tracking-wider">Out of Balance</span>
                            </div>
                            <button className="px-10 py-4 bg-primary text-slate-900 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl shadow-primary/20">
                                Post Entry
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
