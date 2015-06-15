// inject listen.js into current webpage
var s = document.createElement('script');
s.src = chrome.extension.getURL("listen.js");
s.onload = function() {
   this.parentNode.removeChild(this);
};
document.head.appendChild(s);

// inject listen.js into current webpage
var s = document.createElement('script');
s.src = chrome.extension.getURL("jquery-2.1.4.min.js");
s.onload = function() {
   this.parentNode.removeChild(this);
};
document.head.appendChild(s);


// inject template.js into current webpage
var s = document.createElement('script');
s.src = chrome.extension.getURL("handlebars.min.js");
s.onload = function() {
   
   	// inject template.js into current webpage
	var s = document.createElement('script');
	s.src = chrome.extension.getURL("templates.js");
	s.onload = function() {
	   this.parentNode.removeChild(this);
	};
	document.head.appendChild(s);

};
document.head.appendChild(s);


