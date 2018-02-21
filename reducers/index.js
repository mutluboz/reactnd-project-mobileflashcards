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
    case FlashCardActions.CREATE_CARD: {
      const { deck, card } = action;

      return {
        ...state,
        [deck]: {
          ...state[deck],
          questions: state[deck].questions.concat([card])
        }
      };
    }
    default:
      return state;
  }
}

export default Decks;
