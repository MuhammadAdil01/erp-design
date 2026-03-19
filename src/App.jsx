import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import { WindowProvider } from './context/WindowContext';
import WindowLayer from './components/WindowLayer';
import EmployeeMaster from './pages/human-resources/EmployeeMaster';
import TimeSheets from './pages/human-resources/TimeSheets';
import HRReports from './pages/human-resources/HRReports';
import FamilyDetails from './pages/human-resources/FamilyDetails';
import FinalSettlement from './pages/human-resources/FinalSettlement';
import NextOfKin from './pages/human-resources/NextOfKin';
import ChartOfAccounts from './pages/financials/ChartOfAccounts';
import JournalEntry from './pages/financials/JournalEntry';
import BudgetSetup from './pages/financials/BudgetSetup';
import FixedAssets from './pages/financials/FixedAssets';
import CostAccounting from './pages/financials/CostAccounting';
import FinancialReports from './pages/financials/FinancialReports';
import EditChartOfAccounts from './pages/financials/EditChartOfAccounts';
import PostingTemplates from './pages/financials/PostingTemplates';
import RecurringPostings from './pages/financials/RecurringPostings';
import InternalReconciliations from './pages/financials/InternalReconciliations';
import PMSRate from './pages/financials/PMSRate';
import TADA from './pages/human-resources/TADA';
import ChooseCompany from './pages/ChooseCompany';
import ExchangeRatesIndexes from './pages/ExchangeRatesIndexes';
import CompanyDetails from './pages/administration/CompanyDetails';
import GeneralSettings from './pages/administration/GeneralSettings';
import PostingPeriods from './pages/administration/PostingPeriods';
import EmployeeCurrentInfo from './pages/payroll/EmployeeCurrentInfo';

import {
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  ArrowUpRight,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

const DashboardHome = () => {
  const location = useLocation();
  const subMenu = location.state?.subMenu;
  const categoryTitle = location.state?.categoryTitle;

  if (!subMenu) {
    return (
<>
</>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-baseline gap-4">
        <h2 className="text-3xl font-bold text-slate-800">{categoryTitle}</h2>
        <div className="h-1 flex-1 bg-slate-100 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subMenu.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className="group relative bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <ArrowRight size={80} className="-rotate-45" />
            </div>

            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <ArrowRight size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium">Access and manage {item.title.toLowerCase()} configurations</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <WindowProvider>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/hr/employees" element={<EmployeeMaster />} />
            <Route path="/hr/timesheets" element={<TimeSheets />} />
            <Route path="/hr/reports" element={<HRReports />} />
            <Route path="/hr/family-details" element={<FamilyDetails />} />
            <Route path="/hr/final-settlement" element={<FinalSettlement />} />
            <Route path="/hr/next-of-kin" element={<NextOfKin />} />

            {/* Financials */}
            <Route path="/financials/charts-of-accounts" element={<ChartOfAccounts />} />
            <Route path="/financials/journel-entry" element={<JournalEntry />} />
            <Route path="/financials/budget-setup" element={<BudgetSetup />} />
            <Route path="/financials/fixed-assets" element={<FixedAssets />} />
            <Route path="/financials/cost-accounting" element={<CostAccounting />} />
            <Route path="/financials/financial-reports" element={<FinancialReports />} />
            <Route path="/financials/edit-charts-of-accounts" element={<EditChartOfAccounts />} />
            <Route path="/financials/posting-templates" element={<PostingTemplates />} />
            <Route path="/financials/recurring-postings" element={<RecurringPostings />} />
            <Route path="/financials/internal-reconcilations" element={<InternalReconciliations />} />
            <Route path="/financials/pms-rate" element={<PMSRate />} />

            {/* HR Expansion */}
            <Route path="/hr/ta-da" element={<TADA />} />
            
            {/* Administration */}
            <Route path="/choose-company" element={<ChooseCompany />} />
            <Route path="/exchange-rates-indexes" element={<ExchangeRatesIndexes />} />
            <Route path="/administration/system-initialization/company-details" element={<CompanyDetails />} />
            <Route path="/administration/system-initialization/general-settings" element={<GeneralSettings />} />
            <Route path="/administration/system-initialization/posting-periods" element={<PostingPeriods />} />
            <Route path="/payroll/masters/employee-current-info" element={<EmployeeCurrentInfo />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </DashboardLayout>
        <WindowLayer />
      </WindowProvider>
    </Router>
  );
}

export default App;
