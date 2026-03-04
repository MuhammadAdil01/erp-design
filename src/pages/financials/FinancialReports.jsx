import React from 'react';
import {
    FilePieChart,
    ChevronRight,
    FileText,
    Calendar,
    Filter,
    Download,
    Printer,
    ChevronDown,
    Plus
} from 'lucide-react';
import { cn } from "@/lib/utils";

const ReportType = ({ title, desc, icon: Icon }) => (
    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all cursor-pointer">
        <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <Icon size={20} />
            </div>
            <h4 className="font-bold text-slate-800 truncate">{title}</h4>
        </div>
        <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
    </div>
);

export default function FinancialReports() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Financials</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Reports</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary">Strategic Financial Reporting</h1>
                </div>
            </div>

            <div className="glass-card rounded-[2.5rem] overflow-hidden">
                <div className="bg-primary/5 p-8 border-b border-primary/10">
                    <div className="flex flex-wrap items-end gap-6 mb-8">
                        <div className="space-y-1.5 flex-1 min-w-[200px]">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fiscal Period</label>
                            <div className="relative">
                                <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-primary/20 font-semibold">
                                    <option>Q3 2023 (Jul - Sep)</option>
                                    <option>Q4 2023 (Oct - Dec)</option>
                                    <option>Full Year 2023</option>
                                </select>
                                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                            </div>
                        </div>

                        <div className="space-y-1.5 flex-1 min-w-[200px]">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Branch / Location</label>
                            <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-primary/20 font-semibold">
                                <option>All Branches</option>
                                <option>Head Office</option>
                                <option>Retail Store A</option>
                                <option>Warehouse B</option>
                            </select>
                        </div>

                        <div className="space-y-1.5 flex-1 min-w-[200px]">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Department</label>
                            <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-primary/20 font-semibold">
                                <option>All Departments</option>
                                <option>Sales</option>
                                <option>HR</option>
                                <option>Engineering</option>
                            </select>
                        </div>

                        <div className="space-y-1.5 flex-1 min-w-[200px]">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Report Language</label>
                            <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-primary/20 font-semibold">
                                <option>English (US/UK)</option>
                                <option>Urdu (Local)</option>
                                <option>Arabic</option>
                            </select>
                        </div>

                        <div className="space-y-1.5 flex-1 min-w-[200px]">
                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Currency Mode</label>
                            <select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-primary/20 font-semibold">
                                <option>Local (PKR)</option>
                                <option>Reporting (USD)</option>
                                <option>Functional (AED)</option>
                            </select>
                        </div>

                        <div className="flex gap-2">
                            <button className="px-6 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 font-bold text-sm hover:bg-slate-50 transition-all flex items-center gap-2">
                                <Filter size={16} /> Advanced Filters
                            </button>
                            <button className="px-8 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl shadow-slate-200">
                                <FileText size={16} className="text-primary" /> Run Analytics
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ReportType
                            title="Balance Sheet"
                            desc="A snapshot of assets, liabilities, and equity at a specific point in time."
                            icon={FileText}
                        />
                        <ReportType
                            title="Profit & Loss"
                            desc="Summary of revenues, costs, and expenses incurred during a period."
                            icon={FilePieChart}
                        />
                        <ReportType
                            title="Cash Flow"
                            desc="Detailed movements of cash entering and leaving the business."
                            icon={Calendar}
                        />
                        <ReportType
                            title="Trial Balance"
                            desc="Listing of all general ledger accounts with their current balances."
                            icon={Filter}
                        />
                        <ReportType
                            title="Audit Trail"
                            desc="Chronological record of system activities and financial postings."
                            icon={Filter}
                        />
                        <div className="p-6 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center text-slate-400 hover:border-primary/50 hover:bg-white transition-all cursor-pointer">
                            <Plus size={24} className="mb-2" />
                            <span className="text-xs font-bold uppercase tracking-widest">Custom Template</span>
                        </div>
                    </div>
                </div>

                <div className="p-10 flex flex-col items-center justify-center text-center space-y-4 py-24">
                    <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 mb-4 animate-pulse">
                        <FilePieChart size={40} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800">No Report Generated</h3>
                    <p className="text-sm text-slate-500 max-w-sm">
                        Configure your parameters above and click **"Run Analytics"** to generate a comprehensive financial summary.
                    </p>
                </div>
            </div>
        </div>
    );
}
