import { AsyncStorage } from "react-native";
import uuid from "uuid";

const DECK_STORAGE_KEY = "reactnd-project-mobileflashcards:decks";

export const getDeckList = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(data => JSON.parse(data));
};

export function submitDeck(deckName) {
  const id = uuid.v4();
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({ [id]: { key: id, deckName } })
  );
}
