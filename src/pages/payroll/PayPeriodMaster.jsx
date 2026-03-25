import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  FieldRow, 
  ClassicInput, 
  ClassicSel, 
  FormContainer 
} from '@/components/ClassicERPUI';

const PayPeriodMasterContent = () => {
  const [form, setForm] = useState({
    status: 'Open',
    code: '',
    name: '',
    fromDate: '',
    toDate: '',
    payMonth: '',
    workingDays: '',
    saturdays: '',
    holidays: '',
    maxNormalOT: '0.00',
    maxWorkingHours: '0.00',
    remarks: ''
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
      <div className="max-w-[500px] space-y-[1px]">
        <FieldRow label="Pay Period Status">
          <ClassicSel 
            options={['Open', 'Closed', 'Locked']} 
            value={form.status} 
            onChange={handleChange('status')}
          />
        </FieldRow>
        <FieldRow label="Pay Period Code / Month" required>
          <ClassicInput yellow value={form.code} onChange={handleChange('code')} />
        </FieldRow>
        <FieldRow label="Name" required>
          <ClassicInput yellow value={form.name} onChange={handleChange('name')} />
        </FieldRow>
        <FieldRow label="From Date" required>
          <ClassicInput yellow value={form.fromDate} onChange={handleChange('fromDate')} />
        </FieldRow>
        <FieldRow label="To Date" required>
          <ClassicInput yellow value={form.toDate} onChange={handleChange('toDate')} />
        </FieldRow>
        <FieldRow label="Pay Month">
          <ClassicInput value={form.payMonth} onChange={handleChange('payMonth')} />
        </FieldRow>
        <FieldRow label="No of Working Days">
          <ClassicInput value={form.workingDays} onChange={handleChange('workingDays')} />
        </FieldRow>
        <FieldRow label="No of Saturdays">
          <ClassicInput value={form.saturdays} onChange={handleChange('saturdays')} />
        </FieldRow>
        <FieldRow label="No of Holidays">
          <ClassicInput value={form.holidays} onChange={handleChange('holidays')} />
        </FieldRow>
        <FieldRow label="Maximum Normal OT Hours / Month">
          <ClassicInput value={form.maxNormalOT} onChange={handleChange('maxNormalOT')} />
        </FieldRow>
        <FieldRow label="Maximum Working Hours / Month">
          <ClassicInput value={form.maxWorkingHours} onChange={handleChange('maxWorkingHours')} />
        </FieldRow>
        <FieldRow label="Remarks">
          <textarea 
            className="flex-1 border border-slate-400 px-1 text-[11px] h-[60px] outline-none bg-[#fff9c4] resize-none"
            value={form.remarks}
            onChange={handleChange('remarks')}
          />
        </FieldRow>
      </div>
    </FormContainer>
  );
};

export default function PayPeriodMaster() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'pay-period-master',
      title: 'Pay Period',
      component: <PayPeriodMasterContent />,
      initialSize: { width: 600, height: 450 },
      initialPosition: { x: 100, y: 100 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { PayPeriodMasterContent };
