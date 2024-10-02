import { cards, CLICKED_CLASS } from "./cards.js";

const GridContainer = document.getElementById("cards");
let cardIsClicked = false;

const flipCard = (id) => {
  if (!cardIsClicked) {
    cardIsClicked = true;
    const clickedCard = document.getElementById(id);
    clickedCard.classList.add(CLICKED_CLASS);
    clickedCard.style.pointerEvents = "none";
    setTimeout(() => {
      clickedCard.classList.remove(CLICKED_CLASS);
      cardIsClicked = false;
    }, 1000);
    setTimeout(() => (clickedCard.style.pointerEvents = "auto"), 3000);
  }
};

const renderCards = () => {
  cards.forEach((card) => {
    const cardEl = document.createElement("div");
    cardEl.id = `card-${card.id}`;
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
    cardEl.addEventListener("click", () => flipCard(cardEl.id));
    GridContainer.append(cardEl);
  });
};
renderCards();
console.log(cards);
