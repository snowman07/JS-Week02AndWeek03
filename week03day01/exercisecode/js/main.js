let featureLink = document.querySelector(".feature link");

function featureLinkHandler() {
  let featureImage = document.querySelector("img.feature");
  featureImage.src = featureLink.href;
  featureImage.classList.remove("hidden");
}

featureLink.addEventListener("click", function (featureLinkHandler) {
  let featureImage = document.querySelector("img.feature");
  featureImage.src = featureLink.href;
  featureImage.classList.remove("hidden");
});
