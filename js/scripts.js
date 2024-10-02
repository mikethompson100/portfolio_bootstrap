// JavaScript to handle navigation and content rendering

const contentArea = document.getElementById('content-area');
const content = {
    accordion: `
            <h2>Accordion</h2>
            <div class="row ms-0">
                <div class="col-12 border">
                        <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                    aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
                                    plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                                    custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                                    within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                                    custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                                    within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we use to style each element. These classes control the overall
                                    appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                                    custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                                    within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`,
    modal: 'Welcome to the modal!',
    cssgrid: 'cssgrid is this page',
    cssflexbox: 'cssflexbox is this page',
    scss: 'scss is this page',
    less: 'less is this page',
    accessibility: 'wcag page - WCAG Certification - JAWS/NVDA - Wave Chrome Extension',
    home: `<div class="row ms-0">
                <div class="col-12 border">
                    <h3>1</h3>
                    <p class="text-center"><span class="xs">col-12</span></p>
                </div>
            </div>
            <div class="row ms-0">
                <div class="col-12 col-sm-6 col-md-4 offset-md-4 col-lg-8 offset-lg-0 col-xl-6 border">
                    <h3>2</h3>
                    <p class="text-center">
                        <span class="xs">col-12</span> 
                        <span class="sm">col-sm-6</span> 
                        <span class="md">col-md-4 offset-md-4</span> 
                        <span class="lg">col-lg-8</span> 
                        <span class="xl">col-xl-6 </span>
                    </p>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-6 border">
                    <h3>3</h3>
                    <p class="text-center">
                        <span class="xs">col-12</span> 
                        <span class="sm">col-sm-6</span> 
                        <span class="md">col-md-4</span> 
                        <span class="lg">col-lg-4</span> 
                        <span class="xl">col-xl-6</span></p>
                </div>
            </div>
            <div class="row ms-0">
                <div class="col-12 col-md-4 border">
                    <h3>4</h3>
                    <p class="text-center"><span class="xs">col-12</span> <span
                        class="md">col-md-4</span></p>
                </div>
                <div class="col-12 col-md-4 border">
                    <h3>5</h3>
                    <p class="text-center"><span class="xs">col-12</span> <span
                        class="md">col-md-4</span></p>
                </div>
                <div class="col-12 col-md-4 border">
                    <h3>6</h3>
                    <p class="text-center"><span class="xs">col-12</span> <span
                        class="md">col-md-4</span></p>
                </div>
            </div>
            <div class="row ms-0">
                <div class="col-12 col-md-3 border">
                    <h3>7</h3>
                    <p class="text-center"><span class="xs">col-12</span> <span
                        class="md">col-md-3</span></p>
                </div>
                <div class="col-12 col-md-3 border">
                    <h3>8</h3>
                    <p class="text-center"><span class="xs">col-12</span> <span
                        class="md">col-md-3</span></p>
                </div>
                <div class="col-12 col-md-3 border">
                    <h3>9</h3>
                    <p class="text-center"><span class="xs">col-12</span> <span
                        class="md">col-md-3</span></p>
                </div>
                <div class="col-12 col-md-3 border">
                    <h3>10</h3>
                    <p class="text-center"><span class="xs">col-12</span> <span
                        class="md">col-md-3</span></p>
                </div>
            </div>`
};

// Add content to page after page load
document.addEventListener('DOMContentLoaded', function () {
    contentArea.innerHTML = content.home;
});

// Add content to home page when "Home" is clicked in the nav bar
document.querySelector('.home').addEventListener('click', (e) => {
    e.preventDefault();
    contentArea.innerHTML = content.home;
});

// Creating dataFill class for navigation items that trigger content rendering
document.querySelectorAll('.dataFill').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedContent = link.getAttribute('data-content');
        contentArea.innerHTML = content[selectedContent];
    });
});

// Manage navigation highlighting and active classes
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


