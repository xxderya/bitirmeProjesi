const statsContainer = document.getElementById('stats');
function generateStatsCards() {
  const stats = [
    { title: 'Course', count: 325 },
    { title: 'Work Out', count: 405 },
    { title: 'Working Hour', count: 305 },
    { title: 'Happy Client', count: 705 },
  ];

  const statsHTML = stats
    .map(
      (element) => `
    <div class="font-bold bg-white text-center p-6">
      <h1 class="text-primary mb-3 text-3xl">${element.count}</h1>
      <p class="text-gray-900 font-extrabold text-xl">${element.title}</p>
    </div>
  `
    )
    .join('');

  statsContainer.innerHTML = statsHTML;
}

generateStatsCards();
