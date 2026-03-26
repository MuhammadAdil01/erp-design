import React, { useEffect } from 'react';
import { useWindowContext } from '@/context/WindowContext';

const APDownPaymentInvoiceContent = () => {
  return (
    <div className="p-8 flex items-center justify-center h-full text-slate-500 text-lg">
      A/P Down Payment Invoice (Empty)
    </div>
  );
};

export default function APDownPaymentInvoice() {
  const { openWindow } = useWindowContext();
  const isOpened = React.useRef(false);

  useEffect(() => {
    if (isOpened.current) return;
    openWindow({
      id: 'ap-down-payment-invoice',
      title: 'A/P Down Payment Invoice',
      component: <APDownPaymentInvoiceContent />,
      initialSize: { width: 800, height: 600 },
      initialPosition: { x: 50, y: 20 },
    });
    isOpened.current = true;
  }, [openWindow]);

  return null;
}

export { APDownPaymentInvoiceContent };
