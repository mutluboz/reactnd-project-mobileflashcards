import { AsyncStorage } from "react-native";

const DECK_STORAGE_KEY = "reactnd-project-mobileflashcards:decks";

export const getDeckList = () => {
  return AsyncStorage.getItem(DECK_STORAGE_KEY).then(data => JSON.parse(data));
};

export const getDeck = deck => {
  return getDeckList().then(data => data[deck]);
};

export function submitDeck(deckName) {
  const deck = {
    key: deckName,
    deckName,
    questions: []
  };
  return AsyncStorage.mergeItem(
    DECK_STORAGE_KEY,
    JSON.stringify({ [deckName]: deck })
  ).then(data => deck);
}

export function addCardToDeck(deck, card) {
  getDeckList().then(data => {
    AsyncStorage.setItem(
      DECK_STORAGE_KEY,
      JSON.stringify({
        ...data,
        [deck]: {
          ...data[deck],
          questions: data[deck].questions.concat([card])
        }
      })
    );
  });
  // getDeck(deck).then(d => {
  //   if (d) {
  //     AsyncStorage.mergeItem(
  //       DECK_STORAGE_KEY,

  //     d.questions.concat([card]);
  //   }
  // });
}
