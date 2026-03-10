import React, { useState } from 'react';
import {
    ChevronRight,
    Save,
    Search,
    Edit3,
    History,
    ArrowUpDown,
    CheckCircle2,
    Loader2,
    XCircle
} from 'lucide-react';

const cn = (...classes) => classes.filter(Boolean).join(' ');

const InputField = ({ label, placeholder, type = "text", className = "", value, onChange, name }) => (
    <div clasName={cn("space-y-1.5 flex-1 min-w-[240px]", className)}>
        <label className="text-[10px] font-bold text-yellow-700 uppercase tracking-widest block">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-white border border-yellow-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400 transition-all font-semibold text-slate-700 placeholder:text-slate-300"
        />
    </div>
);

const SelectField = ({ label, options, className = "", value, onChange, name }) => (
    <div className={cn("space-y-1.5 flex-1 min-w-[240px]", className)}>
        <label className="text-[10px] font-bold text-yellow-700 uppercase tracking-widest block">{label}</label>
        <div className="relative">
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="w-full bg-white border border-yellow-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400 transition-all appearance-none cursor-pointer font-semibold text-slate-700"
            >
                <option value="" disabled>Select {label}</option>
                {options.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                ))}
            </select>
        </div>
    </div>
);

export default function EditChartOfAccounts() {
    const [selectedOption, setSelectedOption] = useState("manual");
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const [formData, setFormData] = useState({
        accountCode: '',
        accountName: '',
        accountType: '',
        category: '',
        subCategory: '',
        currency: 'PKR',
        openingBalance: '',
        currentBalance: '',
        taxGroup: '',
        integrationKey: '',
        reportingGroup: '',
        externalReference: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = async () => {
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // Map UI fields to Prisma Schema
            const payload = {
                accountCode: formData.accountCode,
                accountName: formData.accountName,
                accountType: formData.accountType,
                category: formData.category,
                subCategory: formData.subCategory,
                currency: formData.currency,
                openingBalance: parseFloat(formData.openingBalance || 0),
                targetBalance: parseFloat(formData.currentBalance || 0),
                taxGroup: formData.taxGroup,
                referenceNo: formData.externalReference,
                integrationKey: formData.integrationKey,
                reportingGroup: formData.reportingGroup,
                description: `Posting Control: ${selectedOption}`
            };

            // Basic Validation
            if (!payload.accountCode || !payload.accountName) {
                throw new Error("Account Code and Name are required.");
            }

            const response = await fetch('http://localhost:3000/chart-of-accounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to save account details');
            }

            setStatus({ type: 'success', message: 'Account details updated successfully!' });
            // Reset form or handle navigation if needed
        } catch (error) {
            console.error('Save Error:', error);
            setStatus({ type: 'error', message: error.message });
        } finally {
            setIsLoading(false);
            // Clear status after 5 seconds
            setTimeout(() => setStatus({ type: '', message: '' }), 5000);
        }
    };

    return (
        <div className="min-h-screen pb-12 p-6" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fffbeb 40%, #fef9c3 70%, #fef08a 100%)' }}>
            <div className="max-w-7xl mx-auto space-y-6">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2 text-sm text-yellow-600 mb-1">
                            <span className="text-slate-400">Financials</span>
                            <ChevronRight size={14} className="text-yellow-400" />
                            <span className="text-yellow-600 font-semibold">Edit Chart of Accounts</span>
                        </div>
                        <h1 className="text-2xl font-bold tracking-tight" style={{ color: '#92400e' }}>
                            Modify Financial Structure
                        </h1>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setFormData({
                                accountCode: '', accountName: '', accountType: '', category: '',
                                subCategory: '', currency: 'PKR', openingBalance: '', currentBalance: '',
                                taxGroup: '', integrationKey: '', reportingGroup: '', externalReference: ''
                            })}
                            className="px-6 py-2.5 rounded-xl border border-yellow-200 text-yellow-700 hover:bg-yellow-50 transition-all font-bold shadow-sm bg-white"
                        >
                            Cancel Changes
                        </button>
                        <button
                            onClick={handleSave}
                            disabled={isLoading}
                            className="px-8 py-2.5 rounded-xl text-white hover:opacity-90 disabled:opacity-50 transition-all font-bold shadow-lg flex items-center gap-2"
                            style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
                        >
                            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                            {isLoading ? 'Updating...' : 'Update Account'}
                        </button>
                    </div>
                </div>

                {/* Status Message */}
                {status.message && (
                    <div className={cn(
                        "p-4 rounded-2xl flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300",
                        status.type === 'success' ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"
                    )}>
                        {status.type === 'success' ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                        <p className="font-bold text-sm">{status.message}</p>
                    </div>
                )}

                {/* Search Bar */}
                <div
                    className="rounded-3xl p-8 flex flex-wrap items-center gap-8 shadow-xl relative overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #1c1917 0%, #292524 60%, #3b2f1a 100%)' }}
                >
                    <div className="absolute top-0 right-0 w-72 h-full opacity-20 -skew-x-12 translate-x-32"
                        style={{ background: 'linear-gradient(180deg, #fbbf24, #fef08a)' }}></div>
                    <div className="absolute bottom-0 left-0 w-48 h-32 opacity-10 rounded-full blur-3xl"
                        style={{ background: '#fbbf24' }}></div>

                    <div className="w-16 h-16 rounded-2xl border border-yellow-400/30 flex items-center justify-center relative z-10"
                        style={{ background: 'rgba(251,191,36,0.15)' }}>
                        <Search size={28} className="text-yellow-400" />
                    </div>

                    <div className="flex-1 min-w-[300px] relative z-10">
                        <label className="text-[10px] font-bold text-yellow-400 uppercase tracking-widest mb-2 block">
                            Search Existing Account
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Type Account Code or Name (e.g. 101001 - Petty Cash)"
                                className="w-full rounded-2xl px-6 py-4 text-base font-bold outline-none transition-all placeholder:text-white/20 text-white"
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(251,191,36,0.2)',
                                }}
                                onFocus={e => e.target.style.boxShadow = '0 0 0 2px rgba(251,191,36,0.4)'}
                                onBlur={e => e.target.style.boxShadow = 'none'}
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                <span className="px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest text-yellow-300"
                                    style={{ background: 'rgba(251,191,36,0.2)' }}>
                                    Active
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:flex flex-col gap-3 relative z-10 border-l border-yellow-400/20 pl-8">
                        <div className="flex items-center gap-3">
                            <History size={16} className="text-yellow-400" />
                            <span className="text-xs font-semibold text-slate-300">Last modified: Just now</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 size={16} className="text-green-400" />
                            <span className="text-xs font-semibold text-slate-300">Audited: FY2024-Q1</span>
                        </div>
                    </div>
                </div>

                {/* Form Card */}
                <div className="rounded-3xl overflow-hidden shadow-lg border border-yellow-100 bg-white">

                    {/* Top Section */}
                    <div className="p-8 border-b border-yellow-100"
                        style={{ background: 'linear-gradient(135deg, #fffbeb 0%, #fef9c3 100%)' }}>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-2xl bg-white shadow-sm border border-yellow-200">
                                <Edit3 size={24} className="text-yellow-500" />
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-slate-800">Core Account Details</h2>
                                <p className="text-sm text-yellow-600 font-medium">Update foundational ledger parameters</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <InputField
                                label="Account Code" name="accountCode" value={formData.accountCode}
                                onChange={handleInputChange} placeholder="101001"
                            />
                            <InputField
                                label="Account Name" name="accountName" value={formData.accountName}
                                onChange={handleInputChange} placeholder="Petty Cash - Head Office"
                            />
                            <SelectField
                                label="Account Type" name="accountType" value={formData.accountType}
                                onChange={handleInputChange} options={['Assets', 'Liabilities', 'Equity', 'Revenue', 'Expenses']}
                            />
                            <SelectField
                                label="Category" name="category" value={formData.category}
                                onChange={handleInputChange} options={['Current Assets', 'Fixed Assets', 'Operating Expenses', 'Direct Revenue']}
                            />
                            <SelectField
                                label="Sub-Category" name="subCategory" value={formData.subCategory}
                                onChange={handleInputChange} options={['Bank Accounts', 'Cash Accounts', 'Inventory', 'Receivables']}
                            />
                            <SelectField
                                label="Currency" name="currency" value={formData.currency}
                                onChange={handleInputChange} options={['PKR', 'USD', 'AED', 'SAR']}
                            />
                            <InputField
                                label="Opening Balance" name="openingBalance" value={formData.openingBalance}
                                onChange={handleInputChange} placeholder="25,000.00" type="number"
                            />
                            <InputField
                                label="Current Balance" name="currentBalance" value={formData.currentBalance}
                                onChange={handleInputChange} placeholder="18,450.00" type="number"
                            />
                            <SelectField
                                label="Tax Group" name="taxGroup" value={formData.taxGroup}
                                onChange={handleInputChange} options={['Exempt', 'Standard 17%', 'Reduced 5%']}
                            />
                            <InputField
                                label="Integration Key" name="integrationKey" value={formData.integrationKey}
                                onChange={handleInputChange} placeholder="ERP-ID-101-PETTY"
                            />
                            <SelectField
                                label="Reporting Group" name="reportingGroup" value={formData.reportingGroup}
                                onChange={handleInputChange} options={['Head Office', 'Retail', 'Online']}
                            />
                            <InputField
                                label="External Reference" name="externalReference" value={formData.externalReference}
                                onChange={handleInputChange} placeholder="REF-BANK-009"
                            />
                        </div>
                    </div>

                    {/* Posting Controls */}
                    <div className="p-10">
                        <h3 className="text-xs font-bold text-yellow-600 uppercase tracking-widest mb-6 flex items-center gap-2">
                            <ArrowUpDown size={14} className="text-yellow-500" />
                            Posting Controls & Behavior
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                {
                                    value: "manual",
                                    title: "Manual Postings Allowed",
                                    desc: "System permits manual journal entries to this account."
                                },
                                {
                                    value: "block",
                                    title: "Block Sub-Ledger Posting",
                                    desc: "Prevent automatic postings from sales or purchase modules."
                                },
                                {
                                    value: "reconciliation",
                                    title: "Reconciliation Account",
                                    desc: "Designate this as a control account for AR/AP modules."
                                }
                            ].map((option) => (
                                <label
                                    key={option.value}
                                    className="p-6 rounded-3xl border cursor-pointer transition-all"
                                    style={
                                        selectedOption === option.value
                                            ? {
                                                background: 'linear-gradient(135deg, #fffbeb, #fef9c3)',
                                                border: '2px solid #f59e0b',
                                                boxShadow: '0 8px 24px rgba(245,158,11,0.15)'
                                            }
                                            : {
                                                background: '#fafafa',
                                                border: '1px solid #fef3c7'
                                            }
                                    }
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <input
                                            type="radio"
                                            name="postingControl"
                                            value={option.value}
                                            checked={selectedOption === option.value}
                                            onChange={(e) => setSelectedOption(e.target.value)}
                                            className="w-5 h-5 cursor-pointer accent-yellow-500"
                                        />
                                        <span className="text-sm font-bold text-slate-700">{option.title}</span>

                                    </div>
                                    <p className="text-[11px] text-slate-400 font-semibold leading-relaxed">
                                        {option.desc}
                                    </p>
                                </label>
                            ))}
                        </div>
                        <button
                            onClick={handleSave}
                            disabled={isLoading}
                            className="px-8 py-2.5 mt-10 rounded-xl text-white font-bold shadow-lg flex items-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all"
                            style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
                        >
                            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
                            {isLoading ? 'Saving...' : 'Save Fields'}
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
