let showMoreBtn = document.querySelector('.show-more')

showMoreBtn.addEventListener('click', (event) => {
    event.currentTarget.previousElementSibling.classList.toggle('height-auto')
    event.currentTarget.innerHTML === 'Показать всё' ? event.currentTarget.innerHTML = 'Скрыть' : event.currentTarget.innerHTML = 'Показать всё'
})



























