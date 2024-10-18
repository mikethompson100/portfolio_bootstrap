// Manage navigation highlighting and active classes

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            // Remove all active classes from nav-link items
            document.querySelector('.nav-link.active').classList.remove('active');
            // Add an 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});