import React from 'react'
import { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';

function NoteItem({ note, onDelete }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);
  const inputRef = useRef(null);

  return (
    <View style={styles.noteItem}>
      { isEditing ? (
        <TextInput 
          ref={inputRef}
          style={styles.input}
          value={editedText}
          onChangeText={setEditedText}
          autoFocus
          onSubmitEditing={handleSave}
          returnKeyType='done'

        />
      ): (
        <Text style={styles.noteText}>{note.text}</Text>
      ) }

        
        <TouchableOpacity onPress={()=> onDelete(note.$id)}>
            <Text style={styles.delete}>X</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
   },

  delete: {
    fontSize: 18,
    color: 'red',
  }
});

export default NoteItem