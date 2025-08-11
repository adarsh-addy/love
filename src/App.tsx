import React from 'react';
import { 
  Wallet, 
  CreditCard, 
  PieChart, 
  ArrowUpRight,
  Bell,
  User,
  Settings,
  LogOut
} from 'lucide-react';
import { DashboardCard } from './components/DashboardCard';
import { TransactionList } from './components/TransactionList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4">
        <div className="flex items-center space-x-2 mb-8">
          <Wallet className="w-8 h-8 text-blue-600" />
          <span className="text-xl font-bold text-gray-800">BankDash</span>
        </div>
        
        <nav className="space-y-2">
          {[
            { icon: PieChart, text: 'Dashboard', active: true },
            { icon: CreditCard, text: 'Cards' },
            { icon: ArrowUpRight, text: 'Transactions' },
            { icon: Settings, text: 'Settings' },
          ].map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left
                ${item.active 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'}`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.text}</span>
            </button>
          ))}
        </nav>

        <button className="absolute bottom-4 left-4 flex items-center space-x-3 text-gray-600 hover:text-red-600">
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-gray-600" />
              </div>
              <span className="text-sm font-medium text-gray-700">John Doe</span>
            </button>
          </div>
        </header>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <DashboardCard
            title="Total Balance"
            value="$12,560.00"
            icon={<Wallet className="w-5 h-5" />}
            trend={{ value: 2.5, isPositive: true }}
          />
          <DashboardCard
            title="Monthly Spending"
            value="$3,460.00"
            icon={<CreditCard className="w-5 h-5" />}
            trend={{ value: 4.2, isPositive: false }}
          />
          <DashboardCard
            title="Monthly Savings"
            value="$2,890.00"
            icon={<PieChart className="w-5 h-5" />}
            trend={{ value: 8.1, isPositive: true }}
          />
        </div>

        {/* Transactions */}
        <TransactionList />
      </div>
    </div>
  );
}

export default App;