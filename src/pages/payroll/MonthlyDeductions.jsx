import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  FieldRow, 
  ClassicInput, 
  ClassicSel, 
  FormContainer 
} from '@/components/ClassicERPUI';

const MonthlyDeductionsContent = () => {
  const [form, setForm] = useState({
    employeeType: '',
    payPeriod: '',
    noType: 'Primary',
    noValue: '15',
    docDate: '24.02.26',
    status: 'Open',
    remarks: '',
    rows: [
      { id: 1, empId: '', empName: '', dhabNo: '', arrears: '0.00', genDed: '0.00', carAlle: '0.00', carIns: '0.00', tada: '0.00', dowry: '0.00', taxableAdd: '0.00', fuel: '0.00', mess: '0.00', genDed2: '0.00', carIns2: '0.00', loan: '0.00', ded11: '0.00', ded12: '0.00', ded13: '0.00', ded14: '0.00', ded15: '0.00', amount: '0.00', rowRemarks: '' }
    ]
  });

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <FormContainer 
      footerButtons={[
        { label: 'Add', onClick: () => console.log('Add', form) },
        { label: 'Cancel', onClick: () => console.log('Cancel') }
      ]}
    >
      <div className="flex flex-col gap-4">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          {/* Left Header */}
          <div className="w-[300px] space-y-[1px]">
            <FieldRow label="Employee Type" labelWidth="100px">
              <ClassicSel options={['---', 'Permanent', 'Contract']} value={form.employeeType} onChange={handleChange('employeeType')} />
            </FieldRow>
            <FieldRow label="Pay Period" labelWidth="100px">
              <ClassicInput value={form.payPeriod} onChange={handleChange('payPeriod')} />
            </FieldRow>
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
              <ClassicSel options={['Open', 'Closed']} value={form.status} onChange={handleChange('status')} />
            </FieldRow>
          </div>
        </div>

        {/* Table Section */}
        <div className="border border-slate-400 bg-white overflow-auto max-h-[400px]">
          <table className="w-full text-[10px] border-collapse min-w-[2200px]">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-400 sticky top-0 z-10">
                <th className="border-r border-slate-400 w-8 px-1 py-1">#</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[80px]">Employee ID</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[120px]">Employee Name</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[80px]">DHAB No</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[70px]">Arrears</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[100px]">General Deduction</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[70px]">Car Alle</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[110px]">Car Ins/ Laptop Ded</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[70px]">TA/DA</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[100px]">Dowry Allowance</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[100px]">Taxable Addition</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[70px]">Fuel</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[90px]">Mess Deduction</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">General Ded</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[110px]">Car Ins/ Laptop Ded</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[90px]">Loan/Deduction</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">Deduction11</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">Deduction12</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">Deducn13</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">Deduction14</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">Deduction15</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">Amount</th>
                <th className="px-2 py-1 text-left min-w-[150px]">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {form.rows.map((row, idx) => (
                <tr key={idx} className="h-[19px] border-b border-slate-200 hover:bg-slate-50">
                  <td className="border-r border-slate-200 text-center">{row.id}</td>
                  <td className="border-r border-slate-200 px-1"><input type="text" className="w-full outline-none" /></td>
                  <td className="border-r border-slate-200 px-1"><input type="text" className="w-full outline-none" /></td>
                  <td className="border-r border-slate-200 px-1"><input type="text" className="w-full outline-none" /></td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right">0.00</td>
                  <td className="border-r border-slate-200 px-1 text-right font-bold text-red-600">0.00</td>
                  <td className="px-1"><input type="text" className="w-full outline-none" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="w-[400px]">
          <FieldRow label="Remarks" labelWidth="80px">
            <ClassicInput value={form.remarks} onChange={handleChange('remarks')} className="h-[40px]" />
          </FieldRow>
        </div>
      </div>
    </FormContainer>
  );
};

export default function MonthlyDeductions() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'payroll-monthly-deductions',
      title: 'PayRoll Monthly Deductions',
      component: <MonthlyDeductionsContent />,
      initialSize: { width: 1100, height: 750 },
      initialPosition: { x: 70, y: 30 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { MonthlyDeductionsContent };
