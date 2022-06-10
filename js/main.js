/*----- constants -----*/

const board = document.getElementById('board');
const Deck = [];
const winLine = document.getElementById('winline');

//Card object class
class Card {
  constructor(red, suit, value, type) {
    this.red = red;
    this.suit = suit;
    this.value = value;
    this.type = type;
  }
}

// Heart cards
const HA = new Card('red', "heart", 1, 'card hA');
const H2 = new Card('red', "heart", 2, 'card h02');
const H3 = new Card('red', "heart", 3, 'card h03');
const H4 = new Card('red', "heart", 4, 'card h04');
const H5 = new Card('red', "heart", 5, 'card h05');
const H6 = new Card('red', "heart", 6, 'card h06');
const H7 = new Card('red', "heart", 7, 'card h07');
const H8 = new Card('red', "heart", 8, 'card h08');
const H9 = new Card('red', "heart", 9, 'card h09');
const H10 = new Card('red', "heart", 10, 'card h10');
const HJ = new Card('red', "heart", 11, 'card hJ');
const HQ = new Card('red', "heart", 12, 'card hQ');
const HK = new Card('red', "heart", 13, 'card hK');

//Diamond cards
const DA = new Card('red', "diamond", 1, 'card dA');
const D2 = new Card('red', "diamond", 2, 'card d02');
const D3 = new Card('red', "diamond", 3, 'card d03');
const D4 = new Card('red', "diamond", 4, 'card d04');
const D5 = new Card('red', "diamond", 5, 'card d05');
const D6 = new Card('red', "diamond", 6, 'card d06');
const D7 = new Card('red', "diamond", 7, 'card d07');
const D8 = new Card('red', "diamond", 8, 'card d08');
const D9 = new Card('red', "diamond", 9, 'card d09');
const D10 = new Card('red', "diamond", 10, 'card d10');
const DJ = new Card('red', "diamond", 11, 'card dJ');
const DQ = new Card('red', "diamond", 12, 'card dQ');
const DK = new Card('red', "diamond", 13, 'card dK');

// Clover cards
const CA = new Card('black', "clover", 1, 'card cA');
const C2 = new Card('black', "clover", 2, 'card c02');
const C3 = new Card('black', "clover", 3, 'card c03');
const C4 = new Card('black', "clover", 4, 'card c04');
const C5 = new Card('black', "clover", 5, 'card c05');
const C6 = new Card('black', "clover", 6, 'card c06');
const C7 = new Card('black', "clover", 7, 'card c07');
const C8 = new Card('black', "clover", 8, 'card c08');
const C9 = new Card('black', "clover", 9, 'card c09');
const C10 = new Card('black', "clover", 10, 'card c10');
const CJ = new Card('black', "clover", 11, 'card cJ');
const CQ = new Card('black', "clover", 12, 'card cQ');
const CK = new Card('black', "clover", 13, 'card cK');

// Spade cards
const SA = new Card('black', "spade", 1, 'card sA');
const S2 = new Card('black', "spade", 2, 'card s02');
const S3 = new Card('black', "spade", 3, 'card s03');
const S4 = new Card('black', "spade", 4, 'card s04');
const S5 = new Card('black', "spade", 5, 'card s05');
const S6 = new Card('black', "spade", 6, 'card s06');
const S7 = new Card('black', "spade", 7, 'card s07');
const S8 = new Card('black', "spade", 8, 'card s08');
const S9 = new Card('black', "spade", 9, 'card s09');
const S10 = new Card('black', "spade", 10, 'card s10');
const SJ = new Card('black', "spade", 11, 'card sJ');
const SQ = new Card('black', "spade", 12, 'card sQ');
const SK = new Card('black', "spade", 13, 'card sK');

// Card object arrays
const fullDeck = [HA, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK, DA, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK, CA, C2, C3, C4, C5, C6, C7, C8, C9, C10, CJ, CQ, CK, SA, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK];
const cardHeart = [HA, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK];
const cardDiamond = [DA, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK];
const cardClover = [CA, C2, C3, C4, C5, C6, C7, C8, C9, C10, CJ, CQ, CK];
const cardSpade = [SA, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK];

/*----- app's state (variables) -----*/

// Pull interactable card piles via DOM
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

/*----- event listeners -----*/

// Drag and drop event listeners
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

/*----- functions -----*/

//Click function for player clicking on card deck 
function deckClick(evt) {
  if (playerDeck.cards.length > 0) {
    playerPile.cards.unshift(playerDeck.cards[0]);
    playerDeck.cards.splice(0, 1);
    playerPile.setAttribute('class', playerPile.cards[0].type);
  } else {
    playerPile.setAttribute('class', 'none')
    while (playerPile.cards.length > 0) {
      playerDeck.cards.unshift(playerPile.cards[0]);
      playerPile.cards.splice(0, 1);
      playerPile.innerHTML = "";
    }
  }
}
// Grab card from any playable pile
function cardDrag(evt) {
  if (event.target.cards.length > 0) {
    clickSource = event.target.cards;
    dragItem = event.target.cards[0];
    dragSource = event.target;
  } else { }
}
// Drag over playable drop location
function onDragOver(evt) {
  event.preventDefault();
  dropTarget = event.target;
  return dropTarget;
}
// Drop card functionality for any of the 7 play piles 
function cardDropPlayPile(evt) {
  //DROP NEW KING
  if (dropTarget.cards.length === 0 && dragItem.value === 13) {
    dropTarget.cards.unshift(dragItem);
    clickSource.splice(0, 1);
    // ATTEMPTING TO DROP A NON-KING CARD ON AN EMPTY PILE
  } else if (dropTarget.cards.length === 0) {
    clickSource.unshift(dragItem);
    clickSource.splice(0, 1);
    // LEGAL DROP PLAY
  } else if (dragItem.red !== dropTarget.cards[0].red && dragItem.value === dropTarget.cards[0].value - 1) {
    dropTarget.cards.unshift(dragItem);
    clickSource.splice(0, 1);
    // ILLEGAL PLAY
  } else {
    clickSource.unshift(dragItem);
    clickSource.splice(0, 1);
  }
  // ASSIGNS IMAGE TO DIV OBJECT WHEN CARD IS PLACED
  if (dragSource.cards.length === 0) {
    dropTarget.setAttribute('class', dropTarget.cards[0].type);
    dragSource.setAttribute('class', 'none');
  } else {
    dropTarget.setAttribute('class', dropTarget.cards[0].type);
    dragSource.setAttribute('class', dragSource.cards[0].type);
  }
  // REMOVES ALL DRAG/DROP VALUES AFTER A CARD HAS BEEN DROPPED
  dropTarget = undefined;
  dragItem = undefined;
  clickSource = undefined;
}
// Drop functionality for the 4 finish piles
function cardDropFinishPile(evt) {
  // ADDS NEW ACE
  if (dropTarget.cards.length < 1 && dragItem.value === 1) {
    dropTarget.cards.unshift(dragItem);
    clickSource.splice(0, 1);
    // ATTEMPT TO ADD FIRST CARD THAT IS NOT AN ACE
  } else if (dropTarget.cards.length === 0) {
    clickSource.unshift(dragItem);
    clickSource.splice(0, 1);
    // LEGAL PLAY ON FINISH PILE
  } else if (dropTarget.cards[0].value === dragItem.value - 1 && dropTarget.cards[0].suit === dragItem.suit) {
    dropTarget.cards.unshift(dragItem);
    clickSource.splice(0, 1);
    // ILLEGAL PLAY ON FINISH PILE
  } else {
    clickSource.unshift(dragItem);
    clickSource.splice(0, 1);
  }
  // ASSIGNS IMAGE TO DIV OBJECT WHEN CARD IS PLACED
  if (dragSource.cards.length === 0) {
    dropTarget.setAttribute('class', dropTarget.cards[0].type);
    dragSource.setAttribute('class', 'none');
  } else {
    dropTarget.setAttribute('class', dropTarget.cards[0].type);
    dragSource.setAttribute('class', dragSource.cards[0].type);
  }
  // REMOVES ALL DRAG/DROP VALUES AFTER A CARD HAS BEEN DROPPED
  dropTarget = undefined;
  dragItem = undefined;
  clickSource = undefined;
  winCheck()
}

// Randomizes deck 
function shuffle() {
  for (let i = fullDeck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [fullDeck[i], fullDeck[j]] = [fullDeck[j], fullDeck[i]];
  }
}
// Begins game by randomizing deck array and pushing card objects to the appropriate array(runs on page load)
function gameStart() {
  shuffle();
  playPile1.cards.push(fullDeck[0]);
  fullDeck.splice(0, 1);
  playPile2.cards.push(fullDeck[0]);
  fullDeck.splice(0, 1);
  playPile3.cards.push(fullDeck[0]);
  fullDeck.splice(0, 1);
  playPile4.cards.push(fullDeck[0]);
  fullDeck.splice(0, 1);
  playPile5.cards.push(fullDeck[0]);
  fullDeck.splice(0, 1);
  playPile6.cards.push(fullDeck[0]);
  fullDeck.splice(0, 1);
  playPile7.cards.push(fullDeck[0]);
  fullDeck.splice(0, 1);
  while (fullDeck.length > 0) {
    playerDeck.cards.push(fullDeck[0]);
    fullDeck.splice(0, 1);
  }
  cardLocations()
}
// Assigns HTML classes for each card piles in accordance with the card on the top of each pile. HTML class associated with card image
function cardLocations() {
  if (playerPile.cards.length > 0) {
    playerPile.setAttribute('class', playerPile.cards[0].type);
  } else {
    playerPile.setAttribute('class', 'none');
  }

  if (playPile1.cards.length > 0) {
    playPile1.setAttribute('class', playPile1.cards[0].type);
  } else { playPile1.setAttribute('class', 'none'); }

  if (playPile2.cards.length > 0) {
    playPile2.setAttribute('class', playPile2.cards[0].type);
  } else { playPile2.setAttribute('class', 'none'); }

  if (playPile3.cards.length > 0) {
    playPile3.setAttribute('class', playPile3.cards[0].type);
  } else { playPile3.setAttribute('class', 'none'); }
  if (playPile4.cards.length > 0) {
    playPile4.setAttribute('class', playPile4.cards[0].type);
  } else { playPile4.setAttribute('class', 'none'); }

  if (playPile5.cards.length > 0) {
    playPile5.setAttribute('class', playPile5.cards[0].type);
  } else { playPile5.setAttribute('class', 'none'); }

  if (playPile6.cards.length > 0) {
    playPile6.setAttribute('class', playPile6.cards[0].type);
  } else { playPile6.setAttribute('class', 'none'); }

  if (playPile7.cards.length > 0) {
    playPile7.setAttribute('class', playPile7.cards[0].type);
  } else { playPile7.setAttribute('class', 'none'); }
}
// Function to determin and display when player has completed game
function winCheck() {
  if (finishPile1.cards.length === 13 && finishPile2.cards.length === 13 && finishPile3.cards.length === 13 && finishPile4.cards.length === 13) {
    winLine.innerText = "Ding! Ding! Ding!"
  } else {};
}
// !!! Function to simulate win condition, left in for presentation. 
function forceWin() {
  finishPile1.cards = [HA, H2, H3, H4, H5, H6, H7, H8, H9, H10, HJ, HQ, HK];
  finishPile2.cards = [DA, D2, D3, D4, D5, D6, D7, D8, D9, D10, DJ, DQ, DK];
  finishPile3.cards = [CA, C2, C3, C4, C5, C6, C7, C8, C9, C10, CJ, CQ, CK];
  finishPile4.cards = [SA, S2, S3, S4, S5, S6, S7, S8, S9, S10, SJ, SQ, SK];
}
gameStart();