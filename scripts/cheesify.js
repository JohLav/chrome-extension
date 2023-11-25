function cheesify() {
  // Image replacement script
  document.querySelectorAll('img').forEach((img) => {
    img.src = `https://images.unsplash.com/photo-1631379578550-7038263db699?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
    img.srcset = img.src;
  })
}

// Function to listen for messages on the content page using chrome.runtime.onMessage
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message === "Cheesify") {
    cheesify();
  }
});