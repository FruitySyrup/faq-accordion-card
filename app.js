// const accordion = document.querySelectorAll ('.container');
// const questionTag = document.querySelectorAll ('.question');
// const answerTag = document.querySelector ('.answer')

// for (i=0; i<accordion.length; i++) {
//   questionTag[i].addEventListener('click', function () {
    // answerTag.classList.toggle('open')
//   })
// }

const questionTag = document.querySelectorAll('.question')

questionTag.forEach(questionTag => {
    questionTag.addEventListener('click', () => {
        questionTag.classList.toggle('open')
    })
})