import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DeckCard from "./deckList/deckCard";
import { lightBlue, white, disabledGray } from "../utils/colors";
import { connect } from "react-redux";
import { fetchDeck } from "../actions";
import {
  clearLocalNotification,
  setLocalNotification
} from "../utils/localPush";

class DeckView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <DeckCard {...this.props.deck} />
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
          style={[
            styles.btn,
            {
              backgroundColor:
                !this.props.deck || this.props.deck.questions.length === 0
                  ? disabledGray
                  : lightBlue
            }
          ]}
          onPress={() => {
            clearLocalNotification().then(setLocalNotification);
            this.props.navigation.navigate("Quiz", {
              deck: this.props.deck
            });
          }}
          disabled={!this.props.deck || this.props.deck.questions.length === 0}
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

function mapStateToProps(state, ownProps) {
  return {
    deck: state[ownProps.navigation.state.params.title]
  };
}

export default connect(mapStateToProps)(DeckView);
