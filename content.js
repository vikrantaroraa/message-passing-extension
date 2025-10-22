console.log("🌐 Content script loaded on:", window.location.href);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("🌐 Message received in content script:", message);

  if (message.from === "background") {
    // Do something in the webpage
    alert(`🌐 Content script says: ${message.text}`);

    // Optionally send something back to background
    sendResponse({ received: true });
  }
});
