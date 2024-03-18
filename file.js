function showMore(){
    //removes the link
    document.getElementById('link').parentElement.removeChild('link');
    //shows the #more
    document.getElementById('more').style.display = "block";
}

const menu = document.querySelector("#menu-links");
const btn = document.querySelector(".bar");
const changeIcon = document.querySelector("#bars");

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("show");
  changeIcon.classList.toggle("fa-xmark");
}