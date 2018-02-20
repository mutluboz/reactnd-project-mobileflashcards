import React from "react";
import { View, Text } from "react-native";
import DeckCard from "./deckList/deckCard";
import { getDeck } from "../utils/api";

class DeckView extends React.Component {
  state = {
    deck: {}
  };

  componentDidMount() {
    getDeck(this.props.navigation.state.params.title).then(deck =>
      this.setState({ deck })
    );
  }

  static navigationOptions = ({ navigation }) => ({
    title: `Deck : ${navigation.state.params.title}`
  });

  render() {
    return <DeckCard {...this.state.deck} />;
  }
}

export default DeckView;
