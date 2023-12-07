document.addEventListener("DOMContentLoaded", function () {
    // Function to check if a cookie exists
    function checkCookie(name) {
      var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
      if (match) {
        console.log(name + " cookie exists");
        return true;
      } else {
        console.log(name + " cookie does not exist");
        return false;
      }
    }
  
    // Function to set a cookie
    function setCookie(name, value, days) {
      var expires = "";
      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
      console.log("Cookie set: " + name);
    }
  
    var visited = checkCookie("visited");
  
    // If the 'visited' cookie is not set, set the cookie
    if (!visited) {
      setCookie("visited", "true", 2);
    }
  
    // If the cookie exists, remove the popup from the DOM and save it for future use
    if (visited) {
      var popup = document.querySelector(".popup-wrapper");
      if (popup) {
        var newContainer = document.createDocumentFragment();
        newContainer.appendChild(popup);
        console.log(".popup-wrapper removed from the DOM and saved for future use");
      }
    }

    // Function to show the popup
    function showPopup() {
      if (newContainer && newContainer.hasChildNodes()) {
        var body = document.querySelector("body");
        body.appendChild(newContainer);
        console.log(".popup-wrapper appended back to the DOM");
      }
    }

    // Add an event listener to the "bubble" button to show the popup
    var bubbleButton = document.getElementById("bubble");
    if (bubbleButton) {
      bubbleButton.addEventListener("click", showPopup);
    }
});