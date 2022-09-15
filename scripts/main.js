let a;
let date;
let time;

const options = {
	weekday: 'long',
	year: 'numeric',
	month: 'long',
	day: 'numeric',
};

setInterval(() => {
	a = new Date();
	date = a.toLocaleDateString(undefined, options);
	time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();

	document.querySelector('#time').innerHTML = date + ' ' + ' ' + time;
}, 1000);

document.querySelector('#time').style.color = 'red';
document.querySelector('#time').style.textAlign = 'center';
document.querySelector('#time').style.fontSize = '5rem';
document.querySelector('#time').style.fontStyle = 'italic';
document.querySelector('#time').style.fontWeight = 'bold';
