const applyFilterBtn = document.getElementById("apply-filter-btn");

applyFilterBtn.addEventListener("click", function() {
  console.log("Apply Filter button clicked");
})


const searchInput = document.getElementById("search-box");

searchInput.addEventListener("keypress", function(e) {
  if(e.key === "Enter"){
    console.log("Searching for the desired products....");
  }
})


const categoryBtns = document.getElementsByClassName("category-filter-btns");

console.log(categoryBtns);