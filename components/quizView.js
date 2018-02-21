import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { lightBlue, white, green, red } from "../utils/colors";

class quizView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.deck.key} Quiz`
  });

  state = {
    currentQuestion: 0,
    displayAnswer: false,
    correctCount: 0
  };

  render() {
    const { deck } = this.props.navigation.state.params;
    let card = {};
    let finished = false;
    const totalCardCount = deck.questions.length;

    if (this.state.currentQuestion === totalCardCount) finished = true;
    else card = deck.questions[this.state.currentQuestion];

    return !finished ? (
      <View style={[{ flex: 1 }, styles.container]}>
        <Text style={styles.counter}>{`${this.state.currentQuestion +
          1}/${totalCardCount}`}</Text>
        <Text style={styles.bigText}>
          {this.state.displayAnswer ? card.answer : card.question}
        </Text>
        <TouchableOpacity
          onPress={() => {
            this.setState(prevState => {
              return {
                displayAnswer: prevState.displayAnswer ? false : true
              };
            });
          }}
        >
          <Text style={styles.flipText}>
            {this.state.displayAnswer ? "Question" : "Answer"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: green }]}
          onPress={() => {
            this.setState(prevState => {
              return {
                currentQuestion: prevState.currentQuestion + 1,
                correctCount: prevState.correctCount + 1,
                displayAnswer: false
              };
            });
          }}
        >
          <Text style={styles.btnText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: red }]}
          onPress={() => {
            this.setState(prevState => {
              return {
                currentQuestion: prevState.currentQuestion + 1,
                displayAnswer: false
              };
            });
          }}
        >
          <Text style={styles.btnText}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={[{ flex: 1 }, styles.container]}>
        <Text style={[styles.bigText, { marginTop: 20, marginBottom: 20 }]}>{`${
          this.state.correctCount
        }/${totalCardCount} questions were correct!`}</Text>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: lightBlue }]}
          onPress={() => {
            this.props.navigation.navigate("Deck", {
              title: deck.key
            });
          }}
        >
          <Text style={styles.btnText}>Go Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: lightBlue }]}
          onPress={() => {
            this.setState({
              currentQuestion: 0,
              displayAnswer: false,
              correctCount: 0
            });
          }}
        >
          <Text style={styles.btnText}>Restart</Text>
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
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: "40%"
  },
  btnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  },
  counter: {
    alignSelf: "flex-start",
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 15
  },
  bigText: {
    fontSize: 35,
    width: "85%",
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 20
  },
  flipText: {
    color: red,
    fontSize: 18,
    marginBottom: 10
  }
});

export default quizView;
