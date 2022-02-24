const app = new Vue ( {
    el: '#app',

    data: {
        slideObject: [
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
        ], 
        currentSlide: 0,   
    },
    methods: {
        incrementaSlides: function() {   

            this.currentSlide++;

            this.currentSlide = this.currentSlide % this.slideObject.length;

        },
        decrementaSlides: function() {

            this.currentSlide--;

            this.currentSlide = this.currentSlide % this.slideObject.length;

            if (this.currentSlide < 0) {

                this.currentSlide = this.slideObject.length - 1;
            }

        },
        selectSlides: function(i) {

            this.currentSlide = i;
        }
    },
 
})
console.log(app);

