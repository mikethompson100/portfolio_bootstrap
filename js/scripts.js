// Manage navigation highlighting and active classes
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelector('.nav-link.active').classList.remove('active'); // Remove all active classes from nav-link items
            this.classList.add('active'); // Add an 'active' class to the clicked link
        });
    });
});

// Hamburger menu icons toggling in and out of view
const toggler = document.querySelector('.navbar .navbar-toggler');
const nav_logos = document.getElementById('nav-logos');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Immediately hides the nav_logos element when the menu button is clicked
toggler.addEventListener('click', function () {
    nav_logos.setAttribute("style", "display: none !important;");
});

// Waits for the collapse event to finish before displaying logos again
navbarCollapse.addEventListener('hidden.bs.collapse', function () {
    nav_logos.setAttribute("style", "display: flex !important;");
});
