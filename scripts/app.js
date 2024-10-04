import { cards, CLICKED_CLASS, shuffleCards } from "./cards.js";

const GridContainer = document.getElementById("cards");
const resetBtn = document.getElementById("reset-btn");
let selectedCards = [];
const showCardsFor = 500;

const selectCard = (cardEl, cardId) => {
  cardEl.classList.add(CLICKED_CLASS);
  cardEl.style.pointerEvents = "none";
  selectedCards.push(cardId);
};

const resetCards = () => {
  selectedCards.forEach((cardId) => {
    const cardEl = document.getElementById(cardId);
    setTimeout(() => {
      cardEl.classList.remove(CLICKED_CLASS);
      cardEl.style.pointerEvents = "auto";
    }, showCardsFor);
  });
  selectedCards = [];
};

const checkIfCombinationMatch = () => {
  const [firstCard, secondCard] = selectedCards;
  return (
    cards.find((card) => card.id === +firstCard).value ===
    cards.find((card) => card.id === +secondCard).value
  );
};

const cardClickHandler = (e) => {
  const clickedCard = e.target.closest(".flip-card");
  if (!clickedCard || selectedCards.length === 2) return;

  const cardId = clickedCard.id;
  selectCard(clickedCard, cardId);

  if (selectedCards.length === 2) {
    const isMatched = checkIfCombinationMatch();
    if (!isMatched) {
      resetCards();
    } else {
      selectedCards = [];
    }
  }
};

const renderCards = (cardData) => {
  GridContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();
  cardData.forEach((card) => {
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
    fragment.appendChild(cardEl);
  });
  GridContainer.appendChild(fragment);
};

GridContainer.addEventListener("click", cardClickHandler);
resetBtn.addEventListener("click", () => renderCards(shuffleCards(cards)));
renderCards(shuffleCards(cards));
