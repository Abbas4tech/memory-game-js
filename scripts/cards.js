export const cards = [
  {
    id: 0.8953951265654376,
    value: 1,
    unflippedValue: "?",
  },
  {
    id: 0.7700114258867985,
    value: 2,
    unflippedValue: "?",
  },
  {
    id: 0.17288101296818525,
    value: 3,
    unflippedValue: "?",
  },
  {
    id: 0.47462648939106766,
    value: 4,
    unflippedValue: "?",
  },
  {
    id: 0.7532453039101832,
    value: 5,
    unflippedValue: "?",
  },
  {
    id: 0.5631725981256235,
    value: 6,
    unflippedValue: "?",
  },
  {
    id: 0.5071156998943032,
    value: 7,
    unflippedValue: "?",
  },
  {
    id: 0.009189018813224203,
    value: 8,
    unflippedValue: "?",
  },
  {
    id: 0.21611484366337064,
    value: 1,
    unflippedValue: "?",
  },
  {
    id: 0.8880067869850479,
    value: 2,
    unflippedValue: "?",
  },
  {
    id: 0.37354821509431635,
    value: 3,
    unflippedValue: "?",
  },
  {
    id: 0.41726110416757556,
    value: 4,
    unflippedValue: "?",
  },
  {
    id: 0.6617172491225114,
    value: 5,
    unflippedValue: "?",
  },
  {
    id: 0.2024462150369608,
    value: 6,
    unflippedValue: "?",
  },
  {
    id: 0.42069553631734213,
    value: 7,
    unflippedValue: "?",
  },
  {
    id: 0.07220843905336038,
    value: 8,
    unflippedValue: "?",
  },
]
  .map((card) => ({ card, sort_key: Math.random() }))
  .sort((a, b) => a.sort_key - b.sort_key)
  .map(({ card }) => card);

export const shuffleCards = (cardsData) => {
  return cardsData
    .map((card) => ({ card, sort_key: Math.random() }))
    .sort((a, b) => a.sort_key - b.sort_key)
    .map(({ card }) => card);
};

export const FLIP_CLASS = "flipped";
export const CLICKED_CLASS = "clicked";
