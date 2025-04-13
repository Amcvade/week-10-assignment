
//Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
//A Bootstrap styled table representing your choice of data.
//A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

let id = 0;

document.getElementById('add').addEventListener('click', () => {

    let createdDate = new Date();
    let table = document.getElementById('list'); // Ensure the ID matches your HTML
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-task').value; 
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`; // Fixed method names
    row.insertCell(2).innerHTML = document.getElementById('new-start-date').value; 
    row.insertCell(3).innerHTML = document.getElementById('new-end-date').value; 
    
    let action = row.insertCell(4); // variable declaration
    let deleteButton = document.createElement('button'); // Added delete functionality
    deleteButton.className = 'btn btn-danger';
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = () => {
        document.getElementById(`item-${id}`).remove();
    };
    action.appendChild(deleteButton);
    
    document.getElementById('new-task').value = ''; // Reset the input field
    id++; // Added the ID for the next task
});
