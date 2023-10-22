import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PostImage from "./PostImage";

const LastFiveDaysImages = ({ postImages }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Last 5 Days</Text>
      <View style={styles.content}>
        {postImages?.map((postImage) => (
          <PostImage key={postImage.title} {...postImage} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 12,
  },
  content: {
    paddingHorizontal: 16,
  },
  titulo: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 18,
  },
});

export default LastFiveDaysImages;
