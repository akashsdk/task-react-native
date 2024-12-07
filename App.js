import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from './Components/Footer';
import General from './Screen/General';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Your main content goes here */}
      <View style={styles.content}>
        {/* Calculator content */}
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    // Additional styles for your calculator screen
  },
});

export default App;
