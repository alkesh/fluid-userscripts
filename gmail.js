// Fluid Userscript for GMail
// https://mail.google.com/*
// https://*.googel.com/mail/*
window.fluid.dockBadge = '';
setTimeout(updateDockBadge, 1000);
setTimeout(updateDockBadge, 3000);
setInterval(updateDockBadge, 5000);

function updateDockBadge() {
	var newBadge = '';
     // use document title
     var title = document.title;
     var regex = /\s*Inbox\s*\((\d+)\)\s*/;

	var text = '' + document.title;
	if (text.length) {
		console.log('text: ' + text);
		var res = text.match(regex);
		console.log('res: ' + res);
		if (res && res.length > 1) {
			newBadge = res[1];
			console.log('newBadge: ' + newBadge);
		}
	}
	window.fluid.dockBadge = newBadge;
}
