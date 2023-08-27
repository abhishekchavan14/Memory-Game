const cardArray = [
    {
        name:'cat1',
        img: 'media/cat1.jpg'
    },
    {
        name:'cat2',
        img: 'media/cat2.jpg'
    },
    {
        name:'cat3',
        img: 'media/cat3.jpg'
    },
    {
        name:'cat4',
        img: 'media/cat4.jpg'
    },
    {
        name:'cat5',
        img: 'media/cat5.jpg'
    },
    {
        name:'cat6',
        img: 'media/cat6.jpg'
    },
    {
        name:'cat7',
        img: 'media/cat7.jpg'
    },
    {
        name:'cat8',
        img: 'media/cat8.jpg'
    },
    {
        name:'cat1',
        img: 'media/cat1.jpg'
    },
    {
        name:'cat2',
        img: 'media/cat2.jpg'
    },
    {
        name:'cat3',
        img: 'media/cat3.jpg'
    },
    {
        name:'cat4',
        img: 'media/cat4.jpg'
    },
    {
        name:'cat5',
        img: 'media/cat5.jpg'
    },
    {
        name:'cat6',
        img: 'media/cat6.jpg'
    },
    {
        name:'cat7',
        img: 'media/cat7.jpg'
    },
    {
        name:'cat8',
        img: 'media/cat8.jpg'
    }
]

cardArray.sort(()=> 0.5 - Math.random()) //to shuffle the cards

const gridDisplay = document.querySelector('#grid');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard(){
    for(let i =0; i<cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'media/blank_bg.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}
createBoard();
function checkMatch(){
    const cards = document.querySelectorAll('#grid img');
    if (cardsChosenIds[0]==cardsChosenIds[1]){
        alert("Do not click the same card again.\nReloading the page.");
        location.reload();
    }
    if(cardsChosen[0]==cardsChosen[1]){
        console.log("found");
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
        // correct_audio.play();
        document.getElementById('result_display').innerHTML = "Found a Pair!";
        document.getElementById('result_display').style.color = "yellowgreen";
        document.getElementById('moves_count_display').innerHTML = "Pairs to be found: " + (cardArray.length/2 - cardsWon.length);
    }
    else{
        cards[cardsChosenIds[0]].setAttribute('src', 'media/blank_bg.jpg');
        cards[cardsChosenIds[1]].setAttribute('src', 'media/blank_bg.jpg');
        // incorrect_audio.play();
        document.getElementById('result_display').innerHTML = "Uh Oh! Try Again.";
        document.getElementById('result_display').style.color = "red";
    }
    cardsChosen = [];
    cardsChosenIds = [];
    if(cardsWon.length == cardArray.length/2){
        // win_audio.play();
        document.getElementById('win_declare_display').innerHTML = "Found'em All!!";
    }
}
let counter = 0;
function flipCard(){
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    this.setAttribute('src', cardArray[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
    counter++;
    document.getElementById('moves_count_display').innerHTML = "Total Moves Made: " + Math.floor(counter/2);
}
 