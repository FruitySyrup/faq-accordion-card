const accordion = document.querySelectorAll ('.container');
const questionTag = document.querySelectorAll ('.question');
const answerTag = document.querySelector ('.answer')


for (i=0; i<accordion.length; i++) {
  questionTag[i].addEventListener('click', function () {
    answerTag.classList.toggle('open')
  })
}