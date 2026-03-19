import React from 'react';
import { X, Minus, Minimize2 } from 'lucide-react';
import { useWindowContext } from '@/context/WindowContext';

export default function InlineWindowView() {
  const { getInlineWindows, closeWindow, minimizeWindow, reshapeWindow } = useWindowContext();
  const inline = getInlineWindows();

  if (inline.length === 0) return null;

  return (
    <>
      {inline.map((win) => (
        <div key={win.id} className="border-b border-slate-300">
          {/* Inline title bar */}
          <div className="flex items-center h-[30px] px-2 bg-gradient-to-r from-[#b8b8b8] to-[#d4d4d4] border-b border-slate-400">
            <span className="text-[11px] font-bold text-slate-800 flex-1 truncate select-none">
              {win.title}
            </span>

            <div className="flex items-center gap-[2px] ml-2">
              {/* Minimize */}
              <button
                onClick={() => minimizeWindow(win.id)}
                className="w-[20px] h-[20px] flex items-center justify-center bg-gradient-to-b from-[#e8e8e8] to-[#c8c8c8] border border-slate-400 rounded-[1px] hover:from-[#f0f0f0] hover:to-[#d8d8d8] active:from-[#b8b8b8] active:to-[#a8a8a8]"
                title="Minimize"
              >
                <Minus size={12} className="text-slate-700" />
              </button>

              {/* Detach — pop back out as floating window */}
              <button
                onClick={() => reshapeWindow(win.id)}
                className="w-[20px] h-[20px] flex items-center justify-center bg-gradient-to-b from-[#e8e8e8] to-[#c8c8c8] border border-slate-400 rounded-[1px] hover:from-[#f0f0f0] hover:to-[#d8d8d8] active:from-[#b8b8b8] active:to-[#a8a8a8]"
                title="Detach — Pop out as floating window"
              >
                <Minimize2 size={12} className="text-slate-700" />
              </button>

              {/* Close */}
              <button
                onClick={() => closeWindow(win.id)}
                className="w-[20px] h-[20px] flex items-center justify-center bg-gradient-to-b from-[#f0c0c0] to-[#d88888] border border-slate-400 rounded-[1px] hover:from-[#f8d0d0] hover:to-[#e09090] active:from-[#c88080] active:to-[#b87070]"
                title="Close"
              >
                <X size={12} className="text-slate-800" />
              </button>
            </div>
          </div>

          {/* Inline content */}
          <div className="bg-[#f0f0f0] min-h-[500px]">
            {win.component}
          </div>
        </div>
      ))}
    </>
  );
}
