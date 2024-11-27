// Manage navigation highlighting and active classes

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelector('.nav-link.active').classList.remove('active'); // Remove all active classes from nav-link items
            this.classList.add('active'); // Add an 'active' class to the clicked link
        });
    });
});


  