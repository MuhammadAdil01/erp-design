import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  FieldRow, 
  ClassicInput, 
  ClassicSel, 
  YellowBtn,
  FormContainer 
} from '@/components/ClassicERPUI';

const MonthlyAttendanceSheetContent = () => {
  const [form, setForm] = useState({
    location: '---',
    payPeriod: '---',
    fromDate: '',
    periodMonth: '',
    noType: 'Primary',
    noValue: '19',
    date: '24.02.26',
    status: 'Open',
    year: '2026',
    toDate: '',
    type: '---',
    remarks: '',
    rows: [
      { id: 1, empId: '', empName: '', idNo: '', dept: '', desig: '', totalDays: '0.00', workingDays: '0.00', presentDays: '0.00', lop: '0.00', payableLeaves: '0.00', ot: '0.00', shortTime: '0.00', normalOT: '0.00', sunday: '0.00', misBio: '0.00', compOff: '0.00', annualLeave: '0.00', halfDay: '0.00', other: '0.00' }
    ]
  });

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <FormContainer 
      footerButtons={[
        { label: 'Add', onClick: () => console.log('Add', form) },
        { label: 'Cancel', onClick: () => console.log('Cancel') },
        { label: 'Daily Att. Sheet', onClick: () => console.log('Daily Att. Sheet') }
      ]}
    >
      <div className="flex flex-col gap-4">
        {/* Header Section */}
        <div className="flex justify-between items-start">
          {/* Left Header */}
          <div className="w-[350px] space-y-[1px]">
            <FieldRow label="Location" labelWidth="120px">
              <ClassicSel options={['---', 'Head Office', 'Site A', 'Site B']} value={form.location} onChange={handleChange('location')} />
            </FieldRow>
            <FieldRow label="Pay Period" labelWidth="120px" required>
              <ClassicSel options={['---', 'Feb 2026', 'Jan 2026']} value={form.payPeriod} onChange={handleChange('payPeriod')} />
            </FieldRow>
            <FieldRow label="From Date" labelWidth="120px">
              <ClassicInput value={form.fromDate} onChange={handleChange('fromDate')} className="bg-[#e0e0e0]" />
            </FieldRow>
            <FieldRow label="Pay Period Month" labelWidth="120px">
              <ClassicInput value={form.periodMonth} onChange={handleChange('periodMonth')} className="bg-[#e0e0e0]" />
            </FieldRow>
          </div>

          {/* Right Header */}
          <div className="w-[450px] space-y-[1px]">
            <div className="flex items-center gap-2 mb-[2px]">
              <span className="text-[11px] text-slate-800 w-[120px] shrink-0 font-medium">No</span>
              <div className="flex-1 flex gap-1">
                <ClassicSel options={['Primary', 'Secondary']} value={form.noType} onChange={handleChange('noType')} className="w-1/2" />
                <ClassicInput value={form.noValue} onChange={handleChange('noValue')} className="w-1/2" />
              </div>
            </div>
            <FieldRow label="Date" labelWidth="120px">
              <ClassicInput value={form.date} onChange={handleChange('date')} yellow />
            </FieldRow>
            <FieldRow label="Status" labelWidth="120px">
              <ClassicInput value={form.status} onChange={handleChange('status')} className="bg-[#f0f0f0]" />
            </FieldRow>
            <FieldRow label="Year" labelWidth="120px">
              <ClassicInput value={form.year} onChange={handleChange('year')} className="bg-[#f0f0f0]" />
            </FieldRow>
            <FieldRow label="To Date" labelWidth="120px">
              <ClassicInput value={form.toDate} onChange={handleChange('toDate')} />
            </FieldRow>
            <div className="flex items-center gap-2">
               <FieldRow label="Type" labelWidth="120px">
                  <ClassicSel options={['---']} value={form.type} onChange={handleChange('type')} />
               </FieldRow>
               <YellowBtn className="w-[80px]">Find</YellowBtn>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="border border-slate-400 bg-white overflow-auto max-h-[400px]">
          <table className="w-full text-[10px] border-collapse min-w-[1500px]">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-400 sticky top-0 z-10">
                <th className="border-r border-slate-400 w-8 px-1 py-1">#</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[80px]">Employee ID</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[120px]">Employee Name</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[80px]">ID No.</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Department</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Designation</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[60px]">Total Days</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[70px]">Working Days</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[90px]">No of Present Days</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[60px]">LOP Days</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[80px]">Payable Leaves</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[60px]">OT Hours</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[80px]">Short Time Hours</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[80px]">Normal OT Hours</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[60px]">Sunday</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[90px]">MisBioMatricDays</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[80px]">Comp-Off Days</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[70px]">Annual Leave</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[70px]">Half Day Leave</th>
                <th className="px-2 py-1 text-left min-w-[50px]">C...</th>
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
                  <td className="px-1 text-right">0.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer Section */}
        <div className="flex justify-between items-end">
          <div className="w-[400px]">
            <FieldRow label="Remarks" labelWidth="80px">
              <ClassicInput value={form.remarks} onChange={handleChange('remarks')} className="h-[25px]" />
            </FieldRow>
          </div>
          <YellowBtn className="w-[150px]">New Joiners Report</YellowBtn>
        </div>
      </div>
    </FormContainer>
  );
};

export default function MonthlyAttendanceSheet() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'monthly-attendance-sheet',
      title: 'Monthly Attendance Sheet',
      component: <MonthlyAttendanceSheetContent />,
      initialSize: { width: 1100, height: 750 },
      initialPosition: { x: 50, y: 30 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { MonthlyAttendanceSheetContent };
