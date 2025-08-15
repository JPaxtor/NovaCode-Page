// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

window.addEventListener("scroll", function () {
  var positionY = window.scrollY;
  var pantalla = 100;
  // var pantalla = window.innerHeight - window.innerHeight * 0.3;
  console.log("pantalla: " + pantalla + " positionY: " + positionY);

  if (positionY >= pantalla) {
    document.getElementById("navBar").classList.add("bg-white");
    document.getElementById("navBar").classList.add("navBarD");
    document.getElementById("navBar").classList.remove("text-white");
    document.getElementById("navBar").classList.remove("d-none");
    console.log("Scroll event triggered");
  } else {
    document.getElementById("navBar").classList.remove("bg-white");
    document.getElementById("navBar").classList.remove("navBarD");
    document.getElementById("navBar").classList.add("text-white");
    document.getElementById("navBar").classList.add("d-none");
  }
});

document.getElementById("btnContactLayout").addEventListener("click", () => {
  window.location.href = "/Contact/Index";
});
