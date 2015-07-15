chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('Removing iframe from ' + tab.url);
	chrome.tabs.executeScript(
		null,
		{
			file: "removeiFrame.js"
		}
	);
});
