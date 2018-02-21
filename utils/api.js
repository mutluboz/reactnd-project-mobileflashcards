import { AsyncStorage } from "react-native";
import uuid from "uuid";

const DECK_STORAGE_KEY = "reactnd-project-mobileflashcards:decks";

export const getDeckList = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(data => JSON.parse(data));
};

export const getDeck = deck => {
  return getDeckList().then(data => data[deck]);
};

export function submitDeck(deckName) {
  const id = uuid.v4();
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({ [deckName]: { key: deckName, deckName, questions: [] } })
  );
}

export function addCardToDeck(deck, card) {
  getDeck(deck).then(d => {
    if (d) {
      d.questions.push(card);
    }
  });
}
