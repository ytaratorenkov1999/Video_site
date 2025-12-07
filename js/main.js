const video = document.querySelector('video');

window.addEventListener('load', () => {
    video.focus();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        window.location.href = '/';
    }
});