const options = document.querySelectorAll('.option');

options.forEach(option => {
    option.addEventListener('click', () => {
        const countElement = option.querySelector('.count');
        let count = parseInt(countElement.textContent);
        countElement.textContent = count + 1;
    });
});