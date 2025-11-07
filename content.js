(() => {
  // Prevent multiple instances
  if (document.getElementById('indeedQuickSearchBar')) return;

  // Create floating search UI
  const container = document.createElement('div');
  container.id = 'indeedQuickSearchBar';
  container.innerHTML = `
    <input 
      type="text" 
      id="jobSearchInput" 
      placeholder="Search by role, company, or location..." 
      autocomplete="on"
    />
  `;
  document.body.appendChild(container);

  const searchInput = document.getElementById('jobSearchInput');

  // Live filtering logic
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    // Target all applied job cards
    const jobCards = document.querySelectorAll('.atw-AppCard');

    jobCards.forEach(card => {
      const role = card.querySelector('.atw-JobInfo-container [role="heading"]')?.innerText.toLowerCase() || '';
      const company = card.querySelector('.atw-JobInfo-companyLocation span:nth-child(1)')?.innerText.toLowerCase() || '';
      const location = card.querySelector('.atw-JobInfo-companyLocation span:nth-child(2)')?.innerText.toLowerCase() || '';

      card.style.display =
        role.includes(query) || company.includes(query) || location.includes(query)
          ? ''
          : 'none';
    });
  });

  // Optional: Make it draggable
  let offsetX = 0, offsetY = 0, isDragging = false;

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - container.offsetLeft;
    offsetY = e.clientY - container.offsetTop;
    container.style.cursor = 'grabbing';
    container.style.transition = 'none';
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
    container.style.transition = 'box-shadow 0.2s ease';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    container.style.left = `${e.clientX - offsetX}px`;
    container.style.top = `${e.clientY - offsetY}px`;
  });
})();
