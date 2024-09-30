document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("img");
  images.forEach(function (image) {
    image.oncontextmenu = function () {
      return false;
    };
  });
});

