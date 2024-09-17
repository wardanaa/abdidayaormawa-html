document.addEventListener('DOMContentLoaded', function () {
    var openModalButton = document.getElementById('open-modal')
    var closeModalButton = document.getElementById('close-modal')
    var modal = document.getElementById('audio-modal')
    var audio = document.getElementById('modal-audio')

    console.log('openModalButton:', openModalButton)
    console.log('closeModalButton:', closeModalButton)
    console.log('modal:', modal)
    console.log('audio:', audio)

    if (!openModalButton || !closeModalButton || !modal || !audio) {
        console.error('One or more elements are not found.')
        return
    }

    // Show modal with animation
    openModalButton.addEventListener('click', function () {
        console.log('Open button clicked')
        modal.classList.add('opacity-100') // Tambahkan kelas opacity-100 untuk menampilkan modal
        modal.querySelector('div').classList.add('scale-100')
        audio.play() // Pastikan audio mulai bermain ketika modal terbuka
    })

    // Hide modal with animation and stop audio
    closeModalButton.addEventListener('click', function () {
        console.log('Close button clicked')
        modal.classList.remove('opacity-100')
        modal.querySelector('div').classList.remove('scale-100')
        setTimeout(function () {
            modal.classList.remove('flex') // Hapus kelas flex setelah animasi selesai
        }, 300)
        audio.pause()
        audio.currentTime = 0
    })

    // Hide modal when clicking outside and stop audio
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            console.log('Clicked outside modal')
            modal.classList.remove('opacity-100')
            modal.querySelector('div').classList.remove('scale-100')
            setTimeout(function () {
                modal.classList.remove('flex') // Hapus kelas flex setelah animasi selesai
            }, 300)
            audio.pause()
            audio.currentTime = 0
        }
    })
})

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

    autoplay: {
        delay: 4000, // 4 detik delay antara perpindahan slide
    },

    breakpoints: {
        640: {
            slidesPerView: 2, // Tampilkan dua slide pada perangkat dengan lebar 640px atau lebih
            direction: 'vertical',
        },
    },
})
