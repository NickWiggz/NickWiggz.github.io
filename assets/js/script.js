document.addEventListener('DOMContentLoaded', function() {
    const techTiles = document.querySelectorAll('.tech-tile');
    const projectsSections = document.querySelectorAll('.projects-section');

    techTiles.forEach(tile => {
        tile.addEventListener('click', function(event) {
            event.preventDefault(); 
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

            // Scroll to the projects section, offset slightly for the fixed nav bar
            const projectsHeader = document.getElementById('projects');
            const headerOffset = 80; 
            const elementPosition = projectsHeader.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});
