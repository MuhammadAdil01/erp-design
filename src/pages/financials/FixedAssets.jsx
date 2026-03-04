import React from 'react';
import {
    Box,
    ChevronRight,
    Save,
    Plus,
    Calendar,
    DollarSign,
    QrCode
} from 'lucide-react';
import { cn } from "@/lib/utils";

const InputField = ({ label, placeholder, type = "text" }) => (
    <div className="space-y-1.5 flex-1 min-w-[240px]">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
    </div>
);

export default function FixedAssets() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Financials</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Fixed Assets</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary">Asset Management</h1>
                </div>
            </div>

            <div className="glass-card rounded-[2.5rem] overflow-hidden">
                <div className="p-8 border-b border-slate-50 bg-slate-50/30">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-2xl bg-white shadow-sm">
                            <Box size={24} className="text-primary" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-800">Register New Asset</h2>
                            <p className="text-sm text-slate-500">Track and depreciate company property</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <InputField label="Asset Name" placeholder="e.g. MacBook Pro M2" />
                        <div className="space-y-1.5 flex-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Asset Category</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm cursor-pointer outline-none focus:ring-2 focus:ring-primary/20">
                                <option>IT Equipment</option>
                                <option>Office Furniture</option>
                                <option>Transportation</option>
                                <option>Machinery</option>
                            </select>
                        </div>
                        <InputField label="Serial Number" placeholder="SN-8821-X99" />
                        <InputField label="Asset Tag ID" placeholder="TAG-1002" />
                        <InputField label="Model Number" placeholder="A2779" />
                        <InputField label="Manufacturer" placeholder="Apple Inc." />
                        <InputField label="Purchase Date" type="date" />
                        <InputField label="Purchase Cost" placeholder="0.00" type="number" />
                        <InputField label="Market Value" placeholder="0.00" type="number" />
                        <div className="space-y-1.5 flex-1">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Depreciation Method</label>
                            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm cursor-pointer outline-none focus:ring-2 focus:ring-primary/20">
                                <option>Straight Line</option>
                                <option>Double Declining</option>
                                <option>Units of Production</option>
                            </select>
                        </div>
                        <InputField label="Life Span (Years)" placeholder="5" type="number" />
                        <InputField label="Salvage Value" placeholder="0.00" type="number" />
                    </div>
                </div>

                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Asset Location & Custody</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField label="Location/Office" placeholder="HQ - Level 4" />
                            <InputField label="Custodian Name" placeholder="Assigned to..." />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Warranty & Maintenance</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <InputField label="Warranty Expiry" type="date" />
                            <InputField label="Service Provider" placeholder="e.g. Apple Support" />
                        </div>
                    </div>
                </div>

                <div className="p-8 bg-slate-50/50 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-slate-100">
                    <div className="flex items-center gap-4 text-slate-500">
                        <QrCode size={32} />
                        <p className="text-xs font-bold uppercase tracking-wider leading-tight">
                            Auto-generate QR label <br /> for physical tagging
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button className="px-10 py-3.5 rounded-2xl bg-primary text-slate-900 font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                            Register Asset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
