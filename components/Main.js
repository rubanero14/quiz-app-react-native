import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default function Main({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://images3.content-hci.com/commimg/myhotcourses/blog/post/myhc_89683.jpg',
        }}
      />
      <TouchableHighlight style={styles.startBtn} onPress={()=>{navigation.push('Quiz')}}>
      <Text style={{color: 'white'}}>Start Game</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.hiBtn} onPress={()=>{navigation.push('HighScore')}}>
      <Text style={{color: 'white'}}>High Score</Text>
      </TouchableHighlight>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 400,
    height: 400,
    marginTop: -200,
    margin: 10,
    borderRadius: 200,
    opacity: 0.8
  },
  startBtn: {
    backgroundColor:'steelblue',
    padding: 10,
    textAlign: 'center',
    width: 200,
    margin: 10,
    marginTop: -260,
    borderRadius: 25
  },
  hiBtn: {
    backgroundColor: 'black',
    padding: 10,
    textAlign: 'center',
    width: 200,
    margin: 10,
    borderRadius: 25
  }
});
