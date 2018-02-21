import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import { white, purple, lightBlue } from "./utils/colors";
import { submitDeck } from "./utils/api";
import { AsyncStorage } from "react-native";
import DeckList from "./components/deckList/deckList";
import NewDeckView from "./components/newDeckView";
import AddCardView from "./components/addCardView";
import DeckView from "./components/deckView";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import ReduxThunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(ReduxThunk));

const Tabs = TabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: "Decks"
      }
    },
    NewDeck: {
      screen: NewDeckView,
      navigationOptions: {
        tabBarLabel: "New Deck"
      }
    }
  },
  {
    navigationOptions: {
      header: null,
      swipeEnabled: false
      // tabBarOnPress: () => alert("hi")
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

const stackNavNavigationOptions = {
  headerTintColor: white,
  headerStyle: {
    backgroundColor: lightBlue
  }
};

StackNav = StackNavigator({
  Home: {
    screen: Tabs
  },
  AddCard: {
    screen: AddCardView,
    navigationOptions: stackNavNavigationOptions
  },
  Deck: {
    screen: DeckView,
    navigationOptions: stackNavNavigationOptions
  }
});

export default class App extends React.Component {
  componentDidMount() {
    AsyncStorage.clear(); //todo : delete after implementation
    submitDeck("deck1")
      .then(submitDeck("deck2"))
      .then(submitDeck("deck4"))
      .then(submitDeck("deck5"))
      .then(submitDeck("deck6"))
      .then(submitDeck("deck7"))
      .then(submitDeck("deck8"))
      .then(submitDeck("deck9"))
      .then(submitDeck("deck10"))
      .then(submitDeck("deck11"))
      .then(submitDeck("deck12"))
      .then(submitDeck("deck13"))
      .then(submitDeck("deck14"));
  }

  render() {
    return (
      <Provider store={store}>
        <StackNav />
      </Provider>
    );
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
