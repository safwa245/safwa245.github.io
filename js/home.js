alert('PABLO&عبده website')
// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("welcome", "Welcome to our webpage");
  // Retrieve
  document.getElementById("result").innerHTML = localStorage.getItem("welcome");
} else {
  document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}