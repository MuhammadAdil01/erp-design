import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import { cn } from "@/lib/utils";

const EFFECT_STYLES = `
  @keyframes ripple-burst {
    0%   { transform: scale(0); opacity: 0.6; }
    100% { transform: scale(4.5); opacity: 0; }
  }
  @keyframes shimmer-slide {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes glow-pulse {
    0%, 100% { box-shadow: 0 0 0px 0px rgba(251,191,36,0); }
    50%       { box-shadow: 0 0 16px 4px rgba(251,191,36,0.25); }
  }

  .nav-btn {
    position: relative;
    overflow: hidden;
    transition: background 0.2s ease, color 0.2s ease;
  }

  /* Shimmer sweep on hover */
  .nav-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      105deg,
      transparent 30%,
      rgba(253, 224, 71, 0.22) 50%,
      transparent 70%
    );
    background-size: 220% 100%;
    background-position: -220% center;
    border-radius: inherit;
    pointer-events: none;
    opacity: 0;
  }
  .nav-btn:hover::before {
    opacity: 1;
    animation: shimmer-slide 0.65s ease forwards;
  }

  /* Continuous glow on active tab */
  .nav-btn.is-active {
    animation: glow-pulse 2.4s ease-in-out infinite;
  }

  /* Ripple circle */
  .ripple-dot {
    position: absolute;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    margin-top: -32px;
    margin-left: -32px;
    background: radial-gradient(circle, rgba(253,211,0,0.5) 0%, rgba(255,255,255,0.1) 70%);
    pointer-events: none;
    animation: ripple-burst 0.58s ease-out forwards;
  }

  /* Child link — underline slide + indent nudge */
  .child-link {
    position: relative;
    overflow: hidden;
    transition: color 0.18s ease, padding-left 0.2s ease;
  }
  .child-link::after {
    content: '';
    position: absolute;
    left: 0; bottom: 1px;
    width: 0%;
    height: 1.5px;
    background: linear-gradient(90deg, #fde047, #f59e0b);
    border-radius: 2px;
    transition: width 0.28s ease;
  }
  .child-link:hover        { padding-left: 5px; }
  .child-link:hover::after { width: 100%; }
  .child-link.is-active-link::after { width: 100%; }
`;


function spawnRipple(e, ref) {
  const el = ref.current;
  if (!el) return;
  const { left, top } = el.getBoundingClientRect();
  const dot = document.createElement('span');
  dot.className = 'ripple-dot';
  dot.style.left = `${e.clientX - left}px`;
  dot.style.top  = `${e.clientY - top}px`;
  el.appendChild(dot);
  setTimeout(() => dot.remove(), 600);
}


const menuItems = [
  {
    title: "Financials",
    isNested: true,
    children: [
      { title: "charts of Accounts",          path: "/financials/charts-of-accounts" },
      { title: "Edit charts of Accounts",     path: "/financials/edit-charts-of-accounts" },
      { title: "posting Templates",           path: "/financials/posting-templates" },
      { title: "Recurring postings",          path: "/financials/recurring-postings" },
      { title: "Internal Reconcilations",     path: "/financials/internal-reconcilations" },
      { title: "PMS rate",                    path: "/financials/pms-rate" },
      { title: "Journel Entry",               path: "/financials/journel-entry" },
      { title: "budget setup",                path: "/financials/budget-setup" },
      { title: "Fixed Assets",                path: "/financials/fixed-assets" },
      { title: "cost Accounting",             path: "/financials/cost-accounting" },
      { title: "Financial reports",           path: "/financials/financial-reports" },
    ]
  },
  { title: "Administration " },
  { title: "CRM" },
  {
    title: "Human Resources",
    isNested: true,
    children: [
      { title: "Employee master data",  path: "/hr/employees" },
      { title: "Time sheets",           path: "/hr/timesheets" },
      { title: "Human Resources reports", path: "/hr/reports" },
      { title: "Family Details",        path: "/hr/family-details" },
      { title: "Final settlement",      path: "/hr/final-settlement" },
      { title: "Next of KIn",           path: "/hr/next-of-kin" },
      { title: "Leave Management",      path: "/hr/leave-management" },
      { title: "TA/DA",                 path: "/hr/ta-da" },
      { title: "Deductions",            path: "/hr/deductions" },
      { title: "Loans & Advances",      path: "/hr/loans-advances" },
    ]
  },
  { title: "Inventory" },
  { title: "Production" },
  { title: "Resources" },
   {title: "HR payroll"},
  { title: "Banking " },
  { title: "Production" },
];

const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location    = useLocation();
  const btnRef      = useRef(null);
  const hasChildren = item.isNested && item.children;

  const isActive      = !hasChildren && location.pathname === item.path;
  const isChildActive = hasChildren  && item.children.some(c => location.pathname === c.path);
  const highlighted   = isActive || isChildActive;

  const handleClick = (e) => {
    spawnRipple(e, btnRef);
    setIsOpen(o => !o);
  };

  return (
    <div className="w-full">
      <button
        ref={btnRef}
        onClick={handleClick}
        className={cn(
          "nav-btn flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-xl group",
          highlighted
            ? "is-active text-primary bg-primary/5"
            : "text-slate-600 hover:bg-primary/10 hover:text-primary"
        )}
      >
        <div className="flex items-center gap-3">
          <span className={cn("transition-colors duration-200",
            (highlighted || isOpen) ? "text-primary" : "text-slate-400 group-hover:text-primary")}>
            {item.icon}
          </span>
          <span>{item.title}</span>
        </div>
      </button>

      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out pl-12",
        isOpen ? "max-h-[600px] opacity-100 mt-1" : "max-h-0 opacity-0"
      )}>
        {hasChildren && item.children.map((child, idx) => {
          const isLinkActive = location.pathname === child.path;
          return (
            <Link
              key={idx}
              to={child.path}
              className={cn(
                "child-link block py-2 text-sm transition-colors duration-200",
                isLinkActive
                  ? "is-active-link text-primary font-bold"
                  : "text-slate-500 hover:text-primary"
              )}
            >
              {child.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default function Sidebar() {
  return (
    <>
      <style>{EFFECT_STYLES}</style>
      <aside className="w-72 h-screen bg-white border-r border-slate-100 flex flex-col p-4 fixed left-0 top-0 z-50">

        <div className="flex items-center gap-3 px-4 py-6 mb-4">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Briefcase className="text-white" size={22} />
          </div>
          <span className="text-xl font-bold text-slate-800 tracking-tight">
            ERP-system<span className="text-primary italic"></span>
          </span>
        </div>

        <nav className="flex-1 space-y-2 px-2 overflow-y-auto custom-scrollbar">
          {menuItems.map((item, idx) => (
            <SidebarItem key={idx} item={item} />
          ))}
        </nav>

      </aside>
    </>
  );
}