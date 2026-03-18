import React, { useState } from 'react';
import { cn } from "@/lib/utils";

const ClassicTab = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "px-4 py-1 text-[11px] font-semibold border-t border-x border-slate-400 rounded-t-sm transition-colors",
      active ? "bg-[#f0f0f0] -mb-[1px] z-10 border-b-transparent" : "bg-[#e0e0e0] hover:bg-[#d8d8d8]"
    )}
  >
    {label}
  </button>
);

const SubTab = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "px-3 py-[2px] text-[10px] border-t border-x border-slate-400 rounded-t-sm transition-colors",
      active ? "bg-white -mb-[1px] z-10 border-b-transparent font-semibold" : "bg-[#e8e8e8] hover:bg-[#ddd]"
    )}
  >
    {label}
  </button>
);

const FieldRow = ({ label, children, className }) => (
  <div className={cn("flex items-center mb-[2px]", className)}>
    <span className="text-[11px] text-slate-800 w-[160px] shrink-0">{label}</span>
    {children}
  </div>
);

const TextInput = ({ value, className, type = "text", readOnly = false }) => (
  <input
    type={type}
    defaultValue={value}
    readOnly={readOnly}
    className={cn(
      "bg-[#fff9c4] border border-slate-400 px-1 py-0.5 text-[11px] outline-none h-[20px] focus:bg-white transition-colors",
      readOnly && "bg-[#f0f0f0] cursor-default",
      className
    )}
  />
);

const SelectInput = ({ options = [], value, className }) => (
  <select
    defaultValue={value}
    className={cn(
      "bg-[#fff9c4] border border-slate-400 px-1 py-0.5 text-[11px] outline-none h-[22px] cursor-pointer focus:bg-white",
      className
    )}
  >
    {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
  </select>
);

const Checkbox = ({ label, checked = false, className }) => (
  <label className={cn("flex items-center gap-1 cursor-pointer mb-[2px]", className)}>
    <input type="checkbox" defaultChecked={checked} className="w-3 h-3" />
    <span className="text-[11px] text-slate-800">{label}</span>
  </label>
);

const RadioOption = ({ label, name, checked = false }) => (
  <label className="flex items-center gap-1 cursor-pointer mb-[1px]">
    <input type="radio" name={name} defaultChecked={checked} className="w-3 h-3" />
    <span className="text-[11px] text-slate-800">{label}</span>
  </label>
);

// ========== GENERAL TAB ==========
const GeneralTab = () => {
  const [langTab, setLangTab] = useState('Local Language');

  return (
    <div className="p-3">
      {/* Sub tabs: Local Language / Foreign Language */}
      <div className="flex items-end gap-1 border-b border-slate-400 mb-4">
        <SubTab label="Local Language" active={langTab === 'Local Language'} onClick={() => setLangTab('Local Language')} />
        <SubTab label="Foreign Language" active={langTab === 'Foreign Language'} onClick={() => setLangTab('Foreign Language')} />
      </div>

      <div className="flex gap-6">
        {/* Left column */}
        <div className="flex-1">
          <FieldRow label="Company Name">
            <TextInput className="flex-1" />
          </FieldRow>
          <FieldRow label="Address">
            <TextInput className="flex-1" />
          </FieldRow>

          <div className="mt-4">
            <FieldRow label="Street / PO Box">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="Street No.">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="Block">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="Building/Floor/Room">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="City">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="Zip Code">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="County">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="State">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="Country/Region">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="Internet Address">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="Printing Header">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="Active Manager">
              <TextInput className="flex-1" />
            </FieldRow>
          </div>

          <div className="mt-6">
            <FieldRow label="Alias Name">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="Telephone 1">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="Telephone 2">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="Fax">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="E-Mail">
              <TextInput className="flex-1" />
            </FieldRow>
            <FieldRow label="GLN">
              <TextInput className="flex-1" />
            </FieldRow>
          </div>
        </div>

        {/* Right column - Company logo placeholder */}
        <div className="w-[140px] shrink-0">
          <div className="w-[130px] h-[100px] border border-slate-400 bg-white flex items-center justify-center">
            <span className="text-[10px] text-slate-400 italic">Company Logo</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========== ACCOUNTING DATA TAB ==========
const AccountingDataTab = () => (
  <div className="p-3">
    <div className="max-w-[550px]">
      <FieldRow label="Tax Office">
        <TextInput className="flex-1" />
      </FieldRow>
      <FieldRow label="Federal Tax ID 1">
        <TextInput className="flex-1" />
      </FieldRow>
      <FieldRow label="Federal Tax ID 2">
        <TextInput className="flex-1" />
      </FieldRow>
      <FieldRow label="Federal Tax ID 3">
        <TextInput className="flex-1" />
      </FieldRow>
      <FieldRow label="Additional ID">
        <TextInput className="flex-1" />
      </FieldRow>

      <div className="mt-6">
        <FieldRow label="Company Tax Rate">
          <TextInput value="0.00" className="w-[120px] text-right" />
        </FieldRow>
        <FieldRow label="Exemption Number">
          <TextInput className="flex-1" />
        </FieldRow>
        <FieldRow label="Tax Deduction Number">
          <TextInput className="flex-1" />
        </FieldRow>
        <FieldRow label="Tax Official">
          <TextInput className="flex-1" />
        </FieldRow>
      </div>

      <div className="mt-6 space-y-2">
        <Checkbox label="Use Deferred Tax" />

        <div className="ml-0 mt-2">
          <Checkbox label="Apply Exchange Rate on Deferred Tax" />
        </div>

        <FieldRow label="Tax Rate Determination">
          <SelectInput options={['Posting Date', 'Document Date']} className="flex-1" />
        </FieldRow>

        <div className="mt-3">
          <FieldRow label="Holidays">
            <SelectInput
              options={['Australian Holidays', 'Pakistani Holidays', 'US Holidays', 'UK Holidays']}
              value="Australian Holidays"
              className="flex-1 bg-[#fff9c4]"
            />
          </FieldRow>
        </div>

        <div className="mt-4">
          <Checkbox label="Extended Tax Reporting" />
        </div>

        <div className="mt-4">
          <FieldRow label="EORI Number">
            <TextInput className="w-[180px]" />
          </FieldRow>
        </div>

        <div className="mt-2">
          <Checkbox label="Allow External Calculation of Tax on A/R Documents" />
        </div>
      </div>
    </div>
  </div>
);

// ========== BASIC INITIALIZATION TAB ==========
const BasicInitializationTab = () => (
  <div className="p-3 overflow-auto">
    <div className="max-w-[650px]">
      <FieldRow label="Chart of Accounts Template">
        <TextInput value="User-Defined" className="flex-1" readOnly />
      </FieldRow>
      <FieldRow label="Local Currency">
        <TextInput value="Pakistani Rupee" className="flex-1" readOnly />
      </FieldRow>
      <FieldRow label="System Currency">
        <TextInput value="Pakistani Rupee" className="flex-1" readOnly />
      </FieldRow>
      <FieldRow label="Default Account Currency">
        <SelectInput options={['All Currencies', 'Local Currency', 'System Currency']} value="All Currencies" className="flex-1" />
      </FieldRow>

      <div className="mt-3 ml-[10px] space-y-[2px]">
        <Checkbox label="Display Credit Balance with Negative Sign" checked />
        <Checkbox label="Use Segmentation Accounts" />
        <Checkbox label="Allow Negative Amounts for Reversal Transaction Posting" />
        <Checkbox label="Permit More than One Document Type per Series" />
      </div>

      <div className="mt-4 ml-[10px]">
        <Checkbox label="Multi-Language Support" />
      </div>

      <div className="mt-4 ml-[10px]">
        <Checkbox label="Use Perpetual Inventory" checked />
      </div>

      <div className="mt-2">
        <FieldRow label="Item Groups Valuation Method">
          <SelectInput options={['FIFO', 'Moving Average', 'Standard', 'By Warehouse']} value="FIFO" className="flex-1" />
        </FieldRow>
      </div>

      <div className="mt-1 ml-[20px] space-y-[2px]">
        <Checkbox label="Manage Item Cost per Warehouse" checked />
        <Checkbox label="Use Purchase Accounts Posting System" />
        <Checkbox label="Allow Stock Release Without Item Cost" checked />
      </div>

      <div className="mt-3 ml-[10px]">
        <span className="text-[11px] text-slate-800 mb-1 block">Manage Serial and Batch Cost By</span>
        <div className="ml-4">
          <RadioOption label="Items Group Valuation Method" name="serialBatch" checked />
          <RadioOption label="Serial/Batch Valuation Method" name="serialBatch" />
        </div>
      </div>

      <div className="mt-3 ml-[10px]">
        <Checkbox label="Enable Separate Net and Gross Price Mode" />
      </div>

      {/* Banking section */}
      <div className="mt-6 border-t border-slate-300 pt-3">
        <FieldRow label="Ordering Party">
          <TextInput className="flex-1" />
        </FieldRow>
        <div className="mt-1">
          <span className="text-[11px] text-slate-800 font-semibold underline underline-offset-2 mb-2 block">House Bank</span>
        </div>
        <FieldRow label="Default Bank Country/Region">
          <SelectInput options={['', 'Pakistan', 'UAE', 'USA', 'UK']} className="flex-1" />
        </FieldRow>
        <FieldRow label="Default Bank">
          <TextInput className="flex-1" />
        </FieldRow>
        <FieldRow label="Default Account No.">
          <SelectInput options={['']} className="flex-1" />
        </FieldRow>
        <FieldRow label="Default Branch">
          <TextInput className="flex-1" />
        </FieldRow>
        <div className="mt-2 ml-[10px]">
          <Checkbox label="Install Bank Statement Processing" />
        </div>
      </div>

      {/* Fixed Assets */}
      <div className="mt-4 ml-[10px]">
        <Checkbox label="Enable Fixed Assets" />
      </div>
      <div className="mt-1">
        <FieldRow label="Calculate Depreciation By">
          <SelectInput options={['Month', 'Day']} value="Month" className="flex-1 bg-[#fff9c4]" />
        </FieldRow>
      </div>

      <div className="mt-3 ml-[10px]">
        <Checkbox label="Enable Multiple Branches" />
      </div>
    </div>
  </div>
);

// ========== MAIN COMPONENT ==========
export default function CompanyDetails() {
  const [activeTab, setActiveTab] = useState('General');
  const tabs = ['General', 'Accounting Data', 'Basic Initialization'];

  return (
    <div className="flex flex-col bg-[#f0f0f0] min-h-full font-sans select-none">
      {/* Header */}
      <div className="h-[25px] flex items-center px-4 bg-gradient-to-b from-[#e6e6e6] to-[#cccccc] border-b border-slate-400 shadow-sm">
        <span className="text-[12px] font-bold text-slate-800">Company Details</span>
      </div>
      {/* Yellow Divider */}
      <div className="h-[3px] w-full bg-[#f5a623]"></div>

      <div className="p-4 flex-1 flex flex-col">
        {/* Main Tabs */}
        <div className="flex items-end gap-1 border-b border-slate-400">
          {tabs.map(tab => (
            <ClassicTab key={tab} label={tab} active={activeTab === tab} onClick={() => setActiveTab(tab)} />
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-[#f0f0f0] border-x border-b border-slate-400 flex-1 animate-in fade-in duration-200">
          {activeTab === 'General' && <GeneralTab />}
          {activeTab === 'Accounting Data' && <AccountingDataTab />}
          {activeTab === 'Basic Initialization' && <BasicInitializationTab />}
        </div>

        {/* Footer buttons */}
        <div className="flex justify-end gap-2 pt-3">
          <button className="px-6 py-1 bg-gradient-to-b from-[#fcf096] to-[#f4d142] border border-slate-500 text-[11px] text-slate-800 hover:brightness-95 rounded-[2px]">
            OK
          </button>
          <button className="px-6 py-1 bg-gradient-to-b from-[#fcf096] to-[#f4d142] border border-slate-500 text-[11px] text-slate-800 hover:brightness-95 rounded-[2px]">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
