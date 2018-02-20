import { AsyncStorage } from "react-native";
import uuid from "uuid";

const DECK_STORAGE_KEY = "reactnd-project-mobileflashcards:decks";

export const getDeckList = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY);
};

export function submitDeck(deckName) {
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({ [uuid.v4()]: deckName })
  );
}
