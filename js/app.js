'user strict';

// Global variables
var allImages = []; // Array storing all the image object instances
var imageOne = document.getElementById('img-one');
var imageTwo = document.getElementById('img-two');
var imageThree = document.getElementById('img-three');
var arrayOfPicsToDisplay = [imageOne, imageTwo, imageThree];
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

// Function to show random images
function showRandomImages() {
	var randNumsInThisSet = []; // Array to store random nums already used in set
	for (var i = 0; i < arrayOfPicsToDisplay.length; i++) {
		var random = Math.floor(Math.random() * allImages.length); // Generate random number
		console.log(`Variable "random" is ${random}`)
		console.log(`randNumsInThisSet: ${randNumsInThisSet}`);
		// while (randNumsInThisSet.length < 3) { // Could instead count up to arrayOfPicsToDisplay.length?
			if (randNumsInThisSet.indexOf(random) === -1) {
				console.log('Result of if test:', randNumsInThisSet.indexOf(random));
				arrayOfPicsToDisplay[i].src = allImages[random].filepath;
				arrayOfPicsToDisplay[i].alt = allImages[random].imageName;
				arrayOfPicsToDisplay[i].title = allImages[random].imageName;
				randNumsInThisSet.push(random); // Or try unshift()	
				console.log(`"randNumsInThisSet" contains: ${randNumsInThisSet}`)
				allImages[random].views++;
			} else { 
				console.log('Result of else test:', randNumsInThisSet.indexOf(random));
				// while (random === randNumsInThisSet[0] || random === randNumsInThisSet[1]) {
				while (randNumsInThisSet.indexOf(random) !== -1) {
					random = Math.floor(Math.random() * allImages.length);
					console.log(`Variable "random" is now ${random}`);
				}
			}
		// }
	}
	
	// ALTERNATE APPROACH #2: ASSIGN THE 3 IMAGES' ATTRS SEPARATELY 
	// imageOne.src = allImages[random].filepath;
	// imageOne.alt = allImages[random].imageName;
	// imageOne.title = allImages[random].imageName;
	// imageTwo.src = 

	// ALTERNATE SOLUTION USING UL ELEMENTS BELOW
	// setOfThreeImages. = allImages[random].filepath;
	// setOfThreeImages. = allImages[random].imageName;
	// setOfThreeImages. = allImages[random].imageName;

    // Logic to prevent displaying of duplicate images in set of three
    
    // Logic to prevent display of any image twice in consecutive image sets
}

// Call function to show first set of 3 random images
showRandomImages();

// Event listener
setOfThreeImages.addEventListener('click', handleClick);

// Event handler
function handleClick(event) {
	console.log(event.target);
	showRandomImages;
	// Validate user input
	
}


// Render results to HTML list
