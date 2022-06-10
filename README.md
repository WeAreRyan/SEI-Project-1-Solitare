# Project1-Solitaire
HTML, CSS, JS

Ryan Okamoto

<br>

<img src="https://i.imgur.com/egmRaG2.png">

# Almost Solitaire
<br>
<a href="https://WeAreRyan.github.io/SEI-Project-1-Solitare/">Click here to play</a>

# Functionality
<br>
The game will shuffle the deck and place cards randomly in appropriate locations upon loading. The game operates on the same basic rules and solitaire. Unlike solitaire there are no facedown cards in the bottom row at the start of the game. 

The player may drag and drop cards between the bottom 7 piles freely at game start as well as click the top left cardback representing the deck to flip a card. At this point the player may place any visible cards onto any of the 7 play piles in accordance to the rules of solitaire. The player may also move any visible cards to any of the top right cardbacks in accordance to the rules of solitaire. Unlike a traditional game of solitaire, when the player clicks on the card deck only one card is flipped onto the playpile at a time. 

# Next Steps
<br>
Currently the game does not allow the player to grab and move stacks of cards between the bottom 7 play piles. This is why the game rules do not follow a normal game of solitaire as losing this ability would essentially make the game imposible to complete. I intend to add a visual representation of each play pile along with the ability to grab stacks of cards in the future. 

# Pseudocode
<br>
Create card class, each card has 4 key value pairs to identify it and interact with game functionality. 
card = {
    **red**: indicates card color;
    **suit**: indicates card suit
    **value**: cards are given a value from 1 to 13 in accordance with the card type(i.e. 5 = 5, ace = 1, **queen** = 11). This value is used by the game functions to determine its playablity on a pile. 
    **type**: individual card represented by a sting ('card dJ' = Jack of diamonds). Used as a reference point for card visualization. 
}
Generate card objects
Pull dom objects for interactable tiles into JS
Function to randomize card order
Function to deal out cards on game start
Function for flipping card from deck & event click listener.
Add event listeners for each interactable card pile for drag and drop functionality. dragstart, dragover, drop. 
Functions to determine if a card is playable at a location:

