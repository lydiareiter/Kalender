let headerTitle = document.getElementById('headerTitle');
let blurry = document.getElementById('blurry');
let header = document.getElementById('header');
let imgBox = document.getElementById('img');


function loadTermin(a){
    headerTitle.innerHTML = "Termine des " + a.innerHTML + ". ";
    blurry.style.display = "flex";
    imgBox.style.width = header.scrollWidth - headerTitle.scrollWidth - 10; 
}

function close(e){
    console.log(e);
    blurry.style.display = "none";
}