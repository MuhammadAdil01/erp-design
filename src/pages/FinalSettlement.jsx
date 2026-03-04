import React from 'react';
import {
    FileCheck,
    HandCoins,
    ChevronRight,
    ExternalLink,
    ShieldAlert,
    Save,
    Printer
} from 'lucide-react';
import { cn } from "@/lib/utils";

const SettlementRow = ({ label, value, type = "amount" }) => (
    <div className="flex items-center justify-between py-4 border-b border-slate-100 last:border-0">
        <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">{label}</span>
        <span className={cn(
            "text-lg font-bold",
            type === "total" ? "text-primary text-2xl" : "text-slate-800"
        )}>
            {type === "amount" ? `$${value}` : value}
        </span>
    </div>
);

export default function FinalSettlement() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Human Resources</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Final Settlement</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary">Final Settlement Processing</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all font-semibold flex items-center gap-2">
                        <Printer size={18} /> Print Preview
                    </button>
                    <button className="px-5 py-2.5 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                        <FileCheck size={18} /> Approve Payout
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                    <div className="glass-card rounded-[2.5rem] p-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-8 border-b border-slate-50 pb-4">Settlement Breakdown</h2>
                        <div className="space-y-2">
                            <SettlementRow label="Gratuity Amount" value="12,500.00" />
                            <SettlementRow label="Leave Encashment (15 Days)" value="2,250.00" />
                            <SettlementRow label="Pending Salary (Current Month)" value="4,000.00" />
                            <SettlementRow label="Notice Period Buyout" value="1,500.00" />
                            <div className="bg-primary/5 rounded-2xl p-6 mt-6">
                                <SettlementRow label="Total Settlement Amount" value="20,250.00" type="total" />
                            </div>
                        </div>
                    </div>

                    <div className="glass-card rounded-[2.5rem] p-8">
                        <h2 className="text-xl font-bold text-slate-800 mb-6">Clearance Checklist</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { label: 'IT Asset Return', status: 'Done' },
                                { label: 'Employee ID Card', status: 'Done' },
                                { label: 'Finance Dues', status: 'Pending' },
                                { label: 'Project Handover', status: 'Done' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                    <span className="text-sm font-bold text-slate-600">{item.label}</span>
                                    <span className={cn(
                                        "px-3 py-1 rounded-full text-[10px] font-bold uppercase",
                                        item.status === 'Done' ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                                    )}>
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="glass-card rounded-[2.5rem] p-8 bg-primary/5 border-primary/20">
                        <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-6">
                            <HandCoins size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">Processing Parameters</h3>
                        <p className="text-sm text-slate-500 mb-6 leading-relaxed">Ensure all parameters comply with the latest labor law regulations before disbursement.</p>
                        <div className="space-y-4">
                            <div className="space-y-1.5 flex-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Resignation Date</label>
                                <input type="date" className="w-full bg-white border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold" defaultValue="2023-10-30" />
                            </div>
                            <div className="space-y-1.5 flex-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Last Working Day</label>
                                <input type="date" className="w-full bg-white border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold" defaultValue="2023-11-30" />
                            </div>
                            <div className="space-y-1.5 flex-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Reason for Exit</label>
                                <select className="w-full bg-white border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold">
                                    <option>Resignation</option>
                                    <option>Termination</option>
                                    <option>End of Contract</option>
                                    <option>Retirement</option>
                                </select>
                            </div>
                            <div className="space-y-1.5 flex-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Notice Period Met</label>
                                <select className="w-full bg-white border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold">
                                    <option>Full Period</option>
                                    <option>Waived</option>
                                    <option>Short Notice</option>
                                </select>
                            </div>
                            <div className="space-y-1.5 flex-1">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Processing Mode</label>
                                <select className="w-full bg-white border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold">
                                    <option>Standard (30 Days)</option>
                                    <option>Expedited (7 Days)</option>
                                    <option>Immediate</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="glass-card rounded-[2.5rem] p-8 border-rose-100">
                        <div className="flex items-center gap-3 mb-4 text-rose-500">
                            <ShieldAlert size={20} />
                            <h3 className="font-bold">Important Notice</h3>
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">
                            Final approval must be signed by the Department Manager and HR Director before fund transfer.
                        </p>
                        <button className="mt-6 w-full py-3 bg-slate-800 text-white rounded-xl text-sm font-bold hover:bg-slate-900 transition-colors flex items-center justify-center gap-2">
                            Review Policy <ExternalLink size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
