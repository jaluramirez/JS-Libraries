// glide
new Glide('.glide').mount()


// AOS
AOS.init();


// gradient animation
new Granim({
    element: '#gallery-gradient',
    direction: 'diagonal',
    states: {
        "default-state": {
            gradients: [
                ['#00c6ff', '#0072ff'],
                ['#43cea2', '#185a9d'],
                ['#f6d365', '#fda085'],
                ['#4facfe', '#00f2fe']
            ]
        }
    }
});


// cleave
var cleave = new Cleave('#phone', {
    delimiter: '-',
    blocks: [3, 3, 4]
});

var travelDate = new Cleave('#travel-date', {
    date: true,
    delimiter: '-',
    datePattern: ['Y', 'm', 'd']
});


// burger menu
let burgerIcon = document.getElementById("burger");
let burgerMenu = document.querySelector("header nav");

burgerIcon.addEventListener("click", () => {
    burgerMenu.classList.toggle("slide");
    burgerIcon.classList.toggle("active");
    document.body.classList.toggle("bmScroll");
});

// close menu when link is clicked
let navLinks = document.querySelectorAll("header nav a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        burgerMenu.classList.remove("slide");
        burgerIcon.classList.remove("active");
        document.body.classList.remove("bmScroll");
    });
});

