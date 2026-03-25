import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  FieldRow, 
  ClassicInput, 
  FormContainer 
} from '@/components/ClassicERPUI';

const GradeMasterContent = () => {
  const [form, setForm] = useState({
    code: '',
    description: '',
    otRate: '',
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
        <FieldRow label="Grade Code" required>
          <ClassicInput yellow value={form.code} onChange={handleChange('code')} />
        </FieldRow>
        <FieldRow label="Description" required>
          <ClassicInput yellow value={form.description} onChange={handleChange('description')} />
        </FieldRow>
        <FieldRow label="Overtime Rate Per Hour">
          <ClassicInput value={form.otRate} onChange={handleChange('otRate')} />
        </FieldRow>
        <FieldRow label="Remarks">
          <textarea 
            className="flex-1 border border-slate-400 px-1 text-[11px] h-[100px] outline-none bg-[#fff9c4] resize-none"
            value={form.remarks}
            onChange={handleChange('remarks')}
          />
        </FieldRow>
      </div>
    </FormContainer>
  );
};

export default function GradeMaster() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'grade-master',
      title: 'Grade Master',
      component: <GradeMasterContent />,
      initialSize: { width: 450, height: 350 },
      initialPosition: { x: 200, y: 200 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { GradeMasterContent };
