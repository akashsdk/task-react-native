import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Footer = ({ setScreen }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={() => setScreen('General')}>
        <Text style={styles.buttonText}>General</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setScreen('Advance')}>
        <Text style={styles.buttonText}>Advance</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setScreen('Cgpa')}>
        <Text style={styles.buttonText}>CGPA</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setScreen('More')}>
        <Text style={styles.buttonText}>More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Footer;
