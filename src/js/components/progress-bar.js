const progressBar = () => {
    const animateIfVisible = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const percentElements = document.querySelectorAll('.about__percent');
                const progressBars = document.querySelectorAll('.about__line-progress');

                percentElements.forEach((percentElement, index) => {
                    const percent = parseInt(percentElement.textContent);
                    const progressBar = progressBars[index];
                    progressBar.style.width = percent + '%';
                    progressBar.style.transition = 'width 1s ease-in-out';
                });

                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateIfVisible, {
        root: null,
        threshold: 0.5
    });

    const descrElements = document.querySelectorAll('.about__inner');

    descrElements.forEach((descrElement) => {
        observer.observe(descrElement);
    });
}

export default progressBar;
