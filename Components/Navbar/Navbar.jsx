import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Navbar() {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.home}>
          <AntDesign name="home" size={24} style={{ marginLeft: 5 }} />
          <Button
            title="Home"
            onPress={() => navigation.navigate('Home')}
            color='#5D4037'          />
        </View>
        <View style={styles.home}>
          <MaterialIcons name="history-toggle-off" size={24} style={{ marginLeft: 5 }} />
          <Button
            title="History"
            onPress={() => navigation.navigate('History')}
            color='#5D4037'          />        
          </View>
        <View style={styles.home}>
          <MaterialCommunityIcons name="account" size={24} style={{ marginLeft: 5, color: "#5D4037" }} />
          <Button
            title="Account"
            onPress={() => navigation.navigate('Account')}
            color='#5D4037'          />         
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    backgroundColor: '#FEFEFE',
    borderRadius: 16
  },
  navbar: {
    flexDirection: 'row',
    justifyContent:"center",
    padding: 10,
    gap: 50,
    alignContent: 'flex-end',
  },
  home: {
    flexDirection: 'column',
    color: '#5D4037',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Navbar;
