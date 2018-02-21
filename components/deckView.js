import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DeckCard from "./deckList/deckCard";
import { getDeck } from "../utils/api";
import { lightBlue, white } from "../utils/colors";

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
    title: `${navigation.state.params.title}`
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DeckCard {...this.state.deck} />
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            this.props.navigation.navigate("AddCard", {
              deck: this.props.navigation.state.params.title
            })
          }
        >
          <Text style={styles.btnText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          // onPress={this.handleSubmit}
          // disabled={this.state.submitting}
        >
          <Text style={styles.btnText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  btn: {
    backgroundColor: lightBlue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20
  },
  btnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
});

export default DeckView;
