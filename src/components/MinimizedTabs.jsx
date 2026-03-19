import React from 'react';
import { useWindowContext } from '@/context/WindowContext';

export default function MinimizedTabs() {
  const { getMinimizedWindows, restoreWindow } = useWindowContext();
  const minimized = getMinimizedWindows();

  if (minimized.length === 0) return null;

  return (
    <div className="fixed bottom-3 right-3 z-[999] flex flex-col gap-1 items-end">
      {minimized.map((win) => (
        <button
          key={win.id}
          onClick={() => restoreWindow(win.id)}
          className="flex items-center gap-2 px-3 py-[5px] bg-gradient-to-b from-[#e8e8e8] to-[#c8c8c8] border border-slate-400 shadow-md hover:from-[#f0f0f0] hover:to-[#d8d8d8] active:from-[#b8b8b8] active:to-[#a8a8a8] transition-all cursor-pointer select-none rounded-[2px]"
        >
          <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0" />
          <span className="text-[11px] font-semibold text-slate-800 truncate max-w-[200px]">
            {win.title}
          </span>
        </button>
      ))}
    </div>
  );
}
