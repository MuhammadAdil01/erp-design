import React, { useState } from 'react';
import { cn } from "@/lib/utils";

const ClassicYellowButton = ({ children, className, onClick }) => (
  <button 
    onClick={onClick}
    className={cn(
      "px-4 py-1 bg-gradient-to-b from-[#fcf096] to-[#f4d142] border border-slate-500 text-[11px] text-slate-800 hover:brightness-95 active:brightness-90 transition-all shadow-sm rounded-[2px]",
      className
    )}
  >
    {children}
  </button>
);

const SimpleInput = ({ type = "text", value, onChange, className }) => (
  <input
    type={type}
    defaultValue={value}
    onChange={onChange}
    className={cn(
      "bg-white border border-slate-400 px-1 py-0.5 text-[11px] outline-none focus:border-blue-500 transition-colors h-[20px]",
      className
    )}
  />
);

const SimpleSelect = ({ value, onChange, options = [], className }) => (
  <select
    defaultValue={value}
    onChange={onChange}
    className={cn(
      "bg-[#fff9c4] border border-slate-400 px-1 py-0.5 text-[11px] outline-none focus:bg-white h-[20px]",
      className
    )}
  >
    {options.map((opt, i) => (
      <option key={i} value={opt}>{opt}</option>
    ))}
  </select>
);

export default function ChooseCompany() {
  const [findBy, setFindBy] = useState('Company Name');

  // Sample data to make it look realistic
  const companies = [
    { name: 'Demo Company', dbName: 'SBODEMOUS', loc: 'US', version: '1000210' },
    { name: 'Silicon Computers', dbName: 'SILICONDB', loc: 'PK', version: '1000210' },
  ];

  return (
    <div className="flex bg-[#f0f0f0] min-h-full font-sans select-none items-start pt-10 justify-center">
      {/* Container simulating the choose company window */}
      <div className="w-[740px] bg-[#f0f0f0] flex flex-col p-2">
        
        {/* Top Row: User ID, Password, Change User button */}
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-800 w-16">User ID</span>
            <SimpleInput className="w-40" />
            <span className="text-[11px] text-slate-800 w-16 ml-4">Password</span>
            <SimpleInput type="password" className="w-40" />
          </div>
          <ClassicYellowButton className="w-[120px]">
            <span className="underline decoration-slate-800 underline-offset-2">C</span>hange User
          </ClassicYellowButton>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-1 mb-4">
          <input type="checkbox" className="w-3 h-3 border-slate-400" />
          <span className="text-[11px] text-slate-500">Log on with Current Domain User</span>
        </div>

        {/* Current Server */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] text-slate-800 w-24">Current Server</span>
          <SimpleSelect 
            options={['HANADB', 'MSSQL']} 
            className="w-40 bg-[#fff9c4]"
          />
          <SimpleSelect 
            options={['NDB@192.168.1.1', 'NDB@192.168.1.2']} 
            className="w-48"
          />
        </div>

        {/* Database */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[11px] text-slate-800 w-24">Database</span>
          <SimpleInput className="w-40" />
        </div>

        {/* Companies Grid Area */}
        <div className="mb-1">
          <span className="text-[11px] text-slate-800">Companies on Current Server</span>
        </div>

        <div className="flex gap-2">
          {/* Table */}
          <div className="flex-1 bg-white border border-slate-400 h-[240px] overflow-auto relative">
            <table className="w-full text-left border-collapse">
              <thead className="sticky top-0 bg-[#f0f0f0] z-10 border-b border-slate-400">
                <tr>
                  <th className="font-normal text-[11px] border-r border-slate-300 py-[2px] px-2 w-[35%] flex items-center justify-between">
                    Company Name
                    <span className="inline-block w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-black mb-[2px]"></span>
                  </th>
                  <th className="font-normal text-[11px] border-r border-slate-300 py-[2px] px-2 w-[30%]">Database Name</th>
                  <th className="font-normal text-[11px] border-r border-slate-300 py-[2px] px-2 w-[20%]">Localization</th>
                  <th className="font-normal text-[11px] border-slate-300 py-[2px] px-2 w-[15%]">Version</th>
                </tr>
              </thead>
              <tbody>
                {companies.map((co, idx) => (
                  <tr key={idx} className="hover:bg-blue-100 cursor-pointer border-b-[0.5px] border-slate-200">
                    <td className="text-[11px] py-[2px] px-2 border-r border-slate-200">{co.name}</td>
                    <td className="text-[11px] py-[2px] px-2 border-r border-slate-200">{co.dbName}</td>
                    <td className="text-[11px] py-[2px] px-2 border-r border-slate-200">{co.loc}</td>
                    <td className="text-[11px] py-[2px] px-2">{co.version}</td>
                  </tr>
                ))}
                {/* Empty rows to fill space */}
                {Array.from({ length: 10 }).map((_, idx) => (
                  <tr key={`empty-${idx}`}>
                    <td className="text-[11px] py-[2px] px-2 border-r border-slate-200 h-[19px]"></td>
                    <td className="text-[11px] py-[2px] px-2 border-r border-slate-200 h-[19px]"></td>
                    <td className="text-[11px] py-[2px] px-2 border-r border-slate-200 h-[19px]"></td>
                    <td className="text-[11px] py-[2px] px-2 h-[19px]"></td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Corner arrow icon */}
            <div className="absolute top-0 right-0 w-[15px] h-[19px] bg-[#f0f0f0] border-l border-b border-slate-400 flex items-center justify-center cursor-pointer hover:bg-[#e0e0e0]">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7L7 1M7 1H2.5M7 1V5.5" stroke="#666" strokeWidth="1"/>
              </svg>
            </div>
            {/* Scrollbar placeholder */}
            <div className="absolute right-0 top-[19px] bottom-0 w-[15px] bg-[#f0f0f0] border-l border-slate-400 flex flex-col justify-between">
                <div className="h-[15px] bg-[#e0e0e0] border-b border-slate-400 flex items-center justify-center">
                    <div className="border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-black"></div>
                </div>
                <div className="h-[15px] bg-[#e0e0e0] border-t border-slate-400 flex items-center justify-center">
                    <div className="border-l-[3px] border-r-[3px] border-t-[4px] border-transparent border-t-black"></div>
                </div>
            </div>
          </div>

          {/* Right side controls */}
          <div className="w-[120px] flex flex-col">
            <div className="flex flex-col gap-1 mb-6">
              <ClassicYellowButton className="flex justify-between items-center w-full px-2">
                <span>New</span>
                <div className="border-l-[3px] border-r-[3px] border-t-[4px] border-transparent border-t-black"></div>
              </ClassicYellowButton>
              <ClassicYellowButton className="w-full">
                <span className="underline decoration-slate-800 underline-offset-2">R</span>efresh
              </ClassicYellowButton>
            </div>

            <div className="mt-8">
              <span className="text-[11px] text-slate-800 mb-1 block">Find By:</span>
              <div className="flex flex-col gap-1 mb-2">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input 
                    type="radio" 
                    name="findBy" 
                    checked={findBy === 'Company Name'} 
                    onChange={() => setFindBy('Company Name')}
                    className="w-3 h-3"
                  />
                  <span className="text-[11px] text-slate-800">Company Name</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input 
                    type="radio" 
                    name="findBy" 
                    checked={findBy === 'Database Name'} 
                    onChange={() => setFindBy('Database Name')}
                    className="w-3 h-3"
                  />
                  <span className="text-[11px] text-slate-800">Database Name</span>
                </label>
              </div>
              <SimpleInput className="w-full" />
            </div>
          </div>
        </div>

        {/* Bottom buttons */}
        <div className="flex gap-2 mt-4 w-[280px]">
          <ClassicYellowButton className="flex-1">OK</ClassicYellowButton>
          <ClassicYellowButton className="flex-1">Cancel</ClassicYellowButton>
        </div>

      </div>
    </div>
  );
}
