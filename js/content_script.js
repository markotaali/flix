// Define global variable for API key
var myapikey;

// Init script for the first time
initBoxes();

// Refresh script every 5 seconds
setInterval(initBoxes, 5000);

// Asynchronous local storage call function
function getMyApiKey(callback) {
    chrome.storage.local.get('myapikey', callback);
}


// The main init script piece			//
// ------------------------------------ //

function initBoxes() {
	// If there's no api key set, get one.
	if (myapikey == null) {
		// Get Api Key from Local Storage
	    getMyApiKey( function(value) {
	        myapikey = value.myapikey;
	        // console.log(myapikey);
	    });
	}

	// List all loaded slider items on the page
	$('div.slider-item').each(function(index) {

		// Make sure there isn't a Rating box already for each movie
		if (!$(this).find('.ratingBox').html()) {
			// Create new div for Movie Rating if there wasn't one
			$('<div/>', {
				'class':'ratingBox',
				'html': '<div class="getRating">Get IMDb Rating</div>',
			}).appendTo($(this));

			// Create a function for tracking when Rating Box is clicked, find Movie Title and get rating
			$(this).find('.ratingBox').click(function() {
				var movieName = $(this).parent().find('.video-preload-title-label').text();
				$(this).html('<div class="getRating">Loading…</div>');
				getRating(movieName, $(this));
			});
		}

	});
}


// Get rating 							//
// ------------------------------------ //

function getRating(movieName, containerName) {
	// Split Movie Name from spaces and join again with plus signs
	var movieName = movieName.split(' ').join('+');

	// Base Url from Open Movie Database
	var baseUrl = 'https://www.omdbapi.com/?apikey='+myapikey+'&t=';

	// Request with Base Url and Movie Name
	var movieRequest = baseUrl+movieName;

	// console.log(movieRequest);

	// JSON request to Open movie database
	$.getJSON( movieRequest, function(data) {
		var movieObject = data;
		console.log(movieObject);

		// If the Movie Title was found, get the rating and place it in the container div
		if (movieObject['Response'] != 'False') {
			movieRating = movieObject['Ratings'][0].Value;
			console.log(movieRating);
			movieValue = movieRating.split('/');
			movieRating = '<a href="http://www.imdb.com/title/'+movieObject['imdbID']+'/" target="_blank"><div class="imdbLogo">IMDb</div></a><div class="movieValue">'+movieValue[0]+' <small>/10</small></div>';
			$(containerName).html(movieRating);			
		} else {
			movieRating = "Movie not found.";
			$(containerName).html(movieRating);
		}
	});
}