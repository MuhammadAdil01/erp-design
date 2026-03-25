import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  FieldRow, 
  ClassicInput, 
  ClassicSel, 
  FormContainer 
} from '@/components/ClassicERPUI';

const LeaveMasterContent = () => {
  const [form, setForm] = useState({
    code: '',
    description: '',
    totalLeaves: '',
    totalLeavesTrainer: '',
    leaveType: 'Others',
    applicableProbation: false,
    encashable: false,
    payableLeave: false,
    minBalanceEncash: '',
    maxLeaveEncash: '',
    maxMonthlyAppli: '',
    minContinuous: '',
    maxContinuous: '',
    minContiProb: '',
    maxContiProb: '',
    effectiveFrom: '',
    carryForward: false,
    close: false,
    maxLeaveCarryFwd: '',
    remarks: ''
  });

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <FormContainer 
      footerButtons={[
        { label: 'Find', onClick: () => console.log('Find', form) },
        { label: 'Cancel', onClick: () => console.log('Cancel') }
      ]}
    >
      <div className="flex gap-8">
        {/* Left Column */}
        <div className="flex-1 space-y-[1px]">
          <FieldRow label="Leave Code" required>
            <ClassicInput yellow value={form.code} onChange={handleChange('code')} />
          </FieldRow>
          <FieldRow label="Description">
            <ClassicInput yellow value={form.description} onChange={handleChange('description')} />
          </FieldRow>
          <FieldRow label="Total Leaves in Year" required>
            <ClassicInput yellow value={form.totalLeaves} onChange={handleChange('totalLeaves')} />
          </FieldRow>
          <FieldRow label="Total Leaves in Year for Trainer">
            <ClassicInput value={form.totalLeavesTrainer} onChange={handleChange('totalLeavesTrainer')} />
          </FieldRow>
          <FieldRow label="Leave Type">
            <ClassicSel 
              options={['Others', 'Sick', 'Casual', 'Earned']} 
              value={form.leaveType} 
              onChange={handleChange('leaveType')}
            />
          </FieldRow>
          
          <div className="pl-[140px] flex flex-col gap-1 py-1">
             <label className="flex items-center gap-2 text-[11px] text-slate-800">
               <input type="checkbox" checked={form.applicableProbation} onChange={handleChange('applicableProbation')} />
               Applicable During Probation
             </label>
             <label className="flex items-center gap-2 text-[11px] text-slate-800">
               <input type="checkbox" checked={form.encashable} onChange={handleChange('encashable')} />
               Encashable
             </label>
          </div>

          <FieldRow label="Min Balance for Encash">
            <ClassicInput value={form.minBalanceEncash} onChange={handleChange('minBalanceEncash')} />
          </FieldRow>
          <FieldRow label="Max Leave to Encash">
            <ClassicInput value={form.maxLeaveEncash} onChange={handleChange('maxLeaveEncash')} />
          </FieldRow>
          
          <div className="pl-[140px] py-1">
             <label className="flex items-center gap-2 text-[11px] text-slate-800">
               <input type="checkbox" checked={form.payableLeave} onChange={handleChange('payableLeave')} />
               Payable Leave
             </label>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-[1px]">
          <FieldRow label="Max Monthly Appli.">
            <ClassicInput value={form.maxMonthlyAppli} onChange={handleChange('maxMonthlyAppli')} />
          </FieldRow>
          <FieldRow label="Min Continuous">
            <ClassicInput value={form.minContinuous} onChange={handleChange('minContinuous')} />
          </FieldRow>
          <FieldRow label="Max Continuous">
            <ClassicInput value={form.maxContinuous} onChange={handleChange('maxContinuous')} />
          </FieldRow>
          <FieldRow label="Min Conti. Dur. Prob.">
            <ClassicInput value={form.minContiProb} onChange={handleChange('minContiProb')} />
          </FieldRow>
          <FieldRow label="Max Conti. Dur. Prob.">
            <ClassicInput value={form.maxContiProb} onChange={handleChange('maxContiProb')} />
          </FieldRow>
          <FieldRow label="Effective From">
            <ClassicInput value={form.effectiveFrom} onChange={handleChange('effectiveFrom')} />
          </FieldRow>
          
          <div className="pl-[140px] flex flex-col gap-1 py-1">
             <label className="flex items-center gap-2 text-[11px] text-slate-800">
               <input type="checkbox" checked={form.carryForward} onChange={handleChange('carryForward')} />
               Carry Forward to Next Year
             </label>
          </div>

          <FieldRow label="Max.Leave Carry Fwd.">
            <ClassicInput value={form.maxLeaveCarryFwd} onChange={handleChange('maxLeaveCarryFwd')} />
          </FieldRow>
          
          <div className="pl-[140px] py-1">
             <label className="flex items-center gap-2 text-[11px] text-slate-800">
               <input type="checkbox" checked={form.close} onChange={handleChange('close')} />
               Close
             </label>
          </div>
        </div>
      </div>

      {/* Leave Period Table */}
      <div className="mt-4 border border-slate-400 bg-white">
        <table className="w-full text-[11px] border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-slate-400">
              <th className="border-r border-slate-400 w-8 px-1">#</th>
              <th className="border-r border-slate-400 px-2 text-left">From Date</th>
              <th className="border-r border-slate-400 px-2 text-left">To Date</th>
              <th className="px-2 text-left">Lock</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-[19px] border-b border-slate-200">
              <td className="border-r border-slate-200 text-center">1</td>
              <td className="border-r border-slate-200 px-1"></td>
              <td className="border-r border-slate-200 px-1"></td>
              <td className="px-1"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4">
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

export default function LeaveMaster() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'leave-master',
      title: 'Leave Master',
      component: <LeaveMasterContent />,
      initialSize: { width: 850, height: 600 },
      initialPosition: { x: 50, y: 50 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { LeaveMasterContent };
