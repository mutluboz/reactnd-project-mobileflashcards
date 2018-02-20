import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TextInput
} from "react-native";
import { lightBlue, yellow } from "../utils/colors";
import { submitDeck } from "../utils/api";
import AddCardView from "./addCardView";

class newDeckView extends React.Component {
  state = {
    title: "",
    submitting: false
  };

  handleSubmit = () => {
    this.setState({ submitting: true }, () => {
      submitDeck(this.state.title).then(() => {
        this.setState({ submitting: false }, () => {
          this.props.navigation.navigate("AddCard", {
            title: this.state.title
          });
        });
      });
    });
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
          maxLength={30}
          underlineColorAndroid={lightBlue}
          onChangeText={this.handleTitleChange}
        />
        <TouchableOpacity style={styles.submitButtonWrapper}>
          <Button
            onPress={this.handleSubmit}
            title="Submit"
            color={lightBlue}
            disabled={this.state.submitting}
          />
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
  submitButtonWrapper: {
    width: "50%"
  },
  textInput: {
    width: "80%",
    paddingBottom: 5,
    paddingLeft: 5,
    fontSize: 16,
    marginBottom: 20
  }
});

export default newDeckView;
