function updateTime() {
    // Get the current time in each time zone
    const usaTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
    const indiaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    const chinaTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" });
  
    // Build the URL with the current times as parameters
    const url = `popup.html?usa=${usaTime}&india=${indiaTime}&china=${chinaTime}`;
  
    // Set the popup window to the URL with the parameters
    chrome.action.setPopup({ popup: url });
  }
  
  // Update the time displayed in the popup every second
  setInterval(updateTime, 1000);
  