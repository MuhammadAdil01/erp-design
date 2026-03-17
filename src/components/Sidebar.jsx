import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Folder, FileText } from 'lucide-react';
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

export default function Sidebar() {
  return (
    <aside className="w-full h-full bg-[#d1d1d1] border-r border-slate-300 flex flex-col overflow-y-auto no-scrollbar select-none">
      <nav className="flex-1">
        {menuItems.map((item, idx) => (
          <SidebarNode key={idx} item={item} />
        ))}
      </nav>
    </aside>
  );
}
