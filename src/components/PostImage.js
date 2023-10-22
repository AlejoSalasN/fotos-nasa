import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PostImage = ({ url, title, date, explanation }) => {
  const { navigate } = useNavigation();
  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleViewPress()}>
          <Text style={{ color: "#fff" }}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2d2c55",
    borderRadius: 15,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});

export default PostImage;
