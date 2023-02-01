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