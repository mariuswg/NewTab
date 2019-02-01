/* Can't make it more obvious what this extension does now :D */

chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.create({'url':"chrome://newtab"})
})
