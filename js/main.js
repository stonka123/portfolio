const burgerBtn = document.querySelector('.hamburger')
const nav = document.querySelector('.mobile')
const navItems = document.querySelectorAll('.mobile__item')
const main = document.querySelector('.main')
const burgerBars = document.querySelector('.hamburger-inner')
const footerYear = document.querySelector('.footer--year')

const showMenu = () => {
	burgerBtn.classList.toggle('is-active')
	nav.classList.toggle('mobile__show')

	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('mobile__show')
			burgerBtn.classList.remove('is-active')
			burgerBars.classList.remove('hamburger-rainbow')
		})
	})
}

const observeYear = () => {
	const year = new Date().getFullYear()
	console.log(year)
	footerYear.textContent = year
}

const handleObserve = () => {
	const currentY = window.scrollY
	if (main.classList.contains('main') && main.offsetTop <= currentY + 30) {
		burgerBars.classList.add('hamburger-rainbow')
	} else {
		burgerBars.classList.remove('hamburger-rainbow')
	}
}
observeYear()
burgerBtn.addEventListener('click', showMenu)
window.addEventListener('scroll', handleObserve)
