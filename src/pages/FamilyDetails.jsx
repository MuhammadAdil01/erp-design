import React, { useState } from 'react';
import {
    Users,
    Heart,
    ChevronRight,
    Plus,
    Trash2,
    Save,
    Baby,
    ShieldCheck,
    Phone
} from 'lucide-react';
import { cn } from "@/lib/utils";

const MemberCard = ({ member }) => (
    <div className="glass-card p-6 rounded-3xl group relative hover:border-primary/50 transition-all">
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="p-2 bg-slate-50 text-slate-400 hover:text-primary rounded-xl transition-colors">
                <Plus size={16} />
            </button>
            <button className="p-2 bg-slate-50 text-slate-400 hover:text-rose-500 rounded-xl transition-colors">
                <Trash2 size={16} />
            </button>
        </div>

        <div className="flex items-center gap-5 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                {member.relation === 'Child' ? <Baby size={24} /> : <Heart size={24} />}
            </div>
            <div>
                <h4 className="font-bold text-slate-800 text-lg">{member.name}</h4>
                <p className="text-xs font-bold text-primary uppercase tracking-widest">{member.relation}</p>
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Date of Birth</p>
                <p className="text-sm font-semibold text-slate-700">{member.dob}</p>
            </div>
            <div className="space-y-1">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Medical Insurance</p>
                <p className="text-sm font-semibold text-green-600">Active - {member.policyNo || 'POL-882'}</p>
            </div>
            <div className="space-y-1">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">National ID / Passport</p>
                <p className="text-sm font-semibold text-slate-700">{member.idNo || 'Verified'}</p>
            </div>
            <div className="space-y-1">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Education Level</p>
                <p className="text-sm font-semibold text-slate-700">{member.education || 'N/A'}</p>
            </div>
            <div className="col-span-2 space-y-1">
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Contact & Residency</p>
                <p className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                    <Phone size={14} className="text-slate-400" /> {member.phone}
                </p>
            </div>
        </div>
    </div>
);

export default function FamilyDetails() {
    const family = [
        { name: 'Sarah Wilson', relation: 'Spouse', dob: 'Jan 12, 1990', phone: '+92 300 1234567' },
        { name: 'Noah Wilson', relation: 'Child', dob: 'May 20, 2018', phone: 'Dependant' },
        { name: 'Emma Wilson', relation: 'Child', dob: 'Aug 05, 2021', phone: 'Dependant' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Human Resources</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Family Details</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary">Family & Beneficiaries</h1>
                </div>
                <div className="flex gap-3">
                    <button className="px-5 py-2.5 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20 flex items-center gap-2">
                        <Plus size={18} /> Add Member
                    </button>
                </div>
            </div>

            <div className="glass-card rounded-[2.5rem] p-4 bg-slate-50/30 flex items-center gap-8 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center font-bold text-primary">
                    JD
                </div>
                <div className="flex-1">
                    <h2 className="text-lg font-bold text-slate-800">John Doe's Family</h2>
                    <p className="text-sm text-slate-500">Manage dependents and emergency contacts</p>
                </div>
                <button className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-white transition-all font-semibold flex items-center gap-2">
                    <ShieldCheck size={18} className="text-primary" /> Insurance Policy
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {family.map((member, i) => (
                    <MemberCard key={i} member={member} />
                ))}
                <div className="rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-8 text-slate-400 group hover:border-primary/50 transition-colors cursor-pointer bg-slate-50/20 leading-relaxed text-center">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Plus size={24} />
                    </div>
                    <p className="font-bold text-sm">Add New Dependent</p>
                    <p className="text-[10px] uppercase font-bold tracking-widest mt-1 opacity-60">Verified Records Required</p>
                </div>
            </div>
        </div>
    );
}
