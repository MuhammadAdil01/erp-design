import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  FieldRow, 
  ClassicInput, 
  ClassicSel, 
  FormContainer 
} from '@/components/ClassicERPUI';

const LeaveApplicationContent = () => {
  const [form, setForm] = useState({
    location: '---',
    dhab: '---',
    empName: '',
    desig: '---',
    lastLeaveFrom: '',
    lastLeaveTo: '',
    leaveCode: '---',
    leaveName: '',
    fromDate: '',
    toDate: '',
    daysReq: '',
    balanceLeave: '',
    notes: '',
    no: '---',
    docDate: '24.02.26',
    status: 'Open',
    doj: '',
    dojAfterLeave: '',
    leaveType: 'Full',
    signedBy: '',
    contactNo: '',
    preparedBy: '',
    approvedBy: '',
    approved: false
  });

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <FormContainer 
      footerButtons={[
        { label: 'Find', onClick: () => console.log('Find', form) },
        { label: 'Cancel', onClick: () => console.log('Cancel') }
      ]}
    >
      <div className="flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex gap-10">
          {/* Left Column */}
          <div className="w-[400px] space-y-[1px]">
            <FieldRow label="Location" labelWidth="140px">
              <ClassicSel options={['---', 'Head Office', 'Site A']} value={form.location} onChange={handleChange('location')} />
            </FieldRow>
            <FieldRow label="DHAB *" labelWidth="140px">
              <ClassicSel options={['---']} value={form.dhab} onChange={handleChange('dhab')} />
            </FieldRow>
            <FieldRow label="Employee Name" labelWidth="140px">
              <ClassicInput value={form.empName} onChange={handleChange('empName')} className="bg-[#e0e0e0]" />
            </FieldRow>
            <FieldRow label="Designation" labelWidth="140px">
              <ClassicSel options={['---']} value={form.desig} onChange={handleChange('desig')} />
            </FieldRow>
            <FieldRow label="Last Leave From Date" labelWidth="140px">
              <ClassicInput value={form.lastLeaveFrom} onChange={handleChange('lastLeaveFrom')} className="bg-[#e0e0e0]" />
            </FieldRow>
            <FieldRow label="Last Leave To Date" labelWidth="140px">
              <ClassicInput value={form.lastLeaveTo} onChange={handleChange('lastLeaveTo')} className="bg-[#e0e0e0]" />
            </FieldRow>
            <FieldRow label="Leave Code *" labelWidth="140px">
              <ClassicSel options={['---']} value={form.leaveCode} onChange={handleChange('leaveCode')} />
            </FieldRow>
            <FieldRow label="Leave Name" labelWidth="140px">
              <ClassicInput value={form.leaveName} onChange={handleChange('leaveName')} className="bg-[#e0e0e0]" />
            </FieldRow>
            <FieldRow label="From Date *" labelWidth="140px">
              <ClassicInput value={form.fromDate} onChange={handleChange('fromDate')} />
            </FieldRow>
            <FieldRow label="To Date *" labelWidth="140px">
              <ClassicInput value={form.toDate} onChange={handleChange('toDate')} />
            </FieldRow>
            <FieldRow label="No of Days Leave Req." labelWidth="140px">
              <ClassicInput value={form.daysReq} onChange={handleChange('daysReq')} />
            </FieldRow>
            <FieldRow label="Balance Leave" labelWidth="140px">
              <ClassicInput value={form.balanceLeave} onChange={handleChange('balanceLeave')} className="bg-[#e0e0e0]" />
            </FieldRow>
          </div>

          {/* Right Column */}
          <div className="w-[400px] space-y-[1px]">
            <FieldRow label="No." labelWidth="120px">
              <ClassicSel options={['---']} value={form.no} onChange={handleChange('no')} />
            </FieldRow>
            <FieldRow label="Doc Date" labelWidth="120px">
              <ClassicInput value={form.docDate} onChange={handleChange('docDate')} yellow />
            </FieldRow>
            <FieldRow label="Status" labelWidth="120px">
              <ClassicSel options={['Open', 'Closed']} value={form.status} onChange={handleChange('status')} />
            </FieldRow>
            <FieldRow label="DOJ" labelWidth="120px">
              <ClassicInput value={form.doj} onChange={handleChange('doj')} />
            </FieldRow>
            <FieldRow label="DOJ After Leave" labelWidth="120px">
              <ClassicInput value={form.dojAfterLeave} onChange={handleChange('dojAfterLeave')} className="bg-[#e0e0e0]" />
            </FieldRow>
            <FieldRow label="Leave Type" labelWidth="120px">
              <ClassicSel options={['Full', 'Half Day']} value={form.leaveType} onChange={handleChange('leaveType')} />
            </FieldRow>
            <FieldRow label="Signed By" labelWidth="120px">
              <ClassicInput value={form.signedBy} onChange={handleChange('signedBy')} />
            </FieldRow>
            <FieldRow label="Contact No." labelWidth="120px">
              <ClassicInput value={form.contactNo} onChange={handleChange('contactNo')} />
            </FieldRow>
            <FieldRow label="Prepared By *" labelWidth="120px">
              <ClassicInput value={form.preparedBy} onChange={handleChange('preparedBy')} />
            </FieldRow>
          </div>
        </div>

        {/* Notes Section */}
        <div className="w-[700px]">
          <FieldRow label="Notes" labelWidth="140px">
            <textarea 
              className="flex-1 border border-slate-400 px-1 text-[11px] h-[50px] outline-none bg-[#fff9c4] resize-none"
              value={form.notes}
              onChange={handleChange('notes')}
            />
          </FieldRow>
        </div>

        {/* Office Use Section */}
        <div className="border-t border-slate-300 pt-4 w-full">
          <h3 className="text-[12px] font-bold text-slate-800 mb-2">Office Use</h3>
          <div className="space-y-[1px]">
            <FieldRow label="Approved By DO / GM" labelWidth="140px">
              <ClassicInput value={form.approvedBy} onChange={handleChange('approvedBy')} />
            </FieldRow>
             <div className="flex items-center gap-2 mt-2">
               <div className="w-4 h-4 border border-slate-400 bg-white ml-[140px]"></div>
               <span className="text-[11px]">Approved</span>
            </div>
          </div>
        </div>
      </div>
    </FormContainer>
  );
};

export default function LeaveApplication() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'leave-application',
      title: 'Leave Application',
      component: <LeaveApplicationContent />,
      initialSize: { width: 900, height: 700 },
      initialPosition: { x: 50, y: 50 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { LeaveApplicationContent };
