import React from "react";
import { Text, StyleSheet, ScrollView, Image } from "react-native";
//import Header from "../components/Header";
import { useRoute } from "@react-navigation/native";

const Detail = () => {
  const {
    params: { title, url, date, explanation },
  } = useRoute();
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.explanation}>{explanation}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252440",
  },
  image: {
    width: "100%",
    height: 230,
    borderColor: "#fff",
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 16,
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  explanation: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 16,
  },
});

export default Detail;
