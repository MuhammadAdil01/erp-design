import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronRight, Folder, FileText, Layout, Home, ShoppingCart, 
  Settings, DollarSign, PenTool, LayoutDashboard, MessageSquare, 
  Globe, BarChart3, PieChart, Briefcase, Zap, Box, User
} from 'lucide-react';
import { cn } from "@/lib/utils";

export const menuItems = [
  {
    title: "Administration",
    isNested: true,
    children: [
      { title: "Choose company", path: "/choose-company" },
      { title: "Exchange Rates & Indexes", path: "/exchange-rates-indexes" },
      { 
        title: "System Initialization", 
        isNested: true,
        children: [
          { title: "Company Details", path: "/administration/system-initialization/company-details" },
          { title: "General Settings", path: "/administration/system-initialization/general-settings" },
          { title: "Posting Periods", path: "/administration/system-initialization/posting-periods" },
          { title: "Authorizations", path: "/administration/system-initialization/authorizations" },
          { title: "Document Numbering", path: "/administration/system-initialization/document-numbering" },
          { title: "Document Settings", path: "/administration/system-initialization/document-settings" },
          { title: "Print Preferences", path: "/administration/system-initialization/print-preferences" },
          { title: "Menu Structure", path: "/administration/system-initialization/menu-structure" },
          { title: "Opening Balances", path: "/administration/system-initialization/opening-balances" },
          { title: "Implementation Center", path: "/administration/system-initialization/implementation-center" },
          { title: "Tooltip Preview", path: "/administration/system-initialization/tooltip-preview" },
        ]
      },

          { 
        title: "Setup", 
        isNested: true,
        children: [
          { 
            title: "General", 
            isNested: true,
            children: [
              { title: "Users", path: "/administration/setup/general/users" },
              { title: "User Groups", path: "/administration/setup/general/user-groups" },
              { title: "User Defaults", path: "/administration/setup/general/user-defaults" },
              { title: "Sales Employees/Buyers", path: "/administration/setup/general/sales-employees-buyers" },
              { title: "Territories", path: "/administration/setup/general/territories" },
              { title: "Commission Groups", path: "/administration/setup/general/commission-groups" },
              { title: "Predefined Text", path: "/administration/setup/general/predefined-text" },
              { title: "Reference Field Links", path: "/administration/setup/general/reference-field-links" },
              { title: "Freight", path: "/administration/setup/general/freight" },
              { title: "Message Preferences", path: "/administration/setup/general/message-preferences" },
              { title: "Report and Layout Manager", path: "/administration/setup/general/report-layout-manager" },
              { title: "Default Elements for SAP Crystal Reports", path: "/administration/setup/general/default-elements-crystal-reports" },
              { title: "Server Print Configuration", path: "/administration/setup/general/server-print-configuration" },
              { title: "Dashboard Manager", path: "/administration/setup/general/dashboard-manager" },
              { title: "Dashboard Parameters", path: "/administration/setup/general/dashboard-parameters" },
              { title: "Electronic File Manager", path: "/administration/setup/general/electronic-file-manager" },
              { title: "Electronic Certificates", path: "/administration/setup/general/electronic-certificates" },
              { title: "Crystal Server Configuration", path: "/administration/setup/general/crystal-server-configuration" },
              { title: "SAP Links", path: "/administration/setup/general/sap-links" },
              { title: "Process Checklist Template", path: "/administration/setup/general/process-checklist-template" },
              { title: "Security", isNested: true, children: [] },
            ]
          },
          { 
            title: "Financials", 
            isNested: true,
            children: [
              { title: "Edit Chart of Accounts", path: "/administration/setup/financials/edit-chart-of-accounts" },
              { title: "G/L Account Determination", isNested: true, children: [] },
              { title: "Currencies", path: "/administration/setup/financials/currencies" },
              { title: "Indexes", path: "/administration/setup/financials/indexes" },
              { title: "Transaction Codes", path: "/administration/setup/financials/transaction-codes" },
              { title: "Projects", path: "/administration/setup/financials/projects" },
              { title: "Period Indicators", path: "/administration/setup/financials/period-indicators" },
              { title: "Doubtful Debts", path: "/administration/setup/financials/doubtful-debts" },
              { title: "Cash Flow Line Items", path: "/administration/setup/financials/cash-flow-line-items" },
              { title: "Financial KPI Factors", path: "/administration/setup/financials/financial-kpi-factors" },
              { title: "Tax", isNested: true, children: [] },
              { title: "Fixed Assets", isNested: true, children: [] },
              { title: "Expense Types", path: "/administration/setup/financials/expense-types" },
            ]
          },
          { 
            title: "Opportunities", 
            isNested: true,
            children: [
              { title: "Opportunity Stages", path: "/administration/setup/opportunities/opportunity-stages" },
              { title: "Partners", path: "/administration/setup/opportunities/partners" },
              { title: "Competitors", path: "/administration/setup/opportunities/competitors" },
              { title: "Relationships", path: "/administration/setup/opportunities/relationships" },
            ]
          },
          { 
            title: "Sales", 
            isNested: true,
            children: [
              { title: "ATP Checking Rule List", path: "/administration/setup/sales/atp-checking-rule-list" },
            ]
          },
          { 
            title: "Purchasing", 
            isNested: true,
            children: [
              { title: "Landed Costs", path: "/administration/setup/purchasing/landed-costs" },
            ]
          },
          { 
            title: "Business Partners", 
            isNested: true,
            children: [
              { title: "Countries/Regions", path: "/administration/setup/business-partners/countries-regions" },
              { title: "Address Formats", path: "/administration/setup/business-partners/address-formats" },
              { title: "Customer Groups", path: "/administration/setup/business-partners/customer-groups" },
              { title: "Vendor Groups", path: "/administration/setup/business-partners/vendor-groups" },
              { title: "Business Partner Properties", path: "/administration/setup/business-partners/business-partner-properties" },
              { title: "Business Partner Priorities", path: "/administration/setup/business-partners/business-partner-priorities" },
              { title: "Dunning Terms", path: "/administration/setup/business-partners/dunning-terms" },
              { title: "Payment Terms", path: "/administration/setup/business-partners/payment-terms" },
              { title: "Payment Blocks", path: "/administration/setup/business-partners/payment-blocks" },
              { title: "Target Group", path: "/administration/setup/business-partners/target-group" },
              { title: "E-Mail Group", path: "/administration/setup/business-partners/e-mail-group" },
            ]
          },
          { 
            title: "Banking", 
            isNested: true,
            children: [
              { title: "Banks", path: "/administration/setup/banking/banks" },
              { title: "House Bank Accounts", path: "/administration/setup/banking/house-bank-accounts" },
              { title: "Credit Cards", path: "/administration/setup/banking/credit-cards" },
              { title: "Credit Card Payment", path: "/administration/setup/banking/credit-card-payment" },
              { title: "Credit Card Payment Methods", path: "/administration/setup/banking/credit-card-payment-methods" },
              { title: "Credit Vendors", path: "/administration/setup/banking/credit-vendors" },
              { title: "Bank Charges Allocation Codes", path: "/administration/setup/banking/bank-charges-allocation-codes" },
              { title: "Payment Methods", path: "/administration/setup/banking/payment-methods" },
            ]
          },
          { 
            title: "Inventory", 
            isNested: true,
            children: [
              { title: "Item Groups", path: "/administration/setup/inventory/item-groups" },
              { title: "Item Properties", path: "/administration/setup/inventory/item-properties" },
              { title: "Warehouses", path: "/administration/setup/inventory/warehouses" },
              { title: "Units of Measure", path: "/administration/setup/inventory/units-of-measure" },
              { title: "Unit of Measure Groups", path: "/administration/setup/inventory/unit-of-measure-groups" },
              { title: "Length and Width", path: "/administration/setup/inventory/length-and-width" },
              { title: "Weight", path: "/administration/setup/inventory/weight" },
              { title: "Customs Groups", path: "/administration/setup/inventory/customs-groups" },
              { title: "Manufacturers", path: "/administration/setup/inventory/manufacturers" },
              { title: "Shipping Types", path: "/administration/setup/inventory/shipping-types" },
              { title: "Locations", path: "/administration/setup/inventory/locations" },
              { title: "Inventory Cycles", path: "/administration/setup/inventory/inventory-cycles" },
              { title: "Cycle Count Determination", path: "/administration/setup/inventory/cycle-count-determination" },
              { title: "Package Types", path: "/administration/setup/inventory/package-types" },
            ]
          },
          { 
            title: "Resources", 
            isNested: true,
            children: [
              { title: "Resource Groups", path: "/administration/setup/resources/resource-groups" },
              { title: "Resource Properties", path: "/administration/setup/resources/resource-properties" },
            ]
          },
          { 
            title: "Service", 
            isNested: true,
            children: [
              { title: "Contract Templates", path: "/administration/setup/service/contract-templates" },
              { title: "Queues", path: "/administration/setup/service/queues" },
            ]
          },
          { 
            title: "Human Resources", 
            isNested: true,
            children: [
              { title: "Time Sheet", isNested: true, children: [] },
            ]
          },
          { 
            title: "Project Management", 
            isNested: true,
            children: [
              { title: "Stages", path: "/administration/setup/project-management/stages" },
            ]
          },
          { 
            title: "Production", 
            isNested: true,
            children: [
              { title: "Route Stages", path: "/administration/setup/production/route-stages" },
            ]
          },
          { 
            title: "Electronic Documents", 
            isNested: true,
            children: [
              { title: "PEPPOL BIS Code Lists", path: "/administration/setup/electronic-documents/peppol-bis-code-lists" },
            ]
          },
        ]
      },
      { 
        title: "Utilities", 
        isNested: true,
        children: [
          { title: "Period-End Closing", path: "/administration/utilities/period-end-closing" },
          { title: "Check Document Numbering", path: "/administration/utilities/check-document-numbering" },
          { title: "Duplicate Layout Template", path: "/administration/utilities/duplicate-layout-template" },
          { title: "Transfer Posting Correction Wizard", path: "/administration/utilities/transfer-posting-correction-wizard" },
          { title: "Master Data Cleanup Wizard", path: "/administration/utilities/master-data-cleanup-wizard" },
          { title: "Manual Master Data Series Converter", path: "/administration/utilities/manual-master-data-series-converter" },
          { title: "UI Configuration Template", path: "/administration/utilities/ui-configuration-template" },
          { title: "Connected Clients", path: "/administration/utilities/connected-clients" },
          { title: "Change Logs Cleanup", path: "/administration/utilities/change-logs-cleanup" },
        ]
      },
      { 
        title: "Approval Process", 
        isNested: true,
        children: [
          { title: "Approval Stages", path: "/administration/approval-process/approval-stages" },
          { title: "Approval Templates", path: "/administration/approval-process/approval-templates" },
          { title: "Approval Status Report", path: "/administration/approval-process/approval-status-report" },
          { title: "Approval Decision Report", path: "/administration/approval-process/approval-decision-report" },
          { title: "Substitute Authorizer for Approval Templates", path: "/administration/approval-process/substitute-authorizer-approval-templates" },
        ]
      },
      { 
        title: "License", 
        isNested: true,
        children: [
          { title: "License Administration", path: "/administration/license/license-administration" },
          { title: "Add-On Identifier Generator", path: "/administration/license/add-on-identifier-generator" },
          { title: "Support User Log", path: "/administration/license/support-user-log" },
          { title: "License Information", path: "/administration/license/license-information" },
        ]
      },
      { title: "Alerts Management", path: "/alerts-management" },
    ]
  },
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
  { title: "Opportunities", isNested: false, path: "/opportunities" },

  { title: "Sales - A/R", isNested: false, path: "/sales" },
  { title: "Purchasing - A/P", isNested: false, path: "/purchasing" },
  { title: "Business Partners", isNested: false, path: "/partners" },
  { title: "Banking", isNested: false, path: "/banking" },
  { title: "Inventory", isNested: false, path: "/inventory" },
  { title: "Resources", isNested: false, path: "/resources" },
  { title: "Production", isNested: false, path: "/production" },
  { title: "MRP", isNested: false, path: "/mrp" },
  { 
    title: " HR Payroll", 
    isNested: true, 
    path: "/Payroll",
    children: [
      { 
        title: "Masters", 
        isNested: true,
        children: [
          { title: "Employee Current Information", path: "/payroll/masters/employee-current-info" },
          { title: "Pay Period Master", path: "/payroll/masters/pay-period-master" },
          { title: "Grade Master", path: "/payroll/masters/grade-master" },
          { title: "Loan Master", path: "/payroll/masters/loan-master" },
          { title: "Leave Master", path: "/payroll/masters/leave-master" },
          { title: "Employee Type", path: "/payroll/masters/employee-type" },
          { title: "Shift Master", path: "/payroll/masters/shift-master" },
          { title: "TaxFormulaMaster", path: "/payroll/masters/tax-formula-master" },
          { title: "Grade Pay Scale", path: "/payroll/masters/grade-pay-scale" },
        ]
      },
      { 
        title: "Transaction", 
        isNested: true,
        children: [
          { title: "Monthly Attendance Sheet", path: "/payroll/transactions/monthly-attendance" },
          { title: "PayRoll Process", path: "/payroll/transactions/payroll-process" },
          { title: "Loan/Salary Advance Application", path: "/payroll/transactions/loan-advance" },
          { title: "Leave Application", path: "/payroll/transactions/leave-application" },
          { title: "Payroll Monthly Adjustments", path: "/payroll/transactions/monthly-adjustments" },
        ]
      }
    ]
  },
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
      { title: "TA/DA", path: "/hr/ta-da" },
    ]
  },
  { title: "Project Management", isNested: false, path: "/projects" },
  { title: "Reports", isNested: false, path: "/reports" },
];

const SidebarLeaf = ({ item, depth, isActive }) => {
  return (
    <Link
      to={item.path || "#"}
      className={cn(
        "flex items-center gap-2 pr-1 py-[2px] text-[11px] text-slate-800 hover:bg-[#d4d4d4] transition-colors border-l-[3px] border-transparent",
        isActive && "bg-white/60 border-l-blue-500 font-semibold"
      )}
      style={{ paddingLeft: `${(depth * 14) + 4}px` }}
    >
      <div className="w-3.5 h-3.5 flex items-center justify-center text-blue-600/80">
        {item.title.toLowerCase().includes('report') ? (
            <FileText size={10} />
        ) : (
            <div className="w-2.5 h-3 bg-blue-300/40 border-[0.5px] border-blue-600/50" />
        )}
      </div>
      <span>{item.title}</span>
    </Link>
  );
};

const SidebarNode = ({ item, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(item.isOpenByDefault || false);
  const location = useLocation();
  const hasChildren = item.isNested && item.children;

  const checkActive = (node) => {
    if (node.path && location.pathname === node.path) return true;
    if (node.children) {
      return node.children.some(checkActive);
    }
    return false;
  };

  const isCategoryActive = checkActive(item);

  if (depth === 0) {
    if (!hasChildren) {
       return (
        <div className="w-full border-b-[0.5px] p-2 border-slate-300 last:border-b-0">
          <Link
            to={item.path || "#"}
            className={cn(
              "flex items-center w-full px-2 py-0.5 text-[11px] font-bold text-slate-900 hover:bg-[#c2c2c2] transition-colors text-left",
              location.pathname === item.path && "bg-[#c2c2c2]"
            )}
          >
            <span className="flex-1">{item.title}</span>
          </Link>
        </div>
       );
    }

    return (
      <div className="w-full border-b-[0.5px] p-2 border-slate-300 last:border-b-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center w-full px-2 py-0.5 text-[11px] font-bold text-slate-900 hover:bg-[#c2c2c2] transition-colors text-left",
            isCategoryActive && "bg-[#c2c2c2]"
          )}
        >
          <span className="flex-1">{item.title}</span>
        </button>

        {isOpen && (
          <div className="bg-[#e0e0e0] mt-1">
            {item.children.map((child, idx) => (
              <SidebarNode key={idx} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Depth > 0
  if (hasChildren) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "flex items-center w-full gap-2 pr-1 py-[2px] text-[11px] text-slate-800 hover:bg-[#d4d4d4] transition-colors border-l-[3px] border-transparent text-left",
            isCategoryActive && !isOpen && "font-semibold"
          )}
          style={{ paddingLeft: `${(depth * 14) + 4}px` }}
        >
          <div className="w-3.5 h-3.5 flex items-center justify-center text-blue-600/80">
            <Folder size={12} fill="currentColor" opacity="0.6" />
          </div>
          <span className="flex-1">{item.title}</span>
        </button>

        {isOpen && (
          <div className="w-full">
            {item.children.map((child, idx) => (
              <SidebarNode key={idx} item={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  // It's a leaf node at depth > 0
  return <SidebarLeaf item={item} depth={depth} isActive={location.pathname === item.path} />;
};

const CockpitView = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(true);
  const [isPurchasingOpen, setIsPurchasingOpen] = useState(true);
  
  const cockpitItems = [
    { title: "My Cockpit", icon: <div className="text-slate-600 flex items-center"><Box size={14} /><User size={10} className="text-green-600 -ml-1 border border-white bg-white rounded-full" /></div> },
    { title: "Home", icon: <Home size={14} className="text-slate-600" /> },
    { title: "Sales", icon: <div className="flex items-center"><User size={12} className="text-green-600" /><DollarSign size={10} className="text-blue-500 -ml-1" /></div> },
    { title: "Service", icon: <PenTool size={14} className="text-blue-500" /> },
    { title: "Finance", icon: <div className="flex items-center text-green-600"><PieChart size={12} fill="currentColor" opacity="0.5" /><BarChart3 size={10} className="-ml-1" /></div> },
    { 
      title: "Purchasing (Current)", 
      icon: <ShoppingCart size={14} className="text-blue-600" />, 
      active: true,
      hasSubItems: true,
      isOpen: isPurchasingOpen,
      onToggle: () => setIsPurchasingOpen(!isPurchasingOpen)
    },
    { title: "Widget Gallery", icon: <div className="flex items-center text-slate-600"><Settings size={12} /><User size={8} className="text-green-600 -ml-1" /></div>, isFolder: true, isOpen: isGalleryOpen, onToggle: () => setIsGalleryOpen(!isGalleryOpen) },
  ];

  const purchasingSubItems = [
    { title: "Purchase Request", path: "/purchasing/purchase-request" },
    { title: "Purchase Quotation", path: "/purchasing/purchase-quotation" },
    { title: "Purchase Order", path: "/purchasing/purchase-order" },
    { title: "Goods Receipt PO", path: "/purchasing/goods-receipt-po" },
    { title: "Goods Return Request" },
    { title: "Goods Return" },
    { title: "A/P Down Payment Request" },
    { title: "A/P Down Payment Invoice" },
    { title: "A/P Invoice" },
    { title: "A/P Credit Memo" },
    { title: "A/P Reserve Invoice" },
    { title: "Recurring Transactions" },
    { title: "Recurring Transaction Templates" },
    { title: "Landed Costs" },
    { title: "Document Printing" },
    { title: "Purchasing Reports", isFolder: true },
  ];

  const galleryItems = [
    { title: "Common Functions", icon: <LayoutDashboard size={14} className="text-slate-500" /> },
    { title: "Open Documents", icon: <div className="relative"><FileText size={14} className="text-slate-400" /><div className="absolute top-1 right-0 text-green-600"><Zap size={8} fill="currentColor" /></div></div> },
    { title: "Messages and Alerts", icon: <div className="w-full h-full bg-red-700 flex items-center justify-center"><Zap size={10} className="text-white fill-white" /></div> },
    { title: "Browser", icon: <Globe size={14} className="text-blue-400" /> },
    { title: "KPI Widget", icon: <BarChart3 size={14} className="text-blue-300" /> },
    { title: "Dashboard Widget", icon: <PieChart size={14} className="text-orange-400" /> },
  ];

  return (
    <div className="flex-1 bg-[#eeeeee] overflow-y-auto no-scrollbar">
      <div className="flex flex-col">
         {cockpitItems.map((item, idx) => (
           <React.Fragment key={idx}>
             <div 
               className={cn(
                 "flex items-center gap-2 px-3 py-1.5 text-[11px] font-semibold border-b border-slate-300 cursor-pointer hover:bg-slate-300/50 transition-colors",
                 item.active ? "bg-[#ffb300] text-slate-900 border-white/20" : "text-slate-800"
               )}
               onClick={item.onToggle}
             >
               <div className="w-5 h-5 flex items-center justify-center shrink-0">
                 {item.icon}
               </div>
               <span className="flex-1">{item.title}</span>
             </div>

             {item.hasSubItems && item.isOpen && (
               <div className="bg-[#e9e9e9]">
                 {purchasingSubItems.map((sItem, sIdx) => (
                   <Link 
                     key={sIdx} 
                     to={sItem.path || "#"}
                     className="flex items-center gap-2 px-8 py-1.5 text-[11px] text-slate-800 border-b border-white hover:bg-white transition-colors cursor-pointer group no-underline"
                   >
                      <div className="w-4 h-3.5 border border-slate-400 bg-white/50 flex flex-col gap-[1px] p-[1px] shrink-0">
                        <div className="h-[2px] w-full bg-blue-300/60" />
                        <div className="h-[2px] w-[70%] bg-blue-300/60" />
                      </div>
                      <span className="flex-1 group-hover:underline">{sItem.title}</span>
                      {sItem.isFolder && <Folder size={12} className="text-blue-500 fill-current opacity-40" />}
                   </Link>
                 ))}
               </div>
             )}

             {item.isFolder && item.isOpen && (
               <div className="bg-[#e2e2e2]">
                 <div className="flex items-center gap-2 px-6 py-1.5 text-[11px] text-slate-700 font-bold border-b border-slate-300">
                    <Folder size={14} className="text-blue-500 fill-current opacity-40 shrink-0" />
                    General Widgets
                 </div>
                 {galleryItems.map((gItem, gIdx) => (
                    <div key={gIdx} className="flex items-center gap-2 px-10 py-1 text-[11px] text-slate-800 border-b border-slate-200 last:border-b-transparent hover:bg-slate-300/30 cursor-pointer">
                      <div className="w-5 h-5 flex items-center justify-center border border-slate-400 bg-white shadow-sm shrink-0">
                        {gItem.icon}
                      </div>
                      <span className="flex-1">{gItem.title}</span>
                    </div>
                 ))}
               </div>
             )}
           </React.Fragment>
         ))}
      </div>
    </div>
  );
};

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('modules'); // 'cockpit', 'modules', 'drag'

  const VerticalTab = ({ id, label, active }) => (
    <div 
      onClick={() => setActiveTab(id)}
      className={cn(
        "flex flex-col items-center justify-center w-[30px] border-r border-b border-slate-300 py-10 cursor-pointer transition-colors relative",
        active ? "bg-white" : "bg-[#c0c0c0]"
      )}
    >
      <span 
        className={cn(
          "text-[10px] whitespace-nowrap font-bold",
          active ? "text-slate-900" : "text-slate-600"
        )}
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        {label}
      </span>
      {active && <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-blue-500 shadow-[0_0_5px_blue]" />}
    </div>
  );

  return (
    <aside className="w-full h-full bg-[#d1d1d1] border-r border-slate-300 flex select-none overflow-hidden">
      {/* Vertical Tabs Bar */}
      <div className="w-[30px] flex flex-col bg-[#c0c0c0] border-r border-slate-400">
        <VerticalTab id="cockpit" label="My Cockpit" active={activeTab === 'cockpit'} />
        <VerticalTab id="modules" label="Modules" active={activeTab === 'modules'} />
        <VerticalTab id="drag" label="Drag & Relate" active={activeTab === 'drag'} />
        <div className="flex-1 bg-[#c0c0c0]" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top collapse button */}
        <div className="h-4 bg-[#e0e0e0] flex items-center justify-end px-2 border-b border-slate-300">
          <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-blue-900 rotate-90 scale-75 cursor-pointer" />
        </div>

        {activeTab === 'cockpit' && <CockpitView />}
        
        {activeTab === 'modules' && (
          <nav className="flex-1 overflow-y-auto no-scrollbar">
            {menuItems.map((item, idx) => (
              <SidebarNode key={idx} item={item} />
            ))}
          </nav>
        )}

        {activeTab === 'drag' && (
          <div className="flex-1 bg-[#e0e0e0] flex items-center justify-center text-[11px] text-slate-500 italic">
            Drag & Relate View
          </div>
        )}
      </div>
    </aside>
  );
}
