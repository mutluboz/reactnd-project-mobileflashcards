import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { gray } from "../../utils/colors";

const deckCard = props => {
  const { onNavigation, deckName, questions } = props;

  return (
    <TouchableOpacity onPress={() => onNavigation && onNavigation(deckName)}>
      <View style={[styles.container]}>
        <Text style={styles.cardHeader}>{deckName}</Text>
        <Text style={styles.cardSubheader}>
          {" "}
          {`${questions && questions.length} cards`}{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 5,
    borderWidth: 1,
    borderColor: gray,
    borderRadius: 8,
    width: "90%",
    height: 90,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  cardHeader: {
    fontSize: 30
  },
  cardSubheader: {
    fontSize: 25,
    color: gray
  }
});

export default deckCard;
