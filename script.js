let headerTitle = document.getElementById('headerTitle');
let blurry = document.getElementById('blurry');

function loadTermin(a){
    headerTitle.innerHTML = "Termin des " + a.innerHTML + ". ";
    blurry.style.display = "flex";
}

function close(){
    blurry.style.display = "none";
}