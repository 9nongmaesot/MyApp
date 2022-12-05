import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Post from "./components/Post";
export default function App() {
  return (
    <View style={styles.container}>
      <Post studentName="ess" />
      <Post studentName="boyd" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});