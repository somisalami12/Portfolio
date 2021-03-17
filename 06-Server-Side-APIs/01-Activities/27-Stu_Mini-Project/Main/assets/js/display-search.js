var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var searchFormEl = document.querySelector('#search-form');

function getParams() {
  // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
  

  // Get the query and format values
  

  searchApi(query, format);
}

function printResults(resultObj) {
  console.log(resultObj);

  // set up `<div>` to hold result content
  
}

function searchApi(query, format) {
  var locQueryUrl = 'https://www.loc.gov/search/?fo=json';
}

function handleSearchFormSubmit(event) {
  event.preventDefault();

  // Make sure searchInput value is not empty
  

  searchApi(searchInputVal, formatInputVal);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);

getParams();
