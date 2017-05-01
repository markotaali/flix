// List all loaded slider items on the page
$('div.slider-item').each(function( index ) {
 	// Create new div for each Movie Rating.
	$('<div/>', {
		'class':'ratingBox',
		'html': '<div class="getRating">Get IMDb Rating</div>',
	}).appendTo($(this));
});

// When Rating Box is clicked, find Movie Title and get rating 
$('div.ratingBox').click(function() {
	var movieName = $(this).parent().find('.video-preload-title-label').text();
	$(this).html('<div class="getRating">Loading…</div>');
	getRating(movieName, $(this));
});

function getRating(movieName, containerName) {
	// Split Movie Name from spaces and join again with plus signs
	var movieName = movieName.split(' ').join('+');

	// Base Url from Open Movie Database
	var baseUrl = 'https://www.omdbapi.com/?t=';

	// Request with Base Url and Movie Name
	var movieRequest = baseUrl+movieName;

	// JSON request to Open movie database
	$.getJSON( movieRequest, function(data) {
		var movieObject = data;
		console.log(movieObject);

		// If the Movie Title was found, get the rating and place it in the container div
		if (movieObject['Response'] != 'False') {
			movieRating = movieObject['Ratings'][0].Value;
			console.log(movieRating);
			movieValue = movieRating.split('/'); 
			movieRating = '<a href="http://www.imdb.com/title/'+movieObject['imdbID']+'/"><div class="imdbLogo">IMDb</div></a><div class="movieValue">'+movieValue[0]+' <small>/10</small></div>';
			$(containerName).html(movieRating);			
		} else {
			movieRating = "Movie not found.";
			$(containerName).html(movieRating);
		}
	});
}
