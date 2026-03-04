import React from 'react';
import {  Bell,  } from 'lucide-react';

export default function Header() {
    return (
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 fixed top-0 right-0 left-72 z-40 px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
            </div>

            <div className="flex items-center gap-6">
                {/* Quick Stats or Actions could go here */}
                <div className="hidden md:flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">online  System</span>
                </div>

                <button className="relative p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-all">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white"></span>
                </button>

                <div className="h-8 w-[1px] bg-slate-100 mx-2"></div>
            </div>
        </header>
    );
}
