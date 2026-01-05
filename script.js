document.addEventListener('DOMContentLoaded', function() {
    // Animasi sederhana saat scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Mendaftarkan elemen yang ingin dianimasi
    const animatedElements = document.querySelectorAll('.recipe-card, .section-title, .hero-title');
    animatedElements.forEach(el => observer.observe(el));

    // Logika tombol Premium
    const btnPremium = document.querySelector('.btn-premium');
    if(btnPremium) {
        btnPremium.addEventListener('click', () => {
            alert('Mengarahkan ke halaman pembayaran premium...');
        });
    }
});