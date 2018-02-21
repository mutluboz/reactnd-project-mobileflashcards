import * as FlashCardActions from "../actions";

function Decks(state = {}, action) {
  switch (action.type) {
    case FlashCardActions.FETCH_DECKS: {
      console.log("heyoooo");
      console.log(action.decks);
      return action.decks;
    }
    default:
      return state;
  }
}

export default Decks;
