import React, { useState } from 'react';
import {
    Clock,
    Calendar,
    ChevronRight,
    Save,
    X,
    Plus,
    Filter,
    Download,
    AlertCircle
} from 'lucide-react';
import { cn } from "@/lib/utils";

export default function TimeSheets() {
    const [activeType, setActiveType] = useState('Daily');

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Human Resources</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Time Sheets</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary">Time Sheets Management</h1>
                </div>
            </div>

            {/* Stats Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { label: 'Total Hours this Week', value: '1,240h', icon: Clock, color: 'primary' },
                    { label: 'Overtime Hours', value: '42h', icon: Calendar, color: 'blue-500' },
                    { label: 'Pending Approvals', value: '18', icon: AlertCircle, color: 'rose-500' },
                ].map((stat, i) => (
                    <div key={i} className="glass-card p-6 rounded-3xl">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-2xl bg-${stat.color}/10 text-${stat.color}`}>
                                <stat.icon size={22} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                                <p className="text-xl font-bold text-slate-800">{stat.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filters Section */}
            <div className="glass-card p-8 rounded-[2rem] bg-white">
                <div className="flex items-center gap-3 mb-6">
                    <Filter size={18} className="text-primary" />
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest">Filter Logs</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-1.5 flex-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">From Date</label>
                        <input type="date" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">To Date</label>
                        <input type="date" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Department</label>
                        <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold cursor-pointer appearance-none">
                            <option>All Departments</option>
                            <option>Engineering</option>
                            <option>Marketing</option>
                            <option>HR</option>
                        </select>
                    </div>
                    <div className="space-y-1.5 flex-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Status</label>
                        <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold cursor-pointer appearance-none">
                            <option>All Status</option>
                            <option>Approved</option>
                            <option>Pending</option>
                            <option>Rejected</option>
                        </select>
                    </div>
                    <div className="space-y-1.5 flex-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Employee Search</label>
                        <input type="text" placeholder="Name or ID..." className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Project</label>
                        <input type="text" placeholder="Project name..." className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Shift Type</label>
                        <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all font-semibold cursor-pointer appearance-none">
                            <option>Day</option>
                            <option>Night</option>
                            <option>Overtime</option>
                        </select>
                    </div>
                    <div className="flex items-end">
                        <button className="w-full py-2.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all text-xs uppercase tracking-widest">
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="glass-card rounded-[2rem] overflow-hidden">
                <div className="flex border-b border-slate-100 overflow-x-auto bg-primary/5">
                    {['Daily', 'Weekly', 'Monthly'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setActiveType(type)}
                            className={cn(
                                "px-8 py-5 text-sm font-bold transition-all duration-200 border-b-2",
                                activeType === type
                                    ? "border-primary text-primary"
                                    : "border-transparent text-slate-400 hover:text-slate-600"
                            )}
                        >
                            {type} Logs
                        </button>
                    ))}
                </div>

                <div className="p-8">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100">
                                <th className="pb-4 px-4 font-bold">Employee</th>
                                <th className="pb-4 px-4 font-bold">Project</th>
                                <th className="pb-4 px-4 font-bold">Date</th>
                                <th className="pb-4 px-4 font-bold text-center">In</th>
                                <th className="pb-4 px-4 text-center font-bold">Out</th>
                                <th className="pb-4 px-4 text-center font-bold">Hours</th>
                                <th className="pb-4 px-4 text-right font-bold">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: 'John Doe', project: 'Internal Admin', date: 'Oct 24, 2023', in: '09:00 AM', out: '05:30 PM', hours: '8.5h', status: 'Approved' },
                                { name: 'Alice Smith', project: 'Client Portal', date: 'Oct 24, 2023', in: '08:45 AM', out: '06:00 PM', hours: '9.25h', status: 'Pending' },
                                { name: 'Robert Fox', project: 'HR System', date: 'Oct 23, 2023', in: '10:00 AM', out: '07:00 PM', hours: '9.0h', status: 'Approved' },
                            ].map((row, i) => (
                                <tr key={i} className="group hover:bg-slate-50 transition-all border-b border-slate-50 last:border-0">
                                    <td className="py-5 px-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold">
                                                {row.name.charAt(0)}
                                            </div>
                                            <span className="text-sm font-bold text-slate-800">{row.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-5 px-4 text-sm text-slate-600 font-medium">{row.project}</td>
                                    <td className="py-5 px-4 text-sm text-slate-600 font-medium">{row.date}</td>
                                    <td className="py-5 px-4 text-sm text-center text-slate-600 font-medium">{row.in}</td>
                                    <td className="py-5 px-4 text-sm text-center text-slate-600 font-medium">{row.out}</td>
                                    <td className="py-5 px-4 text-sm text-center font-bold text-slate-800">{row.hours}</td>
                                    <td className="py-5 px-4 text-right">
                                        <span className={cn(
                                            "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                                            row.status === 'Approved' ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"
                                        )}>
                                            {row.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
