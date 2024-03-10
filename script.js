

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
ScrollReveal().reveal('.home-img, .porto-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });