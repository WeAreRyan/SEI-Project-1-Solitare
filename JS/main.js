console.log("js is working");


/*----- constants -----*/

const Deck = [];

//Gameboard objects

 

//Card objects
class Card {
    constructor(red, suit, value, type) {
        this.red = red;
        this.suit = suit;
        this.value = value;
        this.type = type;
    }
}

// Objects for heart cards
const HA = new Card('red', "heart", 1, "HA");
const H2 = new Card('red', "heart", 2, "H2");
const H3 = new Card('red', "heart", 3, "H3");
const H4 = new Card('red', "heart", 4, "H4");
const H5 = new Card('red', "heart", 5, "H5");
const H6 = new Card('red', "heart", 6, "H6");
const H7 = new Card('red', "heart", 7, "H7");
const H8 = new Card('red', "heart", 8, "H8");
const H9 = new Card('red', "heart", 9, "H9");
const H10 = new Card('red', "heart", 10, "H10");
const HJ = new Card('red', "heart", 11, "HJ");
const HQ = new Card('red', "heart", 12, "HQ");
const HK = new Card('red', "heart", 13, "HK");

//Objects for diamond cards
const DA = new Card('red', "diamond", 1, "DA");
const D2 = new Card('red', "diamond", 2, "D2");
const D3 = new Card('red', "diamond", 3, "D3");
const D4 = new Card('red', "diamond", 4, "D4");
const D5 = new Card('red', "diamond", 5, "D5");
const D6 = new Card('red', "diamond", 6, "D6");
const D7 = new Card('red', "diamond", 7, "D7");
const D8 = new Card('red', "diamond", 8, "D8");
const D9 = new Card('red', "diamond", 9, "D9");
const D10 = new Card('red', "diamond", 10, "D10");
const DJ = new Card('red', "diamond", 11, "DJ");
const DQ = new Card('red', "diamond", 12, "DQ");
const DK = new Card('red', "diamond", 13, "DK");

// Objects for clover cards
const CA = new Card('black', "clover", 1, "CA");
const C2 = new Card('black', "clover", 2, "C2");
const C3 = new Card('black', "clover", 3, "C3");
const C4 = new Card('black', "clover", 4, "C4");
const C5 = new Card('black', "clover", 5, "C5");
const C6 = new Card('black', "clover", 6, "C6");
const C7 = new Card('black', "clover", 7, "C7");
const C8 = new Card('black', "clover", 8, "C8");
const C9 = new Card('black', "clover", 9, "C9");
const C10 = new Card('black', "clover", 10, "C10");
const CJ = new Card('black', "clover", 11, "CJ");
const CQ = new Card('black', "clover", 12, "CQ");
const CK = new Card('black', "clover", 13, "CK");

// Objects for spade cards
const SA = new Card('black', "spade", 1, "SA");
const S2 = new Card('black', "spade", 2, "S2");
const S3 = new Card('black', "spade", 3, "S3");
const S4 = new Card('black', "spade", 4, "S4");
const S5 = new Card('black', "spade", 5, "S5");
const S6 = new Card('black', "spade", 6, "S6");
const S7 = new Card('black', "spade", 7, "S7");
const S8 = new Card('black', "spade", 8, "S8");
const S9 = new Card('black', "spade", 9, "S9");
const S10 = new Card('black', "spade", 10, "S10");
const SJ = new Card('black', "spade", 11, "SJ");
const SQ = new Card('black', "spade", 12, "SQ");
const SK = new Card('black', "spade", 13, "SK");


const fullDeck = [HA, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, DA, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, CA, C2, C3, C4, C5, C6, C7, C8, C9, C10, CJ, CQ, CK, SA, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK]; 
const cardHeart = [HA, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK];
const cardDiamond = [DA, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK];
const cardClover = [CA, C2, C3, C4, C5, C6, C7, C8, C9, C10, CJ, CQ, CK];
const cardSpade = [SA, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK];





/*----- app's state (variables) -----*/

let playerDeck = document.getElementById('playerdeck'); 
playerDeck.cards = [];

let playerPile = document.getElementById('playerpile');
playerPile.cards = [];

let finishPile1 = document.getElementById('finishpile1'); 
finishPile1.cards = [];

let finishPile2 = document.getElementById('finishpile2'); 
finishPile2.cards = [];

let finishPile3 = document.getElementById('finishpile3'); 
finishPile3.cards = [];

let finishPile4 = document.getElementById('finishpile4'); 
finishPile4.cards = [];

let playPile1 = document.getElementById('playpile1'); 
playPile1.cards = [];

let playPile2 = document.getElementById('playpile2'); 
playPile2.cards = [];

let playPile3 = document.getElementById('playpile3'); 
playPile3.cards = [];

let playPile4 = document.getElementById('playpile4'); 
playPile4.cards = [];

let playPile5 = document.getElementById('playpile5'); 
playPile5.cards = [];

let playPile6 = document.getElementById('playpile6'); 
playPile6.cards = [];

let playPile7 = document.getElementById('playpile7'); 
playPile7.cards = [];



/*----- cached element references -----*/


/*----- event listeners -----*/

playerDeck.addEventListener('click', deckClick);

playerPile.addEventListener('dragstart', cardDrag)


playPile1.addEventListener('dragstart', cardDrag);
playPile1.addEventListener('dragover', onDragOver);
playPile1.addEventListener('drop', cardDropPlayPile);

playPile2.addEventListener('dragstart', cardDrag);
playPile2.addEventListener('dragover', onDragOver);
playPile2.addEventListener('drop', cardDropPlayPile);

playPile3.addEventListener('dragstart', cardDrag);
playPile3.addEventListener('dragover', onDragOver);
playPile3.addEventListener('drop', cardDropPlayPile);

playPile4.addEventListener('dragstart', cardDrag);
playPile4.addEventListener('dragover', onDragOver);
playPile4.addEventListener('drop', cardDropPlayPile);

playPile5.addEventListener('dragstart', cardDrag);
playPile5.addEventListener('dragover', onDragOver);
playPile5.addEventListener('drop', cardDropPlayPile);

playPile6.addEventListener('dragstart', cardDrag);
playPile6.addEventListener('dragover', onDragOver);
playPile6.addEventListener('drop', cardDropPlayPile);

playPile7.addEventListener('dragstart', cardDrag);
playPile7.addEventListener('dragover', onDragOver);
playPile7.addEventListener('drop', cardDropPlayPile);

finishPile1.addEventListener('dragover', onDragOver)
finishPile1.addEventListener('drop', cardDropFinishPile)

finishPile2.addEventListener('dragover', onDragOver)
finishPile2.addEventListener('drop', cardDropFinishPile)

finishPile3.addEventListener('dragover', onDragOver)
finishPile3.addEventListener('drop', cardDropFinishPile)

finishPile4.addEventListener('dragover', onDragOver)
finishPile4.addEventListener('drop', cardDropFinishPile)


function cardDrag(evt) {
  clickSource = event.target.cards;
  dragItem = event.target.cards[0];
  event.target.cards.splice(0, 1)
  return dragItem; 
}

function onDragOver(evt) {
  event.preventDefault();
  dropTarget = event.target
  return dropTarget;
}

function cardDropPlayPile(evt) {
  if (dragItem.red !== dropTarget.cards[0].red && dragItem.value === dropTarget.cards[0].value - 1){
  dropTarget.cards.unshift(dragItem)
} else {
  clickSource.unshift(dragItem);
}
  dropTarget = undefined;
  dragItem = undefined;
  cardLocations();
}

function cardDropFinishPile(evt) {
  if (dropTarget.cards.length < 1 && dragItem.value === 1){
    dropTarget.cards.unshift(dragItem);
  } else if (dropTarget.cards[dropTarget.cards.length - 1].value === dragItem.value - 1 && dropTarget.cards[0].suit === dragItem.suit) {
    dropTarget.cards.unshift(dragItem);
  } else {clickSource.unshift(dragItem)}
  dropTarget = undefined;
  dragItem = undefined;
  cardLocations();
}

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
  cardLocations()
}




// Function for playerDeck and PlayerPile

function deckClick(evt) {
  if(playerDeck.cards.length > 0) {playerPile.cards.unshift(playerDeck.cards[0]);
    playerDeck.cards.splice(0, 1);
    playerPile.innerHTML = playerPile.cards[0].type;
    } else {
      while(playerPile.cards.length > 0) {
        playerDeck.cards.unshift(playerPile.cards[0]);
        playerPile.cards.splice(0, 1);
        playerPile.innerHTML = "!!!blank!!!";
    } }}



// !!! Commented out code for 3 card player flop. Unable to get working without re-ordering playerDeck
// function deckClick(evt) {
//   if(playerDeck.cards.length > 2) {playerPile.cards.unshift(playerDeck.cards[0], playerDeck.cards[1], playerDeck.cards[2]);
//   playerDeck.cards.push(0, 3);
//   playerPile.innerHTML = playerPile.cards[0].type;
//   } else {
    // while(playerPile.cards.length > 0) {
    //   playerDeck.cards.unshift(playerPile.cards[0]);
    //   playerPile.cards.splice(0, 1);
    //   playerPile.innerHTML = "done";
//     }
//   }
// }











function cardLocations() {
  // playerPile.innerHTML = playerPile.cards[0].type;
  if (playerPile.cards.length > 0) {playerPile.innerHTML = playerPile.cards[0].type
  } else {playerPile.innerHTML = "";
}
  if(playPile1.cards.length > 0) {
  playPile1.innerHTML = playPile1.cards[0].type;
} else {playPile1.innerHTML = ""}

  playPile2.innerHTML = playPile2.cards[0].type;
  playPile3.innerHTML = playPile3.cards[0].type;
  playPile4.innerHTML = playPile4.cards[0].type;
  playPile5.innerHTML = playPile5.cards[0].type;
  playPile6.innerHTML = playPile6.cards[0].type;
  playPile7.innerHTML = playPile7.cards[0].type;

  if(finishPile1.cards.length > 0) {
    finishPile1.innerHTML = finishPile1.cards[0].type;
  } else {finishPile1.innerHTML = ""}
  if(finishPile2.cards.length > 0) {
    finishPile2.innerHTML = finishPile2.cards[0].type;
  } else {finishPile2.innerHTML = ""}
  if(finishPile3.cards.length > 0) {
    finishPile3.innerHTML = finishPile3.cards[0].type;
  } else {finishPile3.innerHTML = ""}
  if(finishPile4.cards.length > 0) {
    finishPile4.innerHTML = finishPile4.cards[0].type;
  } else {finishPile4.innerHTML = ""}
}



//Shuffles deck
function shuffle() {
    for (let i = fullDeck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); 
      [fullDeck[i], fullDeck[j]] = [fullDeck[j], fullDeck[i]];
    }
  }



  gameStart(); 

  



  // Drag and drop card functions
  