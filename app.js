const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
  popup.style.display = 'block'
})

popup.addEventListener('click', event => {
  const classNameOfClickedELement = event.target.classList[0]
  const classNames = ['popup-wrapper', 'popup-close', 'popup-link']
  const shouldClosePopup = classNames.some(className => className === classNameOfClickedELement)

  shouldClosePopup ? popup.style.display = 'none' : false
})