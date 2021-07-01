chrome.browserAction.onClicked.addListener(function (tab) {
    let newUrl = "https://ortus.rtu.lv"
    window.open(newUrl,'_blank');
    chrome.tabs.query({active: true}, function(tab){
        let msg = {
            txt: "fill-entries"
        };
        chrome.tabs.onUpdated.addListener(function listener (tabId , info) {
		  if (info.status === 'complete') {
            chrome.tabs.sendMessage(tabId, msg);
            chrome.tabs.onUpdated.removeListener(listener);
		  }
		});
  })
});