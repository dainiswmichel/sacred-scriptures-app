document.addEventListener('DOMContentLoaded', function() {
    const modeSelector = document.getElementById('mode');

    modeSelector.addEventListener('change', function() {
        if (this.value === 'dark') {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    });

    const captions = document.querySelectorAll('.figure-caption');
    captions.forEach((caption, index) => {
        caption.textContent = `Illustration ${index + 1}`;
    });
});