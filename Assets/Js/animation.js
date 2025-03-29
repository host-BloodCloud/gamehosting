document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".filter-btn");
    const cards = document.querySelectorAll(".card");

    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            buttons.forEach((btn) => btn.classList.remove("active"));
            this.classList.add("active");

            const filter = this.getAttribute("data-filter");

            // Hide all cards first but keep them in the layout
            cards.forEach((card) => {
                card.style.opacity = "0";
                card.style.transform = "translateY(10px)";
                card.style.visibility = "hidden";
            });

            // Show filtered cards **instantly** without blank space
            setTimeout(() => {
                cards.forEach((card) => {
                    if (filter === "all" || card.getAttribute("data-category").includes(filter)) {
                        card.style.display = "block";
                        setTimeout(() => {
                            card.style.opacity = "1";
                            card.style.transform = "translateY(0)";
                            card.style.visibility = "visible";
                        }, 50); // Tiny delay for a smooth fade-in
                    } else {
                        card.style.display = "none"; // Hide non-matching cards
                    }
                });
            }, 50); // Instant switch with a quick fade-in
        });
    });

    // Initial fade-in for all cards on page load
    setTimeout(() => {
        cards.forEach((card) => {
            card.style.display = "block";
            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
                card.style.visibility = "visible";
            }, 50);
        });
    }, 50);
});