import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function App() {
    const data01 = 20;
    const data02 = 36;
    const myName = "Siripun Nong";
    return (
        <View   style={styles.container}>
            <Text style={styles.body}> Hi {myName} ! 
              ผลรวม : {data01 + data02}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center"
    },
    body : {
        fontSize: 50,
        textAlign: "center"
    }
});