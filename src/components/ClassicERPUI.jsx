import React from 'react';

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const ClassicTab = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={cn(
      'px-6 py-[4px] text-[11px] border-t border-x border-slate-400 rounded-t-[3px] transition-colors relative',
      active
        ? 'bg-[#f0f0f0] -mb-[1px] z-10 border-b-transparent font-semibold'
        : 'bg-gradient-to-b from-[#e6e6e6] to-[#cccccc] hover:from-[#f0f0f0] hover:to-[#e6e6e6]'
    )}
  >
    {label}
  </button>
);

export const FieldRow = ({ label, children, required = false, labelWidth = '140px' }) => (
  <div className="flex items-center gap-2 mb-[2px]">
    <span 
      className={cn('text-[11px] text-slate-800 shrink-0 font-medium', required && 'after:content-["*"] after:ml-0.5 after:text-red-600')}
      style={{ width: labelWidth }}
    >
      {label}
    </span>
    <div className="flex-1 flex items-center">{children}</div>
  </div>
);

export const ClassicInput = ({ value = '', onChange, yellow = false, showLookup = false, className, type = "text" }) => (
  <div className="relative flex-1 flex items-center">
    <input
      type={type}
      value={value}
      onChange={onChange ?? (() => {})}
      className={cn(
        'w-full border border-slate-400 px-1 text-[11px] h-[19px] outline-none',
        yellow ? 'bg-[#fff9c4]' : 'bg-white',
        className
      )}
    />
    {showLookup && (
      <button
        type="button"
        className="absolute right-0 top-0 h-full w-[19px] bg-[#fcf096] border-l border-slate-400 flex items-center justify-center hover:bg-[#f4d142] transition-colors"
      >
        <div className="w-3 h-3 border border-slate-600 rounded-full flex items-center justify-center">
          <div className="w-[2px] h-[2px] bg-slate-600 rounded-full" />
        </div>
      </button>
    )}
  </div>
);

export const ClassicSel = ({ options = [], value = '', onChange, className, yellow = false }) => (
  <select
    value={value}
    onChange={onChange ?? (() => {})}
    className={cn(
      'flex-1 border border-slate-400 px-1 text-[11px] h-[19px] outline-none appearance-none cursor-pointer pr-4',
      yellow ? 'bg-[#fff9c4]' : 'bg-white',
      className
    )}
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e\")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right 2px center',
      backgroundSize: '12px',
    }}
  >
    {options.map((o) => (
      <option key={o} value={o}>
        {o}
      </option>
    ))}
  </select>
);

export const YellowBtn = ({ children, onClick, className, type = "button" }) => (
  <button
    type={type}
    onClick={onClick}
    className={cn(
      'px-4 py-[2px] text-[11px] bg-gradient-to-b from-[#fcf096] to-[#f4d142] border border-slate-500 rounded-[2px] text-slate-800 hover:shadow-inner active:from-[#f4d142] active:to-[#fcf096] whitespace-nowrap shadow-[0_1px_1px_rgba(0,0,0,0.1)] transition-all',
      className
    )}
  >
    {children}
  </button>
);

export const ClassicWindowHeader = ({ title, onClose }) => (
  <div className="flex items-center justify-between bg-gradient-to-b from-slate-200 to-slate-300 border-b border-slate-400 px-2 py-1 select-none">
    <span className="text-[12px] font-bold text-slate-700">{title}</span>
    {onClose && (
      <button onClick={onClose} className="hover:bg-red-500 hover:text-white p-0.5 rounded transition-colors">
        <svg size={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    )}
  </div>
);

export const FormContainer = ({ children, footerButtons = [] }) => (
  <div className="flex flex-col bg-[#f0f0f0] font-sans h-full overflow-hidden border border-slate-400 m-1 shadow-sm">
    <div className="flex-1 p-4 bg-[#f8f8f8] overflow-auto">
      {children}
    </div>
    {footerButtons.length > 0 && (
      <div className="flex gap-2 p-2 bg-[#f0f0f0] border-t border-slate-300">
        {footerButtons.map((btn, idx) => (
          <YellowBtn key={idx} onClick={btn.onClick} className="min-w-[80px]">
            {btn.label}
          </YellowBtn>
        ))}
      </div>
    )}
  </div>
);
