/////////////////////////////// Carousel //////////////////////////////////////////////
const left_btn = document.querySelectorAll('.left');
const right_btn = document.querySelectorAll('.right');


left_btn.forEach(el => {
    el.addEventListener('click', function (){
        const show = this.parentElement.previousElementSibling;
        const hide = this.parentElement;
        console.log(hide);
        show.classList.toggle('hide');
        hide.classList.toggle('hide');
    })

})
right_btn.forEach(el => {
    el.addEventListener('click', function (){
        const show = this.parentElement.nextElementSibling;
        const hide = this.parentElement;
        console.log(hide);
        show.classList.toggle('hide');
        hide.classList.toggle('hide');
    })

})

//================Przechowywanie i dodawanie imienia=======================
const name = document.querySelector("#name");
const button = document.getElementById("name_send");
if (localStorage.getItem('name') !== null) {
    document.querySelector('.welcome_content').style.display = 'none';
}
button.addEventListener("click", function (event){
    console.log(name.value);
    localStorage.setItem("name", name.value);
    document.querySelector('.welcome_content').style.display = 'none';
    const userName = document.querySelector(".user_name");
    userName.innerText = localStorage.name;

});
















/*
left_btn.forEach(el => {
    el.addEventListener('click', function (){
        const hide = this.parentElement;
        hide.classList.toggle('hide')


    })

})

right_btn.forEach(el => {
    el.addEventListener('click', function (){
        const show = this.parentElement.nextElementSibling;
        const hide = this.parentElement;
        console.log(hide);
        show.classList.toggle('hide');
        hide.classList.toggle('hide');
    })

})*/