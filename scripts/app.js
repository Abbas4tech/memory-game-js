import { cards, CLICKED_CLASS } from "./cards.js";

const GridContainer = document.getElementById("cards");
let firstCardSelected = false;
let secondCardSelected = false;
let combinations = [];
const showCardsFor = 500;

const selectFirstCard = (id) => {
  const clickedCard = document.getElementById(id);
  clickedCard.classList.add(CLICKED_CLASS);
  clickedCard.style.pointerEvents = "none";
  combinations.push(id);
  firstCardSelected = true;
};

const selectSecondCard = (id) => {
  console.log("Ran", id);
  const clickedCard = document.getElementById(id);
  clickedCard.classList.add(CLICKED_CLASS);
  clickedCard.style.pointerEvents = "none";
  combinations.push(id);
  secondCardSelected = true;
};

const checkIfCombinationMatch = () => {
  const [firstCard, secondCard] = combinations;
  return (
    cards.find((card) => card.id === +firstCard).value ===
    cards.find((e) => e.id === +secondCard).value
  );
};

function cardClickHandler() {
  if (!firstCardSelected) {
    selectFirstCard(this.id);
    return;
  } else {
    selectSecondCard(this.id);
    const isMatched = checkIfCombinationMatch();
    if (isMatched) {
      combinations = [];
      firstCardSelected = false;
      secondCardSelected = false;
    } else {
      console.log(combinations);
      combinations.forEach((card) => {
        const el = document.getElementById(card);
        setTimeout(() => {
          el.classList.remove(CLICKED_CLASS);
        }, showCardsFor);
        el.style.pointerEvents = "auto";
      });
      firstCardSelected = false;
      secondCardSelected = false;
      combinations = [];
    }
  }
}

const renderCards = () => {
  cards.forEach((card) => {
    const cardEl = document.createElement("div");
    cardEl.id = card.id;
    cardEl.classList.add("flip-card");
    cardEl.innerHTML = `
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <h2>${card.unflippedValue}</h2>
          </div>
          <div class="flip-card-back">
            <h2>${card.value}</h2>
          </div>
        </div>
    `;
    cardEl.addEventListener("click", cardClickHandler);
    GridContainer.append(cardEl);
  });
};
renderCards();
