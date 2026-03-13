import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Folder, FileText } from 'lucide-react';
import { cn } from "@/lib/utils";

const menuItems = [
  { title: "Administration", isNested: false, path: "/admin" },
  {
    title: "Financials",
    isNested: true,
    children: [
      { title: "Charts of Accounts", path: "/financials/charts-of-accounts" },
      { title: "Edit Charts of Accounts", path: "/financials/edit-charts-of-accounts" },
      { title: "Posting Templates", path: "/financials/posting-templates" },
      { title: "Recurring Postings", path: "/financials/recurring-postings" },
      { title: "Internal Reconciliations", path: "/financials/internal-reconcilations" },
      { title: "PMS Rate", path: "/financials/pms-rate" },
      { title: "Journal Entry", path: "/financials/journel-entry" },
      { title: "Budget Setup", path: "/financials/budget-setup" },
      { title: "Fixed Assets", path: "/financials/fixed-assets" },
      { title: "Cost Accounting", path: "/financials/cost-accounting" },
      { title: "Financial Reports", path: "/financials/financial-reports" },
    ]
  },
  { title: "CRM", isNested: false, path: "/crm" },
  { title: "Sales - A/R", isNested: false, path: "/sales" },
  { title: "Purchasing - A/P", isNested: false, path: "/purchasing" },
  { title: "Business Partners", isNested: false, path: "/partners" },
  { title: "Banking", isNested: false, path: "/banking" },
  { title: "Inventory", isNested: false, path: "/inventory" },
  { title: "Resources", isNested: false, path: "/resources" },
  { title: "Production", isNested: false, path: "/production" },
  { title: "MRP", isNested: false, path: "/mrp" },
  { title: "Service", isNested: false, path: "/services" },
  {
    title: "Human Resources",
    isNested: true,
    isOpenByDefault: true,
    children: [
      { title: "Employee Master Data", path: "/hr/employees" },
      { title: "Time Sheets", path: "/hr/timesheets" },
      { title: "Human Resources Reports", path: "/hr/reports" },
      { title: "Family Details", path: "/hr/family-details" },
      { title: "Final Settlement", path: "/hr/final-settlement" },
      { title: "Next of Kin", path: "/hr/next-of-kin" },
      { title: "Leave Management", path: "/hr/leave-management" }, 
      { title: "TA/DA", path: "/hr/ta-da" },
    ]
  },
  { title: "Project Management", isNested: false, path: "/projects" },
  { title: "Reports", isNested: false, path: "/reports" },
];

const SidebarItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(item.isOpenByDefault || false);
  const location = useLocation();
  const hasChildren = item.isNested && item.children;

  const isCategoryActive = hasChildren && item.children.some(c => location.pathname === c.path);

  return (
    <div className="w-full border-b-[0.5px] p-2 border-slate-300  last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center w-full px-2 py-0.5 text-[11px] font-bold text-slate-900 hover:bg-[#c2c2c2] transition-colors text-left",
          isCategoryActive && "bg-[#c2c2c2]"
        )}
      >
        <span className="flex-1">{item.title}</span>
      </button>

      {hasChildren && isOpen && (
        <div className="bg-[#e0e0e0]">
          {item.children.map((child, idx) => {
            const isActive = location.pathname === child.path;
            return (
              <Link
                key={idx}
                to={child.path}
                className={cn(
                  "flex items-center gap-2 pl-4 pr-1 py-[1px] text-[11px] text-slate-800 hover:bg-[#d4d4d4] transition-colors border-l-[3px] border-transparent",
                  isActive && "bg-white/60 border-l-blue-500 font-semibold"
                )}
              >
                {/* Classic Blue Folder Icon logic */}
                <div className="w-3.5 h-3.5 flex items-center justify-center text-blue-600/80">
                  {child.title.toLowerCase().includes('report') ? <FileText size={10} /> : <Folder size={10} fill="currentColor" opacity="0.4" />}
                </div>
                <span>{child.title}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default function Sidebar() {
  return (
    <aside className="w-full h-full bg-[#d1d1d1] border-r border-slate-300 flex flex-col overflow-y-auto no-scrollbar select-none">
      <nav className="flex-1">
        {menuItems.map((item, idx) => (
          <SidebarItem key={idx} item={item} />
        ))}
      </nav>
    </aside>
  );
}
