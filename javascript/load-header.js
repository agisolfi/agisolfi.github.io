// js/load-header.js
document.addEventListener("DOMContentLoaded", () => {
    const headerElement = document.getElementById("header");
  
    fetch("/header.html") // Use absolute path based on GitHub Pages structure
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(data => {
        headerElement.innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading the header:", error);
        headerElement.innerHTML = "<p>Failed to load header.</p>";
      });
  });
  