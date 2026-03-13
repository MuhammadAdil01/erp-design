import React, { useState } from 'react';
import { cn } from "@/lib/utils";

const ClassicInput = ({ label, value, type = "text", className, isSelect = false, options = [], disabled = false, isYellow = false }) => (
    <div className={cn("flex items-center border-[0.5px] border-slate-400 bg-[#f0f0f0]", className)}>
        <label className="w-28 px-2 py-0.5 text-[11px] font-semibold text-slate-700 border-r-[0.5px] border-slate-400 h-full flex items-center">
            {label}
        </label>
        <div className={cn("flex-1 flex items-center relative h-full", isYellow ? "bg-[#fff9c4]" : "bg-white")}>
            {isSelect ? (
                <select className="flex-1 bg-transparent px-1 py-0.5 text-[11px] outline-none h-full cursor-pointer appearance-none">
                    {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
                </select>
            ) : (
                <input
                    type={type}
                    disabled={disabled}
                    className={cn(
                        "flex-1 px-1 py-0.5 text-[11px] outline-none h-full transition-colors",
                        disabled ? "bg-[#e0e0e0] cursor-not-allowed" : "bg-transparent focus:bg-white"
                    )}
                    defaultValue={value}
                />
            )}
        </div>
    </div>
);

export default function FinalSettlement() {
    return (
        <div className="flex flex-col bg-[#f0f0f0] min-h-full font-sans select-none">
            {/* Row 1: Header */}
            <div className="h-[25px] flex items-center px-4 bg-gradient-to-b from-[#e6e6e6] to-[#cccccc] border-b border-slate-400 shadow-sm">
                <span className="text-[12px] font-bold text-slate-800">Final Settlement</span>
            </div>

            {/* Row 2: Yellow Divider */}
            <div className="h-[3px] w-full bg-[#f5a623]"></div>

            {/* Main Content */}
            <div className="p-4 space-y-6">
                {/* Top Section: Dual Column Form */}
                <div className="grid grid-cols-2 gap-x-20 max-w-[1200px]">
                    {/* Left Column */}
                    <div className="space-y-[2px]">
                        <ClassicInput label="DocEntry" disabled />
                        <ClassicInput label="CreateDate" disabled />
                        <ClassicInput label="Remark" isYellow />
                        <ClassicInput label="Employee Name" />
                        <ClassicInput label="Grade" />
                    </div>

                    {/* Right Column */}
                    <div className="space-y-[2px]">
                        <ClassicInput label="Status" value="O" disabled />
                        <ClassicInput label="Creator" disabled />
                        <ClassicInput label="Employee Code" />
                        <ClassicInput label="DHAB No" />
                        <ClassicInput label="Stage" />
                    </div>
                </div>

                {/* Grid Section */}
                <div className="mt-12">
                    <div className="border border-slate-400 bg-white p-6 min-h-[400px]">
                        <div className="border border-slate-400 overflow-hidden">
                            <table className="w-full border-collapse text-[11px]">
                                <thead>
                                    <tr className="bg-[#e0e0e0] border-b border-slate-400 text-slate-700">
                                        <th className="w-8 border-r border-slate-400 py-0.5 px-1 font-semibold text-left">#</th>
                                        <th className="w-24 border-r border-slate-400 py-0.5 px-1 font-semibold text-left">LogInst</th>
                                        <th className="w-64 border-r border-slate-400 py-0.5 px-1 font-semibold text-left">Joining Date</th>
                                        <th className="w-48 border-r border-slate-400 py-0.5 px-1 font-semibold text-left">Gross Salary</th>
                                        <th className="w-48 border-r border-slate-400 py-0.5 px-1 font-semibold text-left">Years of Service</th>
                                        <th className="w-48 border-r border-slate-400 py-0.5 px-1 font-semibold text-left">Gratuity</th>
                                        <th className="border-r border-slate-400 py-0.5 px-1 font-semibold text-left">E</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b border-slate-200">
                                        <td className="border-r border-slate-300 py-0.5 px-1 text-left bg-[#f0f0f0]">1</td>
                                        <td className="border-r border-slate-300 py-0.5 px-1 bg-[#f0f0f0]"></td>
                                        <td className="border-r border-slate-300 py-0.5 px-1"></td>
                                        <td className="border-r border-slate-300 py-0.5 px-1 text-right pr-2 uppercase">0.00</td>
                                        <td className="border-r border-slate-300 py-0.5 px-1 text-right pr-2 uppercase">0.00</td>
                                        <td className="border-r border-slate-300 py-0.5 px-1 text-right pr-2 uppercase">0.00</td>
                                        <td className="border-r border-slate-300 py-0.5 px-1 text-right pr-2 uppercase italic">30.00</td>
                                    </tr>
                                    {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => (
                                        <tr key={row} className="border-b border-slate-200 hover:bg-slate-50 h-5">
                                            <td className="border-r border-slate-300 py-0.5 px-1 text-left bg-[#f0f0f0]">{row}</td>
                                            <td className="border-r border-slate-300 py-0.5 px-1 bg-[#f0f0f0]"></td>
                                            <td className="border-r border-slate-300 py-0.5 px-1 font-normal"></td>
                                            <td className="border-r border-slate-300 py-0.5 px-1"></td>
                                            <td className="border-r border-slate-300 py-0.5 px-1"></td>
                                            <td className="border-r border-slate-300 py-0.5 px-1"></td>
                                            <td className="border-r border-slate-300 py-0.5 px-1"></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Footer buttons */}
                <div className="flex gap-2 justify-start pt-4">
                    <button className="px-8 py-1 bg-gradient-to-b from-[#f8f8f8] to-[#e0e0e0] border border-slate-400 text-[11px] font-bold text-slate-800 hover:brightness-95 shadow-sm min-w-[100px]">
                        Add
                    </button>
                    <button className="px-8 py-1 bg-gradient-to-b from-[#f8f8f8] to-[#e0e0e0] border border-slate-400 text-[11px] font-bold text-slate-800 hover:brightness-95 shadow-sm min-w-[100px]">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
