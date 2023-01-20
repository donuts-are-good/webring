// This line declares an empty array called 'sites' which will be used to store the list of URLs in the webring
var sites = [];

// This line declares a variable called 'currentIndex' and initializes it with a value of 0.
// This variable will be used to keep track of the current position in the list of sites
var currentIndex = 0;

// This line uses the fetch API to retrieve the list of sites in the webring from a remote URL
// The URL points to a plain text file with one link per line.
fetch('https://raw.githubusercontent.com/donuts-are-good/webring/master/sites.list')

// This line waits for the fetch request to complete and returns a promise that resolves with the response.
// it uses the .then method to parse the response as text
.then(response => response.text())

// This line waits for the previous promise to resolve and then split the text into an array of lines
// and store it in the 'sites' array
.then(data => {
    sites = data.split('\n');
});

// This function selects a random site from the list, using Math.random() to generate a random number between 0 and 1,
// and Math.floor() to round it down to the nearest integer,
// it then takes that random index and assign the corresponding site to the currentIndex variable and redirects the user to the site
function randomSite() {
currentIndex = Math.floor(Math.random() * sites.length);
window.location.href = sites[currentIndex];
}
