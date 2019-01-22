'user strict';

// Global variables
var allImages = []; // Array storing all the image object instances
var imageOne = document.getElementById('img-one');
var imageTwo = document.getElementById('img-two');
var imageThree = document.getElementById('img-three');
var arrayOfPicsToDisplay = [imageOne, imageTwo, imageThree];
var setOfThreeImages = document.getElementById('image-list'); // Access DOM
var totalClicks = 0;

// Constructor function
function ProductImage(imageName) {
	this.imageName = imageName;
	this.filepath = `img/${imageName}.jpg` // Need to handle other file exts
	this.views = 0;
	this.clicks = 0; // Tracks number of clicks/votes for a given image
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

// Define global random arrays
var currentRandomArray = [];
var prevRandomArray = [];

// Function to generate random number (doesn't return anything but outputs to global arrays)
function getRandomNumber() {
	prevRandomArray = currentRandomArray;
	currentRandomArray = [];
	while (currentRandomArray.length < arrayOfPicsToDisplay.length) {
		var random = Math.floor(Math.random() * allImages.length);
		
		if (!currentRandomArray.includes(random) && !prevRandomArray.includes(random)) {
			currentRandomArray.push(random);
		} else {
			console.log(`Duplicate found: ${random}`);
		}
	}
	console.log(`currentRandomArray is ${currentRandomArray}`);
	console.log(`prevRandomArray is ${prevRandomArray}`);
}

// Separate function to render set of 3 images
function showSetOfThreeImages() {
    getRandomNumber(); 
    for (var i = 0; i < arrayOfPicsToDisplay.length; i++) {
        arrayOfPicsToDisplay[i].src = allImages[currentRandomArray[i]].filepath;
        arrayOfPicsToDisplay[i].alt = allImages[currentRandomArray[i]].imageName;
        arrayOfPicsToDisplay[i].title = allImages[currentRandomArray[i]].imageName;
		allImages[currentRandomArray[i]].views++;
    }   
}

// Call function to show first set of 3 random images
showSetOfThreeImages();

// Event listener
setOfThreeImages.addEventListener('click', handleClick);

// Event handler
function handleClick(event) {
    console.log(event.target.alt);
    
    // Validate user input
        // Tell user to click a picture if they clicked in wrong place?

    // Click counter
    for (var i = 0; i < allImages.length; i++) {
		console.log('for loop entered');
		if (event.target.alt === allImages[i].imageName) {
            console.log('was clicked', event.target.alt);
            allImages[i].clicks++;
        }
    }
	totalClicks++;
	
    // Stop event listener after 25 clicks
    if (totalClicks === 25) {
        setOfThreeImages.removeEventListener('click', handleClick);

        // Show results on page
		
    }
    
	console.table(allImages);
	showSetOfThreeImages();
}
