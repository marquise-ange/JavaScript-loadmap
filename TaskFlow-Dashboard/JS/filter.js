function applyFilters(searchValue, priorityValue) {
  document.querySelectorAll(".task-card").forEach(card => {
    const text = card.querySelector(".title").textContent.toLowerCase();
    const matchSearch = text.includes(searchValue.toLowerCase());

    const matchPriority =
      priorityValue === "all" || card.classList.contains(priorityValue);

    card.style.display = matchSearch && matchPriority ? "block" : "none";
  });
}