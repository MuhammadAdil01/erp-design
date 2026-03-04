import React from 'react';
import {
    Plane,
    ChevronRight,
    Plus,
    DollarSign,
    MapPin,
    Calendar,
    Receipt,
    History,
    FileCheck2,
    Clock,
    UserCircle2,
    ArrowRight,
    Wallet,
    Info
} from 'lucide-react';
import { cn } from "@/lib/utils";

const StatCard = ({ title, value, label, icon: Icon, color }) => (
    <div className="glass-card p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-center gap-6 group hover:border-primary/50 transition-all">
        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm", `bg-${color}/10 text-${color}`)}>
            <Icon size={28} />
        </div>
        <div>
            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{title}</h4>
            <p className="text-2xl font-bold text-slate-800">{value}</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{label}</p>
        </div>
    </div>
);

const InputField = ({ label, placeholder, type = "text", className = "" }) => (
    <div className={cn("space-y-1.5 flex-1 min-w-[180px]", className)}>
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold text-slate-700"
        />
    </div>
);

export default function TADA() {
    return (
        <div className="space-y-6 pb-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Human Resources</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">TA / DA Claims</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary tracking-tight">Travel & Allowance Settlement</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-white transition-all font-bold shadow-sm flex items-center gap-2">
                        <Receipt size={18} /> View Vouchers
                    </button>
                    <button className="px-8 py-2.5 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                        <Plus size={18} /> New Claim Request
                    </button>
                </div>
            </div>

            {/* Top Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard title="Total Claimed" value="45,200" label="Current Fiscal Year" icon={Wallet} color="primary" />
                <StatCard title="Pending Review" value="8,500" label="03 Pending Claims" icon={Clock} color="rose-500" />
                <StatCard title="Approved / Paid" value="36,700" label="Last Paid: Oct 12" icon={FileCheck2} color="green-500" />
                <StatCard title="Active Trips" value="02" label="On-site Assignments" icon={MapPin} color="blue-500" />
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                {/* Claim Form */}
                <div className="xl:col-span-2 glass-card p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 rounded-2xl bg-primary shadow-lg shadow-primary/20 text-white">
                            <Plane size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-slate-800">Submit New Travel Claim</h3>
                            <p className="text-sm text-slate-500 font-medium">Categorize and detail your business expenses</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-1.5 flex-1 min-w-[180px]">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Purpose of Visit</label>
                                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer">
                                    <option>Client Meeting</option>
                                    <option>Technical Survey</option>
                                    <option>Project Deployment</option>
                                    <option>Inter-branch Transfer</option>
                                    <option>Training / Workshop</option>
                                </select>
                            </div>
                            <InputField label="Destination" placeholder="e.g. Islamabad - South Sector" />
                            <InputField label="Trip Duration (Days)" placeholder="0" type="number" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <InputField label="Travel Date" type="date" />
                            <InputField label="Return Date" type="date" />
                            <InputField label="Transport Claim (TA)" placeholder="0.00" type="number" />
                            <InputField label="Daily Allowance (DA)" placeholder="0.00" type="number" />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Supplementary Expenses / Remarks</label>
                            <textarea
                                rows="3"
                                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none font-semibold text-slate-600"
                                placeholder="Explain any additional costs (Tolls, Parking, Local Porterage)..."
                            />
                        </div>

                        <div className="p-6 border-2 border-dashed border-slate-100 rounded-2xl flex flex-col items-center justify-center text-slate-400 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group">
                            <Receipt size={24} className="mb-2 group-hover:scale-110 transition-transform" />
                            <p className="text-xs font-bold uppercase tracking-widest">Upload Supporting Evidence / Receipts</p>
                            <p className="text-[10px] font-semibold mt-1 opacity-60">PDF, JPG or PNG (Max 5MB)</p>
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t border-slate-50">
                            <button className="px-8 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition-all font-bold">
                                Save Draft
                            </button>
                            <button className="px-10 py-3 rounded-xl bg-slate-900 text-white font-bold shadow-xl shadow-slate-200 hover:scale-[1.02] transition-all flex items-center gap-3 group">
                                Submit Claim <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sidebar Context */}
                <div className="space-y-8">
                    {/* User Profile Summary */}
                    <div className="glass-card p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden flex flex-col items-center text-center">
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-primary/50 to-transparent"></div>
                        <div className="w-20 h-20 rounded-full border-4 border-white/5 bg-white/10 flex items-center justify-center text-primary mb-4 shadow-2xl relative">
                            <UserCircle2 size={48} />
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900"></div>
                        </div>
                        <h2 className="text-xl font-bold">John Doe</h2>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Grade: M2 • Senior Tech Lead</p>

                        <div className="w-full grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
                            <div className="text-left">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Allowed DA</p>
                                <p className="text-sm font-bold">2,500 <span className="text-[10px]">/ Day</span></p>
                            </div>
                            <div className="text-left border-l border-white/5 pl-4">
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Travel Mode</p>
                                <p className="text-sm font-bold">Air / Business</p>
                            </div>
                        </div>
                    </div>

                    {/* Policy Info */}
                    <div className="glass-card p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <Info size={18} className="text-primary" />
                            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-widest">Claim Policy Guidelines</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                'Original receipts required for TA claims > 500 PKR',
                                'Daily Allowance includes meals & local commute',
                                'Submission must be within 7 days of trip end',
                                'Manager approval required before HR processing'
                            ].map((policy, i) => (
                                <li key={i} className="flex gap-3 text-xs font-semibold text-slate-500 leading-relaxed">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></div>
                                    {policy}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
