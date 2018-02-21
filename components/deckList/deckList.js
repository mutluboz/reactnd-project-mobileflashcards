import React from "react";
import DeckCard from "./deckCard";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";
import { fetchDecks } from "../../actions";

class deckList extends React.Component {
  componentDidMount() {
    this.props.getDecks();
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
    const { decks } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <FlatList data={Object.values(decks)} renderItem={this.renderItem} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDecks: () => dispatch(fetchDecks())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(deckList);
