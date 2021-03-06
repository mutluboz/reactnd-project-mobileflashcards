import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { lightBlue, white } from "../utils/colors";
import { createCard } from "../actions";
import { connect } from "react-redux";

class addCardView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "New Card"
  });

  state = {
    question: "",
    answer: "",
    submitting: false
  };

  handleSubmit = deck => {
    if (!this.state.question) alert("Question is mandatory!");
    else if (!this.state.answer) alert("Answer is mandatory!");

    this.props.addCardToDeck(deck, {
      question: this.state.question,
      answer: this.state.answer
    });
  };

  render() {
    return (
      <View style={[styles.container, { flex: 1 }]}>
        <Text style={styles.label}>Question:</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid={lightBlue}
          value={this.state.question}
          onChangeText={question => this.setState({ question })}
        />
        <Text style={styles.label}>Answer:</Text>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid={lightBlue}
          value={this.state.answer}
          onChangeText={answer => this.setState({ answer })}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() =>
            this.handleSubmit(this.props.navigation.state.params.deck)
          }
          disabled={this.state.submitting}
        >
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  label: {
    fontSize: 24,
    marginTop: 10,
    marginBottom: 10
  },
  textInput: {
    width: "80%",
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 16,
    marginBottom: 20
  },
  submitButton: {
    backgroundColor: lightBlue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: "center"
  }
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    addCardToDeck: (deck, card) =>
      dispatch(createCard(deck, card)).then(ownProps.navigation.goBack())
  };
}

export default connect(null, mapDispatchToProps)(addCardView);
