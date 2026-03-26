import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  ClassicInput, 
  ClassicSel,
  FormContainer,
  YellowBtn
} from '@/components/ClassicERPUI';

const PurchaseRequestReportContent = () => {
  const [form, setForm] = useState({
    type: 'Item',
    codeFrom: '', codeTo: '',
    prefVendorFrom: '', prefVendorTo: '',
    itemGroup: 'All',
    requesterType: 'users-employees',
    branchChecked: false,
    departmentChecked: false,
    projectChecked: false,
    docNoFrom: '', docNoTo: '',
    postingDateFrom: '', postingDateTo: '',
    validUntilFrom: '', validUntilTo: '',
    documentDateFrom: '', documentDateTo: '',
    requiredDateFrom: '', requiredDateTo: '',
    displayOpen: true,
    displayMRP: false,
  });

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <FormContainer 
      footerButtons={[
        { label: 'OK', onClick: () => console.log('OK', form) },
        { label: 'Cancel', onClick: () => console.log('Cancel') }
      ]}
    >
      <div className="flex flex-col h-full p-2 gap-2">
        {/* Type */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-800 w-24 shrink-0">Type</span>
          <ClassicSel options={['Item','Service']} value={form.type} onChange={handleChange('type')} className="w-40" />
        </div>

        {/* Code */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-800 w-24 shrink-0">Code</span>
          <span className="text-[11px] text-slate-800">From</span>
          <ClassicInput value={form.codeFrom} onChange={handleChange('codeFrom')} className="w-24" />
          <span className="text-[11px] text-slate-800">To</span>
          <ClassicInput value={form.codeTo} onChange={handleChange('codeTo')} className="w-24" />
        </div>

        {/* Preferred Vendor */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-800 w-24 shrink-0">Preferred Vendor</span>
          <span className="text-[11px] text-slate-800">From</span>
          <ClassicInput value={form.prefVendorFrom} onChange={handleChange('prefVendorFrom')} className="w-24" />
          <span className="text-[11px] text-slate-800">To</span>
          <ClassicInput value={form.prefVendorTo} onChange={handleChange('prefVendorTo')} className="w-24" />
        </div>

        {/* Item Group */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-slate-800 w-24 shrink-0">Item Group</span>
          <ClassicSel options={['All']} value={form.itemGroup} onChange={handleChange('itemGroup')} className="flex-1" />
        </div>

        {/* Properties */}
        <div className="flex items-center gap-2">
          <YellowBtn label="Properties" className="w-24 py-[3px] font-bold text-[11px]" />
          <ClassicInput disabled defaultValue="Ignore" className="flex-1 bg-slate-100" />
        </div>

        {/* Requesters Section */}
        <div className="border border-slate-400 p-2 mt-1">
          <span className="text-[11px] font-bold text-slate-800">Requesters</span>
          <div className="flex gap-6 mt-2">
            {/* Left column - Radio */}
            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="requesterType" value="users" checked={form.requesterType==='users'} onChange={handleChange('requesterType')} />
                <span className="text-[11px] text-slate-800">Users</span>
                <button className="w-5 h-4 bg-yellow-400 border border-slate-400 flex items-center justify-center gap-[1px] ml-2">
                  <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
                  <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
                  <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
                </button>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="requesterType" value="employees" checked={form.requesterType==='employees'} onChange={handleChange('requesterType')} />
                <span className="text-[11px] text-slate-800">Employees</span>
                <button className="w-5 h-4 bg-yellow-400 border border-slate-400 flex items-center justify-center gap-[1px] ml-2">
                  <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
                  <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
                  <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
                </button>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="requesterType" value="users-employees" checked={form.requesterType==='users-employees'} onChange={handleChange('requesterType')} />
                <span className="text-[11px] text-slate-800">Users and Employees</span>
              </label>
            </div>
            {/* Right column - Checkboxes */}
            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.branchChecked} onChange={handleChange('branchChecked')} />
                <span className="text-[11px] text-slate-800">Branch</span>
                <button className="w-5 h-4 bg-yellow-400 border border-slate-400 flex items-center justify-center gap-[1px] ml-2">
                  <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
                  <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
                  <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
                </button>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.departmentChecked} onChange={handleChange('departmentChecked')} />
                <span className="text-[11px] text-slate-800">Department</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={form.projectChecked} onChange={handleChange('projectChecked')} />
                <span className="text-[11px] text-slate-800">Project</span>
                <button className="w-5 h-4 bg-yellow-400 border border-slate-400 flex items-center justify-center gap-[1px] ml-2">
                  <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
                  <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
                  <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
                </button>
              </label>
            </div>
          </div>
        </div>

        {/* Date Fields */}
        <div className="space-y-1 mt-1">
          {[
            { label: 'Document No.', fromField: 'docNoFrom', toField: 'docNoTo' },
            { label: 'Posting Date', fromField: 'postingDateFrom', toField: 'postingDateTo' },
            { label: 'Valid Until', fromField: 'validUntilFrom', toField: 'validUntilTo' },
            { label: 'Document Date', fromField: 'documentDateFrom', toField: 'documentDateTo' },
            { label: 'Required Date', fromField: 'requiredDateFrom', toField: 'requiredDateTo' },
          ].map((row, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[11px] text-slate-800 w-24 shrink-0">{row.label}</span>
              <span className="text-[11px] text-slate-800">From</span>
              <ClassicInput value={form[row.fromField]} onChange={handleChange(row.fromField)} className="w-24" />
              <span className="text-[11px] text-slate-800">To</span>
              <ClassicInput value={form[row.toField]} onChange={handleChange(row.toField)} className="w-24" />
            </div>
          ))}
        </div>

        {/* Bottom Checkboxes */}
        <div className="space-y-1 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.displayOpen} onChange={handleChange('displayOpen')} />
            <span className="text-[11px] text-slate-800 font-semibold">Display Open Purchase Requests Only</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.displayMRP} onChange={handleChange('displayMRP')} />
            <span className="text-[11px] text-slate-800">Display Purchase Requests from MRP Only</span>
          </label>
        </div>
      </div>
    </FormContainer>
  );
};

export default function PurchaseRequestReport() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'purchase-request-report',
      title: 'Purchase Request Report - Selection Criteria',
      component: <PurchaseRequestReportContent />,
      initialSize: { width: 480, height: 620 },
      initialPosition: { x: 100, y: 50 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { PurchaseRequestReportContent };
