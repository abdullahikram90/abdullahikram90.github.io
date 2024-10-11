const toggleButton = document.getElementById('dark-mode-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Check local storage for dark mode preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
    sunIcon.style.display = 'none'; // Hide sun icon
    moonIcon.style.display = 'inline'; // Show moon icon
}
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const navbarLinks = document.querySelectorAll('.navbar li a');
    navbarLinks.forEach(link => {
        link.classList.toggle('dark-mode');
    });
    // Toggle icon visibility
    if (document.body.classList.contains('dark-mode')) {
        sunIcon.style.display = 'none'; // Hide sun icon
        moonIcon.style.display = 'inline'; // Show moon icon
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        sunIcon.style.display = 'inline'; // Show sun icon
        moonIcon.style.display = 'none'; // Hide moon icon
        localStorage.removeItem('dark-mode');
    }
});
/*---------------animation-----------*/
document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll('.project');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Keep observing to allow re-animation when it leaves the viewport
            } else {
                // Optionally remove the animation class when it leaves
                entry.target.classList.remove('animate');
            }
        });
    });
    projects.forEach(project => {
        observer.observe(project);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed(".multiple-text", {
      strings: ["Abdullah Ikram", "Frontend Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const options = {
      root: null, // Use the viewport as the container
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add the visible class when the element is in view
          entry.target.classList.add('visible');
        } else {
          // Remove the visible class when the element is out of view
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    // Observe both ul elements
    const aboutContentUl = document.querySelector('.about-content ul');
    const aboutSkillsUl = document.querySelector('.about-skills ul');

    observer.observe(aboutContentUl);
    observer.observe(aboutSkillsUl);
  });


