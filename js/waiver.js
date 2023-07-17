let figures = document.querySelectorAll('figure')

for (let i = 0; i < figures.length; i++) {
    figures[i].classList.add('one-third')
}

let footer = document.querySelector('footer')

footer.addEventListener('click', () => footer.remove())
figures[4].addEventListener('dblclick', () => figures[4].style.visibility = 'hidden')

let firstFigureCaption = document.querySelector('figcaption')
let font = firstFigureCaption.style.fontFamily

firstFigureCaption.setAttribute('tabindex', 0)
firstFigureCaption.addEventListener('mouseover', ()=> firstFigureCaption.style.fontFamily = 'Cursive')
firstFigureCaption.addEventListener('mouseout', ()=> firstFigureCaption.style.fontFamily = font)
firstFigureCaption.addEventListener('focus', ()=> firstFigureCaption.style.fontFamily = 'Cursive')
firstFigureCaption.addEventListener('blur', ()=> firstFigureCaption.style.fontFamily = 'Times')
