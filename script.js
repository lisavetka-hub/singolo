/*              выделение при наведении в портфолио

const selectedOnClick = event => {
  document
    .querySelectorAll("img")
    .forEach(img => img.classList.remove("portfolio-item img"));
  event.classList.add("portfolio-item img");
};
document.querySelector("img").addEventListener("click", selectedOnClick, true);*/
$(document).ready(function() {
  $(".portfolio-item").click(function() {
    $(this).attr("style", "border: 5px solid  #f06c64");
  });
});
