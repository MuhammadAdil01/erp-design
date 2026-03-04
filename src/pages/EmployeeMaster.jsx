import React, { useState } from 'react';
import {
    User,
    MapPin,
    Home,
    Briefcase,
    Banknote,
    Paperclip,
    X,
    Camera,
    ChevronRight,
    Plus
} from 'lucide-react';
import { cn } from "@/lib/utils";

const TabButton = ({ active, label, icon: Icon, onClick }) => (
    <button
        onClick={onClick}
        className={cn(
            "flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2",
            active
                ? "border-primary text-primary bg-primary/5"
                : "border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50"
        )}
    >
        <Icon size={18} />
        {label}
    </button>
);

const InputField = ({ label, placeholder, type = "text", value, onChange }) => (
    <div className="space-y-1.5 flex-1 min-w-[240px]">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
        <input
            type={type}
            placeholder={placeholder}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
        />
    </div>
);


const SelectField = ({ label, options }) => (
    <div className="space-y-1.5 flex-1 min-w-[240px]">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
        <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all appearance-none cursor-pointer">
            {options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

export default function EmployeeMaster() {
    const [activeTab, setActiveTab] = useState('Personal');

    const tabs = [
        { label: 'Personal', icon: User },
        { label: 'Address', icon: MapPin },
        { label: 'Administration', icon: Briefcase },
        { label: 'Bank', icon: Banknote },
        { label: 'Attachments', icon: Paperclip }
    ];

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Human Resources</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Employee Master Data</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary">Employee Master Data</h1>
                </div>
            </div>

            {/* Main Form Container */}
            <div className="glass-card rounded-[2rem] overflow-hidden">
                {/* Profile Summary Strip */}
                <div className="bg-primary/5 p-8 border-b border-primary/10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="relative group">
                        <div className="w-24 h-24 rounded-3xl bg-white border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                            <User size={48} className="text-slate-200" />
                        </div>
                        <button className="absolute -bottom-2 -right-2 p-2 bg-primary text-white rounded-xl shadow-lg hover:scale-110 transition-all">
                            <Camera size={16} />
                        </button>
                    </div>

                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                        <InputField label="Employee Code" placeholder="EMP-001" />
                        <InputField label="Full Name" placeholder="Enter name" />
                        <SelectField label="Branch" options={['Head Office', 'Dubai Branch', 'KSA Branch']} />
                        <SelectField label="Status" options={['Active', 'On Leave', 'In Probation']} />
                        <InputField label="Designation" placeholder="e.g. Senior Manager" />
                        <InputField label="Department" placeholder="Operations / IT" />
                        <InputField label="Employee Type" placeholder="Permanent / Contract" />
                        <InputField label="Shift" placeholder="Day / Night" />
                    </div>
                </div>

                {/* Dynamic Content Area */}
                <div className="flex flex-col">
                    {/* Tabs Navigation */}
                    <div className="flex border-b border-slate-100 overflow-x-auto">
                        {tabs.map((tab) => (
                            <TabButton
                                key={tab.label}
                                label={tab.label}
                                icon={tab.icon}
                                active={activeTab === tab.label}
                                onClick={() => setActiveTab(tab.label)}
                            />
                        ))}
                    </div>

                    {/* Form Fields Section */}
                    <div className="p-8">
                        {activeTab === 'Personal' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                <InputField label="Middle Name" placeholder="..." />
                                <InputField label="Father Name" placeholder="..." />
                                <InputField label="Office Badge NO" placeholder="e.g. employee data" />
                                <InputField label="Job Title" placeholder="e.g. employee data" />
                                <InputField label="Date of Birth" placeholder="e.g. employee data" />
                                <InputField label="section" placeholder="e.g. employee data" />
                                <InputField label="Job Title" placeholder="e.g. employee data" />
                                <InputField label="Email" placeholder="e.g. employee data" />
                                <SelectField label="Position" options={['Manager', 'Sr. Developer', 'management team']} />
                                <InputField label="Department" placeholder="Software Engineering" />
                                <InputField label="Date of Join" type="date" />
                                <InputField label="ID No (National ID)" placeholder="..." />
                                <InputField label="CNIC" placeholder="..." />
                                <InputField label="Email Address" type="email" placeholder="@example.com" />
                                <InputField label="Mobile Phone" placeholder="+92 ..." />
                            </div>
                        )}

                        {activeTab === 'Address' && (
                            <div className="space-y-8 animate-in fade-in slide-in-from-top-2 duration-300">
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold text-primary flex items-center gap-2">
                                        <Home size={16} /> Residential Address
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <InputField label="Home Address" placeholder="Street, Block..." />
                                        <InputField label="State / Province" placeholder="..." />
                                        <InputField label="City" placeholder="..." />
                                        <InputField label="Email" placeholder="..." />
                                        <InputField label="CNIC" placeholder="..." />
                                        <InputField label="ZiP Code" placeholder="..." />
                                        <InputField label="Postal Code" placeholder="..." />
                                        <InputField label="Street No" placeholder="..." />
                                        <SelectField label="Country" options={['Pakistan', 'UAE', 'Saudi Arabia', 'USA']} />
                                    </div>

                                </div>
                                <div className="h-px bg-slate-100"></div>
                                <div className="space-y-4">
                                    <h3 className="text-sm font-bold text-slate-400 flex items-center gap-2">
                                        <MapPin size={16} /> Office Location
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-60">
                                        <InputField label="Building / Floor" placeholder="..." />
                                        <InputField label="Office Phone" placeholder="..." />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'Administration' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                <SelectField label="Contract Type" options={['Full-Time', 'Part-Time', 'Contract', 'Internship']} />
                                <InputField label="Notice Period" placeholder="e.g. 30 Days" />
                                <InputField label="Work Permit No" placeholder="..." />
                                <InputField label="Visa Expiry" type="date" />
                                <InputField label="Passport No" placeholder="..." />
                                <InputField label="Insurance Plan" placeholder="e.g. Premium Health" />
                                <SelectField label="Manager / Supervisor" options={['None', 'Alice Smith', 'Robert Fox']} />
                                <InputField label="Attendance System ID" placeholder="..." />
                                <InputField label="Overtime Policy" placeholder="Standard / 1.5x" />
                            </div>
                        )}

                        {activeTab === 'Bank' && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                <InputField label="Bank Name" placeholder="e.g. HBL / Habib Bank" />
                                <InputField label="Branch Code" placeholder="0012" />
                                <InputField label="Account Holder" placeholder="FullName" />
                                <InputField label="Account Number" placeholder="..." />
                                <InputField label="IBAN Number" placeholder="PK ..." />
                                <InputField label="SWIFT / BIC" placeholder="..." />
                                <SelectField label="Payment Method" options={['Bank Transfer', 'Cheque', 'Cash']} />
                                <InputField label="Tax ID / NTN" placeholder="..." />
                                <InputField label="Social Security No" placeholder="..." />
                            </div>
                        )}

                        {activeTab === 'Attachments' && (
                            <div className="py-20 flex flex-col items-center justify-center text-slate-400">
                                <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-dashed border-slate-200">
                                    <Plus size={32} />
                                </div>
                                <p className="text-sm font-bold uppercase tracking-widest">Upload Documents</p>
                                <p className="text-xs mt-1">PDF, JPG, PNG (Max 5MB)</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
