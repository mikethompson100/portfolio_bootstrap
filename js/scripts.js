// Manage navigation highlighting and active classes

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            // Remove the 'active' class from all nav links before assigning next active element
            document.querySelectorAll('.nav-link.active').forEach(activeLink => {
                activeLink.classList.remove('active');
            });

            // Add an 'active' class to the clicked link
            this.classList.add('active');
        });
    });
});
