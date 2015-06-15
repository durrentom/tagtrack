var injected = false;

chrome.browserAction.onClicked.addListener(function(tab) {
	var regexPage = new RegExp(/https:\/\/www.youtube.com\//); // We use a regular expresion to check which page was given.
    var match = regexPage.exec(tab.url); // We then check if the given page matches our expression.
    // If it matches and the status of the tab is complete...
    if(match && !injected) {
		injected = true;
        chrome.tabs.insertCSS(tab.id, {
            file: "style.css"
        });
		chrome.tabs.executeScript({
			file: 'inject.js'
		});
    }
});