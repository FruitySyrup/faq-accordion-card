const questionTag = document.querySelectorAll('.question')

questionTag.forEach(questionTag => {
    questionTag.addEventListener('click', () => {
        if (questionTag.classList.contains('open')) {
            questionTag.classList.remove('open');
        } else {
            const questionTagOpen = document.querySelectorAll('.open');

            questionTagOpen.forEach((questionTagOpen) => {
            questionTagOpen.classList.remove('open');
            });
            questionTag.classList.add('open');
        }
    });
});

