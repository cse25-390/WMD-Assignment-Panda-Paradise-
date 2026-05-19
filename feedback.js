document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll('.Rating .star');
    const textarea = document.querySelector('.Form textarea');
    const submitButton = document.querySelector('.Form a');
    let selectedRating = 0;

    const messageArea = document.createElement('div');
    messageArea.className = 'feedback-alert';
    messageArea.style.margin = '0 auto';
    messageArea.style.maxWidth = '520px';
    const form = document.querySelector('.Form');
    form.insertBefore(messageArea, form.querySelector('.Answer'));

    function updateStars(value) {
        selectedRating = value;
        stars.forEach((star) => {
            star.classList.toggle('selected', Number(star.dataset.value) <= value);
        });
    }

    stars.forEach((star) => {
        star.addEventListener('click', () => {
            const value = Number(star.dataset.value);
            updateStars(value);
            setMessage('Rating selected: ' + value + '/5', 'success');
        });

        star.addEventListener('mouseover', () => {
            const value = Number(star.dataset.value);
            stars.forEach((hoverStar) => {
                hoverStar.classList.toggle('selected', Number(hoverStar.dataset.value) <= value);
            });
        });

        star.addEventListener('mouseout', () => {
            updateStars(selectedRating);
        });
    });

    submitButton.addEventListener('click', (event) => {
        event.preventDefault();

        if (selectedRating === 0) {
            setMessage('Please select a star rating before submitting.', 'danger');
            return;
        }

        const answer = textarea.value.trim();
        if (answer.length < 8) {
            setMessage('Please write a few words about your experience.', 'danger');
            textarea.focus();
            return;
        }

        setMessage('Thank you for your feedback! Redirecting home...', 'success');
        submitButton.classList.add('disabled');
        submitButton.style.pointerEvents = 'none';
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1400);
    });

    function setMessage(text, type) {
        messageArea.innerHTML = `<div class="alert alert-${type} mb-0" role="alert">${text}</div>`;
    }
});
