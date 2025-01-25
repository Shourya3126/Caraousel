document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.progress-bar');
    let progress = 0;

    const updateProgress = () => {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        if (progress < 100) {
            requestAnimationFrame(updateProgress);
        }
    };

    updateProgress();
});