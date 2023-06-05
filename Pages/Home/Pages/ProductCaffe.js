import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Data from "../../../Data/Data.json";
import { AntDesign } from "@expo/vector-icons";
function ProductCaffe() {
  return Data.map((product) => {
    return (
      <View key={product.id} style={styles.container}>
        <View style={styles.coffe}>
          <Image
            source={(source = require("../../../Images/coffe.png"))}
            style={styles.img}
            onError={() => console.log("Image get failed")}
          />
          <View style={styles.rating}>
            <Text style={styles.text}>{product.rating}</Text>
            <AntDesign name="star" size={14} color="#FFB800" />
          </View>
        </View>

        <View style={styles.summary}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.descrb}>{product.descrb}</Text>
        </View>
        <Text>{product.price}</Text>
      </View>
    );
  });
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
    alignContent: "center",
  },
  img: {
    backgroundColor:'rgba(86, 72, 60, 0.05)',
    width: 58, height: 69 ,
    borderRadius:50,
    position:'relative'
  },text:{
    fontSize:14
  },
  rating: {
    position:'absolute',
    padding: 5,
    flexDirection: "row",
    gap: 5,
    justifyContent:'center',
    backgroundColor:"#fff",
    borderRadius:10,
    marginTop:55,
    marginLeft:5
  },
  descrb:{
    fontSize:12,
    fontWeight:400
  },name:{
    fontSize:14,
    fontWeight:600
  },
  summary:{
    flexDirection:"column",
    gap:16
  }
});
export default ProductCaffe;
