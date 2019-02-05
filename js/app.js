'user strict';

// ++++++++++++++++++++++++++++++++++++++++++
// GLOBAL VARIABLES
var allImages = []; // Array storing all the image object instances
var allImageNames = [
  'bag',
  'banana',
  'bathroom',
  'boots',
  'breakfast',
  'bubblegum',
  'chair',
  'cthulhu',
  'dog-duck',
  'dragon',
  'pen',
  'pet-sweep',
  'scissors',
  'shark',
  'sweep',
  'tauntaun',
  'unicorn',
  'usb',
  'water-can',
  'wine-glass'
];

// Global random arrays
var currentRandomArray = [];
var prevRandomArray = [];
var totalClicks = 0;

// Variables for accessing DOM
var imageOne = document.getElementById('img-one');
var imageTwo = document.getElementById('img-two');
var imageThree = document.getElementById('img-three');
var arrayOfPicsToDisplay = [imageOne, imageTwo, imageThree];
var setOfThreeImages = document.getElementById('image-container');

// Chart variables
var voteChart;   // Value assigned later in drawChart() function
var chartDrawn = false;   // Need for updating chart if we want to do that
var clicksForChart = [];
var data = {   // Holds 'data' variable (object) that will be input as property of chart in drawChart() function
  labels: allImageNames,
  datasets: [{
    label: 'Vote Chart',
    data: clicksForChart,
    backgroundColor: [
      'bisque',
      'darkgray',
      'burlywood',
      'lightblue',
      'navy'
    ],
    hoverBackgroundColor: [
      'purple',
      'purple',
      'purple',
      'purple',
      'purple'
    ]
  }]
};

// ++++++++++++++++++++++++++++++++++++++++++
// FUNCTION DECLARATIONS

// Constructor function
function ProductImage(imageName) {
  this.imageName = imageName;
  this.filepath = `img/${imageName}.jpg`;
  this.views = 0;
  this.clicks = 0;
  allImages.push(this);
}

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

// Function to tally clicks on each image to display on chart
function getClicksForChart() {
  for (var i = 0; i < allImages.length; i++) {
    clicksForChart[i] = allImages[i].clicks;
  }
  console.log(`clicksForChart contains: ${clicksForChart}`);
}

// Function to draw chart
function drawChart() {
  getClicksForChart(); // Call function to populate clicksForChart array with each's ProductImage instance's tally of clicks // Should really be calling this here?
  var ctx = document.getElementById('vote-chart').getContext('2d');
  voteChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
      responsive: false,
      animation: {
        duration: 1000,
        easing: 'easeOutBounce'
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  });
  chartDrawn = true;
}

// FUNCTION TO HIDE CHART // ACTUALLY NEED THIS?
function hideChart() {
  document.getElementById('vote-chart').hidden = true;
}

// Event handler
function handleClick(event) {

  // Click counter
  for (var i = 0; i < allImages.length; i++) {
    if (event.target.alt === allImages[i].imageName) {
      allImages[i].clicks++;
    }
  }
  totalClicks++;

  // Stop event listener after 25 clicks
  if (totalClicks === 25) {
    setOfThreeImages.removeEventListener('click', handleClick);

    // if (event.target.id === 'image-container') {
    // 	return alert('Click on an image!');
    // }	

    // CALL FUNCTION TO CREATE TABLE TO REPLACE LIST OF RESULTS/VOTES
    drawChart();
    console.log('Chart was drawn');

    // Call function that writes list of voting results and percentages to the page
    showResultsAsList();
    console.table(allImages);

    // Store in local storage
    // localStorage.clear(); // Clear local storage before setting fresh content
    // var productsStringified = JSON.stringify(allImages);
    // localStorage.setItem('productsStored', productsStringified);
    localStorage.productsStored = JSON.stringify(allImages);
  }
  showSetOfThreeImages();
}

// Check whether local storage already has content
if (localStorage.productsStored) { // Truthy test for existence of local storage
  // Get data from local storage
  var productsFromStorage = localStorage.productsStored;
  // Parse JSON
  productsFromStorage = JSON.parse(productsFromStorage);
  allImages = productsFromStorage;
} else {
  // Spin up object instances
  for (var i = 0; i < allImageNames.length; i++) {
    new ProductImage(allImageNames[i]);
  }
}

// Call function to show first set of 3 random images
showSetOfThreeImages();

// Event listener
setOfThreeImages.addEventListener('click', handleClick);
