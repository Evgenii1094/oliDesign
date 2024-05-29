const validateForm = () => {
    const contactForm = document.querySelector('#contact-form');

    contactForm.addEventListener('submit', event => {
        const emailInput = document.querySelector('#email');
        const commentInput = document.querySelector('#comment');
        const emailError = document.querySelector('#email-error');
        const commentError = document.querySelector('#comment-error');
        let isValid = true;

        if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Email is incorrect';
            emailInput.classList.add('is-error');
            isValid = false;
        } else {
            emailError.textContent = '';
            emailInput.classList.remove('is-error');
        }

        if (commentInput.value.trim() === '') {
            commentError.textContent = 'Fill in this field';
            commentInput.classList.add('is-error');
            isValid = false;
        } else {
            commentError.textContent = '';
            commentInput.classList.remove('is-error');
        }

        if (isValid) {
            emailError.style.display = 'none';
            commentError.style.display = 'none';
        } else {
            emailError.style.display = 'block';
            commentError.style.display = 'block';
            event.preventDefault();
        }
    });

    const isValidEmail = email => {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    };
}

export default validateForm;
