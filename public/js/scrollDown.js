(() => {
  // src/js/scrollDown.js
  var errorDiv = document.getElementById("error");
  window.scrollTo(0, errorDiv.scrollHeight);
  window.scrollTo(0, document.body.scrollHeight);
})();