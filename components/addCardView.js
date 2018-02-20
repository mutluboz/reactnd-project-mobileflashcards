import React from "react";
import { View, Text } from "react-native";

class addCardView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "New Card"
  });

  render() {
    return (
      <View>
        <Text>adds</Text>
      </View>
    );
  }
}

export default addCardView;
