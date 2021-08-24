// for(let i = 0; i < JSON.parse(localStorage.getItem('data')).length; i++){
//     console.log(JSON.parse(localStorage.getItem('data'))[i])
//     const recipe = document.querySelector(".single-recipe");
//     recipe.innerHTML = localStorage.data
// }
//
//console.log(JSON.parse(localStorage.getItem('data'))[2].description);
// const recipe = document.querySelector(".single-recipe");
//    recipe.innerHTML = localStorage.data

const singleRecipe = document.querySelector("#single_recipe");

//console.log(JSON.parse(localStorage.getItem('data')).length);

// singleRecipe.innerHTML = localStorage.getItem('data').map(function (el){
//     return {title};
// });
console.log(JSON.parse(localStorage.getItem('data')));
for (let i =0; i< JSON.parse(localStorage.getItem('data')).length; i++){
    console.log(JSON.parse(localStorage.getItem('data'))[i].id);
    console.log(JSON.parse(localStorage.getItem('data'))[i].title);
    console.log(JSON.parse(localStorage.getItem('data'))[i].description);
    console.log(JSON.parse(localStorage.getItem('data'))[i].ingredients);
    console.log(JSON.parse(localStorage.getItem('data'))[i].instructions);

}

const tbody = document.querySelector("#single_recipe");
JSON.parse(localStorage.getItem('data')).forEach(function (el){
    const tr = document.createElement("tr");
    tr.innerHTML = `<div class ="recipe"><td id="id">${el.id}</td><td id="title">${el.title}</td><td id="instruction">${el.instructions}</td><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#FFB03B" fill="#FFB03B">
                            <path d="M18 14.45v6.55h-16v-12h6.743l1.978-2h-10.721v16h20v-10.573l-2 2.023zm1.473-10.615l1.707 1.707-9.281 9.378-2.23.472.512-2.169 9.292-9.388zm-.008-2.835l-11.104 11.216-1.361 5.784 5.898-1.248 11.103-11.218-4.536-4.534z"></path>
                       </svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="#BD4932" fill="#BD4932">
                            <path d="M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z"></path>
                        </svg></div>`;
    tbody.append(tr);
});