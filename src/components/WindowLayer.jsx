import React from 'react';
import { useWindowContext } from '@/context/WindowContext';
import FloatingWindow from './FloatingWindow';
import MinimizedTabs from './MinimizedTabs';

export default function WindowLayer() {
  const { getFloatingWindows } = useWindowContext();
  const floating = getFloatingWindows();

  return (
    <>
      {floating.map((win) => (
        <FloatingWindow key={win.id} win={win} />
      ))}
      <MinimizedTabs />
    </>
  );
}
