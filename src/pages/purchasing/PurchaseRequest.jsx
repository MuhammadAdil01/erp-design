import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  FieldRow, 
  ClassicInput, 
  ClassicSel, 
  FormContainer,
  ClassicTab,
  YellowBtn
} from '@/components/ClassicERPUI';
import { ChevronRight } from 'lucide-react';

const PurchaseRequestContent = () => {
  const [activeTab, setActiveTab] = useState('Contents');
  const [form, setForm] = useState({
    requester: 'adrict',
    requesterName: 'Additional Director ICT',
    branch: '',
    department: '',
    sendEmail: true,
    email: '',
    noPrefix: 'DHAB-PR',
    noValue: '207',
    status: 'Open',
    postingDate: '19.03.26',
    validUntil: '19.04.26',
    docDate: '19.03.26',
    requiredDate: '',
    owner: '',
    remarks: '',
    rows: [
      { id: 1, itemNo: '', itemDesc: '', reqQty: '', infoPrice: '', discount: '0.00', taxCode: 'GST-ZRI', total: '', distrRule: '', reqDate: '', uomCode: '', vendor: '' }
    ]
  });

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const tabs = ['Contents', 'Attachments', 'Initial Statement', 'Comments'];

  return (
    <FormContainer 
      footerButtons={[
        { label: 'Add & New', onClick: () => console.log('Add & New', form) },
        { label: 'Add Draft & New', onClick: () => console.log('Add Draft') },
        { label: 'Cancel', onClick: () => console.log('Cancel') }
      ]}
      rightFooter={
        <div className="flex gap-2">
          <YellowBtn label="Copy From" disabled className="bg-slate-200 text-slate-400" />
          <YellowBtn label="Copy To" disabled className="bg-slate-200 text-slate-400" />
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        {/* Header Section */}
        <div className="flex justify-between items-start gap-4">
          {/* Left Header */}
          <div className="w-[30%] space-y-[1px]">
            <div className="flex items-center gap-1 mb-[2px]">
              <span className="text-[11px] text-slate-800 w-[100px] shrink-0 font-medium">Requester</span>
              <div className="flex-1 flex gap-1 items-center">
                <div className="w-4 h-4 bg-yellow-400 flex items-center justify-center cursor-pointer">
                   <ChevronRight size={12} className="text-white" />
                </div>
                <ClassicSel options={['User', 'Employee']} className="w-20" />
                <ClassicInput value={form.requester} onChange={handleChange('requester')} yellow />
              </div>
            </div>
            <FieldRow label="Requester Name" labelWidth="100px">
              <ClassicInput value={form.requesterName} onChange={handleChange('requesterName')} />
            </FieldRow>
            <FieldRow label="Branch" labelWidth="100px">
              <ClassicSel options={['---']} value={form.branch} onChange={handleChange('branch')} yellow />
            </FieldRow>
            <FieldRow label="Department" labelWidth="100px">
              <ClassicSel options={['---']} value={form.department} onChange={handleChange('department')} yellow />
            </FieldRow>
            <div className="flex items-center gap-2 py-1">
              <input type="checkbox" checked={form.sendEmail} onChange={handleChange('sendEmail')} />
              <span className="text-[10.5px] text-slate-800">Send E-Mail if PO or GRPO is Added</span>
            </div>
            <FieldRow label="E-Mail Address" labelWidth="100px">
              <ClassicInput value={form.email} onChange={handleChange('email')} yellow />
            </FieldRow>
          </div>

          {/* Middle Header (Approvals) */}
          <div className="w-[30%] space-y-[1px]">
            <FieldRow label="Additional Director Approval" labelWidth="160px">
              <ClassicSel options={['Unapproved', 'Approved']} />
            </FieldRow>
            <FieldRow label="Director Approval" labelWidth="160px">
              <ClassicSel options={['Unapproved', 'Approved']} />
            </FieldRow>
            <FieldRow label="Secy. Approval" labelWidth="160px">
              <ClassicSel options={['Unapproved', 'Approved']} />
            </FieldRow>
            <FieldRow label="P.D. Approval" labelWidth="160px">
              <ClassicSel options={['Unapproved', 'Approved']} />
            </FieldRow>
            <FieldRow label="PR Routed to" labelWidth="160px">
              <ClassicInput />
            </FieldRow>
            <FieldRow label="Route To" labelWidth="160px">
              <ClassicInput />
            </FieldRow>
          </div>

          {/* Right Header */}
          <div className="w-[30%] space-y-[1px]">
            <div className="flex items-center gap-1 mb-[2px]">
              <span className="text-[11px] text-slate-800 w-[120px] shrink-0 font-medium">No.</span>
              <div className="flex-1 flex gap-1">
                <ClassicSel options={['DHAB-PR']} value={form.noPrefix} onChange={handleChange('noPrefix')} className="w-1/2" />
                <ClassicInput value={form.noValue} onChange={handleChange('noValue')} className="w-1/2" />
              </div>
            </div>
            <FieldRow label="Status" labelWidth="120px">
              <ClassicSel options={['Open', 'Closed']} value={form.status} onChange={handleChange('status')} />
            </FieldRow>
            <FieldRow label="Posting Date" labelWidth="120px">
              <ClassicInput value={form.postingDate} onChange={handleChange('postingDate')} />
            </FieldRow>
            <FieldRow label="Valid Until" labelWidth="120px">
              <ClassicInput value={form.validUntil} onChange={handleChange('validUntil')} />
            </FieldRow>
            <FieldRow label="Document Date" labelWidth="120px">
              <ClassicInput value={form.docDate} onChange={handleChange('docDate')} />
            </FieldRow>
            <FieldRow label="Required Date" labelWidth="120px">
              <ClassicInput value={form.requiredDate} onChange={handleChange('requiredDate')} />
            </FieldRow>
            <div className="flex justify-end pt-2">
               <div className="flex items-center gap-2">
                 <span className="text-[11px] text-slate-700">Referenced Document</span>
                 <div className="w-8 h-4 bg-yellow-400 flex items-center justify-center cursor-pointer">
                   <div className="flex gap-[1px]">
                      <div className="w-1 h-1 bg-white" />
                      <div className="w-1 h-1 bg-white" />
                      <div className="w-1 h-1 bg-white" />
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="flex border-b border-slate-300">
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
        <div className="flex-1 min-h-[400px]">
          {activeTab === 'Contents' && (
            <div className="space-y-4">
               <div className="flex items-center gap-2">
                 <span className="text-[11px] font-medium">Item/Service Type</span>
                 <ClassicSel options={['Item', 'Service']} className="w-32" />
               </div>
               <div className="border border-slate-400 bg-white overflow-auto">
                 <table className="w-full text-[10px] border-collapse min-w-[1240px]">
                   <thead>
                     <tr className="bg-slate-100 border-b border-slate-400 sticky top-0 z-10">
                       <th className="border-r border-slate-400 w-8 px-1 py-1">#</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Item No.</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[250px]">Item Description</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Required Qty.</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Info Price</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">Discount %</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Tax Code</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[100px]">Total (LC)</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Distr. Rule</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Required Date</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">UoM Code</th>
                       <th className="px-2 py-1 text-left min-w-[150px]">Vendor</th>
                     </tr>
                   </thead>
                   <tbody>
                     <tr className="h-[20px] border-b border-slate-200">
                       <td className="border-r border-slate-200 text-center">1</td>
                       <td className="border-r border-slate-200 px-1"></td>
                       <td className="border-r border-slate-200 px-1"></td>
                       <td className="border-r border-slate-200 px-1"></td>
                       <td className="border-r border-slate-200 px-1"></td>
                       <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                       <td className="border-r border-slate-200 px-1">GST-ZRI</td>
                       <td className="border-r border-slate-200 px-1"></td>
                       <td className="border-r border-slate-200 px-1"></td>
                       <td className="border-r border-slate-200 px-1"></td>
                       <td className="border-r border-slate-200 px-1"></td>
                       <td className="px-1"></td>
                     </tr>
                    {Array.from({ length: 14 }).map((_, i) => (
                      <tr key={i} className="h-[20px] border-b border-slate-200">
                         {Array.from({ length: 12 }).map((__, j) => (
                           <td key={j} className="border-r border-slate-200 last:border-r-0" />
                         ))}
                      </tr>
                    ))}
                   </tbody>
                 </table>
               </div>
               <div className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium">Summary Type</span>
                    <ClassicSel options={['No Summary', 'By Item', 'By Vendor']} className="w-32" />
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'Attachments' && (
            <div className="flex gap-4">
               <div className="flex-1 border border-slate-400 bg-white min-h-[300px]">
                 <table className="w-full text-[10px] border-collapse">
                   <thead>
                     <tr className="bg-slate-100 border-b border-slate-400 sticky top-0 z-10">
                       <th className="border-r border-slate-400 w-8 px-1 py-1">#</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[150px]">Target Path</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[150px]">File Name</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Attachment Date</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[200px]">Free Text</th>
                       <th className="px-2 py-1 text-left min-w-[120px]">Copy to Target Document</th>
                     </tr>
                   </thead>
                   <tbody>
                      {Array.from({ length: 12 }).map((_, i) => (
                        <tr key={i} className="h-[20px] border-b border-slate-200">
                           <td className="border-r border-slate-200 text-center">{i + 1}</td>
                           <td className="border-r border-slate-200 px-1 bg-slate-50/30"></td>
                           <td className="border-r border-slate-200 px-1 bg-slate-50/30"></td>
                           <td className="border-r border-slate-200 px-1 bg-slate-50/30"></td>
                           <td className="border-r border-slate-200 px-1"></td>
                           <td className="px-1 text-center">
                              {i === 0 && <div className="text-blue-500 scale-75 cursor-pointer">↗</div>}
                           </td>
                        </tr>
                      ))}
                   </tbody>
                 </table>
               </div>
               <div className="w-[100px] flex flex-col gap-2 pt-16">
                 <div className="flex flex-col gap-[1px]">
                   <YellowBtn label="Browse" className="w-full text-[10px]" />
                   <div className="h-4 w-4 bg-yellow-400 text-white flex items-center justify-center -mt-4 ml-[75px] cursor-pointer">▾</div>
                 </div>
                 <button className="w-full py-0.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[10px] text-slate-800 shadow-sm">Display</button>
                 <button className="w-full py-0.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-[10px] text-slate-800 shadow-sm">Delete</button>
               </div>
            </div>
          )}

          {activeTab === 'Initial Statement' && (
            <div className="space-y-4 max-w-[600px]">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] text-slate-800 font-medium">Statement I</span>
                <textarea className="w-full h-24 border border-slate-400 outline-none p-1 text-[11px]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] text-slate-800 font-medium">Statement II</span>
                <textarea className="w-full h-24 border border-slate-400 outline-none p-1 text-[11px]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] text-slate-800 font-medium">Statement III</span>
                <textarea className="w-full h-24 border border-slate-400 outline-none p-1 text-[11px]" />
              </div>
            </div>
          )}

          {activeTab === 'Comments' && (
            <div className="space-y-[1px] max-w-[500px]">
              {Array.from({ length: 10 }).map((_, i) => (
                <FieldRow key={i} label={`PR - ${i + 1}`} labelWidth="60px">
                  <ClassicInput />
                </FieldRow>
              ))}
            </div>
          )}
        </div>

        {/* Footer Section */}
        <div className="flex justify-between items-end gap-10">
          <div className="w-[400px] space-y-2">
            <FieldRow label="Owner" labelWidth="80px">
              <ClassicInput value={form.owner} onChange={handleChange('owner')} />
            </FieldRow>
            <div className="flex gap-2">
              <span className="text-[11px] text-slate-800 w-[80px] shrink-0 font-medium">Remarks</span>
              <textarea 
                className="flex-1 h-16 border border-slate-400 outline-none p-1 text-[11px]" 
                value={form.remarks} 
                onChange={handleChange('remarks')}
              />
            </div>
          </div>

          <div className="w-[300px] space-y-[1px]">
            <FieldRow label="Total Before Discount" labelWidth="140px">
              <ClassicInput disabled className="bg-slate-100" />
            </FieldRow>
            <div className="flex items-center gap-1 mb-[2px]">
              <span className="text-[11px] text-slate-800 w-[140px] shrink-0 font-medium">Freight</span>
              <div className="flex-1 flex gap-1 items-center">
                <div className="w-4 h-4 bg-yellow-400 flex items-center justify-center cursor-pointer">
                   <ChevronRight size={12} className="text-white" />
                </div>
                <ClassicInput disabled className="bg-slate-100 flex-1" />
              </div>
            </div>
            <FieldRow label="Tax" labelWidth="140px">
              <ClassicInput disabled className="bg-slate-100" />
            </FieldRow>
            <div className="flex items-center justify-between border-t border-slate-300 pt-1 mt-1">
              <span className="text-[11px] font-bold text-slate-800">Total Payment Due</span>
              <span className="text-[11px] font-bold text-slate-800">PKR 0.00</span>
            </div>
          </div>
        </div>
      </div>
    </FormContainer>
  );
};

export default function PurchaseRequest() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'purchase-request',
      title: 'Purchase Request',
      component: <PurchaseRequestContent />,
      initialSize: { width: 1100, height: 750 },
      initialPosition: { x: 50, y: 20 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { PurchaseRequestContent };
