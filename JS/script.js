// JavaScript untuk mendeteksi scroll dan mengubah background navbar
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar')
    if (window.scrollY > 50) {
        // Jika pengguna scroll lebih dari 50px
        navbar.style.backgroundColor = '#18285C'
        navbar.classList.add('text-black', 'shadow-lg') // Tambahkan background putih dan teks hitam
        navbar.classList.remove('bg-transparent', 'text-white') // Hapus background transparan
    } else {
        // navbar.style.backgroundColor = 'transparent';
        navbar.style.color = 'white'
        // navbar.classList.add('text-white'); // Tambahkan background transparan dan teks putih
        // navbar.classList.remove('bg-white', 'text-black', 'shadow-lg'); // Hapus background putih
    }
})

// JavaScript untuk toggle menu mobile
document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.nav-links').classList.toggle('active')
})

const swiper1 = new Swiper('.mySwiper1', {
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: false,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

const swiper2 = new Swiper('.mySwiper2', {
    // Optional parameters
    direction: 'horizontal', // Ubah ke horizontal untuk tampilan umum
    loop: true,
    slidesPerView: 1, // Tampilkan satu slide pada perangkat mobile

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // autoplay: {
    //     delay: 4000, // 4 detik delay antara perpindahan slide
    // },

    breakpoints: {
        1280: {
            slidesPerView: 2, // Tampilkan dua slide pada perangkat dengan lebar 640px atau lebih
            direction: 'vertical',
        },
    },
})

const swiper3 = new Swiper('.mySwiper3', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 2000, // 4 detik delay antara perpindahan slide
    },
})
