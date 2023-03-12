const form = document.getElementById('registration-form');
const table = document.getElementById('entries-table').getElementsByTagName('tbody')[0];

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	const dob = document.getElementById('dob').value;
	const row = table.insertRow();
	row.insertCell().innerHTML = name;
	row.insertCell().innerHTML = email;
	row.insertCell().innerHTML = dob;
	form.reset();
});
