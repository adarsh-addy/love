export function renderTransactionsList(transactions, container) {
  container.innerHTML = `
    <div class="transactions-header">
      <h2>Recent Transactions</h2>
    </div>
    ${transactions.map(transaction => `
      <div class="transaction-item">
        <div class="transaction-info">
          <div class="transaction-icon">
            <i data-lucide="${transaction.icon}"></i>
          </div>
          <div class="transaction-details">
            <h3>${transaction.name}</h3>
            <div class="transaction-category">${transaction.category}</div>
          </div>
        </div>
        <div class="transaction-meta">
          <span class="transaction-amount ${transaction.amount > 0 ? 'positive' : ''}">
            ${transaction.amount > 0 ? '+' : ''}$${Math.abs(transaction.amount).toFixed(2)}
          </span>
          <span class="transaction-date">${transaction.date}</span>
        </div>
      </div>
    `).join('')}
  `;
}