// JavaScript to handle navigation and content rendering

const contentArea = document.getElementById('content-area');
const content = {
  vanillajavascript: 'Welcome to the vanilla javascript!',
  jquery: 'Welcome to the vanilla jquery!',
  cssgrid: 'cssgrid is this page',
  cssflexbox: 'cssflexbox is this page',
  scss: 'scss is this page',
  less: 'less is this page',
  wcag: 'wcag page',
  jawsnvda: 'jawsnvda page',
  wave: 'wave page',
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

document.querySelector('.home').addEventListener('click', (e) => {
    e.preventDefault();
    contentArea.innerHTML = content.home;
});

document.querySelectorAll('nav .dropdown-menu a.dropdown-item').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const selectedContent = link.getAttribute('data-content');
    contentArea.innerHTML = content[selectedContent];
  });
});