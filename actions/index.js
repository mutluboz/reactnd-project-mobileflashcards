import * as FlashCardApi from "../utils/api";

export const FETCH_DECKS = "FETCH_DECKS";
export const CREATE_DECK = "CREATE_DECK";
export const CREATE_CARD = "CREATE_CARD";
export const FETCH_DECK = "FETCH_DECK";
export const GET_CARDS = "GET_CARDS";

export function fetchDecks() {
  return dispatch => {
    FlashCardApi.getDeckList().then(decks => {
      dispatch({ type: FETCH_DECKS, decks });
    });
  };
}

export function createDeck(deckName) {
  return dispatch => {
    FlashCardApi.submitDeck(deckName).then(deck => {
      dispatch({ type: CREATE_DECK, deck });
    });
  };
}

export function createCard(deck, card) {
  return dispatch => {
    FlashCardApi.addCardToDeck(deck, card);
    dispatch({ type: CREATE_CARD, deck, card });
  };
}
