(function (doc, win) {
	let $buoop = {
		required: { e: -4, f: -3, o: -3, s: -1, c: -3 },
		insecure: true,
		api: 2021.06,
	};
	function $buo_f() {
		let e = doc.createElement("script");
		e.src = "//browser-update.org/update.min.js";
		doc.body.appendChild(e);
	}
	try {
		doc.addEventListener("DOMContentLoaded", $buo_f, false);
	} catch (e) {
		win.attachEvent("onload", $buo_f);
	}
})(document, window)