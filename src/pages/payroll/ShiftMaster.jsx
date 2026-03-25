import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  FieldRow, 
  ClassicInput, 
  FormContainer 
} from '@/components/ClassicERPUI';

const ShiftMasterContent = () => {
  const [form, setForm] = useState({
    code: '',
    description: '',
    startTime: '',
    endTime: '',
    lunchHours: '',
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
      <div className="max-w-[450px] space-y-[1px]">
        <FieldRow label="Shift Code">
          <ClassicInput yellow value={form.code} onChange={handleChange('code')} />
        </FieldRow>
        <FieldRow label="Shift Description" required>
          <ClassicInput yellow value={form.description} onChange={handleChange('description')} />
        </FieldRow>
        <FieldRow label="Shift Start Time" required>
          <ClassicInput yellow value={form.startTime} onChange={handleChange('startTime')} />
        </FieldRow>
        <FieldRow label="Shift End Time" required>
          <ClassicInput yellow value={form.endTime} onChange={handleChange('endTime')} />
        </FieldRow>
        <FieldRow label="Lunch Break Hours">
          <ClassicInput value={form.lunchHours} onChange={handleChange('lunchHours')} />
        </FieldRow>
        <FieldRow label="Remarks">
          <textarea 
            className="flex-1 border border-slate-400 px-1 text-[11px] h-[80px] outline-none bg-[#fff9c4] resize-none"
            value={form.remarks}
            onChange={handleChange('remarks')}
          />
        </FieldRow>
      </div>
    </FormContainer>
  );
};

export default function ShiftMaster() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'shift-master',
      title: 'Shift Master',
      component: <ShiftMasterContent />,
      initialSize: { width: 450, height: 350 },
      initialPosition: { x: 300, y: 300 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { ShiftMasterContent };
