import React from "react";
import DeckCard from "./deckCard";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { fetchDecks } from "../../actions";
import { gray } from "../../utils/colors";

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
    return Object.values(decks).length > 0 ? (
      <View style={{ flex: 1 }}>
        <FlatList data={Object.values(decks)} renderItem={this.renderItem} />
      </View>
    ) : (
      <View style={[styles.noDataContainer]}>
        <Text style={styles.cardHeader}>You haven't created a deck yet! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noDataContainer: {
    margin: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: gray,
    borderRadius: 8,
    width: "90%",
    height: 90,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  cardHeader: {
    fontSize: 25
  }
});

function mapStateToProps(state) {
  return {
    decks: state ? state : {}
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDecks: () => dispatch(fetchDecks())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(deckList);
