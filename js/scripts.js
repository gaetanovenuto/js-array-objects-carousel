const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const myContainer = document.getElementById('myContainer');

// Creo un ciclo da 0 alla lunghezza dell'array di oggetti che mi crea un container con all'interno l'immagine e un altro container, al cui interno inserisco titolo e testo, prendendo i valori da ogni singolo oggetto. Applico la classe "active" al primo container.

for (let i = 0; i < images.length; i++) {
    
    if (i == 0) {
        myContainer.innerHTML += `
        <div class="imageContainer active">
            <img src="${images[i].image}" class="image">
            <div class="image-info text-white">
                <div class="image-title">
                    ${images[i].title}
                </div>
                <div class="image-text">
                    ${images[i].text}
                </div>
            </div>
        </div>
    `    
    } else {
        myContainer.innerHTML += `
        <div class="imageContainer">
            <img src="${images[i].image}" class="image">
            <div class="image-info text-white">
                <div class="image-title">
                    ${images[i].title}
                </div>
                <div class="image-text">
                    ${images[i].text}
                </div>
            </div>
        </div>
    `    
    }
    
}

// Porto su JS ogni contenitore per creare il carosello

const singleItem = document.getElementsByClassName('imageContainer');

let activeItem = 0;

// Creo il bottone per andare avanti e gli applico l'evento click e la funzione per scorrere avanti

const forwardButton = document.getElementById('fwButton');

forwardButton.addEventListener('click', forward);

// Creo il bottone per andare indietro e gli applico l'evento click e la funzione per scorrere indietro

const backwardButton = document.getElementById('bwButton');

backwardButton.addEventListener('click', backward)



// PULSANTE AVANTI

function forward() {
    console.log('Forward Click');

    if (activeItem < images.length - 1) {
        singleItem[activeItem].classList.remove('active');
        // thumbImg[activeItem].classList.remove('opacity-1');

        activeItem++;

        singleItem[activeItem].classList.add('active');
        // thumbImg[activeItem].classList.add('opacity-1');
    }

    else if (activeItem == images.length - 1) {
        singleItem[activeItem].classList.remove('active');
        // thumbImg[activeItem].classList.remove('opacity-1');

        activeItem = 0;

        singleItem[activeItem].classList.add('active');
        // thumbImg[activeItem].classList.add('opacity-1');
    }
}

// PULSANTE INDIETRO

function backward() {
    console.log('Backward Click');

    if (activeItem > 0) {
        singleItem[activeItem].classList.remove('active');
        // thumbImg[activeItem].classList.remove('opacity-1');

        activeItem--;

        singleItem[activeItem].classList.add('active');
        // thumbImg[activeItem].classList.add('opacity-1');
    }

    else if (activeItem == 0) {
        singleItem[activeItem].classList.remove('active');
        // thumbImg[activeItem].classList.remove('opacity-1');

        activeItem = images.length - 1;

        singleItem[activeItem].classList.add('active');
        // thumbImg[activeItem].classList.add('opacity-1');
    }
}


