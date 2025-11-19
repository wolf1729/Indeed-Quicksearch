chrome.action.onClicked.addListener((tab) => {
  if (tab.url && tab.url.includes("https://myjobs.indeed.com/applied")) {
    chrome.scripting.insertCSS({
      target: { tabId: tab.id },
      files: ["style.css"]
    });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["content.js"]
    });
  }
});
