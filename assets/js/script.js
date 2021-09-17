// 1- get the input by id
// 2- add event click to button 
// 3- run getRecipes function (use api ..... for getting data)
// 4- Draw UI for card and apend to body html 
// 5- every card have a button => click on it => run getspecificRecipe 
// 6- draw UI modal (title - image - description )
// 7- open modal 
// 8- modal have x icon => click => close modal
// 9- ZeroState method
// 10- select input for searching avalible data ( api request => options for search  )

// Modal JS info from Materialize
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  M.Modal.init(elems);
});


// Static API vars 
var api1 = "https://www.themealdb.com/api/json/v1/1/search.php";
var api2 = "https://api.edamam.com/api/recipes/v2/?q=";
var api3 = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

// Get Elemets
var inputEle = document.querySelector('#search-input');
var btnEle = document.querySelector('.recipe-input button')
var content = document.querySelector('.results .row');
var formEl = document.querySelector('form')
var modal =  document.querySelector("#modal1")

// Add Events
formEl.addEventListener('submit', getRecipes);

//***************--Adam Romano START--***************

//Get recipe form api 1
function getRecipes(e) {
  e.preventDefault();
  var val = inputEle.value;
  fetch(api1 + '?s=' + val)
    .then(function(res){
      return res.json()
      
    })
    .then(function(data){
      viewData(data);
      // var api2RecipeId = recipe.strMeal
      // getSpecificRecipe(data);
      // var api2Recipe = meals.strInstructions
    })
    .catch(function(err){
        console.log(err);
    });

}

// View recipe from api 1
function viewData(recipes) {
  console.log("aa", recipes);
  var card = ""
  recipes.meals.forEach(function(recipe){
  card += `<div class="col s4">
      <div class="card">
        <div class="card-image">
          <img src="${recipe.strMealThumb}">
          <span class="card-title">${recipe.strMeal}</span>
        </div>
        <div class="card-action">
          <a  class="modal-trigger" href="#modal1" onclick="getSpecificRecipe('${recipe.strMeal}','${recipe.idMeal}', '${recipes}')">GET THIS RECIPE</a>
        </div>
      </div>
    </div>`
  });
  content.innerHTML = card
}
//***************--Adam Romano END--***************


//***************--Adam West START--***************

//Get recipe details from api2 using fetch. (Your api paramater is idMeal )
function getSpecificRecipe(strMeal, id) {
  console.log(strMeal, id);
  var api2Url = api2 +  strMeal + "&app_id=1ecec89b&app_key=bf723dc8442adc90a8861cbf3d53ef03&type=public";

  fetch(api2Url)
  .then(function(response) {
    if (response.ok) {
      return response.json()
    }
  }).then (function(data1){
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id)
    .then(function(res){
      return res.json()
      
    })
    .then(function(data2){
      viewNutrition(data1, strMeal, data2);
    })
    .catch(function(err){
        console.log(err);
    });
   
    console.log(viewNutrition);
  });

}

// View recipe details from api2 in Modal (Modal is in the HTML, so delete it first then create it dynamically in JS)
function viewNutrition(data, recipeTitle, recipe) {
  
  var modalHtmlEl =
  `<div class="modal-content">
      <h4>${recipeTitle}</h4>
      <p> ${recipe.meals[0].strInstructions}</p>
      <p> ${Math.floor(data.hits[0].recipe.calories)} calories</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>`
modal.innerHTML = modalHtmlEl;
console.log(modal);
} 



//***************--Adam West END--***************


//***************--Kevin Hernandez START--***************
// Create the zero state function when no results are available
function zeroState() {
  
}
//***************--Kevin Hernandez END--***************


//***************--James K START--***************
function avaliableCategories() {
// Send Request  api3
// show select tag with options
}
//***************--James K END--*************** 