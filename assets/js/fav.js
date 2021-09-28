var divEl = document.querySelector(".row")
console.log(divEl);

var data = JSON.parse(localStorage.getItem ('savingMeals')) || []

function viewFavRes(recpies){
  var card = "";

  if (recpies.length) {
    recpies.forEach(function (recipe) {
      card += `<div class="col s12 m6 l4">
      <div class="card">
        <div class="card-image">
          <img src="${recipe.strMealThumb}">
          <span class="card-title">${recipe.strMeal}</span>
        </div>
        <div class="card-action">
          <a  class="modal-trigger" href="#modal1" onclick="getSpecificRecipe('${recipe.strMeal}','${recipe.idMeal}')">GET THIS RECIPE</a>
          <button class=" red btn" onclick="deleteRecipe('${recipe.idMeal}')">-</button>
        </div>
      </div>
    </div>`;
    });
    divEl.innerHTML = card;
  } else {
    divEl.innerHTML = "No Data To Show";
  }
}
viewFavRes(data)
// data/api/products/delete/15600
function deleteRecipe(idMeal){
  var data = JSON.parse(localStorage.getItem("savingMeals")) ||  []
  var newData = data.filter(function(item){
    return item.idMeal != idMeal
  })
  localStorage.setItem("savingMeals", JSON.stringify(newData))
  viewFavRes(newData)
  
} 
