import React from 'react'

function NoteItem({ note }) {
  return (
    <View style={styles.noteItem}>
        <Text style={styles.noteText}>{note.text}</Text>
    </View>
  )
}

export default NoteItem