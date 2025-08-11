import React from 'react';
import { ArrowDownLeft, ArrowUpRight, Coffee, ShoppingBag, Smartphone } from 'lucide-react';

const transactions = [
  {
    id: 1,
    name: 'Coffee Shop',
    amount: -4.50,
    date: '2024-03-15',
    icon: Coffee,
    category: 'Food & Drinks'
  },
  {
    id: 2,
    name: 'Salary Deposit',
    amount: 3200.00,
    date: '2024-03-14',
    icon: ArrowDownLeft,
    category: 'Income'
  },
  {
    id: 3,
    name: 'Online Shopping',
    amount: -125.30,
    date: '2024-03-13',
    icon: ShoppingBag,
    category: 'Shopping'
  },
  {
    id: 4,
    name: 'Phone Bill',
    amount: -45.00,
    date: '2024-03-12',
    icon: Smartphone,
    category: 'Bills'
  }
];

export function TransactionList() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">Recent Transactions</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {transactions.map((transaction) => {
          const Icon = transaction.icon;
          return (
            <div key={transaction.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Icon className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{transaction.name}</p>
                  <p className="text-sm text-gray-500">{transaction.category}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`font-medium ${transaction.amount > 0 ? 'text-green-600' : 'text-gray-800'}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500">{transaction.date}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}