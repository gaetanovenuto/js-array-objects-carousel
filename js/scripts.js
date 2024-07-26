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

for (i = 0; i < images.length; i++) {
    
    const myImageContainer = document.createElement('div');
    myImageContainer.classList.add('imageContainer');

    const myInfo = document.createElement('div');
    myInfo.classList.add('image-info', 'text-white');

    const myImageTitle = document.createElement('div');
    myImageTitle.classList.add('image-title');
    myImageTitle.innerHTML = images[i].title;

    const myImageText = document.createElement('div');
    myImageText.classList.add('image-text');
    myImageText.innerHTML = images[i].text;

    const myImage = document.createElement('img');
    myImage.classList.add('image');
    myImage.setAttribute("src", images[i].image);

    if (i == 0) {
        myImageContainer.classList.add('active');
    }

    let backwardButton = document.createElement('button');
    backwardButton.innerHTML = `<i class="fa-solid fa-angle-left"></i>`
    backwardButton.classList.add('generalButton', 'backwardButton');

    backwardButton.addEventListener('click', backwards);

    let forwardButton = document.createElement('button');
    forwardButton.innerHTML = `<i class="fa-solid fa-angle-right"></i>`
    forwardButton.classList.add('generalButton', 'forwardButton');

    myContainer.append(myImageContainer);

    myImageContainer.append(myImage);
    myImageContainer.append(myInfo);
    myImageContainer.append(backwardButton);
    myImageContainer.append(forwardButton);

    myInfo.append(myImageTitle);
    myInfo.append(myImageText);

    function backwards() {
        console.log('CLICK');

        if (i > 0) {

            myImageContainer[i].classList.remove('active');
    
            i--;
    
            myImageContainer.classList.add('active');
        }
    
        else if (i == 0) {

            myImageContainer[i].classList.remove('active');
    
            myImageContainer[i] = images.length - 1;
    
            myImageContainer[i].classList.add('active');
        }
    }
};

