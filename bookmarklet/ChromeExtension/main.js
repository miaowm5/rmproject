chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.getSelected(function(tab){
    var url = "http://miaowm5.github.io/rmproject/bookmarklet/index.html#";
    url += tab.url.substr(7);
    window.open(url)
  })
})