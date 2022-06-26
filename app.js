//Order of code steps
//1. Grab our items
const items = [...document.querySelectorAll('li.faq_faq-item')]
//2. Add event listeners to our items that handle an item click.
//3. handleItemClick function -> 
//3.1 Grab the clicked item
//3.2 Grab the itemAnswer as we need to add maxHeight
//3.3 Check if item has .active class
//3.4 If it does, remove the maxHeight and remove the .active class
//3.5 If it doesn't, add the maxHeight and add the .active class

items.forEach(item => {
    item.addEventListener('click', (e) => {
        const clickedItem = e.target.closest('li')
        const itemAnswer = clickedItem.querySelector('.faq-item_answer')
        const clickedItemActive = clickedItem.classList.contains('active')
        clickedItem.classList.toggle('active')
        if (clickedItemActive) {
            itemAnswer.style.maxHeight = null
        }  else {
            const scrollHeight = itemAnswer.scrollHeight
            itemAnswer.style.maxHeight = `${scrollHeight}px`
    }
    })
});