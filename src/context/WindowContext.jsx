import React, { createContext, useContext, useState, useCallback } from 'react';

const WindowContext = createContext(null);

// Window states: 'floating' | 'minimized' | 'inline' | 'closed'
export function WindowProvider({ children }) {
  const [windows, setWindows] = useState({});

  const openWindow = useCallback(({ id, title, component, initialSize, initialPosition }) => {
    setWindows((prev) => {
      // If already open (floating or minimized), just restore to floating
      if (prev[id] && prev[id].state !== 'closed') {
        return { ...prev, [id]: { ...prev[id], state: 'floating' } };
      }
      return {
        ...prev,
        [id]: {
          id,
          title,
          component,
          state: 'floating',
          size: initialSize || { width: 1000, height: 700 },
          position: initialPosition || { x: 120, y: 60 },
        },
      };
    });
  }, []);

  const closeWindow = useCallback((id) => {
    setWindows((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  }, []);

  const minimizeWindow = useCallback((id) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      return { ...prev, [id]: { ...prev[id], state: 'minimized' } };
    });
  }, []);

  const restoreWindow = useCallback((id) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      return { ...prev, [id]: { ...prev[id], state: 'floating' } };
    });
  }, []);

  const reshapeWindow = useCallback((id) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      const current = prev[id].state;
      // Toggle between inline and floating
      const next = current === 'inline' ? 'floating' : 'inline';
      return { ...prev, [id]: { ...prev[id], state: next } };
    });
  }, []);

  const updateWindowPosition = useCallback((id, position) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      return { ...prev, [id]: { ...prev[id], position } };
    });
  }, []);

  const updateWindowSize = useCallback((id, size) => {
    setWindows((prev) => {
      if (!prev[id]) return prev;
      return { ...prev, [id]: { ...prev[id], size } };
    });
  }, []);

  const getFloatingWindows = useCallback(() => {
    return Object.values(windows).filter((w) => w.state === 'floating');
  }, [windows]);

  const getMinimizedWindows = useCallback(() => {
    return Object.values(windows).filter((w) => w.state === 'minimized');
  }, [windows]);

  const getInlineWindows = useCallback(() => {
    return Object.values(windows).filter((w) => w.state === 'inline');
  }, [windows]);

  return (
    <WindowContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        minimizeWindow,
        restoreWindow,
        reshapeWindow,
        updateWindowPosition,
        updateWindowSize,
        getFloatingWindows,
        getMinimizedWindows,
        getInlineWindows,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
}

export function useWindowContext() {
  const ctx = useContext(WindowContext);
  if (!ctx) throw new Error('useWindowContext must be used within WindowProvider');
  return ctx;
}
