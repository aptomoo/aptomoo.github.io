// Toggle icon navbar
let menuIc = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIc.onclick = () => {
    menuIc.classList.toggle('bx-x-circle');
    navbar.classList.toggle('active');
}

// Back to top
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});

// Scroll section active

let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLink.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIc.classList.remove('bx-x-circle');
    navbar.classList.remove('active');
};

// Handle form to google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbyo1ef97orvZpOmmdTZpqR4Z_BIlTpqrmH4c1GM5MhgXkbexNmCjoueqeaC3MYxirQgwQ/exec';
const form = document.forms['submit-to-google-sheet'];
const btnSend = document.querySelector('.btn-send');
const buttonLoad = document.querySelector('.buttonload');
const myAlert = document.querySelector('.alert');

form.addEventListener('submit', e => {
    e.preventDefault();

    // Tampilkan button "Loading" dan sembunyikan button "Send Message"
    buttonLoad.style.display = 'inline-block';
    btnSend.style.display = 'none';

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response);

            // Sembunyikan button "Loading" setelah berhasil
            buttonLoad.style.display = 'none';
            btnSend.style.display = 'inline-block';

            // Kosongkan input form
            form.reset();

            // Tampilkan alert setelah berhasil
            myAlert.style.display = 'block';

            // Hilangkan alert setelah beberapa detik
            setTimeout(function () {
                myAlert.style.display = 'none';
            }, 5000); // Tampilkan alert selama 5 detik
        })
        .catch(error => {
            console.error('Error!', error.message);

            // Sembunyikan button "Loading" dan kembalikan button "Send Message"
            buttonLoad.style.display = 'none';
            btnSend.style.display = 'inline-block';
        });
});

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .porto-box, .porto-box1, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });