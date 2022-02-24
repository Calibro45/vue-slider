const app = new Vue ( {
    el: '#app',

})

const slideObject = [
    {
        immagine: 'img/rdr2.jpg',
        titolo: 'Red Dead Redemption 2',
        descrizione: 'Rivivi un avventura epica nel selvaggio west, in questo prequel targato Rockstar, e segui le vicende di Arthur e la sua banda.',
    },
    {
        immagine: 'img/sifu.jpg',
        titolo: 'Sifu',
        descrizione: 'Seconda opera del Team Slowcap, gettati nella mischia in questo action picchiaduro che metterà a dura prova la tua tenacia.',
    },
    {
        immagine: 'img/spiderman.jpg',
        titolo: 'Marvel Spiderman',
        descrizione: 'Nulla da dire è Spiderman. indossa il costume e swinga fra i palazzi.',
    },
    {
        immagine: 'img/the-witcher-3.jpg',
        titolo: 'The Witcher 3',
        descrizione: 'Terzo capitolo che chiude l \' epica avventura dello strigo firmata CD Project.',
    },
    {
        immagine: 'img/tlou2.jpg',
        titolo: 'The last of us 2',
        descrizione: 'Vivi un emozionante storia in questa seconda parte dell\' avventura di Ellie e Joel, incentrata su un cammino fatto di violenza e vendetta.',
    },
]
console.log(slideObject);

// recupero dal DOM i contenitori del carusel

const slider = document.getElementsByClassName('slider')[0];
//console.log(slider);

const slideWrapper = document.querySelector('.slide-wrapper');
//console.log(slideWrapper);

// recupero dal DOM i controlli del carusel e li appendo

const controlsWrapper = document.createElement('ol');
controlsWrapper.classList.add('controls-wrapper');
slider.append(controlsWrapper);
//console.log(controlsWrapper);

// recupero dal DOM i bottoni per le slide

const arrowUp = document.getElementsByClassName('arrow-up')[0];
const arrowDown = document.getElementsByClassName('arrow-down')[0];
//console.log(arrowUp, arrowDown);

// imposto una variabile contatore per impostare l'active

let activeElement = 0;

// ciclo for each per creazione elementi del dom

slideObject.forEach((elememt) => {

    const slideContent = elememt;
    //console.log(slideContent);

    const slideCard = sliderItem(slideContent);
    //console.log(slideCard);

    const controlSlider = controlliSlider(slideContent);
    //console.log(controlSlider);

    slideWrapper.innerHTML += slideCard;

    controlsWrapper.innerHTML += controlSlider;

})

// fuzione per ricavare le proprieta degli oggetti da inserire

function sliderItem ( {immagine, titolo, descrizione} ) {

    return `

        <div class="item">
            <img src="${immagine}" alt="">
            <div class="desc-wrap">
                <h2 class="title">${titolo}</h2>
                <p class="subtitle">${descrizione}</p>
            </div>
        </div>

    `
}

function controlliSlider ( {immagine} ) {

    return `
        <li class="controls">
            <img src="${immagine}" alt="">
        </li>
    `
}

// recupero dal DOM gli elementi creati e inseriti e li metto in un array

const itemsSlide = [...document.getElementsByClassName('item')];
//console.log(itemsSlide);

// creo un array con la lista controlli img dal DOM e imposto active corrente

const previewSlide = [...document.getElementsByClassName('controls')];
//console.log(previewSlide);

previewSlide[activeElement].classList.add('active');

// aggiungo la classe active all'elemneto corrente

itemsSlide[activeElement].classList.add('active');

// ascoltare l'evento click

arrowDown.addEventListener('click', incremetaSlide);

arrowUp.addEventListener('click', decrementaSlide);

previewSlide.forEach((element, index) => element.addEventListener('click', function(){

    //console.log(element);

    // tolgo active al preview

    removeActive(itemsSlide, [activeElement], previewSlide);

     // setto contatore 

    activeElement = index;

         // aggiungo active

    addActive(itemsSlide, [activeElement], previewSlide);

}))

// funzioni relative al cambio slide e preview

function incremetaSlide() {

    if (activeElement < itemsSlide.length - 1) {

        // rimuovere la classe active 
        removeActive(itemsSlide, [activeElement], previewSlide);
    
        // incrementare il contatore o diminuire
        activeElement++
    
        // aggiungere la classe active
        addActive(itemsSlide, [activeElement], previewSlide);

    }

}

function decrementaSlide () {

    if (activeElement > 0 ) {

        // rimuovere la classe active 
        removeActive(itemsSlide, [activeElement], previewSlide);
        // incrementare il contatore o diminuire
        activeElement--
        
        // aggiungere la classe active
        addActive(itemsSlide, [activeElement], previewSlide);
    }

}

function addActive (itemsSlide, activeElement, previewSlide) {

    itemsSlide[activeElement].classList.add('active');
    previewSlide[activeElement].classList.add('active');
}

function removeActive (itemsSlide, activeElement, previewSlide) {

    itemsSlide[activeElement].classList.remove('active');
    previewSlide[activeElement].classList.remove('active');
}