let headerTitle = document.getElementById('headerTitle');
let blurry = document.getElementById('blurry');
let header = document.getElementById('header');
let imgBox = document.getElementById('img');
let imgClose = document.getElementById('imgClose');

imgClose.addEventListener('click', close);

function loadTermin(a){
    headerTitle.innerHTML = "Termine des " + a.innerHTML + ". ";
    blurry.style.display = "flex";
    imgBox.style.width = header.scrollWidth - headerTitle.scrollWidth - 25; 
}

function close(){
    blurry.style.display = "none";
}