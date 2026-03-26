import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  ClassicInput, 
  ClassicSel,
  FormContainer,
  YellowBtn
} from '@/components/ClassicERPUI';

const sampleData = [
  { docSeries:'DHAB-SC', docNo:'228418', custRef:'1 of 1', instNo:'01/OL/GP0097/B', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 14,250.00', net:'PKR 14,250.00', tax:'PKR 0.00', origAmt:'PKR 14,250.00', postDate:'31.01.16', docDate:'01.07.15', docType:'A/R Invoices', blanket:'Blanket Agreement' },
  { docSeries:'DHAB-SC', docNo:'238475', custRef:'1 of 1', instNo:'01/OL/GP0041/B', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 14,250.00', net:'PKR 14,250.00', tax:'', origAmt:'PKR 14,250.00', postDate:'31.01.16', docDate:'01.07.15', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464191', custRef:'1 of 1', instNo:'01/OL/GP0005/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 22,830.00', net:'PKR 22,830.00', tax:'', origAmt:'PKR 22,830.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464192', custRef:'1 of 1', instNo:'01/OL/CP0005/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 14,250.00', net:'PKR 14,250.00', tax:'', origAmt:'PKR 14,250.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464193', custRef:'1 of 1', instNo:'01/OL/CP0005/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 380,000.00', net:'PKR 380,000.00', tax:'PKR 0.00', origAmt:'PKR 380,000.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464196', custRef:'1 of 1', instNo:'', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 22,830.00', net:'PKR 22,830.00', tax:'', origAmt:'PKR 22,830.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464207', custRef:'1 of 1', instNo:'01/OL/CP0005/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 14,250.00', net:'PKR 14,250.00', tax:'', origAmt:'PKR 14,250.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464208', custRef:'1 of 1', instNo:'01/OL/GP0002/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 22,830.00', net:'PKR 22,830.00', tax:'PKR 0.00', origAmt:'', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464222', custRef:'1 of 1', instNo:'01/OL/GP0002/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 14,250.00', net:'PKR 14,250.00', tax:'', origAmt:'', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464223', custRef:'1 of 1', instNo:'', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 380,000.00', net:'PKR 380,000.00', tax:'', origAmt:'PKR 380,000.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464236', custRef:'1 of 1', instNo:'01/OL/GP0002/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 22,830.00', net:'PKR 22,830.00', tax:'', origAmt:'PKR 22,830.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464237', custRef:'', instNo:'', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 14,250.00', net:'PKR 14,250.00', tax:'', origAmt:'PKR 14,250.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464238', custRef:'1 of 1', instNo:'01/OL/GP0002/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 380,000.00', net:'PKR 380,000.00', tax:'', origAmt:'', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464251', custRef:'1 of 1', instNo:'01/OL/GE0002/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 22,830.00', net:'PKR 22,830.00', tax:'', origAmt:'PKR 22,830.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464252', custRef:'1 of 1', instNo:'01/OL/GE0002/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 14,250.00', net:'PKR 14,250.00', tax:'PKR 0.00', origAmt:'PKR 14,250.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464253', custRef:'1 of 1', instNo:'01/OL/GE0002/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 380,000.00', net:'PKR 380,000.00', tax:'', origAmt:'', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464256', custRef:'1 of 1', instNo:'01/OL/GE0002/01/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 22,830.00', net:'PKR 22,830.00', tax:'', origAmt:'PKR 22,830.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464267', custRef:'', instNo:'', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 14,250.00', net:'PKR 14,250.00', tax:'', origAmt:'PKR 14,250.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464268', custRef:'1 of 1', instNo:'01/OL/GE0005/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 380,000.00', net:'PKR 380,000.00', tax:'', origAmt:'PKR 380,000.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464281', custRef:'1 of 1', instNo:'01/OL/GP0005/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 22,830.00', net:'PKR 22,830.00', tax:'', origAmt:'PKR 22,830.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464282', custRef:'1 of 1', instNo:'', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 14,250.00', net:'PKR 14,250.00', tax:'', origAmt:'PKR 14,250.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464283', custRef:'1 of 1', instNo:'01/OL/GP0005/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 380,000.00', net:'PKR 380,000.00', tax:'PKR 0.00', origAmt:'PKR 380,000.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464296', custRef:'1 of 1', instNo:'', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 22,830.00', net:'PKR 22,830.00', tax:'0.00', origAmt:'PKR 22,830.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464297', custRef:'', instNo:'', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 14,250.00', net:'PKR 14,250.00', tax:'', origAmt:'PKR 380,000.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464298', custRef:'1 of 1', instNo:'01/OL/GP0052/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 380,000.00', net:'PKR 380,000.00', tax:'', origAmt:'PKR 380,000.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464311', custRef:'1 of 1', instNo:'01/OL/GP0052/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 22,830.00', net:'PKR 22,830.00', tax:'', origAmt:'PKR 22,830.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464312', custRef:'1 of 1', instNo:'', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 380,000.00', net:'PKR 380,000.00', tax:'', origAmt:'PKR 380,000.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464326', custRef:'1 of 1', instNo:'01/OL/GP0054/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 22,830.00', net:'PKR 22,830.00', tax:'', origAmt:'PKR 22,830.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464327', custRef:'', instNo:'01/OL/GP0054/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 14,250.00', net:'PKR 14,250.00', tax:'', origAmt:'PKR 14,250.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464328', custRef:'1 of 1', instNo:'', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 380,000.00', net:'PKR 380,000.00', tax:'', origAmt:'PKR 380,000.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464341', custRef:'1 of 1', instNo:'', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 14,250.00', net:'PKR 14,250.00', tax:'PKR 0.00', origAmt:'PKR 14,250.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
  { docSeries:'DHAB-SC', docNo:'464342', custRef:'1 of 1', instNo:'01/OL/GP0059/A', custCode:'', custName:'3700', daysOver:'31.01.16', dueDate:'', amount:'PKR 14,250.00', net:'PKR 14,250.00', tax:'PKR 0.00', origAmt:'PKR 14,250.00', postDate:'31.01.16', docDate:'31.01.16', docType:'A/R Invoices', blanket:'' },
];

const cols = ['Doc. Series','Doc. No.','Customer Ref. No.','Installment No.','Customer Code','Customer Name','Days Overdue','Due Date','Amount','Net','Tax','Original Amount','Posting Date','Document Date','Document Type','Blanket Agreement'];

const OpenItemsListContent = () => {
  return (
    <FormContainer 
      footerButtons={[
        { label: 'OK', onClick: () => console.log('OK') }
      ]}
    >
      <div className="flex flex-col h-full gap-1">
        {/* Top bar */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800">Currency</span>
            <ClassicSel options={['Local Currency']} className="w-28" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800">Open Documents</span>
            <ClassicSel options={['A/R Invoices']} className="w-28" />
          </div>
        </div>

        {/* Grid */}
        <div className="flex-1 border border-slate-400 bg-white overflow-auto">
          <table className="w-full text-[10px] border-collapse min-w-[1800px]">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-400 sticky top-0 z-10">
                {cols.map((c,i) => (
                  <th key={i} className="border-r border-slate-400 px-2 py-1 text-left whitespace-nowrap font-semibold">{c}</th>
                ))}
                <th className="px-1 py-1 w-5">↗</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row, i) => (
                <tr key={i} className={`h-[18px] border-b border-slate-200 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}`}>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap">{row.docSeries}</td>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap">{row.docNo}</td>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap">{row.custRef}</td>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap">{row.instNo}</td>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap">{row.custCode}</td>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap">{row.custName}</td>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap">{row.daysOver}</td>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap">{row.dueDate}</td>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap text-right">{row.amount}</td>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap text-right">{row.net}</td>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap text-right">{row.tax}</td>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap text-right">{row.origAmt}</td>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap">{row.postDate}</td>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap">{row.docDate}</td>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap">{row.docType}</td>
                  <td className="border-r border-slate-200 px-1 whitespace-nowrap">{row.blanket}</td>
                  <td className="px-1"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </FormContainer>
  );
};

export default function OpenItemsList() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'open-items-list',
      title: 'Open Items List',
      component: <OpenItemsListContent />,
      initialSize: { width: 1100, height: 600 },
      initialPosition: { x: 50, y: 20 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { OpenItemsListContent };
