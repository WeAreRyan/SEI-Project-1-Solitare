console.log("js is working");


/*----- constants -----*/

const Deck = [];

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

let playerDeck = [];
let playerPile = [];

let pileOne = [];
let pileTwo = [];
let pileThree = [];
let pileFour = [];
let pileFive = [];
let pileSix = [];

let stackOne = [];
let stackTwo = [];
let stackThree = [];
let stackFour = [];

/*----- cached element references -----*/


/*----- event listeners -----*/


/*----- functions -----*/

// function shuffleDeck() {
//     fullDeck.sort(() => Math.random() - 0.5);
//   }


//Shuffles deck
function shuffle() {
    for (let i = fullDeck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [fullDeck[i], fullDeck[j]] = [fullDeck[j], fullDeck[i]];
    }
  }


// drag and drop event handlers .ondrag = pickup, .ondragend = when dropped, .ondragenter = when item enters a valid drop area

