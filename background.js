// cria o contexto do item de menu para a extensão 
chrome.contextMenus.create({
    title: "Tirar Screenshot",
    contexts: ["all"],
    onclick: function() {

      // captura a tab ativa
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var tab = tabs[0];
  
        // Send a message to the content script to capture the screenshot
        chrome.tabs.sendMessage(tab.id, { action: "startSelection" });
      });
    }
  });
  
  // listem para as Escuta as mensagens do script 
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "saveScreenshot") {
      // Get the screenshot data
      var data = request.data;
  
      // Create a new tab with the screenshot data
      chrome.tabs.create({ url: data });
    }
  });