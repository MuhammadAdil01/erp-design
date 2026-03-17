import React, { useState } from 'react';
import { cn } from "@/lib/utils";

const ClassicInput = ({ label, value, type = "text", className, isSelect = false, options = [], isSearch = false }) => (
    <div className={cn("flex items-center border-[0.5px] border-slate-400 bg-[#f0f0f0]", className)}>
        <label className="w-24 px-2 py-0.5 text-[11px] font-semibold text-slate-700 border-r-[0.5px] border-slate-400 h-full flex items-center">
            {label}
        </label>
        <div className="flex-1 flex items-center bg-[#fff9c4] relative">
            {isSelect ? (
                <select className="flex-1 bg-transparent px-1 py-0.5 text-[11px] outline-none h-full cursor-pointer focus:bg-white transition-colors appearance-none">
                    {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                </select>
            ) : (
                <input
                    type={type}
                    className={cn(
                        "flex-1 px-1 py-0.5 text-[11px] outline-none h-full transition-colors",
                      "bg-transparent focus:bg-white bg"
                    )}
                    defaultValue={value}
                />
            )}
            {isSearch && (
                <div className="absolute right-0.5 top-0.5 bottom-0.5 w-4 flex items-center justify-center bg-slate-200 border border-slate-400 rounded-sm cursor-pointer hover:bg-slate-300">
                    <div className="w-3 h-3 rounded-full border border-slate-600 bg-white flex items-center justify-center">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                    </div>
                </div>
            )}
        </div>
    </div>
);

const ClassicTab = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={cn(
            "px-6 py-1 text-[11px] font-semibold border-t border-x border-slate-400 rounded-t-sm transition-colors",
            active ? "bg-white -mb-[1px] z-10" : "bg-[#e0e0e0] hover:bg-[#d8d8d8]"
        )}
    >
        {label}
    </button>
);

export default function TimeSheets() {
    const [activeTab, setActiveTab] = useState('Contents');
    const tabs = ['Contents', 'Attachments'];

    return (
        <div className="flex flex-col bg-[#f0f0f0] min-h-full font-sans select-none">
            {/* Row 1: Header */}
            <div className="h-[25px] flex items-center px-4 bg-gradient-to-b from-[#e6e6e6] to-[#cccccc] border-b border-slate-400 shadow-sm">
                <span className="text-[12px] font-bold text-slate-800">Time Sheet</span>
            </div>
         

            {/* Row 2: Yellow Divider */}
            <div className="h-[3px] w-full bg-[#f5a623]"></div>

            {/* Main Content */}
            <div className="p-4 space-y-6">
                {/* Top Section */}
                <div className="grid grid-cols-2 gap-x-32 max-w-[1200px]">
                    {/* Left Form */}
                    <div className="space-y-[2px]">
                        <ClassicInput label="Type" isSelect options={['Employee', 'User', 'Other']} />
                        <ClassicInput label="Code" isSearch />
                        <ClassicInput label="Name" />
                        <ClassicInput label="First Name" />
                        <ClassicInput label="Department" isSelect options={['', 'Engineering', 'Finance', 'HR']} />
                    </div>

                    {/* Right Form */}
                    <div className="space-y-[2px] w-64 ml-auto">
                        <ClassicInput label="No." value="50"  />
                        <ClassicInput label="Date From" value="24.02.26" className="bg-white" />
                        <ClassicInput label="Date To" className="bg-white" />
                    </div>
                </div>

                {/* Tabs */}
                <div className="mt-8">
                    <div className="flex items-end gap-1 px-4 border-b border-slate-400">
                        {tabs.map(tab => (
                            <ClassicTab
                                key={tab}
                                label={tab}
                                active={activeTab === tab}
                                onClick={() => setActiveTab(tab)}
                            />
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-white border-x border-b border-slate-400 p-4 min-h-[500px]">
                        {activeTab === 'Contents' && (
                            <div className="space-y-2 animate-in fade-in duration-300">
                                <h3 className="text-[11px] font-semibold text-slate-800">Time Recording</h3>

                                <div className="border border-slate-400 overflow-x-auto">
                                    <table className="w-full border-collapse text-[11px]">
                                        <thead>
                                            <tr className="bg-[#e0e0e0] border-b border-slate-400">
                                                <th className="w-8 border-r border-slate-400 py-0.5 px-1 font-semibold text-slate-700">#</th>
                                                <th className="w-24 border-r border-slate-400 py-0.5 px-1 font-semibold text-left text-slate-700">Date</th>
                                                <th className="w-20 border-r border-slate-400 py-0.5 px-1 font-semibold text-left text-slate-700">Start Time</th>
                                                <th className="w-20 border-r border-slate-400 py-0.5 px-1 font-semibold text-left text-slate-700">End Time</th>
                                                <th className="w-40 border-r border-slate-400 py-0.5 px-1 font-semibold text-left text-slate-700">Time Sheet Activity</th>
                                                <th className="w-32 border-r border-slate-400 py-0.5 px-1 font-semibold text-left text-slate-700">Work Order No.</th>
                                                <th className="w-32 border-r border-slate-400 py-0.5 px-1 font-semibold text-left text-slate-700">Financial Project</th>
                                                <th className="w-32 border-r border-slate-400 py-0.5 px-1 font-semibold text-left text-slate-700">Cost Center</th>
                                                <th className="w-24 border-r border-slate-400 py-0.5 px-1 font-semibold text-left text-slate-700">Stage</th>
                                                <th className="w-32 border-r border-slate-400 py-0.5 px-1 font-semibold text-left text-slate-700">Labour Item</th>
                                                <th className="w-32 border-r border-slate-400 py-0.5 px-1 font-semibold text-left text-slate-700">Service Call No.</th>
                                                <th className="w-16 py-0.5 px-1 font-semibold text-slate-700">Billable</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((idx) => (
                                                <tr key={idx} className="border-b border-slate-200 hover:bg-slate-50">
                                                    <td className="border-r border-slate-300 py-0.5 px-1 text-center bg-[#f0f0f0]">{idx}</td>
                                                    <td className="border-r border-slate-300 py-0.5 px-1 h-5"></td>
                                                    <td className="border-r border-slate-300 py-0.5 px-1"></td>
                                                    <td className="border-r border-slate-300 py-0.5 px-1"></td>
                                                    <td className="border-r border-slate-300 py-0.5 px-1 relative">
                                                        {idx === 1 && (
                                                            <div className="absolute right-0 top-0 bottom-0 flex items-center px-1 bg-white     border-l border-slate-300 cursor-pointer">
                                                                <div className="w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-t-[4px] border-t-slate-600"></div>
                                                            </div>
                                                        )}
                                                    </td>
                                                    <td className="border-r border-slate-300 py-0.5 px-1 bg-[#e8e8e8]"></td>
                                                    <td className="border-r border-slate-300 py-0.5 px-1"></td>
                                                    <td className="border-r border-slate-300 py-0.5 px-1"></td>
                                                    <td className="border-r border-slate-300 py-0.5 px-1 bg-[#e8e8e8]"></td>
                                                    <td className="border-r border-slate-300 py-0.5 px-1"></td>
                                                    <td className="border-r border-slate-300 py-0.5 px-1"></td>
                                                    <td className="py-0.5 px-1 text-center relative">
                                                        {idx === 1 && (
                                                            <div className="absolute inset-0 flex items-center justify-end px-1 pointer-events-none">
                                                                <div className="text-blue-500 font-bold rotate-45">↗</div>
                                                            </div>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                        {activeTab === 'Attachments' && (
                            <div className="flex items-center justify-center min-h-[400px] text-slate-400 italic text-[11px]">
                                No attachments available.
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer buttons */}
                <div className="flex gap-2 justify-end pt-4">
                    <button className="px-6 py-1 bg-[#e0e0e0] border border-slate-400 text-[11px] font-bold text-slate-800 hover:bg-[#d4d4d4]">
                        Cancel
                    </button>
                    <button className="px-6 py-1 bg-[#e0e0e0] border border-slate-400 text-[11px] font-bold text-slate-800 hover:bg-[#d4d4d4]">
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}
