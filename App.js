import React from 'react';

import DarkModeToggle from './Components/DarkMode';

import {

 View,
  StatusBar,
  StyleSheet,
  Text,

} from 'react-native';




const App = () => {
 
  return (
    <View style={styles.container}>
      <DarkModeToggle/>
     
    </View>
  );
};




const styles = StyleSheet.create({
 container: {
  
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  
  },
  title: {
    textAlign:"center",
    fontSize: 32,
    marginBottom: 25
  },
  subtitle:{
    fontSize: 24}
});


export default App;