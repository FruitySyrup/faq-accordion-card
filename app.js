// const accordion = document.querySelectorAll ('.container');
// const questionTag = document.querySelectorAll ('.question');
// const answerTag = document.querySelector ('.answer')

// for (i=0; i<accordion.length; i++) {
//   questionTag[i].addEventListener('click', function () {
    // answerTag.classList.toggle('open')
//   })
// }

const containerTag = document.querySelector ('.container')
var i 

for (i=0; i< containerTag.length; i++) {
    containerTag[i].addEventListener('click', function (){
        this.classList.toggle('open');
    })
}