import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  ClassicInput, 
  ClassicSel,
  FormContainer,
  YellowBtn
} from '@/components/ClassicERPUI';

const PurchaseQuotationComparisonReportContent = () => {
  const [form, setForm] = useState({
    type: 'Item',
    codeFrom: '', codeTo: '',
    itemGroup: 'All',
    vendorCodeFrom: '', vendorCodeTo: '',
    vendorGroup: 'All',
    requiredDateFrom: '', requiredDateTo: '',
    documentDateFrom: '', documentDateTo: '',
    documentNoFrom: '', documentNoTo: '',
    groupNoFrom: '', groupNoTo: '',
    displayOpen: true,
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

        {/* Item Section */}
        <div className="border-t border-slate-300 pt-2 space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-24 shrink-0">Code</span>
            <span className="text-[11px] text-slate-800">From</span>
            <ClassicInput value={form.codeFrom} onChange={handleChange('codeFrom')} className="w-24" />
            <span className="text-[11px] text-slate-800">To</span>
            <ClassicInput value={form.codeTo} onChange={handleChange('codeTo')} className="w-24" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-24 shrink-0">Item Group</span>
            <ClassicSel options={['All']} value={form.itemGroup} onChange={handleChange('itemGroup')} className="flex-1" />
          </div>
          <div className="flex items-center gap-2">
            <YellowBtn label="Properties" className="w-24 py-[3px] font-bold text-[11px]" />
            <ClassicInput disabled defaultValue="Ignore" className="flex-1 bg-slate-100" />
          </div>
        </div>

        {/* Vendors Section */}
        <div className="border-t border-slate-300 pt-2 mt-1">
          <span className="text-[11px] font-bold text-slate-800">Vendors</span>
          <div className="space-y-1 mt-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-800 w-24 shrink-0">Code</span>
              <span className="text-[11px] text-slate-800">From</span>
              <ClassicInput value={form.vendorCodeFrom} onChange={handleChange('vendorCodeFrom')} className="w-24" />
              <span className="text-[11px] text-slate-800">To</span>
              <ClassicInput value={form.vendorCodeTo} onChange={handleChange('vendorCodeTo')} className="w-24" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-800 w-24 shrink-0">Vendor Group</span>
              <ClassicSel options={['All']} value={form.vendorGroup} onChange={handleChange('vendorGroup')} className="flex-1" />
            </div>
            <div className="flex items-center gap-2">
              <YellowBtn label="Properties" className="w-24 py-[3px] font-bold text-[11px]" />
              <ClassicInput disabled defaultValue="Ignore" className="flex-1 bg-slate-100" />
            </div>
          </div>
        </div>

        {/* Date Fields */}
        <div className="space-y-1 mt-2 border-t border-slate-300 pt-2">
          {[
            { label: 'Required Date', fromField: 'requiredDateFrom', toField: 'requiredDateTo' },
            { label: 'Document Date', fromField: 'documentDateFrom', toField: 'documentDateTo' },
            { label: 'Document No.', fromField: 'documentNoFrom', toField: 'documentNoTo' },
            { label: 'Group No.', fromField: 'groupNoFrom', toField: 'groupNoTo' },
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

        {/* Bottom Checkbox */}
        <div className="mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.displayOpen} onChange={handleChange('displayOpen')} />
            <span className="text-[11px] text-slate-800 font-semibold">Display Open Purchase Quotations Only</span>
          </label>
        </div>
      </div>
    </FormContainer>
  );
};

export default function PurchaseQuotationComparisonReport() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'purchase-quotation-comparison-report',
      title: 'Purchase Quotation Comparison Report - Selection Criteria',
      component: <PurchaseQuotationComparisonReportContent />,
      initialSize: { width: 480, height: 520 },
      initialPosition: { x: 200, y: 80 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { PurchaseQuotationComparisonReportContent };
