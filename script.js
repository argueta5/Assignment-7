// Wait for the DOM content to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Select the form and table body elements from the DOM
    const form = document.getElementById('data-form'); // Get the form element
    const tbody = document.getElementById('table-body'); // Get the table body element where rows will be appended

    let rowNumber = 1; // Initialize a counter for row numbers, starting from 1

    // Add an event listener to the form for submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Retrieve and trim the values of name and email from the form inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (name && email) { // Check if both name and email fields are filled
            // Construct a new table row using template literals for clarity and ease of insertion
            const newRow = `
                <tr>
                    <td>${rowNumber}</td>
                    <td>${name}</td>
                    <td>${email}</td>
                </tr>
            `;

            // Append the new row to the table body using insertAdjacentHTML for efficient DOM manipulation
            tbody.insertAdjacentHTML('beforeend', newRow);

            // Increment the row number counter for the next entry
            rowNumber++;

            // Reset the form fields after successful submission
            form.reset();
        } 
    });
});