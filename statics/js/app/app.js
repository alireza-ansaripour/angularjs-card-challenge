var app = angular.module('playingCard',[]);
app.controller('cardCtrl',function(){
    this.text = "alireza";
    this.title = 'title';
    this.tag = '';
    this.Change = function(){ // when user clicks the try button
        var number = Math.floor(Math.random()*models.cards.length);// creates a random number
        var card = models.cards[number];// change the text of the view
        this.text = card.description;
        this.title = card.title;
        this.tag = card.tag;
    }
});