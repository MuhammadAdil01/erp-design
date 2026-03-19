import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import InlineWindowView from '@/components/InlineWindowView';

export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#f0f0f0] font-sans overflow-hidden flex flex-col">
            {/* Header stays at the top */}
            <Header />

            <div className='flex flex-1 overflow-hidden'>
                {/* Sidebar has fixed width and scrolls independently */}
                <div className='w-[280px] flex-shrink-0 h-full bg-[#d1d1d1]'>
                    <Sidebar />
                </div>

                {/* Content area fills the rest and scrolls */}
                <div className="flex-1 overflow-y-auto bg-white">
                    <InlineWindowView />
                    <main className="p-4 min-h-full">
                        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
