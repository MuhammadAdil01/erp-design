import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen bg-yellow-white-gradient font-inter">
            <Sidebar />

            <div className="ml-72 transition-all duration-300">
                <Header />

                <main className="pt-28 px-10 pb-10">
                    <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
