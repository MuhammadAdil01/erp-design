import React, { useState, useRef, useEffect } from 'react';
import { 
    FileText, Printer, Mail, Monitor, Database, FileSpreadsheet, FileClock,
    FileDigit, Compass, Lock, Binoculars, Layout, ChevronFirst, ChevronLeft,
    ChevronRight, ChevronLast, RefreshCcw, Filter, SortAsc, Layers, Calculator,
    Zap, Settings, Search, FileEdit, HelpCircle, Save, Folder, ClipboardList,
    Calendar, Bell, Grid, User, Share2, TrendingUp, Globe, ChevronRight as ChevronRightSm
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { Link, useLocation } from 'react-router-dom';
import { menuItems } from './Sidebar';

const DropdownItem = ({ item, isRoot = false }) => {
    const [isHovered, setIsHovered] = useState(false);
    const hasChildren = item.isNested && item.children && item.children.length > 0;
    const location = useLocation();

    // Small delay to prevent accidental closing when moving mouse diagonally
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsHovered(false);
        }, isRoot ? 50 : 150);
    };

    const content = (
        <>
            <div className="flex items-center gap-2">
                {isRoot && (
                    <div className="w-4 h-4 flex items-center justify-center text-blue-600/80">
                        {item.title.toLowerCase().includes('report') ? (
                            <FileText size={12} />
                        ) : hasChildren ? (
                            <Folder size={14} fill="currentColor" opacity="0.6" />
                        ) : (
                            <div className="w-2.5 h-3 bg-blue-300/40 border-[0.5px] border-blue-600/50" />
                        )}
                    </div>
                )}
                <span className="truncate">{item.title}</span>
            </div>
            {hasChildren && <ChevronRightSm size={14} className="text-slate-500" />}
        </>
    );

    const buttonClass = cn(
        "w-full text-left px-4 py-1.5 text-xs text-slate-800 flex items-center justify-between hover:bg-[#ffeec2] transition-colors relative",
        isHovered && hasChildren && "bg-[#ffeec2]",
        item.path && location.pathname === item.path && "bg-[#ffeec2] font-medium"
    );

    return (
        <div 
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {hasChildren ? (
                <button className={buttonClass}>
                    {content}
                </button>
            ) : (
                <Link to={item.path || "#"} className={buttonClass}>
                    {content}
                </Link>
            )}

            {hasChildren && isHovered && (
                <div 
                    className="absolute top-0 left-full ml-[1px] min-w-[200px] bg-[#f9f9f9] border border-slate-300 shadow-md py-1 z-50 flex flex-col"
                    style={{ marginTop: '-4px' }}
                >
                    {item.children.map((child, idx) => (
                        <DropdownItem key={idx} item={child} />
                    ))}
                </div>
            )}
        </div>
    );
};


const MenuItem = ({ label, items = null }) => {
    const first = label.charAt(0);
    const rest = label.slice(1);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <div className="relative" ref={menuRef}>
            <button 
                onClick={() => items && setIsOpen(!isOpen)}
                className={cn(
                    "text-sm font-medium text-slate-700 hover:bg-slate-200 px-3 py-1 flex items-center transition-colors",
                    isOpen && "bg-[#f5a623] text-white hover:bg-[#f5a623]"
                )}
            >
                <span className={cn("underline decoration-slate-400 underline-offset-2", isOpen && "decoration-white/70")}>{first}</span>
                <span>{rest}</span>
            </button>

            {isOpen && items && (
                <div className="absolute top-full left-0 mt-[1px] min-w-[220px] bg-[#f9f9f9] border border-slate-300 shadow-md py-1 z-50 flex flex-col">
                    {items.map((item, idx) => (
                        <DropdownItem key={idx} item={item} isRoot={true} />
                    ))}
                </div>
            )}
        </div>
    );
};

const ToolbarButton = ({ icon: Icon, color = "text-slate-600" }) => (
    <button className={`p-1.5 hover:bg-slate-100 rounded transition-all flex items-center justify-center ${color}`}>
        <Icon size={18} strokeWidth={1.5} />
    </button>
);

export default function Header() {
    return (
        <header className="z-40 flex flex-col bg-[#efefef] border-b border-slate-300 relative">
            {/* Row 1: Classic Menu Bar */}
            <div className="h-[30px] flex items-center justify-between px-2 bg-[#e1e1e1]">
                <div className="flex items-center">
                    {["File", "Edit", "View", "Data", "Go To"].map((m) => (
                        <MenuItem key={m} label={m} />
                    ))}
                    <MenuItem label="Modules" items={menuItems} />
                    {["Tools", "Window", "Help"].map((m) => (
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
