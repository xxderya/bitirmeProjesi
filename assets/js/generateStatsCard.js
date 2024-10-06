const statsContainer = document.getElementById("stats");

function generateStatsCards() {
  const stats = [
    { title: "Stat 1", count: 123 },
    { title: "Stat 2", count: 1 },
    { title: "Stat 3", count: 13 },
    { title: "Stat 4", count: 133 },
  ];

  const statsHTML = stats.map(element => `
    <div class="font-bold bg-white text-center p-3">
      <h1 class="text-primary mb-3">${element.title}</h1>
      <p class="text-black">${element.count}</p>
    </div>
  `).join('');

  statsContainer.innerHTML = statsHTML;
}

generateStatsCards();
