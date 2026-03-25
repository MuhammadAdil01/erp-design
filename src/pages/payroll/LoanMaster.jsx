import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  FieldRow, 
  ClassicInput, 
  ClassicSel, 
  FormContainer 
} from '@/components/ClassicERPUI';

const LoanMasterContent = () => {
  const [form, setForm] = useState({
    code: '',
    description: '',
    loanType: 'Personal',
    maxAmount: '',
    roi: '',
    minRepayment: '',
    maxInstallments: '',
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
        <FieldRow label="Code" required>
          <ClassicInput yellow value={form.code} onChange={handleChange('code')} />
        </FieldRow>
        <FieldRow label="Description" required>
          <ClassicInput yellow value={form.description} onChange={handleChange('description')} />
        </FieldRow>
        <FieldRow label="Loan Type">
          <ClassicSel 
            options={['Personal', 'Home', 'Car', 'Other']} 
            value={form.loanType} 
            onChange={handleChange('loanType')}
          />
        </FieldRow>
        <FieldRow label="Max Amount">
          <ClassicInput value={form.maxAmount} onChange={handleChange('maxAmount')} />
        </FieldRow>
        <FieldRow label="Rate Of Interest">
          <ClassicInput value={form.roi} onChange={handleChange('roi')} />
        </FieldRow>
        <FieldRow label="Min Repayment Amount">
          <ClassicInput value={form.minRepayment} onChange={handleChange('minRepayment')} />
        </FieldRow>
        <FieldRow label="Max. No. of Installments">
          <ClassicInput value={form.maxInstallments} onChange={handleChange('maxInstallments')} />
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

export default function LoanMaster() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'loan-master',
      title: 'Loan Master',
      component: <LoanMasterContent />,
      initialSize: { width: 450, height: 350 },
      initialPosition: { x: 150, y: 150 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { LoanMasterContent };
