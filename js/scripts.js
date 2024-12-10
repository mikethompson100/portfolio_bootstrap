// Manage navigation highlighting and active classes

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            document.querySelector('.nav-link.active').classList.remove('active'); // Remove all active classes from nav-link items
            this.classList.add('active'); // Add an 'active' class to the clicked link
        });
    });
});

/* const toggler = document.querySelector('.navbar .navbar-toggler');
toggler.addEventListener('click', function() {
     if ($('#navbarNav').hasClass('show')) {
        $('#nav-logos').css('display', 'none');
    }
    else $('#nav-logos').css('display', 'flex');
   
}); 
document.addEventListener('DOMContentLoaded', function () {
const toggler = document.querySelector('.navbar .navbar-toggler');
const navLogos = document.querySelector('#nav-logos');

toggler.addEventListener('click', function () {
    if (this.classList.contains('collapsed')) {
        console.log(navLogos.style);
        navLogos.style.display = 'flex !important;';
    } else if (!this.classList.contains('collapsed')) { 
        console.log(navLogos.style);
        navLogos.style.display = 'none !important;';
    }
    else alert('ERROR');
})
});*/


