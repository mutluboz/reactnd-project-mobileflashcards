import * as FlashCardActions from "../actions";

function Decks(state = {}, action) {
  switch (action.type) {
    case FlashCardActions.FETCH_DECKS: {
      return action.decks;
    }
    case FlashCardActions.CREATE_DECK: {
      const { deck } = action;
      return {
        ...state,
        [deck.key]: deck
      };
    }
    default:
      return state;
  }
}

export default Decks;
