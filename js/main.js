const burgerBtn = document.querySelector('.hamburger')
const nav = document.querySelector('.mobile')
const navItems = document.querySelectorAll('.mobile__item')
const main = document.querySelector('.main')
const burgerBars = document.querySelector('.hamburger-inner')
const footerYear = document.querySelector('.footer--year')
// FORM VARIABLES
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const subject = document.querySelector('#subject')
const msg = document.querySelector('#msg')
const sendBtn = document.querySelector('.form-button')

// FORM VALIDATION
const formInputs = [username, email, subject, msg]

const showError = (input, errorView) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error')
	formBox.classList.add('error-show')
	formBox.classList.add('error-border')

	errorMsg.textContent = errorView
}
const clearError = input => {
	const formBox = input.parentElement
	formBox.classList.remove('error-show')
	formBox.classList.remove('error-border')
}

const checkForm = input => {
	formInputs.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkMail = email => {
	const re = /^[a-zA-Z0-9]+([-._][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,7}$/

	if (re.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'E-mail jest niepoprawny')
	}
}

// HAMBTN
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
// FOOTER
const observeYear = () => {
	const year = new Date().getFullYear()
	footerYear.textContent = `© ${year}`
}
// OBSERVE HAMBTN COLOR SECTION
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
sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm(formInputs)
	checkMail(email)
})
