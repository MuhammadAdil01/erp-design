import React from 'react';
import {
    Users,
    ChevronRight,
    Plus,
    Trash2,
    Save,
    UserPlus,
    Phone,
    MapPin,
    ShieldCheck
} from 'lucide-react';
import { cn } from "@/lib/utils";

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

const KinTable = ({ title, icon: Icon, description }) => (
    <div className="glass-card rounded-[2rem] overflow-hidden border border-slate-100 bg-white/50">
        <div className="p-6 border-b border-slate-50 flex items-center justify-between bg-primary/5">
            <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-white shadow-sm border border-slate-100 text-primary">
                    <Icon size={20} />
                </div>
                <div>
                    <h3 className="font-bold text-slate-800 tracking-tight">{title}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{description}</p>
                </div>
            </div>
            <button className="p-2 rounded-xl bg-white border border-slate-100 text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                <Plus size={18} />
            </button>
        </div>
        <div className="p-0 overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-slate-50/50">
                        <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 w-16">#</th>
                        <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Name</th>
                        <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Relation</th>
                        <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Contact No.</th>
                        <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">National ID</th>
                        <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">Address</th>
                        <th className="py-4 px-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {[1, 2, 3, 4, 5, 6].map((row) => (
                        <tr key={row} className="group hover:bg-primary/[0.02] transition-colors border-b border-slate-50 last:border-0">
                            <td className="py-4 px-6 text-sm font-bold text-slate-400">{row}</td>
                            <td className="py-4 px-6">
                                <input type="text" placeholder="Enter Full Name..." className="w-full bg-transparent border-none p-0 text-sm font-semibold text-slate-700 outline-none focus:ring-0 placeholder:text-slate-300" />
                            </td>
                            <td className="py-4 px-6">
                                <select className="bg-transparent border-none p-0 text-sm font-semibold text-slate-700 outline-none focus:ring-0 cursor-pointer w-full">
                                    <option value="">Select Relation</option>
                                    <option>Spouse</option>
                                    <option>Father</option>
                                    <option>Mother</option>
                                    <option>Sibling</option>
                                    <option>Guardian</option>
                                    <option>Friend</option>
                                </select>
                            </td>
                            <td className="py-4 px-6">
                                <input type="text" placeholder="+92 ..." className="w-full bg-transparent border-none p-0 text-sm font-semibold text-slate-700 outline-none focus:ring-0 placeholder:text-slate-300" />
                            </td>
                            <td className="py-4 px-6">
                                <input type="text" placeholder="CNIC / Passport" className="w-full bg-transparent border-none p-0 text-sm font-semibold text-slate-700 outline-none focus:ring-0 placeholder:text-slate-300" />
                            </td>
                            <td className="py-4 px-6">
                                <input type="text" placeholder="Complete Address" className="w-full bg-transparent border-none p-0 text-sm font-semibold text-slate-700 outline-none focus:ring-0 placeholder:text-slate-300" />
                            </td>
                            <td className="py-4 px-6 text-right">
                                <button className="p-1.5 text-slate-300 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100">
                                    <Trash2 size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default function NextOfKin() {
    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Human Resources</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Next of Kin</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary tracking-tight">Next of Kin Management</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-white transition-all font-bold shadow-sm">
                        Discard
                    </button>
                    <button className="px-8 py-2.5 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                        <Save size={18} /> Save Records
                    </button>
                </div>
            </div>

            {/* Employee Context Bar */}
            <div className="glass-card rounded-[2rem] p-6 bg-white border border-primary/10 flex flex-wrap items-center gap-8">
                <div className="w-14 h-14 rounded-2xl bg-primary shadow-lg shadow-primary/20 flex items-center justify-center text-white font-bold text-xl">
                    JD
                </div>
                <div className="flex-1 min-w-[200px]">
                    <h2 className="text-lg font-bold text-slate-800">John Doe</h2>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Senior Software Engineer • ID: EMP-2023-001</p>
                </div>
                <div className="flex flex-wrap gap-6 border-l border-slate-100 pl-8">
                    <InputField label="Relation Type" placeholder="Immediate Family" className="min-w-[150px]" />
                    <InputField label="Emergency Level" placeholder="High Priority" className="min-w-[150px]" />
                    <div className="space-y-1.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Verification Status</label>
                        <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-600 rounded-xl text-xs font-bold border border-green-100">
                            <ShieldCheck size={14} /> Verified Records
                        </div>
                    </div>
                </div>
            </div>

            {/* Tables Section */}
            <div className="space-y-8">
                <KinTable
                    title="Primary Next of Kin"
                    icon={Users}
                    description="First point of contact for emergency situations"
                />

                <KinTable
                    title="Alternate / Secondary Next of Kin"
                    icon={UserPlus}
                    description="Backup contacts if primary is unavailable"
                />
            </div>
        </div>
    );
}
