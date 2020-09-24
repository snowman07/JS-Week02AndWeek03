// Description: User will click the link and image will show on the same page. Usually, when user click an anchor tag, link will open to other webpage. preventDefault() function is use to stop this from happening.

let featureLink = document.querySelector("a.link"); // OR (".feature.link");

const featureLinkHandler = function FunctionName(param) {
  // featureLink.innerHTML =
  //   "You clicked the link but you cant go to other page to show the image because I prevented the default";
  // FunctionName.preventDefault();
  let featureImage = document.querySelector("img.feature");
  featureImage.src = featureLink.href; //dont understand how this works
  featureImage.classList.remove("hidden"); //dont understand how this works

  param.preventDefault();
};

featureLink.addEventListener("click", featureLinkHandler);
