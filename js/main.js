const video = document.querySelector('video');

// Принудительный автозапуск
window.addEventListener('load', () => {
    video.play().catch(error => {
        console.log('Автовоспроизведение заблокировано браузером:', error);
    });
});

// Клавиша Escape для выхода
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.location.href = '/';
    }
});

// Пробел для паузы/воспроизведения
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target === document.body) {
        e.preventDefault();
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }
});