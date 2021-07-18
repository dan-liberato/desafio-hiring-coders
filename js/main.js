(function (doc, win) {
	'use strict'
	let menu = document.querySelector('[data-menu]');
	let menuLink = doc.querySelectorAll('.menu__list__link')
	let btnCloseMenu = document.querySelector('[data-close-menu]');
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

	function handleClickMenu() {
		let btnOpenMenu = document.querySelector('[data-open-menu]');

		btnOpenMenu.addEventListener('click', () => {
			menu.style.display = 'block';
			btnCloseMenu.style.display = 'block';
		});

		btnCloseMenu.addEventListener('click', () => {
			menu.style.display = 'none';
			btnCloseMenu.style.display = 'none';
		});
	}

	function handleClickMenuItem() {
		if (screen.width <= 719) {
			menuLink.forEach(link => {
				link.addEventListener('click', () => {
					menu.style.display = 'none';
					btnCloseMenu.style.display = 'none';
				}, false);
			})
		}
	}

	function isLoading() {
		return setTimeout(() => {
			loadingModal.style.display = 'none'
			modalContent.style.display = 'flex'
		}, 3500)
	}

	const saveLead = (data, name, email) => {
		const leads = []
		if (data) leads.push({ name, email }, ...data)
		if (!data) leads.push({ name, email })
		localStorage.setItem('leads', JSON.stringify(leads))
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		loadingModal.style.display = 'flex'
		saveLead(getLeads, inputName.value, inputEmail.value)
		modal.style.display = 'flex'
		modalContent.style.display = 'none'
		isLoading()
	}
	form.addEventListener('submit', handleSubmit, false)

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
	handleClickMenu()
	handleClickMenuItem()
	infoBoxMouseOver()
})(document, window)