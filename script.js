let headerTitle = document.getElementById('headerTitle');
let blurry = document.getElementById('blurry');
let header = document.getElementById('header');
let imgBox = document.getElementById('img');
let imgClose = document.getElementById('imgClose');
let body = document.getElementById('body');

imgClose.addEventListener('click', close);

function loadPage() {
    fetch(`data.php?termin=`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            augabe(data);
        })
        .catch((error) => {
            console.log('[ERROR]: ', error);
        });
}

function augabe(doda) {
    doda.forEach(zeile => {
        if (/*zeile[1] == zeile[3]*/ zeile[1] != null) {
            let tag = new Date(Date.parse(zeile[1], 'MM/DD/YYYY'));
            let tagId = document.getElementById(tag.getDate());
            if (!tagId.classList.contains('termin')) {
                tagId.classList.add('termin');
            }
        } /*else {
            let tag1 = new Date(Date.parse(zeile[1], 'MM/DD/YYYY')).getDate();
            let tag2 = new Date(Date.parse(zeile[3], 'MM/DD/YYYY')).getDate();

            let i = tag2 - tag1;

            for (let index = 0; index < i + 1; index++) {
                let id = tag1 + i;
                let tagId2 = document.getElementById(id);
                if (!tagId2.classList.contains('termin')) {
                    tagId2.classList.add('termin');
                }
            }
        }*/
    });
}

function loadTermin(a) {
    body.innerHTML = "";
    headerTitle.innerHTML = "Termine des " + a.innerHTML + ". ";
    blurry.style.display = "flex";
    imgBox.style.width = header.scrollWidth - headerTitle.scrollWidth - 25;
    let datum = new Date();
    let vormart = `${datum.getMonth() + 1}/${a.innerHTML}/${datum.getFullYear().toString().substr(-2)}`; // m/d/y

    fetch(`data.php?datum=${vormart}`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            html(data);

        })
        .catch((error) => {
            console.log('[ERROR]: ', error);
        });
}

function html(data) {
    data.forEach(i => {
        body.innerHTML += `<div class="ausgabe">
            <h2 class="ausgabeHeader">${i[0]}</h2>
            <div class="aufteilung">
                <div class="ausgabeLinks">
                    <h3>${i[1]}</h3>
                    <h3>${i[2]}</h3>
                </div>
                <p> - </p>
                <div class="ausgabeRechts">
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

loadPage();