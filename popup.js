console.log("Popup script loaded");

document.getElementById("send").addEventListener("click", () => {
  console.log("sending message to background");

  // send message to background
  chrome.runtime.sendMessage({ from: "popup", action: "GREET" }, (response) => {
    console.log("Got reply from background:- ", response);
    // Optionally show it to the user
    alert(`Popup got reply: ${response.reply}`);
  });
});
