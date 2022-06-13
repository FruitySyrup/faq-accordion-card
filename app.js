const questionTag = document.querySelector ('.question')
const answerTag = document.querySelector('.answer')

questionTag.addEventListener('click', function (){
    answerTag.classList.toggle('open')


})