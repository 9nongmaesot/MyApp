import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Post = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.body}>{props.studentName}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'skyblue',
    margin: 10,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    width: '50%',
  },
  body: {
    fontSize: 50,
    marginVertical: 15,
    textAlign: 'center',
  },
});

export default Post;
