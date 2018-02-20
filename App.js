import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import { TabNavigator } from "react-navigation";
import { white, purple, lightBlue } from "./utils/colors";
import { submitDeck, getDeckList } from "./utils/api";
import { AsyncStorage } from "react-native";

const Hello = () => (
  <View>
    <Text>Hello!</Text>
  </View>
);

const Goodbye = () => (
  <View>
    <Text>Goodbye!</Text>
  </View>
);

const Tabs = TabNavigator(
  {
    DeckList: {
      screen: Hello,
      navigationOptions: {
        tabBarLabel: "Decks"
      }
    },
    NewDeck: {
      screen: Goodbye,
      navigationOptions: {
        tabBarLabel: "New Deck"
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: purple,
      style: {
        marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
        height: 56,
        backgroundColor: lightBlue,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
);

export default class App extends React.Component {
  componentDidMount() {
    AsyncStorage.clear(); //todo : delete after implementation
    submitDeck("deck1")
      .then(submitDeck("deck2"))
      .then(submitDeck("deck3"));
  }

  render() {
    return <Tabs />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
