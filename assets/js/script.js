// Modal JS info from Materialize
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".modal");
  M.Modal.init(elems);
});

// Static API vars
var mealApi = "https://www.themealdb.com/api/json/v1/1/search.php";
var recipeApi = "https://api.edamam.com/api/recipes/v2/?q=";
var api3 = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

// Get Elements
var inputEle = document.querySelector("#search-input");
var btnEle = document.querySelector(".recipe-input button");
var content = document.querySelector(".results .row");
var formEl = document.querySelector("form");
var noRes = document.querySelector(".no-results");
var modal = document.querySelector("#modal1");
var featureSection = document.querySelector(".featured-section");
// Add Events
formEl.addEventListener("submit", getRecipes);

//***************--Adam Romano START--***************

//Get recipe form api 1
function getRecipes(e) {
  e.preventDefault();
  featureSection.style.display = "none";
  var val = inputEle.value;
  fetch(mealApi + "?s=" + val)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      viewData(data);
    })
    .catch(function (err) {});
}

// View recipe from api 1
function viewData(recipes) {
  var card = "";

  if (recipes.meals) {
    recipes.meals.forEach(function (recipe) {
      card += `<div class="col s12 m6 l4">
      <div class="card">
        <div class="card-image">
          <img src="${recipe.strMealThumb}">
          <span class="card-title">${recipe.strMeal}</span>
        </div>
        <div class="card-action">
          <a  class="modal-trigger" href="#modal1" onclick="getSpecificRecipe('${recipe.strMeal}','${recipe.idMeal}', '${recipes}')">GET THIS RECIPE</a>
        </div>
      </div>
    </div>`;
    });
    content.innerHTML = card;
    noRes.style.display = "none";
  } else {
    content.innerHTML = "";

    zeroState();
  }
}
//***************--Adam Romano END--***************

//***************--Adam West START--***************

//Get recipe details from api2 using fetch. (Your api parameter is idMeal )
function getSpecificRecipe(strMeal, id) {
  modal.innerHTML = "";
  var api2Url =
    recipeApi +
    strMeal +
    "&app_id=1ecec89b&app_key=bf723dc8442adc90a8861cbf3d53ef03&type=public";

  fetch(api2Url)
    .then(function (response) {
      if (response.ok) {
        return response.json();
      }
    })
    .then(function (data1) {
      fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
        .then(function (res) {
          return res.json();
        })
        .then(function (data2) {
          viewNutrition(data1, strMeal, data2);
        })
        .catch(function (err) {});
    });
}

// View recipe details from api2 in Modal (Modal is in the HTML, so delete it first then create it dynamically in JS)
function viewNutrition(data, recipeTitle, recipe) {
  var modalHtmlEl = `<div class="modal-content">
      <h4>${recipeTitle}</h4>
      <p> ${recipe.meals[0].strInstructions}</p>
      <p class="calories"> ${Math.floor(
        data.hits.length > 0 ? data.hits[0].recipe.calories : 0
      )} calories</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn exit-btn">EXIT</a>
    </div>`;
  modal.innerHTML = modalHtmlEl;
}
//***************--Adam West END--***************

//***************--Kevin Hernandez START--***************
// Create the zero state function when no results are available
function zeroState() {
  noRes.style.display = "block";
}
//***************--Kevin Hernandez END--***************

//***************--James K START--***************
function avaliableCategories() {
  // Send Request  api3
  // show select tag with options
}
//***************--James K END--***************
