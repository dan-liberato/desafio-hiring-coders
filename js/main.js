(function (doc) {
	'use strict'
	let btnOpenMenu = document.querySelector('[data-open-menu]');
	let btnCloseMenu = document.querySelector('[data-close-menu]');
	let menu = document.querySelector('[data-menu]');
	let form = doc.querySelector('[data-register]')
	let inputName = doc.querySelector('[data-name]')
	let inputEmail = doc.querySelector('[data-email]')
	let modal = doc.querySelector('[data-modal]')
	let modalContent = doc.querySelector('[data-content-modal]')
	let loadingModal = doc.querySelector('[data-loading-modal]')
	let btnCloseModal = doc.querySelector('[data-close-modal]')
	let infoCard = doc.querySelectorAll('.info__card')
	let getLeads = JSON.parse(localStorage.getItem('leads'))

	modal.style.display = 'none'

	function handleOpenMenu() {
		btnOpenMenu.addEventListener('click', () => {
			menu.style.display = 'block';
			menu.style.transition = 'all 400ms';
			btnCloseMenu.style.display = 'block';
		});

		btnCloseMenu.addEventListener('click', () => {
			menu.style.display = 'none';
			btnCloseMenu.style.display = 'none';
		});
	}

	function isLoading() {
		return setTimeout(() => {
			loadingModal.style.display = 'none'
			modalContent.style.display = 'flex'
		}, 3500)
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		loadingModal.style.display = 'flex'
		if (inputName && inputEmail) {
			saveLead(getLeads, inputName.value, inputEmail.value)
			modal.style.display = 'flex'
			modalContent.style.display = 'none'
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
		modal.style.display = 'none'
		inputName.value = ''
		inputEmail.value = ''
		clearTimeout(isLoading)
		// localStorage.clear()
	}
	btnCloseModal.addEventListener('click', handleCloseModal, false)

	function infoBoxMouseOver() {
		infoCard.forEach(card => {
			card.addEventListener('mouseover', () => {
				infoCard[0].classList.remove('card')
				card.classList.add('card')
			}, false)

			card.addEventListener('mouseout', () => {
				card.classList.remove('card')
				infoCard[0].classList.add('card')
			}, false)
		})
	}
	handleOpenMenu()
	infoBoxMouseOver()
})(document)