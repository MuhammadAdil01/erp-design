import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  FieldRow, 
  ClassicInput, 
  YellowBtn,
  FormContainer 
} from '@/components/ClassicERPUI';

const GradePayScaleContent = () => {
  const [form, setForm] = useState({
    grade: '',
    docNum: '34',
    docDate: '24.02.26',
    rows: [
      { stages: '', basicPay: '', hra: '', utility: '', medical: '', conveyance: '', adhoc2017: '', adhoc2018: '' }
    ]
  });

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  const addRow = () => {
    setForm(prev => ({
      ...prev,
      rows: [...prev.rows, { stages: '', basicPay: '', hra: '', utility: '', medical: '', conveyance: '', adhoc2017: '', adhoc2018: '' }]
    }));
  };

  return (
    <FormContainer 
      footerButtons={[
        { label: 'Add', onClick: () => console.log('Add', form) },
        { label: 'Cancel', onClick: () => console.log('Cancel') }
      ]}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-[300px]">
          <FieldRow label="Grade" labelWidth="100px">
            <ClassicInput value={form.grade} onChange={handleChange('grade')} />
          </FieldRow>
        </div>
        <div className="w-[250px] space-y-[1px]">
          <FieldRow label="DocNum" labelWidth="100px">
            <ClassicInput value={form.docNum} onChange={handleChange('docNum')} className="bg-[#f0f0f0]" />
          </FieldRow>
          <FieldRow label="DocumentDate" labelWidth="100px">
            <ClassicInput value={form.docDate} onChange={handleChange('docDate')} yellow />
          </FieldRow>
        </div>
      </div>

      <div className="border border-slate-400 bg-white overflow-x-auto min-h-[200px]">
        <table className="w-full text-[11px] border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-400">
              <th className="border-r border-slate-400 px-2 py-1 text-left">Stages</th>
              <th className="border-r border-slate-400 px-2 py-1 text-left">Basic Pay</th>
              <th className="border-r border-slate-400 px-2 py-1 text-left">HRA</th>
              <th className="border-r border-slate-400 px-2 py-1 text-left">Utility Allowance</th>
              <th className="border-r border-slate-400 px-2 py-1 text-left">Medical Allowance</th>
              <th className="border-r border-slate-400 px-2 py-1 text-left">Conveyance Allowance</th>
              <th className="border-r border-slate-400 px-2 py-1 text-left">Adhoc 2017</th>
              <th className="px-2 py-1 text-left">Adhoc 2018</th>
            </tr>
          </thead>
          <tbody>
            {form.rows.map((row, idx) => (
              <tr key={idx} className="h-[19px] border-b border-slate-200">
                <td className="border-r border-slate-200 px-1"><input type="text" className="w-full outline-none" /></td>
                <td className="border-r border-slate-200 px-1"><input type="text" className="w-full outline-none" /></td>
                <td className="border-r border-slate-200 px-1"><input type="text" className="w-full outline-none" /></td>
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
      <div className="flex justify-end mt-2">
        <YellowBtn onClick={addRow}>Add Row</YellowBtn>
      </div>
    </FormContainer>
  );
};

export default function GradePayScale() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'grade-pay-scale',
      title: 'Grade Pay Scale',
      component: <GradePayScaleContent />,
      initialSize: { width: 900, height: 500 },
      initialPosition: { x: 80, y: 80 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { GradePayScaleContent };
