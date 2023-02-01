chrome.tabs.captureVisibleTab(null, {}, function(image) {
  var link = document.createElement("a");
  link.download = "screenshot.png";
  link.href = image;
  link.click();
});