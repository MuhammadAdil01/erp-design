import React, { useState, useEffect, useCallback } from 'react';
import { Camera, X } from 'lucide-react';
import { useWindowContext } from '@/context/WindowContext';
import { 
  ClassicTab, 
  FieldRow, 
  ClassicInput, 
  ClassicSel, 
  YellowBtn,
  cn 
} from '@/components/ClassicERPUI';

const ImageBox = ({ onRemove, onCapture }) => (
  <div className="relative w-[120px] h-[150px] border border-slate-400 bg-white flex items-center justify-center group shrink-0">
    <div className="absolute right-[-24px] top-1/2 -translate-y-1/2 flex flex-col gap-2">
      <button
        type="button"
        onClick={onRemove}
        className="p-1 border border-slate-400 bg-white hover:bg-slate-100 rounded-[1px]"
      >
        <X size={12} className="text-red-600 font-bold" />
      </button>
      <button
        type="button"
        onClick={onCapture}
        className="p-1 border border-slate-400 bg-white hover:bg-slate-100 rounded-[1px]"
      >
        <Camera size={12} className="text-slate-800" />
      </button>
    </div>
  </div>
);


const initialForm = {
  employeeCode: '',
  employeeName: '',
  fatherName: '',
  employeeCategory: '---',
  grade: '---',
  gender: 'Male',
  shift: '---',
  designation: '---',
  department: '---',
  sectionType: '---',
  dateOfBirth: '',
  nationality: '---',
  homePhone: '',
  mobilePhone1: '',
  mobilePhone2: '',
  email: '',
  dateOfJoining: '',
  originalDateOfBirth: '',
  insurancePolicyNo: '',
  pfNo: '',
  otherInfo: '',
  fuelLiters: '0.00',
  address1: '',
  address2: '',
  address3: '',
  city: '',
  pinCode: '',
  state: '---',
  staffNo: '',
  locationProjectSite: '---',
  esiNo: '',
};

const EmployeeCurrentInfoContent = () => {
  const [activeTab, setActiveTab] = useState('Employee Details');
  const [form, setForm] = useState(initialForm);

  // Generic field updater
  const handleChange = useCallback((field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }, []);

  const handleAdd = () => {
    console.log('Form submitted:', form);
    // TODO: wire up to your data layer
  };

  const handleCancel = () => {
    setForm(initialForm);
  };

  return (
    <div className="flex flex-col bg-[#f0f0f0] font-sans select-none overflow-hidden">
      <div className="p-4 flex-1 flex flex-col space-y-4 overflow-hidden border border-slate-400 m-2 shadow-sm bg-[#f8f8f8]">

        {/* Tab Row */}
        <div className="flex items-end gap-[1px] text-black border-b border-slate-400">
          <ClassicTab
            label="Employee Details"
            active={activeTab === 'Employee Details'}
            onClick={() => setActiveTab('Employee Details')}
          />
          <ClassicTab
            label="Leave Details"
            active={activeTab === 'Leave Details'}
            onClick={() => setActiveTab('Leave Details')}
          />
        </div>

        {/* ── Employee Details Tab ── */}
        {activeTab === 'Employee Details' && (
          <div className="flex-1 flex gap-10 overflow-auto pt-2 pr-10">

            {/* Left Column — Personal Details */}
            <div className="w-[380px] shrink-0">
              <span className="text-[11px] font-semibold text-slate-800 block mb-2 underline underline-offset-2">
                Personal Details
              </span>
              <div className="space-y-[1px]">
                <FieldRow label="Employee Code" required>
                  <ClassicInput yellow showLookup value={form.employeeCode} onChange={handleChange('employeeCode')} />
                </FieldRow>
                <FieldRow label="Employee Name">
                  <ClassicInput value={form.employeeName} onChange={handleChange('employeeName')} />
                </FieldRow>
                <FieldRow label="Father Name">
                  <ClassicInput value={form.fatherName} onChange={handleChange('fatherName')} />
                </FieldRow>
                <FieldRow label="Employee Category">
                  <ClassicSel
                    options={['---', 'Management', 'Staff', 'Workers']}
                    value={form.employeeCategory}
                    onChange={handleChange('employeeCategory')}
                  />
                </FieldRow>
                <FieldRow label="Grade">
                  <ClassicSel
                    options={['---', 'Grade 1', 'Grade 2', 'Grade 3']}
                    value={form.grade}
                    onChange={handleChange('grade')}
                  />
                </FieldRow>
                <FieldRow label="Gender">
                  <ClassicSel
                    options={['Male', 'Female', 'Other']}
                    value={form.gender}
                    onChange={handleChange('gender')}
                  />
                </FieldRow>
                <FieldRow label="Shift">
                  <ClassicSel
                    options={['---', 'General', 'Night', 'Morning']}
                    value={form.shift}
                    onChange={handleChange('shift')}
                  />
                </FieldRow>
                <FieldRow label="Designation">
                  <ClassicSel
                    options={['---', 'Manager', 'Engineer', 'Staff']}
                    value={form.designation}
                    onChange={handleChange('designation')}
                  />
                </FieldRow>
                <FieldRow label="Department">
                  <ClassicSel
                    options={['---', 'HR', 'Finance', 'IT', 'Production']}
                    value={form.department}
                    onChange={handleChange('department')}
                  />
                </FieldRow>
                <FieldRow label="Section Type">
                  <ClassicSel options={['---']} value={form.sectionType} onChange={handleChange('sectionType')} />
                </FieldRow>
                <FieldRow label="Date of Birth">
                  <ClassicInput value={form.dateOfBirth} onChange={handleChange('dateOfBirth')} />
                </FieldRow>
                <FieldRow label="Nationality">
                  <ClassicSel
                    options={['---', 'Pakistani', 'Other']}
                    value={form.nationality}
                    onChange={handleChange('nationality')}
                  />
                </FieldRow>
                <FieldRow label="Home Phone">
                  <ClassicInput value={form.homePhone} onChange={handleChange('homePhone')} />
                </FieldRow>
                <FieldRow label="Mobile Phone1">
                  <ClassicInput value={form.mobilePhone1} onChange={handleChange('mobilePhone1')} />
                </FieldRow>
                <FieldRow label="Mobile Phone2">
                  <ClassicInput value={form.mobilePhone2} onChange={handleChange('mobilePhone2')} />
                </FieldRow>
                <FieldRow label="E-Mail">
                  <ClassicInput value={form.email} onChange={handleChange('email')} />
                </FieldRow>
                <FieldRow label="Date of Joining">
                  <ClassicInput value={form.dateOfJoining} onChange={handleChange('dateOfJoining')} />
                </FieldRow>
                <FieldRow label="Original Date of birth">
                  <ClassicInput value={form.originalDateOfBirth} onChange={handleChange('originalDateOfBirth')} />
                </FieldRow>
                <FieldRow label="Insurance Policy No">
                  <ClassicInput value={form.insurancePolicyNo} onChange={handleChange('insurancePolicyNo')} />
                </FieldRow>
                <FieldRow label="PF No">
                  <ClassicInput value={form.pfNo} onChange={handleChange('pfNo')} />
                </FieldRow>
                <FieldRow label="Other Info">
                  <ClassicInput value={form.otherInfo} onChange={handleChange('otherInfo')} />
                </FieldRow>
                <FieldRow label="Fuel Liters">
                  <ClassicInput value={form.fuelLiters} onChange={handleChange('fuelLiters')} />
                </FieldRow>
                <FieldRow label="Address1">
                  <ClassicInput value={form.address1} onChange={handleChange('address1')} />
                </FieldRow>
                <FieldRow label="Address2">
                  <ClassicInput value={form.address2} onChange={handleChange('address2')} />
                </FieldRow>
                <FieldRow label="Address3">
                  <ClassicInput value={form.address3} onChange={handleChange('address3')} />
                </FieldRow>
                <FieldRow label="City">
                  <ClassicInput value={form.city} onChange={handleChange('city')} />
                </FieldRow>
                <FieldRow label="Pin Code">
                  <ClassicInput value={form.pinCode} onChange={handleChange('pinCode')} />
                </FieldRow>
                <FieldRow label="State">
                  <ClassicSel
                    options={['---', 'Punjab', 'Sindh', 'KPK', 'Balochistan']}
                    value={form.state}
                    onChange={handleChange('state')}
                  />
                </FieldRow>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col">
              <div className="flex gap-[60px] mb-10">
                <ImageBox onRemove={() => {}} onCapture={() => {}} />
                <ImageBox onRemove={() => {}} onCapture={() => {}} />
              </div>

              <div className="space-y-4 max-w-[400px]">
                <div className="space-y-[1px]">
                  <FieldRow label="Staff No.">
                    <ClassicInput value={form.staffNo} onChange={handleChange('staffNo')} />
                  </FieldRow>
                  <FieldRow label="Location / Project Site">
                    <ClassicSel options={['---']} value={form.locationProjectSite} onChange={handleChange('locationProjectSite')} />
                  </FieldRow>
                  <FieldRow label="ESI No">
                    <ClassicInput value={form.esiNo} onChange={handleChange('esiNo')} />
                  </FieldRow>
                </div>

                <div className="pt-10 flex flex-col gap-1 items-end pr-2">
                  <span className="text-[11px] text-slate-800 font-semibold mb-2 self-start ml-[140px]">
                    Administration
                  </span>
                  <YellowBtn className="w-[160px]" onClick={() => {}}>Qual. , Skills &amp; Training</YellowBtn>
                  <YellowBtn className="w-[160px]" onClick={() => {}}>Previous Employment</YellowBtn>
                  <YellowBtn className="w-[160px]" onClick={() => {}}>Medical Background</YellowBtn>
                  <YellowBtn className="w-[160px]" onClick={() => {}}>Family Details</YellowBtn>
                  <YellowBtn className="w-[160px]" onClick={() => {}}>ID Details</YellowBtn>
                  <YellowBtn className="w-[160px]" onClick={() => {}}>Language Details</YellowBtn>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Leave Details Tab ── */}
        {activeTab === 'Leave Details' && (
          <div className="flex-1 flex items-center justify-center h-[400px]">
            <span className="text-[11px] text-slate-400 italic">
              Leave Details content will be implemented here.
            </span>
          </div>
        )}

        {/* Footer Buttons */}
        <div className="flex gap-2 pt-2 shrink-0 border-t border-slate-300">
          <YellowBtn className="min-w-[80px]" onClick={handleAdd}>Add</YellowBtn>
          <YellowBtn className="min-w-[80px]" onClick={handleCancel}>Cancel</YellowBtn>
        </div>
      </div>
    </div>
  );
};


export default function EmployeeCurrentInfo() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;

    openWindow({
      id: 'employee-current-info',
      title: 'Employee Current Information',
      component: <EmployeeCurrentInfoContent />,
      initialSize: { width: 1000, height: 800 },
      initialPosition: { x: 120, y: 50 },
    });

    isOpened.current = true;
  }, [openWindow]);

  return null;
}

// Also export the content component for inline rendering
export { EmployeeCurrentInfoContent };