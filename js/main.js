const burgerBtn = document.querySelector('.hamburger')
const nav = document.querySelector('.mobile')
const navItems = document.querySelectorAll('.mobile__item')

const showMenu = () => {
	burgerBtn.classList.toggle('is-active')
	nav.classList.toggle('mobile__show')

	navItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('mobile__show')
			burgerBtn.classList.remove('is-active')
		})
	})
}

burgerBtn.addEventListener('click', showMenu)
