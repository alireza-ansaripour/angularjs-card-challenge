var app = angular.module('playingCard',[]);
app.controller('cardCtrl',function(){
    this.card = models.cards[0];
    this.text = 'text';
    this.edit = false;
    this.Change = function(){ // when user clicks the try button
        var number = Math.floor(Math.random()*models.cards.length);// creates a random number
        this.card = models.cards[number];// change the card
        if(this.card.code == 2){
            var audio = new Audio(this.card.sound);
            audio.play();
        }
        if(this.card.code == 1){
            var div = $('.thumbnail');
            div.animate({height: '+=300px', opacity: '0.4'}, "slow");
            div.animate({width: '+=300px', opacity: '0.8'}, "slow");
            div.animate({height: '-=300px', opacity: '0.4'}, "slow");
            div.animate({width: '-=300px', opacity: '0.8'}, "slow",function(){
                div.css('height','');
            });

        }

    };

});