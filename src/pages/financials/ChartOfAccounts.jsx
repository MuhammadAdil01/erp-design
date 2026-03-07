import React, { useState } from 'react';
import {
    ChevronRight,
    Save,
    ListTree
} from 'lucide-react';

const InputField = ({ label, placeholder, type = "text", name, value, onChange }) => (
    <div className="space-y-1.5 flex-1 min-w-[240px]">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all"
        />
    </div>
);

const SelectField = ({ label, options, name, value, onChange }) => (
    <div className="space-y-1.5 flex-1 min-w-[240px]">
        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{label}</label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all appearance-none cursor-pointer">
            <option value="" disabled>Select {label}</option>
            {options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
            ))}
        </select>
    </div>
);

export default function ChartOfAccounts() {
    const [formData, setFormData] = useState({
        accountCode: '',
        accountName: '',
        accountType: '',
        category: '',
        subCategory: '',
        currency: '',
        openingBalance: '',
        targetBalance: '',
        taxGroup: '',
        referenceNo: '',
        integrationKey: '',
        reportingGroup: '',
        description: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        try {
            setLoading(true);
            const payload = {
                ...formData,
                openingBalance: parseFloat(formData.openingBalance) || 0,
                targetBalance: parseFloat(formData.targetBalance) || 0,
            };

            const response = await fetch('http://localhost:3000/chart-of-accounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error('Failed to save account');
            }

            // alert('Chart of Account saved successfully!');
            // Reset form
            setFormData({
                accountCode: '', accountName: '', accountType: '', category: '',
                subCategory: '', currency: '', openingBalance: '', targetBalance: '',
                taxGroup: '', referenceNo: '', integrationKey: '', reportingGroup: '', description: ''
            });

        } catch (error) {
            console.error('Error saving:', error);
            alert('Error saving Chart of Account.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-1">
                        <span>Financials</span>
                        <ChevronRight size={14} />
                        <span className="text-primary font-medium">Chart of Accounts</span>
                    </div>
                    <h1 className="text-2xl font-bold text-primary">Chart of Accounts Setup</h1>
                </div>
            </div>

            <div className="glass-card rounded-[2rem] overflow-hidden">
                <div className="bg-primary/5 p-8 border-b border-primary/10">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 rounded-2xl bg-white shadow-sm border border-primary/10">
                            <ListTree size={24} className="text-primary" />
                        </div>
                        <div>
                            <h2 className="text-lg font-bold text-slate-800">New Account Entry</h2>
                            <p className="text-sm text-slate-500">Define your ledger structure with precision</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <InputField label="Account Code" name="accountCode" value={formData.accountCode} onChange={handleChange} placeholder="e.g. 101001" />
                        <InputField label="Account Name" name="accountName" value={formData.accountName} onChange={handleChange} placeholder="e.g. Cash at Bank" />
                        <SelectField label="Account Type" name="accountType" value={formData.accountType} onChange={handleChange} options={['Assets', 'Liabilities', 'Equity', 'Revenue', 'Expenses']} />
                        <SelectField label="Category" name="category" value={formData.category} onChange={handleChange} options={['Current Assets', 'Fixed Assets', 'Operating Expenses', 'Direct Revenue']} />
                        <SelectField label="Sub-Category" name="subCategory" value={formData.subCategory} onChange={handleChange} options={['Bank Accounts', 'Cash Accounts', 'Inventory', 'Receivables']} />
                        <SelectField label="Currency" name="currency" value={formData.currency} onChange={handleChange} options={['PKR', 'USD', 'AED', 'SAR']} />
                        <InputField label="Opening Balance" name="openingBalance" value={formData.openingBalance} onChange={handleChange} placeholder="0.00" type="number" />
                        <InputField label="Target Balance" name="targetBalance" value={formData.targetBalance} onChange={handleChange} placeholder="0.00" type="number" />
                        <SelectField label="Tax Group" name="taxGroup" value={formData.taxGroup} onChange={handleChange} options={['Exempt', 'Standard 17%', 'Reduced 5%']} />
                        <InputField label="Reference No." name="referenceNo" value={formData.referenceNo} onChange={handleChange} placeholder="..." />
                        <InputField label="Integration Key" name="integrationKey" value={formData.integrationKey} onChange={handleChange} placeholder="ERP-ID-..." />
                        <SelectField label="Reporting Group" name="reportingGroup" value={formData.reportingGroup} onChange={handleChange} options={['Head Office', 'Retail', 'Online']} />
                    </div>
                </div>

                <div className="p-8 space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest px-1">Additional Details</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1.5 flex-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all resize-none"
                                    placeholder="Enter account description..."
                                />
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end gap-3 border-t border-slate-100">
                        <button
                            onClick={handleSave}
                            disabled={loading}
                            className="px-8 py-3 rounded-xl bg-primary text-white hover:opacity-90 transition-all font-bold shadow-lg shadow-primary/20 flex items-center gap-2 disabled:opacity-50">
                            <Save size={18} /> {loading ? 'Saving...' : 'save files'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
