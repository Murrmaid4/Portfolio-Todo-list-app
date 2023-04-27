import React, { useState } from "react";
import { CheckBox } from 'react-native-elements';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  View
} from 'react-native';
import "./notes.css"

const data = [
  {
    key: 1,
    title: 'Clean Room',
    completed: true
  },
  {
    key: 2,
    title: 'Take Out Trash',
    completed: true
  },
  {
    key: 3,
    title: 'Finish Homework',
    completed: false
  },
];

const Item = ({item, onPress, backgroundColor, textColor, checked, toggleCheckbox}) => (
  
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
   
    <Text style={[styles.subtitle, {color: textColor}]}>{item.title}</Text>
     <CheckBox
      onIconPress={ toggleCheckbox }
          checked={ checked }
           iconType="material-community"
           checkedIcon="checkbox-outline"
           uncheckedIcon={'checkbox-blank-outline'}
           
           checkedColor="green"
         />
  </TouchableOpacity>
);

const Note = () =>  {
  const [notes, setNotes] = useState(data);
  const [selectedId, setSelectedId] = useState();
  const [checked, setChecked] = useState(true);
  const [newNote, setNewNote] = useState("");
     const toggleCheckbox = () => setChecked(!checked);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };


  const renderItem = ({item}) => {
    const backgroundColor = item.key === selectedId ? '#5ACCF9' : '#e6e6e6';
    const color = item.key === selectedId ? 'white' : 'black';
  
    const toggleSelectedId = () => {
      if (selectedId === item.key) {
        setSelectedId(null);
      } else {
        setSelectedId(item.key);
      }
    }
  
    return (
      <Item
        item={item}
        onPress={() => toggleSelectedId()}
        backgroundColor={backgroundColor}
        textColor={color}
        checked={item.completed}
        toggleCheckbox={() => {}}
        toggleSelected={() => toggleSelectedId()}
      />
      
    );
  };




  
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        extraData={selectedId}
      />
        <TextInput placeholder="Add a note" onSubmitEditing={addNote} />
      <Button title="Add Note!" onPress={addNote} />
     
    </View>
  );
 


 
}

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
 
export default Note