'user strict';

// Global variables
var allImages = []; // Array storing all the image object instances
var imageOne = document.getElementById('img-one');
var imageTwo = document.getElementById('img-two');
var imageThree = document.getElementById('img-three');
var arrOfThreePics = [imageOne, imageTwo, imageThree];
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
function showRandomImages() {
	var randNumsInThisSet = []; // Array to store random nums already used in set
	for (var i = 0; i < arrOfThreePics.length; i++) {
		var random = Math.floor(Math.random() * allImages.length); // Generate random number
		// if (random === randNumsInThisSet[0] || random === randNumsInThisSet[1]) { // Any better way to test for equality? 
		if (randNumsInThisSet.indexOf(random) === -1) {
			arrOfThreePics[i].src = allImages[random].filepath;
			arrOfThreePics[i].alt = allImages[random].imageName;
			arrOfThreePics[i].title = allImages[random].imageName;
			randNumsInThisSet.push(random); // Or try unshift()	
			console.log(`Variable "randNumsInThisSet" is now ${randNumsInThisSet}`)
		} else { 
			// while (random === randNumsInThisSet[0] || random === randNumsInThisSet[1]) {
			while (randNumsInThisSet.indexOf(random) !== -1) {
				random = Math.floor(Math.random() * allImages.length);
				console.log(`Variable "random" is now ${random}`);
			}
		}
		// Push this iteration's "random" to randNumsInThisSet array // Do this outside condit'l block? 
		randNumsInThisSet.push(random);
		// console.log(`Content of "randNumsInThisSet" is now ${allImages}`);
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

	allImages[random].views++;
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
