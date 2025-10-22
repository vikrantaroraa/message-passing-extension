console.log("🧠 Background service worker loaded!");

// Listen for messages from popup or content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("🧠 Message received in background:", message);

  if (message.from === "popup" && message.action === "GREET") {
    // Find the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id;

      // Send a message to the content script in that tab
      chrome.tabs.sendMessage(tabId, {
        from: "background",
        text: "Hello from background!",
      });
    });

    // Reply directly to popup
    sendResponse({ reply: "Background received your message 👋" });
  }
  // Must return true to indicate async response allowed
  return true;
});
