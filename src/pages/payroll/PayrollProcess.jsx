import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  FieldRow, 
  ClassicInput, 
  ClassicSel, 
  FormContainer 
} from '@/components/ClassicERPUI';

const PayrollProcessContent = () => {
  const [form, setForm] = useState({
    employeeType: '',
    payPeriod: '',
    payMonth: '',
    fromDate: '',
    jeNo: '',
    noType: 'Primary',
    noValue: '14',
    docDate: '24.02.26',
    toDate: '',
    status: 'Open',
    cancellationJeNo: '',
    remarks: '',
    rows: [
      { id: 1, empId: '', name: '', empType: '', desig: '', dept: '', dhabNo: '', totalDays: '0.00', lop: '0.00', daysWorked: '0.00', paidDays: '0.00', payLeaves: '0.00', basic: '0.00', entertainment: '0.00', eligibleBasic: '0.00', conveyance: '0.00', education: '0.00', eligibleConveyance: '0.00', hra: '0.00', bigCity: '0.00', eligibleHra: '0.00' }
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
          <div className="w-[350px] space-y-[1px]">
            <FieldRow label="Employee Type" labelWidth="120px">
              <ClassicInput value={form.employeeType} onChange={handleChange('employeeType')} />
            </FieldRow>
            <FieldRow label="Pay Period" labelWidth="120px">
              <ClassicInput value={form.payPeriod} onChange={handleChange('payPeriod')} />
            </FieldRow>
            <FieldRow label="Pay Month" labelWidth="120px">
              <ClassicInput value={form.payMonth} onChange={handleChange('payMonth')} className="bg-[#e0e0e0]" />
            </FieldRow>
            <FieldRow label="From Date" labelWidth="120px">
              <ClassicInput value={form.fromDate} onChange={handleChange('fromDate')} className="bg-[#e0e0e0]" />
            </FieldRow>
            <FieldRow label="JE NO" labelWidth="120px">
              <ClassicInput value={form.jeNo} onChange={handleChange('jeNo')} className="bg-[#e0e0e0]" />
            </FieldRow>
          </div>

          {/* Right Header */}
          <div className="w-[450px] space-y-[1px]">
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
            <FieldRow label="To Date" labelWidth="120px">
              <ClassicInput value={form.toDate} onChange={handleChange('toDate')} />
            </FieldRow>
            <FieldRow label="Status" labelWidth="120px">
              <ClassicSel options={['Open', 'Closed']} value={form.status} onChange={handleChange('status')} />
            </FieldRow>
            <FieldRow label="Cancellation JE NO" labelWidth="120px">
              <ClassicInput value={form.cancellationJeNo} onChange={handleChange('cancellationJeNo')} className="bg-[#f0f0f0]" />
            </FieldRow>
          </div>
        </div>

        {/* Table Section */}
        <div className="border border-slate-400 bg-white overflow-auto max-h-[400px]">
          <table className="w-full text-[10px] border-collapse min-w-[2000px]">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-400 sticky top-0 z-10">
                <th className="border-r border-slate-400 w-8 px-1 py-1">#</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[80px]">Employee ID</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[120px]">Name</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Employee Type</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Designation</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Department</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[80px]">DHAB No</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[100px]">TotalDays Working</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">LOP Days</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[110px]">Total Days Worked</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">Paid Days</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">Pay Leaves</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">Basic</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[90px]">Entertainment</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[90px]">Eligible Basic</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">Conveyance</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">Education</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[110px]">Eligible Conveyance</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">HRA</th>
                <th className="border-r border-slate-400 px-2 py-1 text-right min-w-[80px]">Big City</th>
                <th className="px-2 py-1 text-right min-w-[90px]">Eligible HRA</th>
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
                  <td className="px-1 text-right">0.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="w-[400px]">
          <FieldRow label="Remarks" labelWidth="80px">
            <ClassicInput value={form.remarks} onChange={handleChange('remarks')} className="h-[25px]" />
          </FieldRow>
        </div>
      </div>
    </FormContainer>
  );
};

export default function PayrollProcess() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'payroll-process',
      title: 'PayRoll Process',
      component: <PayrollProcessContent />,
      initialSize: { width: 1100, height: 750 },
      initialPosition: { x: 80, y: 50 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { PayrollProcessContent };
