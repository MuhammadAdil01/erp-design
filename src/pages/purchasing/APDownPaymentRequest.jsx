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

const APDownPaymentRequestContent = () => {
  const [activeTab, setActiveTab] = useState('Contents');
  const [form, setForm] = useState({
    // Header Left
    vendor: '',
    name: '',
    contactPerson: '',
    vendorRefNo: '',
    localCurrency: 'PKR',
    // Header Right
    status: 'Open',
    postingDate: '19.03.26',
    dueDate: '',
    docDate: '19.03.26',
    // Footer Left
    buyer: '-No Sales Employee-',
    owner: '',
    paymentOrderRun: false,
    remarks: '',
    // Logistics
    shipTo: 'Jinnah Avenue(MB-2), APE\nCanal Road\n\n63100 BAHAWALPUR\nPAKISTAN',
    payTo: '',
    shippingType: '',
    // Accounting Left
    journalRemark: '',
    paymentBlock: false,
    paymentBlockReason: '',
    paymentTerms: '',
    paymentMethod: '',
    centralBankInd: '',
    installments: '1',
    manuallyRecalculateDueDate: false,
    monthRecalc: '',
    daysRecalc: '0',
    cashDiscountDateOffset: '',
    // Accounting Right
    businessPartnerProject: '',
    createQRCodeFrom: '',
    indicator: '',
    federalTaxID: '',
    orderNumber: '',
  });

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const tabs = ['Contents', 'Logistics', 'Accounting', 'Attachments'];

  return (
    <FormContainer 
      footerButtons={[
        { label: 'Add & New', onClick: () => console.log('Add', form) },
        { label: 'Add Draft & New', onClick: () => console.log('Draft'), disabled: true },
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
              <span className="text-[11px] text-slate-800 w-[100px] shrink-0 font-medium">Vendor</span>
              <div className="flex-1 flex gap-1 items-center">
                <div className="w-4 h-4 bg-yellow-400 flex items-center justify-center cursor-pointer">
                   <ChevronRight size={12} className="text-white" />
                </div>
                <ClassicInput value={form.vendor} onChange={handleChange('vendor')} yellow />
                <div className="w-4 h-4 border border-slate-400 rounded-full flex items-center justify-center text-[10px] text-slate-500 bg-white">i</div>
              </div>
            </div>
            <FieldRow label="Name" labelWidth="100px">
              <ClassicInput value={form.name} onChange={handleChange('name')} />
            </FieldRow>
            <div className="flex items-center gap-1 mb-[2px]">
              <span className="text-[11px] text-slate-800 w-[100px] shrink-0 font-medium">Contact Person</span>
              <div className="flex-1 flex gap-1 items-center">
                <ClassicSel options={['---']} value={form.contactPerson} onChange={handleChange('contactPerson')} className="flex-1" />
                <div className="w-4 h-4 border border-slate-400 rounded-full flex items-center justify-center text-[10px] text-slate-500 bg-white">i</div>
              </div>
            </div>
            <FieldRow label="Vendor Ref. No." labelWidth="100px">
              <ClassicInput value={form.vendorRefNo} onChange={handleChange('vendorRefNo')} />
            </FieldRow>
            <FieldRow label="Local Currency" labelWidth="100px">
              <ClassicSel options={['PKR', 'USD']} value={form.localCurrency} onChange={handleChange('localCurrency')} />
            </FieldRow>
          </div>

          {/* Right Header */}
          <div className="w-[30%] space-y-[1px]">
            <div className="flex items-center gap-1 mb-[2px]">
              <span className="text-[11px] text-slate-800 w-[120px] shrink-0 font-medium">No.</span>
              <div className="flex-1 flex gap-1 items-center">
                <ClassicSel options={['DHAB-APO']} className="w-20" />
                <ClassicInput value="19" className="w-16 bg-slate-100" />
              </div>
            </div>
            <FieldRow label="Status" labelWidth="120px">
              <ClassicInput value={form.status} onChange={handleChange('status')} disabled className="bg-slate-100" />
            </FieldRow>
            <FieldRow label="Posting Date" labelWidth="120px">
              <ClassicInput value={form.postingDate} onChange={handleChange('postingDate')} />
            </FieldRow>
            <FieldRow label="Due Date" labelWidth="120px">
              <ClassicInput value={form.dueDate} onChange={handleChange('dueDate')} />
            </FieldRow>
            <FieldRow label="Document Date" labelWidth="120px">
              <ClassicInput value={form.docDate} onChange={handleChange('docDate')} />
            </FieldRow>
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
               <div className="flex justify-between items-center pr-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium">Item/Service Type</span>
                    <ClassicSel options={['Item', 'Service']} className="w-32" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-medium">Summary Type</span>
                    <ClassicSel options={['No Summary']} className="w-32" />
                  </div>
               </div>
               <div className="border border-slate-400 bg-white overflow-auto max-h-[350px]">
                 <table className="w-full text-[10px] border-collapse min-w-[1900px]">
                   <thead>
                     <tr className="bg-slate-100 border-b border-slate-400 sticky top-0 z-10">
                       <th className="border-r border-slate-400 w-8 px-1 py-1 text-center">#</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Item No.</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[80px]">Quantity</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Unit Price</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">Discount %</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Tax Code</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[80px]">WTax Liable</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[100px]">Total (LC)</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Distr. Rule</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">UoM Code</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[150px]">Country/Region of Origin</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[150px]">Blanket Agreement No.</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[150px]">Standard Item Identification</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[150px]">Commodity Classification</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">Retention %</th>
                       <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">IPC No.</th>
                       <th className="px-2 py-1 text-left min-w-[100px]">Rejected Quantity</th>
                     </tr>
                   </thead>
                   <tbody>
                      <tr className="h-[20px] border-b border-slate-200">
                        <td className="border-r border-slate-200 text-center">1</td>
                        <td className="border-r border-slate-200 px-1"></td>
                        <td className="border-r border-slate-200 px-1"></td>
                        <td className="border-r border-slate-200 px-1"></td>
                        <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                        <td className="border-r border-slate-200 px-1">GST-ZRI</td>
                        <td className="border-r border-slate-200 px-1"></td>
                        <td className="border-r border-slate-200 px-1"></td>
                        <td className="border-r border-slate-200 px-1"></td>
                        <td className="border-r border-slate-200 px-1"></td>
                        <td className="border-r border-slate-200 px-1"></td>
                        <td className="border-r border-slate-200 px-1"></td>
                        <td className="border-r border-slate-200 px-1"></td>
                        <td className="border-r border-slate-200 px-1"></td>
                        <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                        <td className="border-r border-slate-200 px-1"></td>
                        <td className="px-1 text-slate-300"></td>
                      </tr>
                      {Array.from({ length: 14 }).map((_, i) => (
                        <tr key={i} className="h-[20px] border-b border-slate-200">
                           {Array.from({ length: 17 }).map((__, j) => (
                             <td key={j} className="border-r border-slate-200 last:border-r-0" />
                           ))}
                        </tr>
                      ))}
                   </tbody>
                 </table>
               </div>
            </div>
          )}

          {activeTab === 'Logistics' && (
            <div className="flex gap-20">
              <div className="w-[400px] space-y-4">
                <div className="flex gap-2">
                  <span className="text-[11px] text-slate-800 w-[80px] shrink-0 font-medium">Ship To</span>
                  <div className="flex-1 flex flex-col gap-1">
                    <textarea 
                       className="w-full h-24 border border-slate-400 outline-none p-1 text-[11px] bg-white shadow-inner" 
                       value={form.shipTo} 
                       onChange={handleChange('shipTo')}
                    />
                    <div className="flex justify-end -mt-6 mr-1">
                       <button className="w-6 h-4 bg-yellow-400 border border-yellow-500 text-white flex items-center justify-center text-[10px]">...</button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                   <span className="text-[11px] text-slate-800 w-[80px] shrink-0 font-medium pt-1">Pay To</span>
                   <div className="flex-1 flex flex-col gap-1">
                     <ClassicSel options={['---']} className="w-full mb-1" />
                     <div className="relative">
                       <textarea 
                          className="w-full h-24 border border-slate-400 outline-none p-1 text-[11px] bg-white shadow-inner" 
                          value={form.payTo} 
                          onChange={handleChange('payTo')}
                       />
                       <div className="absolute bottom-1 right-1">
                          <button className="w-6 h-4 bg-yellow-400 border border-yellow-500 text-white flex items-center justify-center text-[10px]">...</button>
                       </div>
                     </div>
                   </div>
                </div>
                <FieldRow label="Shipping Type" labelWidth="80px">
                   <ClassicSel options={['---']} value={form.shippingType} onChange={handleChange('shippingType')} />
                </FieldRow>
              </div>
            </div>
          )}

          {activeTab === 'Accounting' && (
            <div className="flex gap-20">
               <div className="w-[400px] space-y-[2px]">
                  <FieldRow label="Journal Remark" labelWidth="140px">
                    <ClassicInput value={form.journalRemark} onChange={handleChange('journalRemark')} />
                  </FieldRow>
                  <div className="flex items-center gap-2 py-1">
                    <input type="checkbox" checked={form.paymentBlock} onChange={handleChange('paymentBlock')} disabled />
                    <span className="text-[11px] text-slate-800 w-[122px] shrink-0">Payment Block</span>
                    <ClassicInput value={form.paymentBlockReason} onChange={handleChange('paymentBlockReason')} className="flex-1 bg-slate-100" disabled />
                  </div>
                  <div className="pt-2"></div>
                  <FieldRow label="Payment Terms" labelWidth="140px">
                    <ClassicSel options={['---']} value={form.paymentTerms} onChange={handleChange('paymentTerms')} />
                  </FieldRow>
                  <FieldRow label="Payment Method" labelWidth="140px">
                    <ClassicSel options={['---']} value={form.paymentMethod} onChange={handleChange('paymentMethod')} />
                  </FieldRow>
                  <FieldRow label="Central Bank Ind." labelWidth="140px">
                    <ClassicSel options={['---']} value={form.centralBankInd} onChange={handleChange('centralBankInd')} />
                  </FieldRow>
                  <div className="flex items-center gap-2 py-1">
                    <span className="text-[11px] text-slate-800 w-[140px] shrink-0 font-medium">Installments</span>
                    <div className="w-4 h-4 bg-yellow-400 flex items-center justify-center cursor-pointer">
                       <ChevronRight size={12} className="text-white" />
                    </div>
                    <ClassicInput value={form.installments} onChange={handleChange('installments')} />
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <span className="text-[10px] text-slate-600 font-bold">Manually Recalculate Due Date:</span>
                    <input type="checkbox" checked={form.manuallyRecalculateDueDate} onChange={handleChange('manuallyRecalculateDueDate')} />
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <ClassicSel options={['---']} value={form.monthRecalc} onChange={handleChange('monthRecalc')} className="w-16 ml-[148px]" />
                    <span className="text-[11px]">Months +</span>
                    <ClassicInput value={form.daysRecalc} onChange={handleChange('daysRecalc')} className="w-10" />
                    <span className="text-[11px]">Days</span>
                  </div>
                  <FieldRow label="Cash Discount Date Offset" labelWidth="180px">
                    <ClassicInput className="w-16" value={form.cashDiscountDateOffset} onChange={handleChange('cashDiscountDateOffset')} />
                  </FieldRow>
               </div>
               <div className="flex-1 max-w-[400px] space-y-[2px]">
                  <FieldRow label="Business Partner Project" labelWidth="140px">
                    <ClassicInput value={form.businessPartnerProject} onChange={handleChange('businessPartnerProject')} />
                  </FieldRow>
                  <FieldRow label="Create QR Code From" labelWidth="140px">
                    <ClassicInput value={form.createQRCodeFrom} onChange={handleChange('createQRCodeFrom')} />
                  </FieldRow>
                  <div className="pt-4"></div>
                  <FieldRow label="Indicator" labelWidth="140px">
                    <ClassicSel options={['---']} value={form.indicator} onChange={handleChange('indicator')} />
                  </FieldRow>
                  <FieldRow label="Federal Tax ID" labelWidth="140px">
                    <ClassicInput value={form.federalTaxID} onChange={handleChange('federalTaxID')} />
                  </FieldRow>
                  <div className="pt-4"></div>
                  <FieldRow label="Order Number" labelWidth="140px">
                    <ClassicInput value={form.orderNumber} onChange={handleChange('orderNumber')} />
                  </FieldRow>
                  <div className="flex items-center justify-end gap-2 pt-10">
                    <span className="text-[11px] text-slate-700">Referenced Document</span>
                    <button className="w-8 h-4 bg-slate-200 border border-slate-400 flex items-center justify-center gap-[1px]">
                       <div className="w-1 h-1 bg-slate-500 rounded-full" />
                       <div className="w-1 h-1 bg-slate-500 rounded-full" />
                       <div className="w-1 h-1 bg-slate-500 rounded-full" />
                    </button>
                  </div>
               </div>
            </div>
          )}

          {activeTab === 'Attachments' && (
            <div className="flex gap-4">
              <div className="flex-1 border border-slate-400 bg-white min-h-[300px]">
                <table className="w-full text-[10px] border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-400">
                      <th className="border-r border-slate-400 w-8 py-1">#</th>
                      <th className="border-r border-slate-400 px-2 text-left">Target Path</th>
                      <th className="border-r border-slate-400 px-2 text-left">File Name</th>
                      <th className="border-r border-slate-400 px-2 text-left">Attachment Date</th>
                      <th className="px-2 text-left">Free Text</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 12 }).map((_, i) => (
                      <tr key={i} className="h-[20px] border-b border-slate-200">
                        <td className="border-r border-slate-200 text-center">{i + 1}</td>
                        <td className="border-r border-slate-200 bg-slate-50/30"></td>
                        <td className="border-r border-slate-200 bg-slate-50/30"></td>
                        <td className="border-r border-slate-200 bg-slate-50/30"></td>
                        <td className="px-1"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="w-[100px] flex flex-col gap-2 pt-16">
                 <YellowBtn label="Browse" className="w-full text-[10px]" />
                 <button className="w-full py-0.5 bg-slate-100 border border-slate-300 text-[10px]">Display</button>
                 <button className="w-full py-0.5 bg-slate-100 border border-slate-300 text-[10px]">Delete</button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Section */}
        <div className="flex justify-between items-end gap-10">
          <div className="w-[400px] space-y-2">
            <FieldRow label="Buyer" labelWidth="80px">
              <div className="flex-1 flex gap-1 items-center">
                <ClassicSel options={['-No Sales Employee-']} value={form.buyer} onChange={handleChange('buyer')} className="flex-1" />
                <div className="w-4 h-4 border border-slate-400 rounded-full flex items-center justify-center text-[10px] text-slate-500 bg-white">i</div>
              </div>
            </FieldRow>
            <FieldRow label="Owner" labelWidth="80px">
              <ClassicInput value={form.owner} onChange={handleChange('owner')} />
            </FieldRow>
            <div className="flex items-center gap-2 py-1">
               <input type="checkbox" checked={form.paymentOrderRun} onChange={handleChange('paymentOrderRun')} disabled />
               <span className="text-[11px] text-slate-500">Payment Order Run</span>
            </div>
            <div className="flex gap-2">
              <span className="text-[11px] text-slate-800 w-[80px] shrink-0 font-medium">Remarks</span>
              <textarea 
                className="flex-1 h-16 border border-slate-400 outline-none p-1 text-[11px]" 
                value={form.remarks} 
                onChange={handleChange('remarks')}
              />
            </div>
          </div>

          <div className="w-[300px] space-y-[2px]">
            <FieldRow label="Total Before Discount" labelWidth="140px">
              <ClassicInput disabled className="bg-slate-100" />
            </FieldRow>
            <div className="flex items-center gap-2">
               <span className="text-[11px] text-slate-800 w-[140px] shrink-0 font-medium">DPM</span>
               <div className="flex gap-1 flex-1">
                 <ClassicInput className="w-12 text-right" value="100" onChange={() => {}} />
                 <span className="text-[11px] self-center">%</span>
                 <ClassicInput className="bg-slate-100 flex-1" />
               </div>
            </div>
            <FieldRow label="Tax" labelWidth="140px">
              <ClassicInput disabled className="bg-slate-100" />
            </FieldRow>
            <FieldRow label="WTax Amount" labelWidth="140px">
              <ClassicInput disabled className="bg-slate-100" />
            </FieldRow>
            <div className="flex items-center justify-between pt-1">
              <span className="text-[11px] font-bold text-slate-800">Total Payment Due</span>
              <div className="flex items-center gap-1">
                  <span className="text-[11px]">PKR 0.00</span>
                  <ClassicInput disabled className="bg-slate-100 w-24" />
              </div>
            </div>
            <FieldRow label="Applied Amount" labelWidth="140px">
              <ClassicInput disabled className="bg-slate-100" />
            </FieldRow>
            <FieldRow label="Balance Due" labelWidth="140px">
              <ClassicInput disabled className="bg-slate-100" />
            </FieldRow>
          </div>
        </div>
      </div>
    </FormContainer>
  );
};

export default function APDownPaymentRequest() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'ap-down-payment-request',
      title: 'A/P Down Payment Request',
      component: <APDownPaymentRequestContent />,
      initialSize: { width: 1200, height: 850 },
      initialPosition: { x: 50, y: 20 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { APDownPaymentRequestContent };
