import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  ClassicInput, 
  ClassicSel,
  ClassicTab,
  FormContainer,
  YellowBtn
} from '@/components/ClassicERPUI';

/* ───────────── Items Tab ───────────── */
const ItemsTab = () => {
  const itemCols = ['#','Item No.','Qty','Base Doc. Price','Base Doc. Value','Proj. Cust.','Customs Value','Expenditure','Alloc. Costs Val.','Whse Price','Total','Total Costs','Warehouse','Release No.','Var. Costs','Const. Costs','Expected Customs','FOB and Included Costs','Project','Distr. Rule'];
  return (
    <div className="flex-1 border border-slate-400 bg-white overflow-auto">
      <table className="w-full text-[10px] border-collapse min-w-[2200px]">
        <thead>
          <tr className="bg-slate-100 border-b border-slate-400 sticky top-0 z-10">
            {itemCols.map((c,i)=>(
              <th key={i} className="border-r border-slate-400 px-2 py-1 text-left whitespace-nowrap">{c}</th>
            ))}
            <th className="px-1 py-1 w-5">↗</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({length:15}).map((_,i)=>(
            <tr key={i} className="h-[20px] border-b border-slate-200">
              {itemCols.map((_c,j)=>(
                <td key={j} className={`border-r border-slate-200 px-1 ${j>=5&&j<=8?'bg-white':'bg-slate-50/30'}`}>{j===0?i+1:''}</td>
              ))}
              <td className="px-1"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ───────────── Costs Tab ───────────── */
const CostsTab = () => {
  const [sub, setSub] = useState('fixed');
  const cols = ['#','Landed Costs','Allocation By','Amount','Factor','Include for Customs'];
  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-0 mb-0">
        <button onClick={()=>setSub('fixed')} className={`px-3 py-1 text-[11px] border border-b-0 border-slate-400 ${sub==='fixed'?'bg-white font-bold':'bg-slate-200'}`}>Fixed Costs</button>
        <button onClick={()=>setSub('variable')} className={`px-3 py-1 text-[11px] border border-b-0 border-slate-400 ${sub==='variable'?'bg-white font-bold':'bg-slate-200'}`}>Variable Costs</button>
      </div>
      <div className="flex-1 border border-slate-400 bg-white overflow-auto">
        <table className="w-full text-[10px] border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-400 sticky top-0 z-10">
              {cols.map((c,i)=>(
                <th key={i} className="border-r border-slate-400 px-2 py-1 text-left whitespace-nowrap">{c}</th>
              ))}
              <th className="px-1 py-1 w-5">↗</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({length:12}).map((_,i)=>(
              <tr key={i} className="h-[20px] border-b border-slate-200">
                {cols.map((_c,j)=>(
                  <td key={j} className="border-r border-slate-200 px-1">{j===0?i+1:''}</td>
                ))}
                <td className="px-1"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-1">
        <div></div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-slate-700">0.00</span>
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-1">
        <YellowBtn label="Recalculate" className="text-[10px] px-2 py-[2px]" />
        <YellowBtn label="Clear Table" className="text-[10px] px-2 py-[2px]" />
        <YellowBtn label="New Landed Costs" className="text-[10px] px-2 py-[2px]" />
      </div>
    </div>
  );
};

/* ───────────── Vendors Tab ───────────── */
const VendorsTab = () => {
  const cols = ['#','Vendor Code','Name'];
  return (
    <div className="flex-1 border border-slate-400 bg-white overflow-auto">
      <table className="w-full text-[10px] border-collapse">
        <thead>
          <tr className="bg-slate-100 border-b border-slate-400 sticky top-0 z-10">
            {cols.map((c,i)=>(
              <th key={i} className="border-r border-slate-400 px-2 py-1 text-left whitespace-nowrap">{c}</th>
            ))}
            <th className="px-1 py-1 w-5">↗</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({length:12}).map((_,i)=>(
            <tr key={i} className="h-[20px] border-b border-slate-200">
              {cols.map((_c,j)=>(
                <td key={j} className="border-r border-slate-200 px-1">{j===0?i+1:''}</td>
              ))}
              <td className="px-1"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ───────────── Details Tab ───────────── */
const DetailsTab = () => {
  const cols = ['#','Item','Whse Price','Price List','Expenditure'];
  return (
    <div className="flex-1 border border-slate-400 bg-white overflow-auto">
      <table className="w-full text-[10px] border-collapse">
        <thead>
          <tr className="bg-slate-100 border-b border-slate-400 sticky top-0 z-10">
            {cols.map((c,i)=>(
              <th key={i} className="border-r border-slate-400 px-2 py-1 text-left whitespace-nowrap">{c}</th>
            ))}
            <th className="px-1 py-1 w-5">↗</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({length:12}).map((_,i)=>(
            <tr key={i} className="h-[20px] border-b border-slate-200">
              {cols.map((_c,j)=>(
                <td key={j} className="border-r border-slate-200 px-1">{j===0?i+1:''}</td>
              ))}
              <td className="px-1"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

/* ───────────── General Tab ───────────── */
const GeneralTab = () => (
  <div className="space-y-3 p-2">
    <div className="flex items-center gap-2">
      <span className="text-[11px] text-slate-800 w-28 shrink-0">Trans. No.</span>
      <ClassicInput disabled className="w-64 bg-slate-100" />
    </div>
    <div className="flex items-center gap-2">
      <span className="text-[11px] text-slate-800 w-28 shrink-0">Journal Remarks</span>
      <ClassicInput yellow defaultValue="Landed Costs" className="w-64" />
    </div>
  </div>
);

/* ───────────── Attachments Tab ───────────── */
const AttachmentsTab = () => {
  const cols = ['#','Target Path','File Name','Attachment Date','Free Text'];
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-end mb-1 gap-2">
        <YellowBtn label="Browse ↓" className="text-[10px] px-3 py-[2px]" />
      </div>
      <div className="flex-1 border border-slate-400 bg-white overflow-auto">
        <table className="w-full text-[10px] border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-400 sticky top-0 z-10">
              {cols.map((c,i)=>(
                <th key={i} className="border-r border-slate-400 px-2 py-1 text-left whitespace-nowrap">{c}</th>
              ))}
              <th className="px-1 py-1 w-5">↗</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({length:8}).map((_,i)=>(
              <tr key={i} className="h-[20px] border-b border-slate-200">
                {cols.map((_c,j)=>(
                  <td key={j} className="border-r border-slate-200 px-1">{j===0?i+1:''}</td>
                ))}
                <td className="px-1"></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-1">
        <YellowBtn label="Display..." className="text-[10px] px-3 py-[2px]" />
      </div>
    </div>
  );
};

/* ───────────── Main Content ───────────── */
const LandedCostsContent = () => {
  const [activeTab, setActiveTab] = useState('items');

  const tabs = [
    { id: 'items', label: 'Items' },
    { id: 'costs', label: 'Costs' },
    { id: 'vendors', label: 'Vendors' },
    { id: 'details', label: 'Details' },
    { id: 'general', label: 'General' },
    { id: 'attachments', label: 'Attachments' },
  ];

  const renderTab = () => {
    switch(activeTab) {
      case 'items': return <ItemsTab />;
      case 'costs': return <CostsTab />;
      case 'vendors': return <VendorsTab />;
      case 'details': return <DetailsTab />;
      case 'general': return <GeneralTab />;
      case 'attachments': return <AttachmentsTab />;
      default: return <ItemsTab />;
    }
  };

  return (
    <FormContainer 
      footerButtons={[
        { label: 'Add', onClick: () => console.log('Add') },
        { label: 'Cancel', onClick: () => console.log('Cancel') }
      ]}
      rightFooter={
        <div className="flex items-center mr-2">
          <YellowBtn label="Copy From" className="text-[10px] px-3 py-[2px]" />
        </div>
      }
    >
      <div className="flex flex-col h-full gap-2">
        {/* Header Section */}
        <div className="flex justify-between">
          {/* Left Header */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-800 w-14 shrink-0">Vendor</span>
              <ClassicInput yellow className="w-20" />
              <ClassicInput className="w-40" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-800 w-14 shrink-0">Broker</span>
              <ClassicInput className="w-20" />
              <ClassicInput className="w-40" />
            </div>
            <div className="flex items-center gap-2">
              <ClassicSel options={['PKR']} className="w-16" />
              <span className="text-[11px] text-slate-800 ml-4">▼</span>
              <div className="ml-8 flex items-center gap-1">
                <input type="checkbox" />
                <span className="text-[11px] text-slate-800">Closed Document</span>
              </div>
            </div>
          </div>
          {/* Right Header */}
          <div className="space-y-1 text-right">
            <div className="flex items-center justify-end gap-2">
              <span className="text-[11px] text-slate-800 w-20 text-left">Number</span>
              <ClassicInput className="w-28" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="text-[11px] text-slate-800 w-20 text-left">Series</span>
              <ClassicSel options={['DHAB-LC']} className="w-28" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="text-[11px] text-slate-800 w-20 text-left">Posting Date</span>
              <ClassicInput defaultValue="19.03.26" className="w-28" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="text-[11px] text-slate-800 w-20 text-left">Due Date</span>
              <ClassicInput defaultValue="19.03.26" className="w-28" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="text-[11px] text-slate-800 w-20 text-left">Reference</span>
              <ClassicInput className="w-28" />
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="text-[11px] text-slate-800 w-20 text-left">File No.</span>
              <ClassicInput className="w-28" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 mt-2">
          {tabs.map(t => (
            <button 
              key={t.id} 
              onClick={() => setActiveTab(t.id)} 
              className={`px-3 py-1 text-[11px] border border-b-0 border-slate-400 ${activeTab===t.id?'bg-white font-bold border-b-white -mb-[1px] z-10':'bg-slate-200'}`}
              style={activeTab===t.id?{borderBottom:'1px solid white'}:{}}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex-1 min-h-0 flex flex-col">
          {renderTab()}
        </div>

        {/* Footer Fields (only show on Items tab) */}
        {activeTab === 'items' && (
          <div className="flex justify-between items-start mt-1">
            {/* Left Footer */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-800 w-28 shrink-0">Projected Customs</span>
                <ClassicInput disabled className="w-20 bg-slate-100" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-800 w-28 shrink-0">Actual Customs</span>
                <ClassicInput disabled className="w-20 bg-slate-100" />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-slate-800 w-28 shrink-0">Customs Date</span>
                <ClassicInput defaultValue="19.03.26" className="w-20" />
              </div>
              <div className="flex items-center gap-1">
                <input type="checkbox" defaultChecked />
                <span className="text-[10px] text-slate-800">Customs Affects Inventory</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] text-slate-800 w-16 shrink-0">Remarks</span>
                <ClassicInput className="w-40" />
              </div>
            </div>
            {/* Right Footer */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 justify-end">
                <span className="text-[10px] text-slate-800">Total Freight Charges</span>
                <ClassicInput disabled className="w-20 bg-slate-100" />
                <span className="text-[10px] text-slate-800">Before Tax</span>
                <ClassicInput disabled className="w-20 bg-slate-100" />
              </div>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-[10px] text-slate-800">Amount to Balance</span>
                <ClassicInput disabled className="w-20 bg-slate-100" />
                <span className="text-[10px] text-slate-800">Tax 1</span>
                <ClassicInput disabled className="w-20 bg-slate-100" />
              </div>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-[10px] text-slate-800"></span>
                <div className="w-20"></div>
                <span className="text-[10px] text-slate-800">Tax 2</span>
                <ClassicInput disabled className="w-20 bg-slate-100" />
              </div>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-[10px] text-slate-800"></span>
                <div className="w-20"></div>
                <span className="text-[10px] text-slate-800 font-bold">Total</span>
                <ClassicInput disabled className="w-20 bg-slate-100" />
              </div>
            </div>
          </div>
        )}
      </div>
    </FormContainer>
  );
};

export default function LandedCosts() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'landed-costs',
      title: 'Landed Costs',
      component: <LandedCostsContent />,
      initialSize: { width: 1100, height: 750 },
      initialPosition: { x: 50, y: 20 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { LandedCostsContent };
