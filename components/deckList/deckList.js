import React from "react";
import DeckCard from "./deckCard";
import { View, Text, FlatList } from "react-native";
import { getDeckList } from "../../utils/api";

class deckList extends React.Component {
  state = {
    decks: {}
  };

  componentDidMount() {
    getDeckList().then(deckList => {
      this.setState({ decks: deckList });
    });
  }

  renderItem = ({ item }) => {
    return (
      <DeckCard
        onNavigation={deck =>
          this.props.navigation.navigate("Deck", {
            title: deck
          })
        }
        {...item}
      />
    );
  };

  render() {
    const { decks } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <FlatList data={Object.values(decks)} renderItem={this.renderItem} />
      </View>
    );
  }
}

export default deckList;
