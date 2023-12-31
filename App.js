import { SafeAreaView, View, StyleSheet } from "react-native";
import Routes from "./src/routes/routes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          marginTop: Platform.OS === "android" && 30,
        }}
      >
        <Routes />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252440",
    color: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
});
