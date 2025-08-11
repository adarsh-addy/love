export function renderDashboardCards(cards, container) {
  container.innerHTML = cards.map(card => `
    <div class="dashboard-card">
      <div class="card-header">
        <div class="card-title">${card.title}</div>
        <i data-lucide="${card.icon}"></i>
      </div>
      <div class="card-value">
        $${card.value.toFixed(2)}
        ${card.trend ? `
          <span class="trend ${card.trend.isPositive ? 'positive' : 'negative'}">
            ${card.trend.isPositive ? '↑' : '↓'} ${Math.abs(card.trend.value)}%
          </span>
        ` : ''}
      </div>
    </div>
  `).join('');
}