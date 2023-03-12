const form = document.getElementById('registration-form');
const table = document.getElementById('entries').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function(event) {
	event.preventDefault();
	
	const name = form.elements['name'].value;
	const email = form.elements['email'].value;
	const dob = form.elements['dob'].value;
	
	const newRow = table.insertRow();
	const nameCell = newRow.insertCell();
	const emailCell = newRow.insertCell();
	const dobCell = newRow.insertCell();
	
	nameCell.innerHTML = name;
	emailCell.innerHTML = email;
	dobCell.innerHTML = dob;
	
	form.reset();
});
