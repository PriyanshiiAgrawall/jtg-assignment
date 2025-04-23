// Video toggle
const video = document.getElementById('featureVideo');
const toggleBtn = document.getElementById('videoToggle');

toggleBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        toggleBtn.textContent = '⏸️';
    } else {
        video.pause();
        toggleBtn.textContent = '▶️';
    }
});


video.addEventListener('pause', () => {
    playIcon.style.display = 'block';
});

//slider

const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.slider-dots .dot');
let index = 1;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[i].classList.add('active');
    dots[i].classList.add('active');
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        showSlide(i);
    });
});

// Auto switch every 5 seconds
setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
}, 5000);


//price card toggle
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active-card'));
        card.classList.add('active-card');
    });
});

if (cards.length > 1) {
    cards[Math.floor(cards.length / 2)].classList.add('active-card');
}


// Modal
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const form = document.getElementById('contact-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    modal.classList.remove('hidden');
    document.body.classList.add('modal-open');

    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }, 5000);
    form.reset();
});

closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    document.body.classList.remove('modal-open');
});

//mobile menu

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});


const mobileMenuItems = document.querySelectorAll('.mobile-menu-items a');
mobileMenuItems.forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});



