import React, { useState, useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  ClassicInput, 
  FormContainer,
  YellowBtn
} from '@/components/ClassicERPUI';

const RecurringTransactionsContent = () => {
  const [form, setForm] = useState({
    missingDataResponse: 'skip'
  });

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <FormContainer 
      footerButtons={[
        { label: 'Execute', onClick: () => console.log('Execute'), disabled: true },
        { label: 'Cancel', onClick: () => console.log('Cancel') },
        { label: 'Remove', onClick: () => console.log('Remove'), disabled: true }
      ]}
      rightFooter={
        <div className="flex gap-4 items-center mr-2">
          <div className="flex items-center gap-1">
            <span className="text-[11px] text-slate-800">Documents</span>
            <button className="w-6 h-5 bg-yellow-400 border border-slate-400 flex items-center justify-center gap-[1px]">
               <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
               <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
               <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
            </button>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[11px] text-slate-800">Templates</span>
            <button className="w-6 h-5 bg-yellow-400 border border-slate-400 flex items-center justify-center gap-[1px]">
               <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
               <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
               <div className="w-[2px] h-[2px] bg-slate-800 rounded-full" />
            </button>
          </div>
        </div>
      }
    >
      <div className="flex flex-col h-full gap-2">
        {/* Top Text area */}
        <div className="space-y-[2px] mb-2">
          <p className="text-[11px] text-slate-800 font-medium">The transactions below are scheduled for today.</p>
          <p className="text-[11px] text-slate-800 font-medium">Select the rows you want to execute.</p>
        </div>

        {/* Grid Space */}
        <div className="flex-1 border border-slate-400 bg-white overflow-auto max-h-[450px]">
          <table className="w-full text-[10px] border-collapse min-w-[1200px]">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-400 sticky top-0 z-10">
                <th className="border-r border-slate-400 w-8 px-1 py-1 text-center">#</th>
                <th className="border-r border-slate-400 w-6 px-1 py-1 text-center"></th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[150px]">Template</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[150px]">Transact. Type</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">Instance</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[120px]">Next Execution</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[150px]">Recurrence Period</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[120px]">Recurrence Date</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[100px]">BP</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[150px]">BP Name</th>
                <th className="border-r border-slate-400 px-2 py-1 text-left min-w-[120px]">Doc Total (LC)</th>
                <th className="px-2 py-1 text-left w-6">↗</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 20 }).map((_, i) => (
                <tr key={i} className="h-[20px] border-b border-slate-200">
                  <td className="border-r border-slate-200 text-center text-slate-400">{i + 1}</td>
                  <td className="border-r border-slate-200 px-1 text-center bg-slate-100/50">
                     <div className="w-3 h-3 border border-slate-400 bg-white inline-block"></div>
                  </td>
                  <td className="border-r border-slate-200 px-1"></td>
                  <td className="border-r border-slate-200 px-1"></td>
                  <td className="border-r border-slate-200 px-1"></td>
                  <td className="border-r border-slate-200 px-1 bg-white"></td>
                  <td className="border-r border-slate-200 px-1"></td>
                  <td className="border-r border-slate-200 px-1"></td>
                  <td className="border-r border-slate-200 px-1"></td>
                  <td className="border-r border-slate-200 px-1"></td>
                  <td className="border-r border-slate-200 px-1"></td>
                  <td className="px-1"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Below Grid Section */}
        <div className="flex justify-between items-start mt-2">
          {/* Left Side: Messages and Alerts */}
          <div className="w-[300px] border border-slate-400 p-2 mb-2 bg-white flex flex-col gap-2">
             <span className="text-[11px] font-bold text-slate-800">Messages and Alerts</span>
             <span className="text-[11px] text-slate-800">Specify the system's response to missing data:</span>
             <div className="flex flex-col gap-1 ml-1">
               <label className="flex items-center gap-2 cursor-pointer">
                 <input 
                   type="radio" 
                   name="missingData" 
                   value="continue" 
                   checked={form.missingDataResponse === 'continue'}
                   onChange={handleChange('missingDataResponse')}
                   className="mt-[1px]"
                 />
                 <span className="text-[11px] text-slate-800">Continue</span>
               </label>
               <label className="flex items-center gap-2 cursor-pointer">
                 <input 
                   type="radio" 
                   name="missingData" 
                   value="skip" 
                   checked={form.missingDataResponse === 'skip'}
                   onChange={handleChange('missingDataResponse')}
                   className="mt-[1px]"
                 />
                 <span className="text-[11px] text-slate-800">Skip to Next Transaction</span>
               </label>
               <label className="flex items-center gap-2 cursor-pointer">
                 <input 
                   type="radio" 
                   name="missingData" 
                   value="request" 
                   checked={form.missingDataResponse === 'request'}
                   onChange={handleChange('missingDataResponse')}
                   className="mt-[1px]"
                 />
                 <span className="text-[11px] text-slate-800">Request User Confirmation</span>
               </label>
             </div>
          </div>

          {/* Right Side: Totals */}
          <div className="w-[350px] space-y-1 pt-2 mr-2">
             <div className="flex items-center gap-2 justify-end">
               <span className="text-[11px] text-slate-800">Transaction Total</span>
               <ClassicInput disabled className="bg-slate-100 w-32" />
             </div>
             <div className="flex items-center gap-2 justify-end">
               <span className="text-[11px] text-slate-800">Number of Transactions to Be Executed</span>
               <ClassicInput disabled className="bg-slate-100 w-32" />
             </div>
          </div>
        </div>

      </div>
    </FormContainer>
  );
};

export default function RecurringTransactions() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'recurring-transactions',
      title: 'Confirmation of Recurring Transactions',
      component: <RecurringTransactionsContent />,
      initialSize: { width: 1000, height: 750 },
      initialPosition: { x: 50, y: 20 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { RecurringTransactionsContent };
