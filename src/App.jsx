import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import EmployeeMaster from './pages/EmployeeMaster';
import TimeSheets from './pages/TimeSheets';
import HRReports from './pages/HRReports';
import FamilyDetails from './pages/FamilyDetails';
import FinalSettlement from './pages/FinalSettlement';
import NextOfKin from './pages/NextOfKin';

// Financials
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
import LeaveManagement from './pages/LeaveManagement';
import TADA from './pages/TADA';
import Deductions from './pages/Deductions';
import LoansAdvances from './pages/LoansAdvances';
import {
  Users,
  TrendingUp,
  DollarSign,
  Clock,
  ArrowUpRight
} from 'lucide-react';

const StatCard = ({ title, value, icon, trend, color }) => (
  <div className="glass-card p-6 rounded-3xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl bg-${color}/10 text-${color}`}>
        {icon}
      </div>
      <div className="flex items-center gap-1 text-green-500 bg-green-50 px-2 py-1 rounded-full text-xs font-bold">
        <ArrowUpRight size={14} />
        {trend}
      </div>
    </div>
    <h3 className="text-slate-500 text-sm font-medium mb-1">{title}</h3>
    <p className="text-2xl font-bold text-slate-800">{value}</p>
  </div>
);

const DashboardHome = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <StatCard
        title="Total Employees"
        value="1,248"
        icon={<Users size={24} />}
        trend="12%"
        color="primary"
      />
      <StatCard
        title="Avg Performance"
        value="94.2%"
        icon={<TrendingUp size={24} />}
        trend="5.4%"
        color="blue-500"
      />
      <StatCard
        title="Total Payroll"
        value="$54,230"
        icon={<DollarSign size={24} />}
        trend="2.1%"
        color="green-500"
      />
      <StatCard
        title="Active Hours"
        value="18,540"
        icon={<Clock size={24} />}
        trend="8%"
        color="purple-500"
      />
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 glass-card rounded-3xl p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Recruitment Overview</h2>
            <p className="text-sm text-slate-500">Track your hiring progress</p>
          </div>
          <button className="text-sm font-bold text-primary hover:underline">View All</button>
        </div>

        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100 transition-all hover:bg-white hover:shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary">
                  UX
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">Senior Product Designer</p>
                  <p className="text-xs text-slate-500">Design Team • Full-time</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-slate-800">12 Applicants</p>
                <p className="text-xs text-green-500 font-medium">Active</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-3xl p-8">
        <h2 className="text-xl font-bold text-slate-800 mb-6">Profile Completion</h2>
        <div className="flex flex-col items-center justify-center py-6">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="stroke-slate-100"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="stroke-primary"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="75, 100"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-slate-800">75%</span>
            </div>
          </div>
          <p className="mt-8 text-sm text-center text-slate-500 leading-relaxed px-4">
            Your profile is almost complete! Finish the remaining tasks to reach 100%.
          </p>
          <button className="mt-6 w-full py-3 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
            Complete Now
          </button>
        </div>
      </div>
    </div>
  </>
);

function App() {
  return (
    <Router>
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
          <Route path="/hr/leave-management" element={<LeaveManagement />} />
          <Route path="/hr/ta-da" element={<TADA />} />
          <Route path="/hr/deductions" element={<Deductions />} />
          <Route path="/hr/loans-advances" element={<LoansAdvances />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
