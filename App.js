import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Footer from "./Components/Footer";

import General from "./Screen/General";
import Advance from "./Screen/Advance";
import Cgpa from "./Screen/Cgpa";

const App = () => {
  const [activeScreen, setActiveScreen] = useState("General");

  const renderScreen = () => {
    switch (activeScreen) {
      case "General":
        return <General />;

      case "Advance":
        return <Advance />;

      case "Cgpa":
        return <Cgpa />;

      default:
        return <General />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderScreen()}</View>
      <Footer setScreen={setActiveScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
});

export default App;
