document.addEventListener("DOMContentLoaded", () => {
    // =====================
    // INIT APP
    // =====================
    loadTheme();
    renderTasks();

    // =====================
    // THEME TOGGLE
    // =====================
    const themeBtn = document.getElementById("themeToggle");

    if (themeBtn) {
        themeBtn.addEventListener("click", toggleTheme);
    }

    // =====================
    // ADD TASK FORM
    // =====================
    const form = document.getElementById("taskForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const title = document.getElementById("taskTitle").value;
            const priority = document.getElementById("taskPriority").value;

            const error = validateTask(title);
            if (error) {
                alert(error);
                return;
            }

            addTask(title, priority);
            renderTasks();

            form.reset();
            document.getElementById("modal").classList.add("hidden");
        });
    }

    // =====================
    // BOARD ACTIONS (DELETE + MOVE)
    // =====================
    const board = document.querySelector(".board-wrapper");

    if (board) {
        board.addEventListener("click", (e) => {
            const card = e.target.closest(".task-card");
            if (!card) return;

            const id = Number(card.dataset.id);

            if (e.target.classList.contains("delete")) {
                deleteTask(id);
                renderTasks();
            }

            if (e.target.classList.contains("move")) {
                moveTask(id);
                renderTasks();
            }
        });
    }

    // =====================
    // SEARCH FILTER
    // =====================
    const searchBar = document.getElementById("searchBar");
    const filter = document.getElementById("filter");

    if (searchBar && filter) {
        searchBar.addEventListener("input", () => {
            applyFilters(searchBar.value, filter.value);
        });

        filter.addEventListener("change", () => {
            applyFilters(searchBar.value, filter.value);
        });
    }

    // =====================
    // MODAL CONTROL
    // =====================
    const modal = document.getElementById("modal");
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");

    if (openBtn && modal) {
        openBtn.addEventListener("click", () => {
            modal.classList.remove("hidden");
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.classList.add("hidden");
        });
    }
});