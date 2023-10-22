import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const TodaysImage = ({ url, title, date, explanation }) => {
  const { navigate } = useNavigation();
  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
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
    backgroundColor: "#2f2c79",
    marginVertical: 16,
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 24,
  },
  image: {
    width: "100%",
    height: 230,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 20,
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

export default TodaysImage;
