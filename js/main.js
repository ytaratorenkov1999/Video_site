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

// Предотвращаем зум на двойной тап (iOS)
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Адаптация под изменение ориентации
window.addEventListener('orientationchange', () => {
    setTimeout(() => {
        video.style.width = '100%';
        video.style.height = '100%';
    }, 100);
});