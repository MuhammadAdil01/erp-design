import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  ClassicInput, 
  ClassicSel,
  FormContainer,
  YellowBtn
} from '@/components/ClassicERPUI';

const PurchaseAnalysisContent = () => {
  const [activeTab, setActiveTab] = useState('vendors');
  const [form, setForm] = useState({
    reportType: 'annual',
    docType: 'ap-invoices',
    postingDate: true,
    dueDate: false,
    documentDate: false,
    postingFrom: '01.07.15',
    postingTo: '30.06.26',
    dueDateFrom: '01.07.25',
    dueDateTo: '30.06.26',
    docDateFrom: '',
    docDateTo: '',
    salesEmployee: '',
    salesEmpFrom: '',
    salesEmpTo: '',
    includeInactive: false,
    displaySystem: false,
  });

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const tabs = [
    { id: 'vendors', label: 'Vendors' },
    { id: 'items', label: 'Items' },
    { id: 'sales', label: 'Sales Employees' },
  ];

  return (
    <FormContainer 
      footerButtons={[
        { label: 'OK', onClick: () => console.log('OK', form) },
        { label: 'Cancel', onClick: () => console.log('Cancel') }
      ]}
    >
      <div className="flex flex-col h-full p-2">
        {/* Tabs */}
        <div className="flex gap-0 mb-3">
          {tabs.map(t => (
            <button 
              key={t.id} 
              onClick={() => setActiveTab(t.id)} 
              className={`px-4 py-1 text-[11px] border border-b-0 border-slate-400 ${activeTab===t.id?'bg-white font-bold border-b-white -mb-[1px] z-10':'bg-slate-200'}`}
              style={activeTab===t.id?{borderBottom:'1px solid white'}:{}}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Report Type & Document Type */}
        <div className="flex gap-12 mb-4">
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="reportType" value="annual" checked={form.reportType==='annual'} onChange={handleChange('reportType')} />
              <span className="text-[11px] text-slate-800">Annual Report</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="reportType" value="monthly" checked={form.reportType==='monthly'} onChange={handleChange('reportType')} />
              <span className="text-[11px] text-slate-800">Monthly Report</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="reportType" value="quarterly" checked={form.reportType==='quarterly'} onChange={handleChange('reportType')} />
              <span className="text-[11px] text-slate-800">Quarterly Report</span>
            </label>
          </div>
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="docType" value="ap-invoices" checked={form.docType==='ap-invoices'} onChange={handleChange('docType')} />
              <span className="text-[11px] text-slate-800">A/P Invoices</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="docType" value="purchase-order" checked={form.docType==='purchase-order'} onChange={handleChange('docType')} />
              <span className="text-[11px] text-slate-800">Purchase Order</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="docType" value="goods-receipt" checked={form.docType==='goods-receipt'} onChange={handleChange('docType')} />
              <span className="text-[11px] text-slate-800">Goods Receipt PO</span>
            </label>
          </div>
        </div>

        {/* Date Filters */}
        <div className="space-y-1 mb-4 border-t border-slate-300 pt-3">
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={form.postingDate} onChange={handleChange('postingDate')} />
            <span className="text-[11px] text-slate-800 w-24 shrink-0">Posting Date</span>
            <span className="text-[11px] text-slate-800">From</span>
            <ClassicInput yellow value={form.postingFrom} onChange={handleChange('postingFrom')} className="w-24" />
            <span className="text-[11px] text-slate-800">To</span>
            <ClassicInput value={form.postingTo} onChange={handleChange('postingTo')} className="w-24" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={form.dueDate} onChange={handleChange('dueDate')} />
            <span className="text-[11px] text-slate-800 w-24 shrink-0">Due Date</span>
            <span className="text-[11px] text-slate-800">From</span>
            <ClassicInput value={form.dueDateFrom} onChange={handleChange('dueDateFrom')} className="w-24" />
            <span className="text-[11px] text-slate-800">To</span>
            <ClassicInput value={form.dueDateTo} onChange={handleChange('dueDateTo')} className="w-24" />
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" checked={form.documentDate} onChange={handleChange('documentDate')} />
            <span className="text-[11px] text-slate-800 w-24 shrink-0">Document Date</span>
            <span className="text-[11px] text-slate-800">From</span>
            <ClassicInput value={form.docDateFrom} onChange={handleChange('docDateFrom')} className="w-24" />
            <span className="text-[11px] text-slate-800">To</span>
            <ClassicInput value={form.docDateTo} onChange={handleChange('docDateTo')} className="w-24" />
          </div>
        </div>

        {/* Main Selection */}
        <div className="border-t border-slate-300 pt-3 mb-4">
          <span className="text-[11px] text-slate-800 font-bold">Main Selection</span>
          <div className="flex items-center gap-2 mt-1 mb-1">
            <span className="text-[11px] text-slate-800 w-24 shrink-0"></span>
            <span className="text-[11px] text-slate-800 w-16">Code From</span>
            <span className="text-[11px] text-slate-800">To</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-24 shrink-0">Sales Employee</span>
            <ClassicInput value={form.salesEmpFrom} onChange={handleChange('salesEmpFrom')} className="w-16" />
            <ClassicInput value={form.salesEmpTo} onChange={handleChange('salesEmpTo')} className="w-16" />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.includeInactive} onChange={handleChange('includeInactive')} />
            <span className="text-[11px] text-slate-800">Include Inactive Sales Employee</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={form.displaySystem} onChange={handleChange('displaySystem')} />
            <span className="text-[11px] text-slate-800">Display Amounts in System Currency</span>
          </label>
        </div>
      </div>
    </FormContainer>
  );
};

export default function PurchaseAnalysis() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'purchase-analysis',
      title: 'Purchase Analysis - Selection Criteria',
      component: <PurchaseAnalysisContent />,
      initialSize: { width: 450, height: 480 },
      initialPosition: { x: 250, y: 100 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { PurchaseAnalysisContent };
