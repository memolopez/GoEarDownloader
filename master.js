(function () {
	var url = (window.location.href).split("/")[4];

	$('ul#actions li:nth-last-of-type(2)').after(
		"<li><a href='http://www.goear.com/action/sound/get/" + url + 
		"' id='addtofavorites'> Download"+
		"</a></li>");
})();
