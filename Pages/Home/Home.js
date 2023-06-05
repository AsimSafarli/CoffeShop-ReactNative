import React from 'react'
import {Image, StyleSheet,View,Text, Button, ScrollView} from 'react-native'
import Search from './Search'
import ProductCaffe from './Pages/ProductCaffe'

export function Home() {
  return (
   <View>
   <Search/>
    <Image source={require('../../Images/promo.png')}  style={styles.image}/>
    <View style={styles.product}>
      <Button title="Caffe" color="#5d4037" style={styles.caffe}/>      
      <Button title="Non Caffe" color="#CACACA"/>
      <Button title="Pastry" color="#CACACA"/>
    </View>
    <ScrollView>
      <ProductCaffe/>
    </ScrollView>
   </View>
    )
}

const styles =StyleSheet.create({
  image:{
    marginLeft:20,
    padding:10,
    justifyContent:'center'
  },
  product:{
    flexDirection:"row",
    padding:10,
    gap:60,
    justifyContent:"center",
    borderStyle:"solid",
  },
  caffe:{
    borderStyle:'solid',
    borderBottomWidth:10,
  }
})