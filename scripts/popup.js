function sendCheesifyMsg() {
  console.log("J'ai appelé ma fonction");
  chrome.tabs.query({active:true, currentWindow: true}, function (tabs) {
    console.log(tabs);
    chrome.tabs.sendMessage(tabs[0].id, "Cheesify");
  });
  // TODO: Write a function to send a message to the active tab to 'cheesify' it
}

const btn = document.querySelector("button");
console.log(btn);

btn.addEventListener("click", () => {
  sendCheesifyMsg();
})
// TODO: Add an event listener to trigger the function above when clicking the 'Cheesify' button
