'user strict';

// Global variables
var allImages = []; // Array storing all the image object instances
var setOfThreeImages = document.getElementById('image-list'); 

// Constructor function
function ProductImage(imageName) {
	this.imageName = imageName;
	this.filepath = `img/${imageName}.jpg` // Need to handle other file exts
	this.views = 0;
	this.clicks = [];
	allImages.push(this);
}

// Declare instances using constructor
new ProductImage('bag');
new ProductImage('banana');
new ProductImage('bathroom');
new ProductImage('boots');
new ProductImage('breakfast');
new ProductImage('bubblegum');
new ProductImage('chair');
new ProductImage('cthulhu');
new ProductImage('dog-duck');
new ProductImage('dragon');
new ProductImage('pen');
new ProductImage('pet-sweep');
new ProductImage('scissors');
new ProductImage('shark');
new ProductImage('sweep');
new ProductImage('tauntaun');
new ProductImage('unicorn');
new ProductImage('usb');
new ProductImage('water-can');
new ProductImage('wine-glass');

// Function to show random image
    
    // Logic to prevent displaying of duplicate images in set of three
    
    // Logic to prevent display of any image twice in consecutive image sets

// Call function to show first set of 3 random images

// Event listener
setOfThreeImages.addEventListener('click', handleClick);

// Event handler
function handleClick() {

    // Validate user input
}


// Render results to HTML list
