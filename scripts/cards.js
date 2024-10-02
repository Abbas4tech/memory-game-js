export const cards = Array.from({ length: 16 }, (_, i) => ({
  id: Math.random(),
  value: i + 1,
  unflippedValue: "?",
}));

export const FLIP_CLASS = "flipped";
export const CLICKED_CLASS = "clicked";
