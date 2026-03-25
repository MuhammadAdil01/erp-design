import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  FieldRow, 
  ClassicInput, 
  FormContainer 
} from '@/components/ClassicERPUI';

const EmployeeCategoryMasterContent = () => {
  const [form, setForm] = useState({
    code: '',
    name: '',
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
        <FieldRow label="Employee Category Code">
          <ClassicInput yellow value={form.code} onChange={handleChange('code')} />
        </FieldRow>
        <FieldRow label="Employee Category Name">
          <ClassicInput yellow value={form.name} onChange={handleChange('name')} />
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

export default function EmployeeCategoryMaster() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'employee-category-master',
      title: 'Employee Category Master',
      component: <EmployeeCategoryMasterContent />,
      initialSize: { width: 450, height: 350 },
      initialPosition: { x: 250, y: 250 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { EmployeeCategoryMasterContent };
