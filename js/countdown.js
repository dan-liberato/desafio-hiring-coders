(function (doc) {
	'use strict';
	const convertDate = (time) => {
		const total = Date.parse(time) - Date.parse(new Date());
		const days = Math.floor(total / (1000 * 60 * 60 * 24));
		const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const seconds = Math.floor((total / 1000) % 60);
		return { total, days, hours, minutes, seconds };
	};

	const countdown = (element, time) => {
		const timer = doc.querySelector(element);
		const days = timer.querySelector('.card .days');
		const hours = timer.querySelector('.card .hours');
		const minutes = timer.querySelector('.card .minutes');
		const seconds = timer.querySelector('.card .seconds');

		function updateTime() {
			const countdown = convertDate(time);
			days.textContent = countdown.days;
			hours.textContent = countdown.hours;
			minutes.textContent = countdown.minutes;
			seconds.textContent = countdown.seconds;
			if (countdown.total <= 0) clearInterval(timeInterval);
		}
		updateTime();
		const timeInterval = setInterval(updateTime, 1000);
	};
	countdown('#countdown', 'November 26 2021');
})(document);