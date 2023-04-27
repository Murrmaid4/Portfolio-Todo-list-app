import React, { useState } from 'react';
import { Switch, StyleSheet, View,Text } from 'react-native';
import Note from '../NoteForm';
const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the mode
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Define the styles for light and dark modes
  const styles = StyleSheet.create({
    container: {
      backgroundColor: isDarkMode ? '#000' : '#fff',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: isDarkMode ? '#fff' : '#000',
      fontSize: 24,
    },
  });

  return (
    <View style={styles.container}>
      <Switch value={isDarkMode} onValueChange={toggleMode} />
      
      <Text style={styles.text}>To-Do List App!</Text>
      
   <Note/>
    </View>
  );
};

export default DarkModeToggle;
