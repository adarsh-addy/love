import { dashboardCards } from './data/dashboardCards.js';
import { transactions } from './data/transactions.js';
import { renderDashboardCards } from './components/DashboardCards.js';
import { renderTransactionsList } from './components/TransactionsList.js';
import { requireAuth, logout } from './utils/auth.js';

// Check authentication before initializing
requireAuth();

// Initialize Lucide icons
lucide.createIcons();

// Render dashboard components
document.addEventListener('DOMContentLoaded', () => {
  const dashboardCardsContainer = document.getElementById('dashboardCards');
  const transactionsListContainer = document.getElementById('transactionsList');
  const logoutBtn = document.querySelector('.logout-btn');

  renderDashboardCards(dashboardCards, dashboardCardsContainer);
  renderTransactionsList(transactions, transactionsListContainer);

  // Re-initialize icons after dynamic content is loaded
  lucide.createIcons();

  // Handle navigation
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // Handle logout
  logoutBtn?.addEventListener('click', logout);
});