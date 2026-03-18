import React, { useState } from 'react';
import { cn } from "@/lib/utils";

const ClassicInput = ({ label, value, type = "text", className, isSelect = false, options = [], isTextArea = false }) => (
    <div className={cn("flex items-center border-[0.5px] border-slate-400 bg-[#f0f0f0]", className)}>
        <label className="w-32 px-2 py-0.5 text-[11px] font-semibold text-slate-700 border-r-[0.5px] border-slate-400 h-full flex items-center">
            {label}
        </label>
        {isSelect ? (
            <select className="flex-1 bg-[#fff9c4] px-1 py-0.5 text-[11px] outline-none h-full cursor-pointer focus:bg-white transition-colors">
                {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
            </select>
        ) : isTextArea ? (
            <textarea className="flex-1 bg-[#fff9c4] px-1 py-0.5 text-[11px] outline-none h-12 resize-none focus:bg-white transition-colors" />
        ) : (
            <input
                type={type}
                className="flex-1 bg-[#fff9c4] px-1 py-0.5 text-[11px] outline-none h-full focus:bg-white transition-colors"
                defaultValue={value}
            />
        )}
    </div>
);

const ClassicTab = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={cn(
            "px-4 py-1 text-[11px] font-semibold border-t border-x border-slate-400 rounded-t-sm transition-colors",
            active ? "bg-white -mb-[1px] z-10" : "bg-[#e0e0e0] hover:bg-[#d8d8d8]"
        )}
    >
        {label}
    </button>
);

export default function EmployeeMaster() {
    const [activeTab, setActiveTab] = useState('Address');
    const tabs = ['Address', 'Administration', 'Personal', 'Bank', 'Determination', 'Attachments'];

    return (
        <div className="flex flex-col bg-[#f0f0f0] min-h-full font-sans select-none">
            {/* Row 1: Header */}
            <div className="h-[25px] flex items-center px-4 bg-gradient-to-b from-[#e6e6e6] to-[#cccccc] border-b border-slate-400 shadow-sm">
                <span className="text-[12px] font-bold text-slate-800">Employee Master Data</span>
            </div>

            {/* Row 2: Yellow Divider */}
            <div className="h-[3px] w-full bg-[#f5a623]"></div>

            {/* Main Form Content */}
            <div className="p-4 space-y-6">
                {/* Top Section: Two Columns */}
                <div className="grid grid-cols-2 gap-x-20 gap-y-1 max-w-[1200px]">
                    {/* Left Column */}
                    <div className="space-y-[2px]">
                        <ClassicInput label="Employee Code" value="EMP-001" />
                        <ClassicInput label="Name" value="" />
                        <ClassicInput label="Middle Name" value="" />
                        <ClassicInput label="Father Name" value="" />
                        <ClassicInput label="Job Title" value="" />
                        <ClassicInput label="Position" isSelect options={['Manager', 'Sr. Developer', 'Team Lead']} />
                        <ClassicInput label="Section" isSelect options={['Engineering', 'Finance', 'HR']} />
                        <ClassicInput label="Branch" isSelect options={['Head Office', 'Sub Branch']} />
                        <ClassicInput label="Manager" value="" />
                    </div>

                    {/* Right Column */}
                    <div className="space-y-[2px]">
                        <ClassicInput label="Staff No." value="" />
                        <ClassicInput label="ID No." value="" />
                        <ClassicInput label="Ext. Employee No." value="" />
                        <ClassicInput label="Office Phone" value="" />
                        <ClassicInput label="Ext." value="" />
                        <ClassicInput label="Mobile Phone" value="" />
                        <ClassicInput label="Home Phone" value="" />
                        <ClassicInput label="CNIC" value="" />
                        <ClassicInput label="E-Mail" value="" />
                    </div>
                </div>

                {/* Tabs Section */}
                <div className="mt-8">
                    <div className="flex items-end gap-1 px-2 border-b border-slate-400">
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
                    <div className="bg-white border-x border-b border-slate-400 p-6 min-h-[400px]">
                        {activeTab === 'Address' && (
                            <div className="space-y-8 animate-in fade-in duration-300">
                                {/* Home Address Section */}
                                <div>
                                    <h3 className="text-[11px] font-bold text-slate-800 underline decoration-slate-400 underline-offset-2 mb-4">
                                        Home Address
                                    </h3>

                                    <div className="grid grid-cols-2 gap-x-24">
                                        {/* Home Left */}
                                        <div className="space-y-[4px]">
                                            <div className="flex items-start gap-4">
                                                <span className="text-[11px] font-semibold text-slate-700 w-32 pt-1 text-right">Temporary Address</span>
                                                <textarea className="flex-1 bg-[#fff9c4] border border-slate-400 h-16 px-2 py-1 text-[11px] outline-none" />
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <span className="text-[11px] font-semibold text-slate-700 w-32 pt-1 text-right">Permanent Address</span>
                                                <textarea className="flex-1 bg-[#fff9c4] border border-slate-400 h-16 px-2 py-1 text-[11px] outline-none" />
                                            </div>

                                            <div className="pt-4 space-y-[2px]">
                                                <ClassicInput label="District" className="max-w-md ml-auto" />
                                                <ClassicInput label="City" className="max-w-md ml-auto" />
                                                <ClassicInput label="Zip Code" className="max-w-md ml-auto" />
                                                <ClassicInput label="County" className="max-w-md ml-auto" />
                                                <ClassicInput label="Country/Region" isSelect options={['Pakistan', 'UAE', 'USA']} className="max-w-md ml-auto" />
                                            </div>
                                        </div>

                                        {/* Home Right */}
                                        <div className="space-y-[2px] pt-20">
                                            <div className="flex items-center gap-4">
                                                <span className="text-[11px] font-semibold text-slate-700 w-32 text-right">Building/Floor/Room</span>
                                                <input className="flex-1 bg-[#fff9c4] border border-slate-400 h-6 px-2 text-[11px] outline-none" />
                                            </div>
                                            <div className="flex items-center gap-4 pt-8">
                                                <span className="text-[11px] font-semibold text-slate-700 w-32 text-right">State</span>
                                                <select className="flex-1 bg-[#fff9c4] border border-slate-400 h-6 px-1 text-[11px] outline-none cursor-pointer">
                                                    <option>Punjab</option>
                                                    <option>Sindh</option>
                                                    <option>KPK</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Bank' && (
                            <div className="grid grid-cols-2 gap-x-24 animate-in fade-in duration-300">
                                {/* Bank Left Column */}
                                <div className="space-y-[2px]">
                                    <ClassicInput label="Employee Type" />

                                    {/* Grade: Input + Select */}
                                    <div className="flex items-center border-[0.5px] border-slate-400 bg-[#f0f0f0]">
                                        <label className="w-32 px-2 py-0.5 text-[11px] font-semibold text-slate-700 border-r-[0.5px] border-slate-400 h-full flex items-center">Grade</label>
                                        <input className="w-20 bg-[#fff9c4] px-1 py-0.5 text-[11px] outline-none h-full border-r-[0.5px] border-slate-400" />
                                        <select className="flex-1 bg-[#fff9c4] px-1 py-0.5 text-[11px] outline-none h-full cursor-pointer">
                                            <option></option>
                                        </select>
                                    </div>

                                    <ClassicInput label="Stage" />

                                    {/* Employee Costs: Input + Select */}
                                    <div className="flex items-center border-[0.5px] border-slate-400 bg-[#f0f0f0]">
                                        <label className="w-32 px-2 py-0.5 text-[11px] font-semibold text-slate-700 border-r-[0.5px] border-slate-400 h-full flex items-center">Employee Costs</label>
                                        <input className="w-20 bg-[#fff9c4] px-1 py-0.5 text-[11px] outline-none h-full border-r-[0.5px] border-slate-400" />
                                        <select className="flex-1 bg-[#fff9c4] px-1 py-0.5 text-[11px] outline-none h-full cursor-pointer">
                                            <option>Month</option>
                                        </select>
                                    </div>

                                    <ClassicInput label="Gratuity" isSelect options={['No', 'Yes']} />
                                    <ClassicInput label="Provident Fund" isSelect options={['No', 'Yes']} />
                                    <ClassicInput label="EOBI" isSelect options={['No', 'Yes']} />
                                    <ClassicInput label="Opening Taxable Amount" />
                                    <ClassicInput label="Tax Paid" />
                                    <ClassicInput label="Fuel Liters" />

                                    {/* Allowances/Deductions */}
                                    <div className="pt-4 space-y-[2px]">
                                        <div className="flex items-center border-[0.5px] border-slate-400 bg-[#f0f0f0]">
                                            <label className="flex-1 px-2 py-0.5 text-[11px] font-semibold text-slate-700 border-r-[0.5px] border-slate-400 h-full">Entertainment Allowance</label>
                                            <input className="w-32 bg-[#fff9c4] px-1 py-0.5 text-[11px] outline-none h-full text-right" defaultValue="0.00" />
                                        </div>
                                        <div className="flex items-center border-[0.5px] border-slate-400 bg-[#f0f0f0]">
                                            <label className="flex-1 px-2 py-0.5 text-[11px] font-semibold text-slate-700 border-r-[0.5px] border-slate-400 h-full">Education Allowance</label>
                                            <input className="w-32 bg-[#fff9c4] px-1 py-0.5 text-[11px] outline-none h-full text-right" defaultValue="0.00" />
                                        </div>
                                        <div className="flex items-center border-[0.5px] border-slate-400 bg-[#f0f0f0]">
                                            <label className="flex-1 px-2 py-0.5 text-[11px] font-semibold text-slate-700 border-r-[0.5px] border-slate-400 h-full">Big City Allowance</label>
                                            <input className="w-32 bg-[#fff9c4] px-1 py-0.5 text-[11px] outline-none h-full text-right" defaultValue="0.00" />
                                        </div>
                                        <div className="flex items-center border-[0.5px] border-slate-400 bg-[#f0f0f0]">
                                            <label className="flex-1 px-2 py-0.5 text-[11px] font-semibold text-slate-700 border-r-[0.5px] border-slate-400 h-full">Health Insurance Allocated Amount</label>
                                            <input className="w-32 bg-[#fff9c4] px-1 py-0.5 text-[11px] outline-none h-full text-right" defaultValue="0.00" />
                                        </div>
                                        <div className="flex items-center border-[0.5px] border-slate-400 bg-[#f0f0f0]">
                                            <label className="flex-1 px-2 py-0.5 text-[11px] font-semibold text-slate-700 border-r-[0.5px] border-slate-400 h-full">Health Insurance Deduction</label>
                                            <input className="w-32 bg-[#fff9c4] px-1 py-0.5 text-[11px] outline-none h-full text-right" defaultValue="0.00" />
                                        </div>
                                        <div className="flex items-center border-[0.5px] border-slate-400 bg-[#f0f0f0]">
                                            <label className="flex-1 px-2 py-0.5 text-[11px] font-semibold text-slate-700 border-r-[0.5px] border-slate-400 h-full">Mess Deduction</label>
                                            <input className="w-32 bg-[#fff9c4] px-1 py-0.5 text-[11px] outline-none h-full text-right" defaultValue="0.00" />
                                        </div>
                                    </div>
                                </div>

                                {/* Bank Right Column */}
                                <div className="space-y-[2px]">
                                    <ClassicInput label="Bank" isSelect options={['', 'HBL', 'UBL', 'MCB']} />
                                    <ClassicInput label="Account No." />
                                    <ClassicInput label="Branch" />
                                    <ClassicInput label="OverTime" isSelect options={['No', 'Yes']} />
                                    <ClassicInput label="OT Limit Start" value="60" />
                                    <ClassicInput label="Overtime Limit" value="120" />
                                    <ClassicInput label="Shift" isSelect options={['', 'Morning', 'Evening', 'Night']} />
                                    <ClassicInput label="Time In Relaxation" value="15" />
                                    <ClassicInput label="Time Out Relaxation" value="15" />
                                    <ClassicInput label="Time In Relax" value="3" />
                                    <ClassicInput label="Time Out Relax" value="3" />
                                    <ClassicInput label="Absent Application" isSelect options={['Yes', 'No']} />
                                    <ClassicInput label="Late In Application" value=".25" />
                                    <ClassicInput label="Late Out Application" value=".25" />
                                </div>
                            </div>
                        )}

                        {activeTab !== 'Address' && activeTab !== 'Bank' && (
                            <div className="flex items-center justify-center h-full text-slate-400 italic text-sm">
                                Content for {activeTab} will be implemented based on requirements.
                            </div>
                        )}
                    </div>
                </div>

                {/* Page Footer Action bar could go here */}
                <div className="flex justify-end gap-2 pt-4">
                    <button className="px-6 py-1 bg-[#e0e0e0] border border-slate-400 text-[11px] font-bold text-slate-800 hover:bg-[#d4d4d4] transition-colors">
                        Cancel
                    </button>
                    <button className="px-6 py-1 bg-[#e0e0e0] border border-slate-400 text-[11px] font-bold text-slate-800 hover:bg-[#d4d4d4] transition-colors">
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}
