import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  ClassicInput,
  ClassicSel,
  YellowBtn,
  FormContainer
} from '@/components/ClassicERPUI';

const RecurringTransactionTemplatesContent = () => {
  const [form, setForm] = useState({
    displayValid: false,
    startDateFrom: '',
    startDateTo: '',
    validFrom: '',
    validUntil: '',
    bpCodeFrom: '',
    bpCodeTo: '',
    customerGroup: '',
    vendorGroup: ''
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
      <div className="flex flex-col h-full pl-2 pt-2 pr-6">
        
        <div className="flex items-center gap-2 mb-4">
          <input 
            type="checkbox" 
            checked={form.displayValid} 
            onChange={handleChange('displayValid')} 
          />
          <span className="text-[11px] text-slate-800">Display Valid Templates Only</span>
        </div>

        <div className="space-y-1 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-28 shrink-0">Start Date</span>
            <span className="text-[11px] text-slate-800">From</span>
            <div className="relative w-[150px]">
              <ClassicInput value={form.startDateFrom} onChange={handleChange('startDateFrom')} yellow className="w-full pr-6" />
              <div className="absolute right-1 top-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-slate-300 border border-slate-400 flex items-center justify-center pointer-events-none">
                 <div className="w-1 h-1 bg-red-500 rounded-sm"></div>
              </div>
            </div>
            <span className="text-[11px] text-slate-800 ml-1">To</span>
            <ClassicInput value={form.startDateTo} onChange={handleChange('startDateTo')} className="w-[150px]" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-28 shrink-0">Valid</span>
            <span className="text-[11px] text-slate-800">From</span>
            <ClassicInput value={form.validFrom} onChange={handleChange('validFrom')} className="w-[150px]" />
            <span className="text-[11px] text-slate-800 ml-1">Until</span>
            <ClassicInput value={form.validUntil} onChange={handleChange('validUntil')} className="w-[150px]" />
          </div>
        </div>

        <div className="space-y-1 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-28 shrink-0">BP Code</span>
            <span className="text-[11px] text-slate-800">From</span>
            <ClassicInput value={form.bpCodeFrom} onChange={handleChange('bpCodeFrom')} className="w-[150px]" />
            <span className="text-[11px] text-slate-800 ml-1">To</span>
            <ClassicInput value={form.bpCodeTo} onChange={handleChange('bpCodeTo')} className="w-[150px]" />
          </div>

          <div className="flex items-center gap-2 pt-1">
            <span className="text-[11px] text-slate-800 w-[147px] shrink-0">Customer Group</span>
            <ClassicSel options={['']} value={form.customerGroup} onChange={handleChange('customerGroup')} className="flex-1" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-[147px] shrink-0">Vendor Group</span>
            <ClassicSel options={['']} value={form.vendorGroup} onChange={handleChange('vendorGroup')} className="flex-1" />
          </div>

          <div className="flex items-center gap-2 pt-1">
            <YellowBtn label="Properties" className="w-[185px] py-[3px] font-bold" />
            <ClassicInput disabled className="flex-1 bg-slate-200 border-slate-300" />
          </div>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <span className="text-[11px] text-slate-800 w-[130px]">Documents</span>
          <button className="w-6 h-5 bg-yellow-400 border border-slate-400 flex items-center justify-center gap-[1px]">
             <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
             <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
             <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
          </button>
        </div>

      </div>
    </FormContainer>
  );
};

export default function RecurringTransactionTemplates() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'recurring-transaction-templates',
      title: 'Recurring Transaction Templates - Selection Criteria',
      component: <RecurringTransactionTemplatesContent />,
      initialSize: { width: 450, height: 350 },
      initialPosition: { x: 300, y: 200 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { RecurringTransactionTemplatesContent };
