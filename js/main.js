"use strict"

let form = document.querySelector('[data-register]')
let inputName = document.querySelector('[data-name]')
let inputEmail = document.querySelector('[data-email]')
let modal = document.querySelector('[data-modal]')
let modalContent = document.querySelector('[data-content-modal]')
let loadingModal = document.querySelector('[data-loading-modal]')
let btnSubmit = document.querySelector('[data-submit]')
let btnCloseModal = document.querySelector('[data-close-modal]')
let infoCard = document.querySelectorAll(".info__card")
let getLeads = JSON.parse(localStorage.getItem('leads'))

modal.style.display = "none"

function isLoading() {
	return setTimeout(() => {
		loadingModal.style.display = "none"
		modalContent.style.display = "flex"
	}, 3500)
}

const handleSubmit = (event) => {
	event.preventDefault();
	loadingModal.style.display = "flex"
	if (inputName && inputEmail) {
		saveLead(getLeads, inputName.value, inputEmail.value)
		modal.style.display = "flex"
		modalContent.style.display = "none"
		isLoading()
	}
}
form.addEventListener('submit', handleSubmit, false)

const saveLead = (data, name, email) => {
	const leads = []
	if (data) leads.push({ name, email }, ...data)
	if (!data) leads.push({ name, email })
	localStorage.setItem('leads', JSON.stringify(leads))
}

const handleCloseModal = () => {
	modal.style.display = "none"
	inputName.value = ""
	inputEmail.value = ""
	clearTimeout(isLoading)
	// localStorage.clear()
}
btnCloseModal.addEventListener('click', handleCloseModal, false)

const handleMouseOver = () => {
	infoCard[0].classList.remove('card')
	card.classList.add('card')
}
const handleMouseOut = () => {
	card.classList.remove("card")
	infoCard[0].classList.add('card')
}
infoCard.forEach(card => {
	card.addEventListener("mouseover", handleMouseOver, false)
	card.addEventListener("mouseout", handleMouseOut, false)
})
