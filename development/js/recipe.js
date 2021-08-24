//====================Dodawanie przepisu ===================================//


function Recipe(id, title, description) {
    this.id = id; // id przepisu
    this.title = title; // nazwa przepisu
    this.description = description; // opis przepisu
    this.ingredients = []; // składniki przepisu
    this.instructions = []; // instrukcje przepisu
}


//// zmienna globalna która przechowuje wszystkie przepisy ////
let allRecipies = [];

Recipe.prototype.saveToLocalStorage = function (x) {
    //// if there is nothing at start than save empty array /////
    if (localStorage.getItem('data') === null) {
        localStorage.setItem('data', JSON.stringify(allRecipies));
    }
    //// get new data and slap into new data ///////////////////////////////////
    let recipe_all = JSON.parse(localStorage.getItem('data'));
    recipe_all.push(x);
    /// save old data and new data to local storage;
    localStorage.setItem('data', JSON.stringify(recipe_all));
}

const recipe_name = document.querySelector('#name_recipe');
const recipe_description = document.querySelector('#description_recipe');
const recipe_instruction = document.querySelector('#instruction');
const recipe_ingredients = document.querySelector('#ingredients');
const save_recipe = document.querySelector('.add_recipe__header-btn');
console.log(recipe_name)
save_recipe.addEventListener('click', (e) => {
    e.preventDefault();
    const new_recipe = new Recipe(allRecipies.length + 1, recipe_name.value, recipe_description.value);
    new_recipe.ingredients.push(recipe_ingredients.value);
    new_recipe.instructions.push(recipe_instruction.value)
    allRecipies.push(new_recipe);
    new_recipe.saveToLocalStorage(new_recipe);

})
///////////////// tutaj wyświetlasz konkterny przepis /////////////////////
// console.log(JSON.parse(localStorage.getItem('data'))[2])


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////DODAWANIE NOWEGO PLANU W LOCAL STORAGE //////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function NewPlan(name, description, weekNumber, id) {
    this.weekNumber = weekNumber; // numer tygodnia
    this.name = name;   // nazwa planu
    this.description = description; // opis planu
    this.id = id;
    this.monday = [];
    this.tuesday = [];
    this.wednesday = [];
    this.thursday = [];
    this.friday = [];
    this.saturday = [];
    this.sunday = [];
}

const newPlanBtn = document.querySelector('.add_plan__header-btn');
const planName = document.querySelector('.add_plan__form #name'); // input nazwy przepisu
const planDescription = document.querySelector('.add_plan__form #description'); // input opisu przepisu
const planNumber = document.querySelector('.add_plan__form #number'); // input numeru tygodnia

/////////////// pobieranie dni tygodnia wraz z inputami ///////////////////////
const monday = document.querySelectorAll('.add_plan__table tbody tr:first-child select')
const tuesday = document.querySelectorAll('.add_plan__table tbody tr:nth-child(2) select')
const wednesday = document.querySelectorAll('.add_plan__table tbody tr:nth-child(3) select')
const thursday = document.querySelectorAll('.add_plan__table tbody tr:nth-child(4) select')
const friday = document.querySelectorAll('.add_plan__table tbody tr:nth-child(5) select')
const saturday = document.querySelectorAll('.add_plan__table tbody tr:nth-child(6) select')
const sunday = document.querySelectorAll('.add_plan__table tbody tr:nth-child(7) select')

/////////////////////// prototyp odpowiedzialny za pushowanie planu do local storage ///////////////////////
let allPlans = [];
NewPlan.prototype.saveToLocalStorage = function (x) {
    //// if there is nothing at start than save empty array /////
    if (localStorage.getItem('plans') === null) {
        localStorage.setItem('plans', JSON.stringify(allPlans));
    }
    //// get new data and slap into new data ///////////////////////////////////
    let plans_all = JSON.parse(localStorage.getItem('plans'));
    plans_all.push(x);
    /// save old data and new data to local storage;
    localStorage.setItem('plans', JSON.stringify(plans_all));
}


newPlanBtn.addEventListener('click', () => {
    const week_plan = new NewPlan(planName.value, planDescription.value, planNumber.value, allPlans.length + 1);
    allPlans.push(week_plan);
    monday.forEach((el) => {
        week_plan.monday.push(el.value);
    })
    tuesday.forEach((el) => {
        week_plan.tuesday.push(el.value);
    })
    wednesday.forEach((el) => {
        week_plan.wednesday.push(el.value);
    })
    thursday.forEach((el) => {
        week_plan.thursday.push(el.value);
    })
    friday.forEach((el) => {
        week_plan.friday.push(el.value);
    })
    saturday.forEach((el) => {
        week_plan.saturday.push(el.value);
    })
    sunday.forEach((el) => {
        week_plan.sunday.push(el.value);
    })
    week_plan.saveToLocalStorage(week_plan);
})

///////////////////// wyświetlanie konktetnego planu ////////////////////////////////////
//console.log(JSON.parse(localStorage.getItem('plans'))[2])







