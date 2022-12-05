import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Post = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.body}>
        {props.studentName}
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:"LightGray",
        margin: 10,
        borderRadius: 10,
        borderColor: "grey",
        borderWidth: 2,
        width: "50%",
    },
    body: {
        fontSize: 30,
        marginVertical: 15,
        textAlign: "center"  
    }
});
export default Post
