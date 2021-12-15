let headerTitle = document.getElementById('headerTitle');
let blurry = document.getElementById('blurry');
let header = document.getElementById('header');
let imgBox = document.getElementById('img');
let imgClose = document.getElementById('imgClose');
let body = document.getElementById('body');

imgClose.addEventListener('click', close);

function loadTermin(a) {
    headerTitle.innerHTML = "Termine des " + a.innerHTML + ". ";
    blurry.style.display = "flex";
    imgBox.style.width = header.scrollWidth - headerTitle.scrollWidth - 25;
    let datum = new Date();

    let vormart = `${datum.getMonth()+1}/${a.innerHTML}/${datum.getFullYear().toString().substr(-2)}`; // m/d/y
    console.log(vormart);

    fetch(`data.php?datum=${vormart}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            html(data);
            console.log(data);
        })
        .catch((error) => {
            console.log('[ERROR]: ', error);
        });
}

function html(data){
    data.forEach(i => {
        body.innerHTML += `<div>
            <h2>${i[0]}</h2>
            <div>
                <div>
                    <h3>${i[1]}</h3>
                    <h3>${i[2]}</h3>
                </div>
                <p> - </p>
                <div>
                    <h3>${i[3]}</h3>
                    <h3>${i[4]}</h3>
                </div>
            </div>
        </div>
        `;
    });
}

function close() {
    blurry.style.display = "none";
}