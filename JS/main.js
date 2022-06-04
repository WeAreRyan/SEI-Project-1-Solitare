console.log("js is working");


/*----- constants -----*/

const Deck = [];

//Gameboard objects

 

//Card objects
class Card {
    constructor(red, suit, value) {
        this.red = red;
        this.suit = suit;
        this.value = value;
    }
}

// Objects for heart cards
const HA = new Card(true, "heart", 1);
const H2 = new Card(true, "heart", 2);
const H3 = new Card(true, "heart", 3);
const H4 = new Card(true, "heart", 4);
const H5 = new Card(true, "heart", 5);
const H6 = new Card(true, "heart", 6);
const H7 = new Card(true, "heart", 7);
const H8 = new Card(true, "heart", 8);
const H9 = new Card(true, "heart", 9);
const H10 = new Card(true, "heart", 10);
const HJ = new Card(true, "heart", 11);
const HQ = new Card(true, "heart", 12);
const HK = new Card(true, "heart", 13);

//Objects for diamond cards
const DA = new Card(true, "diamond", 1);
const D2 = new Card(true, "diamond", 2);
const D3 = new Card(true, "diamond", 3);
const D4 = new Card(true, "diamond", 4);
const D5 = new Card(true, "diamond", 5);
const D6 = new Card(true, "diamond", 6);
const D7 = new Card(true, "diamond", 7);
const D8 = new Card(true, "diamond", 8);
const D9 = new Card(true, "diamond", 9);
const D10 = new Card(true, "diamond", 10);
const DJ = new Card(true, "diamond", 11);
const DQ = new Card(true, "diamond", 12);
const DK = new Card(true, "diamond", 13);

// Objects for clover cards
const CA = new Card(false, "clover", 1);
const C2 = new Card(false, "clover", 2);
const C3 = new Card(false, "clover", 3);
const C4 = new Card(false, "clover", 4);
const C5 = new Card(false, "clover", 5);
const C6 = new Card(false, "clover", 6);
const C7 = new Card(false, "clover", 7);
const C8 = new Card(false, "clover", 8);
const C9 = new Card(false, "clover", 9);
const C10 = new Card(false, "clover", 10);
const CJ = new Card(false, "clover", 11);
const CQ = new Card(false, "clover", 12);
const CK = new Card(false, "clover", 13);

// Objects for spade cards
const SA = new Card(false, "spade", 1);
const S2 = new Card(false, "spade", 2);
const S3 = new Card(false, "spade", 3);
const S4 = new Card(false, "spade", 4);
const S5 = new Card(false, "spade", 5);
const S6 = new Card(false, "spade", 6);
const S7 = new Card(false, "spade", 7);
const S8 = new Card(false, "spade", 8);
const S9 = new Card(false, "spade", 9);
const S10 = new Card(false, "spade", 10);
const SJ = new Card(false, "spade", 11);
const SQ = new Card(false, "spade", 12);
const SK = new Card(false, "spade", 13);


const fullDeck = [HA, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, DA, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, CA, C2, C3, C4, C5, C6, C7, C8, C9, C10, CJ, CQ, CK, SA, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK]; 
const cardHeart = [HA, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK];
const cardDiamond = [DA, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK];
const cardClover = [CA, C2, C3, C4, C5, C6, C7, C8, C9, C10, CJ, CQ, CK];
const cardSpade = [SA, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK];





/*----- app's state (variables) -----*/

let playerDeck = document.getElementsByClassName('playerdeck'); 
playerDeck.cards = [];

let playerPile = document.getElementsByClassName('playerpile');
playerPile.cards = [];

let finishPile1 = document.getElementsByClassName('finishpile1'); 
finishPile1.cards = [];

let finishPile2 = document.getElementsByClassName('finishpile2'); 
finishPile2.cards = [];

let finishPile3 = document.getElementsByClassName('finishpile3'); 
finishPile3.cards = [];

let finishPile4 = document.getElementsByClassName('finishpile4'); 
finishPile4.cards = [];

let playPile1 = document.getElementsByClassName('playpile1'); 
playPile1.cards = [];

let playPile2 = document.getElementsByClassName('playpile2'); 
playPile2.cards = [];

let playPile3 = document.getElementsByClassName('playpile3'); 
playPile3.cards = [];

let playPile4 = document.getElementsByClassName('playpile4'); 
playPile4.cards = [];

let playPile5 = document.getElementsByClassName('playpile5'); 
playPile5.cards = [];

let playPile6 = document.getElementsByClassName('playpile6'); 
playPile6.cards = [];

let playPile7 = document.getElementsByClassName('playpile7'); 
playPile7.cards = [];



/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/

function gameStart() {
  shuffle();
  playPile1.cards.push(fullDeck[0]);
  fullDeck.splice(0, 1);
  playPile2.cards.push(fullDeck[0], fullDeck[1]);
  fullDeck.splice(0, 2);
  playPile3.cards.push(fullDeck[0], fullDeck[1], fullDeck[2]);
  fullDeck.splice(0, 3);
  playPile4.cards.push(fullDeck[0], fullDeck[1], fullDeck[2], fullDeck[3]);
  fullDeck.splice(0, 4);
  playPile5.cards.push(fullDeck[0], fullDeck[1], fullDeck[2], fullDeck[3], fullDeck[4]);
  fullDeck.splice(0, 5);
  playPile6.cards.push(fullDeck[0], fullDeck[1], fullDeck[2], fullDeck[3], fullDeck[4], fullDeck[5]);
  fullDeck.splice(0, 6);
  playPile7.cards.push(fullDeck[0], fullDeck[1], fullDeck[2], fullDeck[3], fullDeck[4], fullDeck[5], fullDeck[6]);
  fullDeck.splice(0, 7);
  while(fullDeck.length > 0) {
    playerDeck.cards.push(fullDeck[0]);
    fullDeck.splice(0, 1);
  }
}


//Shuffles deck
function shuffle() {
    for (let i = fullDeck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [fullDeck[i], fullDeck[j]] = [fullDeck[j], fullDeck[i]];
    }
  }


// drag and drop event handlers .ondrag = pickup, .ondragend = when dropped, .ondragenter = when item enters a valid drop area

