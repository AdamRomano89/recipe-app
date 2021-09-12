// 1- get the input by id
// 2- add event click to button 
// 3- run getRecipes function (use api ..... for getting data)
// 4- Draw UI for card and apend to body html 
// 5- every card have a button => click on it => run getspecificRecipe 
// 6- draw UI model (title - image - description )
// 7- open model 
// 8- model have x icon => click => close model
// 9- ZeroState method
// 10- select input for searching avalible data ( api request => options for search  )

// Static vars 
var url = "https://www.themealdb.com/api/json/v1/1/filter.php";

// Get Elemets
var inputEle = document.querySelector('#search-input');
var btnEle = document.querySelector('.recipe-input button')
var content = ""
// Add Events
btnEle.addEventListener('click', getRecipes);


// Functions 

function getRecipes() {
    var val = inputEle.value;
    fetch(url + '?i=' + val)
        .then(function(res){
            return res.json()
        })
        .then(function(data){
            drawCardUi(data);
        })
        .catch(function(err){
            console.log(err);
        })
}

function drawCardUi(recipes) {
    var html = `
    <div class="col s4">
        <div class="card">
        <div class="card-image">
            <img src="./assets/images/test.jpeg">
            <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
            <a href="#">This is a link</a>
        </div>
        </div>
    </div>
    `
}

function getspecificRecipe(meal) {

}

function drawModel() {

}

function zeroState () {
    return "there is no data"
}

function closeModel() {

}

function avaliableCategories() {

}

