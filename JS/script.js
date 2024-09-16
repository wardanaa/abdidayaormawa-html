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
