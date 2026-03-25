import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  FieldRow, 
  ClassicInput, 
  ClassicSel, 
  FormContainer 
} from '@/components/ClassicERPUI';

const TaxFormulaCalculationContent = () => {
  const [form, setForm] = useState({
    category: '---',
    code: '',
    periodYear: '',
    docDate: '24.02.26',
    fromDate: '',
    toDate: '',
    noOfMonths: '',
    startYear: '',
    rows: [
      { lowerAmount: '', higherAmount: '', percentage: '' }
    ]
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
      <div className="flex gap-8 mb-4">
        <div className="flex-1 space-y-[1px]">
          <FieldRow label="Employee Category">
            <ClassicSel 
              options={['---', 'Management', 'Staff', 'Workers']} 
              value={form.category} 
              onChange={handleChange('category')}
              yellow
            />
          </FieldRow>
          <FieldRow label="Period Year">
            <ClassicInput yellow value={form.periodYear} onChange={handleChange('periodYear')} />
          </FieldRow>
          <FieldRow label="From Date">
            <ClassicInput yellow value={form.fromDate} onChange={handleChange('fromDate')} />
          </FieldRow>
          <FieldRow label="No Of Months">
            <ClassicInput yellow value={form.noOfMonths} onChange={handleChange('noOfMonths')} />
          </FieldRow>
        </div>
        <div className="flex-1 space-y-[1px]">
          <FieldRow label="Code">
            <ClassicInput value={form.code} onChange={handleChange('code')} className="bg-[#f0f0f0]" />
          </FieldRow>
          <FieldRow label="Document Date">
            <ClassicInput yellow value={form.docDate} onChange={handleChange('docDate')} />
          </FieldRow>
          <FieldRow label="To Date">
            <ClassicInput yellow value={form.toDate} onChange={handleChange('toDate')} />
          </FieldRow>
          <FieldRow label="Start Year">
            <ClassicInput yellow value={form.startYear} onChange={handleChange('startYear')} />
          </FieldRow>
        </div>
      </div>

      <div className="border border-slate-400 bg-white min-h-[200px]">
        <table className="w-full text-[11px] border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-400">
              <th className="border-r border-slate-400 w-8 px-1">#</th>
              <th className="border-r border-slate-400 px-2 py-1 text-left">Lower Amount</th>
              <th className="border-r border-slate-400 px-2 py-1 text-left">Higher Amount</th>
              <th className="px-2 py-1 text-left">Precentage</th>
            </tr>
          </thead>
          <tbody>
            {form.rows.map((row, idx) => (
              <tr key={idx} className="h-[19px] border-b border-slate-200">
                <td className="border-r border-slate-200 text-center">{idx + 1}</td>
                <td className="border-r border-slate-200 px-1"><input type="text" className="w-full outline-none" /></td>
                <td className="border-r border-slate-200 px-1"><input type="text" className="w-full outline-none" /></td>
                <td className="px-1"><input type="text" className="w-full outline-none" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FormContainer>
  );
};

export default function TaxFormulaCalculation() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'tax-formula-calculation',
      title: 'Tax Formula Calculation',
      component: <TaxFormulaCalculationContent />,
      initialSize: { width: 700, height: 450 },
      initialPosition: { x: 120, y: 120 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { TaxFormulaCalculationContent };
