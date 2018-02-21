import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput
} from "react-native";
import { lightBlue, white } from "../utils/colors";
import { createDeck } from "../actions";
import AddCardView from "./addCardView";
import { connect } from "react-redux";

class newDeckView extends React.Component {
  state = {
    title: "",
    submitting: false
  };

  handleSubmit = () => {
    if (!this.state.title) alert("Deck name is mandatory!");
    else {
      const currTitle = this.state.title;
      this.setState({ submitting: true }, () => {
        this.props.submitDeck(currTitle, () =>
          this.setState({ submitting: false, title: "" }, () => {
            this.props.navigation.navigate("Deck", {
              title: currTitle
            });
          })
        );
      });
    }
  };

  handleTitleChange = title => {
    this.setState({ title });
  };

  render() {
    return (
      <View style={[styles.container, { flex: 1 }]}>
        <Text style={styles.deckHeaderLabel}>
          What is the title of your new deck?
        </Text>
        <TextInput
          style={styles.textInput}
          value={this.state.title}
          maxLength={30}
          underlineColorAndroid={lightBlue}
          onChangeText={this.handleTitleChange}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.handleSubmit}
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
  deckHeaderLabel: {
    fontSize: 40,
    margin: 20,
    width: "80%"
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
    submitDeck: (title, successCallback) =>
      dispatch(createDeck(title, successCallback))
  };
}

export default connect(null, mapDispatchToProps)(newDeckView);
