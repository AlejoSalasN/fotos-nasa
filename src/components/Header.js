import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.title}>Explore</Text>
      </View>
      <View style={styles.rightConatainer}>
        <Image
          source={require("../../assets/logo-nasa-2.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  rightConatainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    color: "#fff",
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default Header;
