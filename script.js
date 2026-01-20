document.getElementById("main-download").addEventListener("click", () => {
  alert("Preparing your download...");
});

document.querySelectorAll(".download-buttons button").forEach(button => {
  button.addEventListener("click", () => {
    const os = button.getAttribute("data-os");
    alert("You selected: " + os + " version.");
  });
});
