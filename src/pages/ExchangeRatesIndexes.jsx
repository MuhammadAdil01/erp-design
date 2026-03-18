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

const ClassicTab = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "px-6 py-1 text-[11px] font-semibold border-t border-x border-slate-400 rounded-t-sm transition-colors",
      active ? "bg-[#f0f0f0] -mb-[1px] z-10 border-b-transparent" : "bg-[#e0e0e0] hover:bg-[#d8d8d8]"
    )}
  >
    {label}
  </button>
);

export default function ExchangeRatesIndexes() {
  const [activeTab, setActiveTab] = useState('Exchange Rates');
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [selectedYear, setSelectedYear] = useState('2026');

  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const currencies = ['AUD','EUR','GBP','JPY','NZD','SAR','USD','CHF','CAD','CNY'];

  return (
    <div className="flex flex-col bg-[#f0f0f0] min-h-full font-sans select-none">
      {/* Header */}
      <div className="h-[25px] flex items-center px-4 bg-gradient-to-b from-[#e6e6e6] to-[#cccccc] border-b border-slate-400 shadow-sm">
        <span className="text-[12px] font-bold text-slate-800">Exchange Rates and Indexes</span>
      </div>
      {/* Yellow Divider */}
      <div className="h-[3px] w-full bg-[#f5a623]"></div>

      <div className="p-4 flex-1 flex flex-col">
        {/* Tabs */}
        <div className="flex items-end gap-1 border-b border-slate-400">
          <ClassicTab label="Exchange Rates" active={activeTab === 'Exchange Rates'} onClick={() => setActiveTab('Exchange Rates')} />
          <ClassicTab label="Indexes" active={activeTab === 'Indexes'} onClick={() => setActiveTab('Indexes')} />
        </div>

        {/* Tab Content */}
        <div className="bg-[#f0f0f0] border-x border-b border-slate-400 flex-1 flex flex-col">

          {/* ===== EXCHANGE RATES TAB ===== */}
          {activeTab === 'Exchange Rates' && (
            <div className="flex flex-col flex-1 p-3 animate-in fade-in duration-200">
              {/* Month / Year selectors */}
              <div className="flex items-center justify-center gap-2 mb-3">
                <select
                  value={selectedMonth}
                  onChange={e => setSelectedMonth(e.target.value)}
                  className="bg-[#fff9c4] border border-slate-400 px-2 py-0.5 text-[11px] outline-none h-[22px] w-[160px] cursor-pointer"
                >
                  {months.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <select
                  value={selectedYear}
                  onChange={e => setSelectedYear(e.target.value)}
                  className="bg-[#fff9c4] border border-slate-400 px-2 py-0.5 text-[11px] outline-none h-[22px] w-[80px] cursor-pointer"
                >
                  {['2024','2025','2026','2027'].map(y => <option key={y}>{y}</option>)}
                </select>
              </div>

              {/* Table */}
              <div className="flex-1 bg-white border border-slate-400 overflow-auto relative">
                <table className="w-full text-left border-collapse table-fixed">
                  <thead className="sticky top-0 bg-[#f0f0f0] z-10">
                    <tr className="border-b border-slate-400">
                      <th className="font-normal text-[11px] border-r border-slate-300 py-[3px] px-2 w-[60px]">{selectedMonth}</th>
                      {currencies.map(c => (
                        <th key={c} className="font-normal text-[11px] border-r border-slate-300 py-[3px] px-2 w-[90px]">{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                      <tr key={day} className="border-b-[0.5px] border-slate-200 hover:bg-blue-50">
                        <td className="text-[11px] py-[2px] px-2 border-r border-slate-200 font-semibold text-slate-700 bg-[#f8f8f8]">{day}</td>
                        {currencies.map(c => (
                          <td key={c} className="text-[11px] py-[2px] px-2 border-r border-slate-200">
                            <input 
                              type="text" 
                              className="w-full bg-transparent outline-none text-[11px] text-right"
                              defaultValue=""
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Corner icon */}
                <div className="absolute top-0 right-0 w-[15px] h-[20px] bg-[#f0f0f0] border-l border-b border-slate-400 flex items-center justify-center cursor-pointer hover:bg-[#e0e0e0]">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 7L7 1M7 1H2.5M7 1V5.5" stroke="#666" strokeWidth="1"/></svg>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-2">
                  <ClassicYellowButton className="w-[80px]">OK</ClassicYellowButton>
                  <ClassicYellowButton className="w-[80px]">Cancel</ClassicYellowButton>
                </div>
                <div className="flex gap-2">
                  <ClassicYellowButton>Set Rate for Selection Criteria</ClassicYellowButton>
                  <ClassicYellowButton>Auto. Import</ClassicYellowButton>
                  <ClassicYellowButton>Auto. Export</ClassicYellowButton>
                </div>
              </div>
            </div>
          )}

          {/* ===== INDEXES TAB ===== */}
          {activeTab === 'Indexes' && (
            <div className="flex flex-col flex-1 p-3 animate-in fade-in duration-200">
              {/* Year selector */}
              <div className="flex items-center justify-end gap-2 mb-3">
                <select
                  value={selectedYear}
                  onChange={e => setSelectedYear(e.target.value)}
                  className="bg-[#fff9c4] border border-slate-400 px-2 py-0.5 text-[11px] outline-none h-[22px] w-[80px] cursor-pointer"
                >
                  {['2024','2025','2026','2027'].map(y => <option key={y}>{y}</option>)}
                </select>
              </div>

              {/* Table */}
              <div className="flex-1 bg-white border border-slate-400 overflow-auto relative">
                <table className="w-full text-left border-collapse">
                  <thead className="sticky top-0 bg-[#f0f0f0] z-10">
                    <tr className="border-b border-slate-400">
                      <th className="font-normal text-[11px] border-r border-slate-300 py-[3px] px-2 w-[160px]">{selectedYear}</th>
                      <th className="font-normal text-[11px] border-r border-slate-300 py-[3px] px-2">CP</th>
                    </tr>
                  </thead>
                  <tbody>
                    {months.map((month, idx) => (
                      <tr key={month} className="border-b-[0.5px] border-slate-200 hover:bg-blue-50">
                        <td className="text-[11px] py-[3px] px-2 border-r border-slate-200 font-semibold text-slate-700 bg-[#f8f8f8]">{month}</td>
                        <td className="text-[11px] py-[3px] px-2 border-r border-slate-200">
                          <input 
                            type="text" 
                            className="w-full bg-transparent outline-none text-[11px] text-right"
                            defaultValue=""
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Corner icon */}
                <div className="absolute top-0 right-0 w-[15px] h-[20px] bg-[#f0f0f0] border-l border-b border-slate-400 flex items-center justify-center cursor-pointer hover:bg-[#e0e0e0]">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 7L7 1M7 1H2.5M7 1V5.5" stroke="#666" strokeWidth="1"/></svg>
                </div>
              </div>

              {/* Bottom Buttons */}
              <div className="flex items-center justify-between mt-3">
                <div className="flex gap-2">
                  <ClassicYellowButton className="w-[80px]">OK</ClassicYellowButton>
                  <ClassicYellowButton className="w-[80px]">Cancel</ClassicYellowButton>
                </div>
                <div className="flex gap-2">
                  <ClassicYellowButton>Auto. Export</ClassicYellowButton>
                  <ClassicYellowButton>Auto. Import</ClassicYellowButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
