import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  FieldRow, 
  ClassicInput, 
  ClassicSel, 
  FormContainer 
} from '@/components/ClassicERPUI';

const LoanApplicationContent = () => {
  const [form, setForm] = useState({
    dhabNo: '',
    empName: '',
    desig: '',
    loanCode: '',
    loanType: '',
    loanAmount: '',
    sanctionedAmount: '',
    installments: '',
    amountMonth: '',
    noType: 'Primary',
    noValue: '102',
    docDate: '24.02.26',
    status: 'Open',
    effectivePeriod: '',
    effectiveDate: '',
    approved: false,
    remarks: '',
    rows: [
      { id: 1, month: '', year: '', date: '', amount: '', status: '' }
    ]
  });

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <FormContainer 
      footerButtons={[
        { label: 'Add', onClick: () => console.log('Add', form) }
      ]}
    >
      <div className="flex flex-col gap-4">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          {/* Left Header */}
          <div className="w-[350px] space-y-[1px]">
            <FieldRow label="DHAB No.*" labelWidth="120px">
              <ClassicInput value={form.dhabNo} onChange={handleChange('dhabNo')} />
            </FieldRow>
            <FieldRow label="Employee Name" labelWidth="120px">
              <ClassicInput value={form.empName} onChange={handleChange('empName')} className="bg-[#e0e0e0]" />
            </FieldRow>
            <FieldRow label="Designation" labelWidth="120px">
              <ClassicInput value={form.desig} onChange={handleChange('desig')} className="bg-[#e0e0e0]" />
            </FieldRow>
            <FieldRow label="Loan Code *" labelWidth="120px">
              <ClassicInput value={form.loanCode} onChange={handleChange('loanCode')} />
            </FieldRow>
            <FieldRow label="Loan Type" labelWidth="120px">
              <ClassicInput value={form.loanType} onChange={handleChange('loanType')} className="bg-[#e0e0e0]" />
            </FieldRow>
            <FieldRow label="Loan Amount *" labelWidth="120px">
              <ClassicInput value={form.loanAmount} onChange={handleChange('loanAmount')} />
            </FieldRow>
            <FieldRow label="Sanctioned Amount" labelWidth="120px">
              <ClassicInput value={form.sanctionedAmount} onChange={handleChange('sanctionedAmount')} />
            </FieldRow>
            <div className="pt-2 space-y-[1px]">
               <FieldRow label="No Of Installments" labelWidth="120px">
                <ClassicInput value={form.installments} onChange={handleChange('installments')} />
              </FieldRow>
              <FieldRow label="Amount/Month" labelWidth="120px">
                <ClassicInput value={form.amountMonth} onChange={handleChange('amountMonth')} className="bg-[#e0e0e0]" />
              </FieldRow>
            </div>
          </div>

          {/* Right Header */}
          <div className="w-[400px] space-y-[1px]">
            <div className="flex items-center gap-2 mb-[2px]">
              <span className="text-[11px] text-slate-800 w-[120px] shrink-0 font-medium">No.</span>
              <div className="flex-1 flex gap-1">
                <ClassicSel options={['Primary', 'Secondary']} value={form.noType} onChange={handleChange('noType')} className="w-1/2" />
                <ClassicInput value={form.noValue} onChange={handleChange('noValue')} className="w-1/2" />
              </div>
            </div>
            <FieldRow label="Document Date" labelWidth="120px">
              <ClassicInput value={form.docDate} onChange={handleChange('docDate')} yellow />
            </FieldRow>
            <FieldRow label="Status" labelWidth="120px">
              <ClassicInput value={form.status} onChange={handleChange('status')} className="bg-[#f0f0f0]" />
            </FieldRow>
            <div className="pt-4 space-y-[1px]">
              <FieldRow label="Effective pay Period" labelWidth="120px">
                <ClassicInput value={form.effectivePeriod} onChange={handleChange('effectivePeriod')} />
              </FieldRow>
              <FieldRow label="Effective Date" labelWidth="120px">
                <ClassicInput value={form.effectiveDate} onChange={handleChange('effectiveDate')} />
              </FieldRow>
            </div>
            <div className="flex items-center gap-2 mt-8">
               <div className="w-4 h-4 border border-slate-400 bg-white mr-2"></div>
               <span className="text-[11px]">Approved</span>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="border border-slate-400 bg-white overflow-auto max-h-[300px]">
          <table className="w-full text-[11px] border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-400 sticky top-0 z-10">
                <th className="border-r border-slate-400 w-8 px-1 py-1">#</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left">Month</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left">Year</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left">Date</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left">Amount</th>
                <th className="px-2 py-1 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {form.rows.map((row, idx) => (
                <tr key={idx} className="h-[19px] border-b border-slate-200 hover:bg-slate-50">
                  <td className="border-r border-slate-200 text-center">{row.id}</td>
                  <td className="border-r border-slate-200 px-1"><input type="text" className="w-full outline-none" /></td>
                  <td className="border-r border-slate-200 px-1"><input type="text" className="w-full outline-none" /></td>
                  <td className="border-r border-slate-200 px-1"><input type="text" className="w-full outline-none" /></td>
                  <td className="border-r border-slate-200 px-1"><input type="text" className="w-full outline-none" /></td>
                  <td className="px-1"><input type="text" className="w-full outline-none" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="w-[450px]">
          <FieldRow label="Remarks" labelWidth="80px">
            <ClassicInput value={form.remarks} onChange={handleChange('remarks')} className="h-[25px]" />
          </FieldRow>
        </div>
      </div>
    </FormContainer>
  );
};

export default function LoanApplication() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'loan-application',
      title: 'Loan Application',
      component: <LoanApplicationContent />,
      initialSize: { width: 850, height: 600 },
      initialPosition: { x: 100, y: 100 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { LoanApplicationContent };
