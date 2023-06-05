import React, { useState } from 'react'
import { TextInput,View ,StyleSheet} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
function Search() {
    const [number,onChangeNumber]=useState()
  return (
    <View style={styles.container}>
           <TextInput
           style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="What would you like to drink today?"
      />
            <MaterialCommunityIcons name="bell-ring-outline" size={24} color="#5D4037" />
    </View>
  )
}
const styles =StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10,
        gap:60,
        justifyContent:"center"
    },
    input:{
        borderRadius:16,
        borderStyle:'solid',
        borderColor:"#D7CCC8"
    }
})
export default Search