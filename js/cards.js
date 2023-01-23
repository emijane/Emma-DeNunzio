// tabs

const tabLinks = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab-content");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   const btnTarget = el.currentTarget;
   const tab = btnTarget.dataset.tab;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + tab).classList.add("active");
   
   btnTarget.classList.add("active");
}