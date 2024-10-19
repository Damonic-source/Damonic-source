// Initialize an empty array to store chess pieces  
let pieces = [];  

// Fetch chess pieces data from the JSON file  
fetch('pieces.json')  
    .then(response => {  
        if (!response.ok) {  
            throw new Error('Network response was not ok ' + response.statusText);  
        }  
        return response.json();  
    })  
    .then(data => {  
        pieces = data; // Store the fetched pieces in the global variable  
        displayPieces(pieces); // Display all pieces on initial load  
    })  
    .catch(error => console.log('Error fetching data:', error));  

// Function to display chess pieces based on an array input  
function displayPieces(pieces) {  
    const piecesList = document.getElementById('pieces-list');  
    piecesList.innerHTML = ''; // Clear existing content  

    // Create a div for each piece and append it to the pieces list  
    pieces.forEach(piece => {  
        const pieceItem = document.createElement('div');  
        pieceItem.className = 'piece'; // Add a class for styling  
        pieceItem.innerHTML = `<strong>${piece.name}</strong>: ${piece.description}`; // Set the content  
        piecesList.appendChild(pieceItem); // Append to the list  
    });  
}  

// Function to filter pieces based on user input  
function filterPieces() {  
    const searchInput = document.getElementById('search').value.toLowerCase(); // Get user input  
    const filteredPieces = pieces.filter(piece => piece.name.toLowerCase().includes(searchInput)); // Filter based on input  
    displayPieces(filteredPieces); // Display filtered pieces  
}