document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  images.forEach(function (image) {
    image.oncontextmenu = function () {
      return false;
    };
  });
});

document.addEventListener("dragstart", function (event) {
  if (event.target.tagName === "img") {
    event.preventDefault();
  }
});