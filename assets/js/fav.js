var divEl = document.querySelector(".row")
console.log(divEl);

var data = JSON.parse(localStorage.getItem ('savingMeals')) || []

function viewFavRes(){
  var card = "";

  if (data.length) {
    data.forEach(function (recipe) {
      console.log(recipe);
      card += `<div class="col s12 m6 l4">
      <div class="card">
        <div class="card-image">
          <img src="${recipe.strMealThumb}">
          <span class="card-title">${recipe.strMeal}</span>
        </div>
        <div class="card-action">
          <a  class="modal-trigger" href="#modal1" onclick="getSpecificRecipe('${recipe.strMeal}','${recipe.idMeal}')">GET THIS RECIPE</a>
        </div>
      </div>
    </div>`;
    });
    divEl.innerHTML = card;
  } else {
    divEl.innerHTML = "No Data To Show";
  }
}
viewFavRes()
