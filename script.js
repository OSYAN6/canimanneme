document.getElementById('openBtn').addEventListener('click', function() {
    document.getElementById('envelope').classList.add('open');
});

// Mobil cihazlar için dokunma desteği
document.getElementById('openBtn').addEventListener('touchstart', function(e) {
    e.preventDefault(); // Tıklama ile çakışmayı önler
    document.getElementById('envelope').classList.add('open');
});
