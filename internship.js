        // Animate cards on load
        document.addEventListener("DOMContentLoaded", function () {
            setTimeout(() => {
                document.querySelectorAll('.internship-card').forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, index * 100);
                });
            }, 300);

            // Filter functionality
            document.querySelectorAll('.filter-btn').forEach(button => {
                button.addEventListener('click', function () {
                    // Set active state
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');

                    // Get filter value
                    const filterValue = this.getAttribute('data-filter');

                    // Get all cards
                    const cards = document.querySelectorAll('.internship-card');

                    // Loop through cards and show/hide based on filter
                    cards.forEach(card => {
                        const type = card.getAttribute('data-type');
                        const category = card.getAttribute('data-category');

                        if (
                            filterValue === 'all' ||
                            (filterValue === type) ||
                            (filterValue === category)
                        ) {
                            card.style.display = 'flex';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });

            // Apply button alert
            document.querySelectorAll('.apply-btn').forEach(button => {
                button.addEventListener('click', function () {
                    alert('✨ Thank you for your interest! Application system coming soon.');
                });
            });
        });