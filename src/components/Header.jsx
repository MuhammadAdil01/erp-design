import React from 'react';
import {
    FileText, Printer, Mail, Monitor, Database, FileSpreadsheet, FileClock,
    FileDigit, Compass, Lock, Binoculars, Layout, ChevronFirst, ChevronLeft,
    ChevronRight, ChevronLast, RefreshCcw, Filter, SortAsc, Layers, Calculator,
    Zap, Settings, Search, FileEdit, HelpCircle, Save, Folder, ClipboardList,
    Calendar, Bell, Grid, User, Share2, TrendingUp, Globe
} from 'lucide-react';

const MenuItem = ({ label }) => {
    // Splits label to underline the first letter
    const first = label.charAt(0);
    const rest = label.slice(1);
    return (
        <button className="text-sm font-medium text-slate-700 hover:bg-slate-200 px-3 py-1 flex items-center transition-colors">
            <span className="underline decoration-slate-400 underline-offset-2">{first}</span>
            <span>{rest}</span>
        </button>
    );
};

const ToolbarButton = ({ icon: Icon, color = "text-slate-600" }) => (
    <button className={`p-1.5 hover:bg-slate-100 rounded transition-all flex items-center justify-center ${color}`}>
        <Icon size={18} strokeWidth={1.5} />
    </button>
);

export default function Header() {
    return (
        // <header className="fixed top-0 right-0 left-72 z-40 flex flex-col bg-[#efefef] border-b border-slate-300">
        <header className="z-40 flex flex-col bg-[#efefef] border-b border-slate-300">
            {/* Row 1: Classic Menu Bar */}
            <div className="h-[30px] flex items-center justify-between px-2 bg-[#e1e1e1]">
                <div className="flex items-center">
                    {["File", "Edit", "View", "Data", "Go To", "Modules", "Tools", "Window", "Help"].map((m) => (
                        <MenuItem key={m} label={m} />
                    ))}
                </div>
            </div>

            {/* Row 2: Yellow Divider */}
            <div className="h-[3px] w-full bg-[#f5a623]" title="SAP Style Divider"></div>

            {/* Row 3: Toolbar Icons */}
            <div className="h-[45px] flex items-center px-4 gap-1 bg-[#efefef] overflow-x-auto no-scrollbar border-b border-slate-200 shadow-inner">
                <ToolbarButton icon={Search} />
                <ToolbarButton icon={Printer} />
                <ToolbarButton icon={Mail} />
                <ToolbarButton icon={Monitor} />
                <ToolbarButton icon={Database} />
                <div className="h-6 w-[1px] bg-slate-300 mx-1"></div>

                <ToolbarButton icon={FileSpreadsheet} color="text-green-600" />
                <ToolbarButton icon={FileText} color="text-blue-600" />
                <ToolbarButton icon={FileClock} color="text-slate-500" />
                <ToolbarButton icon={FileDigit} color="text-blue-500" />
                <ToolbarButton icon={Compass} color="text-blue-700" />
                <ToolbarButton icon={Lock} color="text-orange-500" />
                <div className="h-6 w-[1px] bg-slate-300 mx-1"></div>

                <ToolbarButton icon={Binoculars} />
                <ToolbarButton icon={ClipboardList} />
                <div className="h-6 w-[1px] bg-slate-300 mx-1"></div>

                <ToolbarButton icon={ChevronFirst} />
                <ToolbarButton icon={ChevronLeft} />
                <ToolbarButton icon={ChevronRight} />
                <ToolbarButton icon={ChevronLast} />
                <div className="h-6 w-[1px] bg-slate-300 mx-1"></div>

                <ToolbarButton icon={RefreshCcw} />
                <ToolbarButton icon={Filter} />
                <ToolbarButton icon={SortAsc} />
                <div className="h-6 w-[1px] bg-slate-300 mx-1"></div>

                <ToolbarButton icon={Layers} />
                <ToolbarButton icon={Calculator} />
                <ToolbarButton icon={Zap} color="text-yellow-600" />
                <ToolbarButton icon={Grid} />
                <div className="h-6 w-[1px] bg-slate-300 mx-1"></div>

                <ToolbarButton icon={FileEdit} />
                <ToolbarButton icon={Settings} />
                <ToolbarButton icon={Save} color="text-primary" />
                <ToolbarButton icon={Share2} />
                <div className="h-6 w-[1px] bg-slate-300 mx-1"></div>

                <ToolbarButton icon={Calendar} color="text-red-500" />
                <ToolbarButton icon={Bell} color="text-red-600" />
                <ToolbarButton icon={TrendingUp} color="text-green-500" />
                <ToolbarButton icon={User} color="text-blue-600" />
                <ToolbarButton icon={Globe} color="text-blue-600" />
                <ToolbarButton icon={HelpCircle} color="text-blue-500" />
            </div>
        </header>
    );
}
