import React, { useState, useRef, useCallback, useEffect } from 'react';
import { X, Minus, Maximize2 } from 'lucide-react';
import { useWindowContext } from '@/context/WindowContext';

const EDGE = 6;      // px – invisible grab zone on each edge
const MIN_W = 400;
const MIN_H = 300;

export default function FloatingWindow({ win }) {
  const { closeWindow, minimizeWindow, reshapeWindow, updateWindowPosition, updateWindowSize } = useWindowContext();

  const windowRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [resizeDir, setResizeDir] = useState(null); // e.g. 'se', 'e', 'n', 'nw' …
  const dragOffset = useRef({ x: 0, y: 0 });
  const resizeStart = useRef({ mx: 0, my: 0, x: 0, y: 0, w: 0, h: 0 });

  // ── Dragging (title-bar) ──────────────────────────────────────────────────
  const onDragStart = useCallback((e) => {
    if (e.target.closest('button')) return;
    e.preventDefault();
    const rect = windowRef.current.getBoundingClientRect();
    dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setDragging(true);
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e) => {
      updateWindowPosition(win.id, {
        x: e.clientX - dragOffset.current.x,
        y: Math.max(0, e.clientY - dragOffset.current.y),
      });
    };
    const onUp = () => setDragging(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [dragging, win.id, updateWindowPosition]);

  // ── Resizing (edges + corners) ────────────────────────────────────────────
  const onResizeStart = useCallback((dir) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    resizeStart.current = {
      mx: e.clientX,
      my: e.clientY,
      x: win.position.x,
      y: win.position.y,
      w: win.size.width,
      h: win.size.height,
    };
    setResizeDir(dir);
  }, [win.position, win.size]);

  useEffect(() => {
    if (!resizeDir) return;

    const onMove = (e) => {
      const { mx, my, x, y, w, h } = resizeStart.current;
      const dx = e.clientX - mx;
      const dy = e.clientY - my;

      let newX = x, newY = y, newW = w, newH = h;

      // Horizontal
      if (resizeDir.includes('e')) {
        newW = Math.max(MIN_W, w + dx);
      }
      if (resizeDir.includes('w')) {
        const proposed = w - dx;
        if (proposed >= MIN_W) { newW = proposed; newX = x + dx; }
      }

      // Vertical
      if (resizeDir.includes('s')) {
        newH = Math.max(MIN_H, h + dy);
      }
      if (resizeDir.includes('n')) {
        const proposed = h - dy;
        if (proposed >= MIN_H) { newH = proposed; newY = y + dy; }
      }

      updateWindowSize(win.id, { width: newW, height: newH });
      updateWindowPosition(win.id, { x: newX, y: Math.max(0, newY) });
    };

    const onUp = () => setResizeDir(null);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [resizeDir, win.id, updateWindowSize, updateWindowPosition]);

  // Cursor map for each direction
  const cursors = {
    n: 'ns-resize', s: 'ns-resize',
    e: 'ew-resize', w: 'ew-resize',
    ne: 'nesw-resize', sw: 'nesw-resize',
    nw: 'nwse-resize', se: 'nwse-resize',
  };

  return (
    <div
      ref={windowRef}
      className="fixed z-[1000] flex flex-col shadow-2xl border border-slate-400 bg-[#f0f0f0]"
      style={{
        left: win.position.x,
        top: win.position.y,
        width: win.size.width,
        height: win.size.height,
        userSelect: (dragging || resizeDir) ? 'none' : 'auto',
      }}
    >
      {/* ── Resize handles (invisible grab zones on every edge & corner) ── */}

      {/* Edges */}
      <div onMouseDown={onResizeStart('n')}  style={{ cursor: cursors.n }}  className="absolute -top-[3px] left-[6px] right-[6px] h-[6px] z-[10]" />
      <div onMouseDown={onResizeStart('s')}  style={{ cursor: cursors.s }}  className="absolute -bottom-[3px] left-[6px] right-[6px] h-[6px] z-[10]" />
      <div onMouseDown={onResizeStart('w')}  style={{ cursor: cursors.w }}  className="absolute -left-[3px] top-[6px] bottom-[6px] w-[6px] z-[10]" />
      <div onMouseDown={onResizeStart('e')}  style={{ cursor: cursors.e }}  className="absolute -right-[3px] top-[6px] bottom-[6px] w-[6px] z-[10]" />

      {/* Corners */}
      <div onMouseDown={onResizeStart('nw')} style={{ cursor: cursors.nw }} className="absolute -top-[3px] -left-[3px] w-[10px] h-[10px] z-[11]" />
      <div onMouseDown={onResizeStart('ne')} style={{ cursor: cursors.ne }} className="absolute -top-[3px] -right-[3px] w-[10px] h-[10px] z-[11]" />
      <div onMouseDown={onResizeStart('sw')} style={{ cursor: cursors.sw }} className="absolute -bottom-[3px] -left-[3px] w-[10px] h-[10px] z-[11]" />
      <div onMouseDown={onResizeStart('se')} style={{ cursor: cursors.se }} className="absolute -bottom-[3px] -right-[3px] w-[10px] h-[10px] z-[11]" />

      {/* Title bar */}
      <div
        className="flex items-center h-[30px] px-2 bg-gradient-to-r from-[#b8b8b8] to-[#d4d4d4] border-b border-slate-400 cursor-move shrink-0"
        onMouseDown={onDragStart}
      >
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

          {/* Reshape / Reattach to dashboard */}
          <button
            onClick={() => reshapeWindow(win.id)}
            className="w-[20px] h-[20px] flex items-center justify-center bg-gradient-to-b from-[#e8e8e8] to-[#c8c8c8] border border-slate-400 rounded-[1px] hover:from-[#f0f0f0] hover:to-[#d8d8d8] active:from-[#b8b8b8] active:to-[#a8a8a8]"
            title="Reshape — Reattach to dashboard"
          >
            <Maximize2 size={12} className="text-slate-700" />
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

      {/* Window body */}
      <div className="flex-1 overflow-auto bg-[#f0f0f0]">
        {win.component}
      </div>

      {/* Visual grip indicator (bottom-right corner) */}
      <div className="absolute bottom-[2px] right-[2px] w-3 h-3 pointer-events-none opacity-40">
        <svg className="w-full h-full text-slate-500" viewBox="0 0 12 12">
          <path d="M10 2L2 10M10 6L6 10M10 10L10 10" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
