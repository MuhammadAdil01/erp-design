import React, { useState } from 'react';
import { cn } from "@/lib/utils";

const LinkArrow = () => (
  <button className="w-3 h-3 bg-[#fcf096] border border-slate-500 flex items-center justify-center rounded-[1px] hover:bg-[#f4d142] transition-colors shrink-0">
    <div className="w-0 h-0 border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent border-l-[4px] border-l-slate-700 ml-[1px]"></div>
  </button>
);

const YellowBtn = ({ children, className, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      "px-4 py-[2px] text-[11px] bg-gradient-to-b from-[#fcf096] to-[#f4d142] border border-slate-500 rounded-[3px] text-slate-800 hover:shadow-inner active:from-[#f4d142] active:to-[#fcf096] transition-all",
      className
    )}
  >
    {children}
  </button>
);

const PostingPeriods = () => {
  const periods = [
    { id: 1, code: '2015-01', name: '2015-2016-01', status: 'Closing Period', postFrom: '01.07.15', postTo: '31.07.15', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 2, code: '2015-02', name: '2015-2016-02', status: 'Closing Period', postFrom: '01.08.15', postTo: '31.08.15', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 3, code: '2015-03', name: '2015-2016-03', status: 'Closing Period', postFrom: '01.09.15', postTo: '30.09.15', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 4, code: '2015-04', name: '2015-2016-04', status: 'Closing Period', postFrom: '01.10.15', postTo: '31.10.15', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 5, code: '2015-05', name: '2015-2016-05', status: 'Closing Period', postFrom: '01.11.15', postTo: '30.11.15', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 6, code: '2015-06', name: '2015-2016-06', status: 'Closing Period', postFrom: '01.12.15', postTo: '31.12.15', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 7, code: '2016-07', name: '2015-2016-07', status: 'Closing Period', postFrom: '01.01.16', postTo: '31.01.16', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 8, code: '2016-08', name: '2015-2016-08', status: 'Closing Period', postFrom: '01.02.16', postTo: '29.02.16', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 9, code: '2016-09', name: '2015-2016-09', status: 'Closing Period', postFrom: '01.03.16', postTo: '31.03.16', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 10, code: '2016-10', name: '2015-2016-10', status: 'Closing Period', postFrom: '01.04.16', postTo: '30.04.16', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 11, code: '2016-11', name: '2015-2016-11', status: 'Closing Period', postFrom: '01.05.16', postTo: '31.05.16', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 12, code: '2016-12', name: '2015-2016-12', status: 'Closing Period', postFrom: '01.06.16', postTo: '30.06.16', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 13, code: '2017-01', name: '2016-2017-01', status: 'Closing Period', postFrom: '01.07.16', postTo: '31.07.16', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 14, code: '2017-02', name: '2016-2017-02', status: 'Closing Period', postFrom: '01.08.16', postTo: '31.08.16', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 15, code: '2017-03', name: '2016-2017-03', status: 'Closing Period', postFrom: '01.09.16', postTo: '30.09.16', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 16, code: '2017-04', name: '2016-2017-04', status: 'Closing Period', postFrom: '01.10.16', postTo: '31.10.16', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 17, code: '2017-05', name: '2016-2017-05', status: 'Closing Period', postFrom: '01.11.16', postTo: '30.11.16', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 18, code: '2017-06', name: '2016-2017-06', status: 'Closing Period', postFrom: '01.12.16', postTo: '31.12.16', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 19, code: '2017-07', name: '2016-2017-07', status: 'Closing Period', postFrom: '01.01.17', postTo: '31.01.17', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 20, code: '2017-08', name: '2016-2017-08', status: 'Closing Period', postFrom: '01.02.17', postTo: '28.02.17', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 21, code: '2017-09', name: '2016-2017-09', status: 'Closing Period', postFrom: '01.03.17', postTo: '31.03.17', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 22, code: '2017-10', name: '2016-2017-10', status: 'Closing Period', postFrom: '01.04.17', postTo: '30.04.17', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 23, code: '2017-11', name: '2016-2017-11', status: 'Closing Period', postFrom: '01.05.17', postTo: '31.05.17', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 24, code: '2017-12', name: '2016-2017-12', status: 'Closing Period', postFrom: '01.06.17', postTo: '30.06.17', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 25, code: '2018-01', name: '2017-2018-01', status: 'Closing Period', postFrom: '01.07.17', postTo: '31.07.17', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 26, code: '2018-02', name: '2017-2018-02', status: 'Closing Period', postFrom: '01.08.17', postTo: '31.08.17', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 27, code: '2018-03', name: '2017-2018-03', status: 'Closing Period', postFrom: '01.09.17', postTo: '30.09.17', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 28, code: '2018-04', name: '2017-2018-04', status: 'Closing Period', postFrom: '01.10.17', postTo: '31.10.17', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 29, code: '2018-05', name: '2017-2018-05', status: 'Closing Period', postFrom: '01.11.17', postTo: '30.11.17', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
    { id: 30, code: '2018-06', name: '2017-2018-06', status: 'Closing Period', postFrom: '01.12.17', postTo: '31.12.17', dueFrom: '01.07.15', dueTo: '30.06.45', docFrom: '01.07.15', docTo: '30.06.45' },
  ];

  return (
    <div className="flex flex-col bg-[#f0f0f0] min-h-full font-sans select-none overflow-hidden">
      {/* Header */}
      <div className="h-[25px] flex items-center px-4 bg-gradient-to-b from-[#e6e6e6] to-[#cccccc] border-b border-slate-400 shadow-sm shrink-0">
        <span className="text-[12px] font-bold text-slate-800">Posting Periods</span>
      </div>
      <div className="h-[3px] w-full bg-[#f5a623] shrink-0"></div>

      <div className="p-4 flex-1 flex flex-col space-y-4 overflow-hidden">
        {/* Find Row */}
        <div className="flex items-center gap-2 px-1">
          <span className="text-[11px] text-slate-800 w-[100px]">Find</span>
          <input type="text" className="w-[300px] border border-slate-400 px-1 text-[11px] h-[20px] outline-none bg-[#fff9c4]" />
        </div>

        {/* Table Container */}
        <div className="flex-1 bg-white border border-slate-400 overflow-auto relative">
          <table className="w-full border-collapse text-[11px] text-slate-800">
            <thead className="sticky top-0 bg-[#e6e6e6] z-10">
              <tr className="border-b border-slate-300">
                <th className="border-r border-slate-300 px-2 py-1 font-normal text-left w-[30px]">#</th>
                <th className="border-r border-slate-300 px-2 py-1 font-normal text-left min-w-[100px]">Period Code</th>
                <th className="border-r border-slate-300 px-2 py-1 font-normal text-left min-w-[120px]">Period Name</th>
                <th className="border-r border-slate-300 px-2 py-1 font-normal text-left min-w-[120px]">Period Status</th>
                <th colSpan="2" className="border-r border-slate-300 px-2 py-1 font-normal text-center border-b border-slate-300">Posting Date</th>
                <th colSpan="2" className="border-r border-slate-300 px-2 py-1 font-normal text-center border-b border-slate-300">Due Date</th>
                <th colSpan="2" className="px-2 py-1 font-normal text-center border-b border-slate-300">Document Date</th>
              </tr>
              <tr className="border-b border-slate-300 bg-[#e6e6e6]">
                <th colSpan="4" className="border-r border-slate-300"></th>
                <th className="border-r border-slate-300 px-2 py-[2px] font-normal text-left">From</th>
                <th className="border-r border-slate-300 px-2 py-[2px] font-normal text-left">To</th>
                <th className="border-r border-slate-300 px-2 py-[2px] font-normal text-left">From</th>
                <th className="border-r border-slate-300 px-2 py-[2px] font-normal text-left">To</th>
                <th className="border-r border-slate-300 px-2 py-[2px] font-normal text-left">From</th>
                <th className="px-2 py-[2px] font-normal text-left">To</th>
              </tr>
            </thead>
            <tbody>
              {periods.map((p, idx) => (
                <tr key={p.id} className={cn("border-b border-slate-200 hover:bg-blue-50", idx % 2 === 1 ? "bg-[#fcfcfc]" : "bg-white")}>
                  <td className="border-r border-slate-200 px-2 py-[1px] text-center">{p.id}</td>
                  <td className="border-r border-slate-200 px-2 py-[1px]">
                    <div className="flex items-center gap-2">
                      <LinkArrow />
                      <span>{p.code}</span>
                    </div>
                  </td>
                  <td className="border-r border-slate-200 px-2 py-[1px]">{p.name}</td>
                  <td className="border-r border-slate-200 px-2 py-[1px]">{p.status}</td>
                  <td className="border-r border-slate-200 px-2 py-[1px]">{p.postFrom}</td>
                  <td className="border-r border-slate-200 px-2 py-[1px]">{p.postTo}</td>
                  <td className="border-r border-slate-200 px-2 py-[1px]">{p.dueFrom}</td>
                  <td className="border-r border-slate-200 px-2 py-[1px]">{p.dueTo}</td>
                  <td className="border-r border-slate-200 px-2 py-[1px]">{p.docFrom}</td>
                  <td className="px-2 py-[1px]">{p.docTo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Options */}
        <div className="flex flex-col gap-2 shrink-0">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="nextFinancial" className="w-3 h-3" />
            <label htmlFor="nextFinancial" className="text-[11px] text-slate-800">Create New Periods with 'Due Date To' in Next Financial Year</label>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="autoUpdate" defaultChecked className="w-3 h-3" />
              <label htmlFor="autoUpdate" className="text-[11px] text-slate-800 font-semibold italic flex items-center gap-1">
                Automatically Update Period Status to 'Closing Period' for Existing Periods
              </label>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-800">Days After New Period Starts</span>
              <input type="text" defaultValue="1" className="w-[80px] border border-slate-400 px-1 text-[11px] h-[20px] outline-none text-center" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 shrink-0 border-t border-slate-300">
          <div className="flex gap-2">
            <YellowBtn>OK</YellowBtn>
            <YellowBtn>Cancel</YellowBtn>
          </div>
          <YellowBtn>New Period</YellowBtn>
        </div>
      </div>
    </div>
  );
};

export default PostingPeriods;
