document.addEventListener('DOMContentLoaded', function() {
    const techTiles = document.querySelectorAll('.tech-tile');
    const projectsSections = document.querySelectorAll('.projects-section');

    techTiles.forEach(tile => {
        tile.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const tech = this.dataset.tech;

            // Hide all project sections
            projectsSections.forEach(section => {
                section.style.display = 'none';
            });

            // Show the selected project section
            const selectedSection = document.getElementById(`${tech}-projects`);
            if (selectedSection) {
                selectedSection.style.display = 'block';
            }

            // Scroll to the projects section
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
        });
    });
});
