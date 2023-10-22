import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
//import Header from "../components/Header";
import fetchApi from "../utils/fetch";
import TodaysImage from "../components/TodaysImage";
import LastFiveDaysImages from "../components/LastFiveDaysImages";
import { format, sub } from "date-fns";

const Home = () => {
  const [todaysImage, setTodaysImage] = useState();
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState([]);
  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage(undefined);
      }
    };

    const loadLastFiveDaysImages = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");

        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
        );
        setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.error(error);
      }
    };

    loadTodaysImage().catch(null);
    loadLastFiveDaysImages().catch(null);
  }, []);
  return (
    <ScrollView style={styles.container}>
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={lastFiveDaysImages} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252440",
  },
});

export default Home;
