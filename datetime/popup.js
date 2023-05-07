function updateTimes() {
    // Get the current times from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const usaTime = new Date(urlParams.get('usa'));
    const indiaTime = new Date(urlParams.get('india'));
    const chinaTime = new Date(urlParams.get('china'));
  
    // Format the times as strings
    const usaTimeString = usaTime.toLocaleString();
    const indiaTimeString = indiaTime.toLocaleString();
    const chinaTimeString = chinaTime.toLocaleString();
  
    // Update the HTML content with the current times
    const usaElem = document.getElementById('usa-time');
    usaElem.textContent = usaTimeString;
  
    const indiaElem = document.getElementById('india-time');
    indiaElem.textContent = indiaTimeString;
  
    const chinaElem = document.getElementById('china-time');
    chinaElem.textContent = chinaTimeString;
  }
  
  // Call updateTimes() when the popup is loaded
  document.addEventListener('DOMContentLoaded', updateTimes);
  
  // Add an event listener to the refresh button
  const refreshButton = document.getElementById('refresh-button');
  refreshButton.addEventListener('click', function() {
    // Reload the popup window to get updated times
    window.location.reload();
  });
  