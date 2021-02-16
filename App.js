import { StatusBar } from "expo-status-bar"
import React from "react"
import { Alert, StyleSheet, Text, View } from "react-native"

const onClick = () => {
    console.log("Hello")
}

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header} onTouchStart={onClick} />
            <Text style={styles.text}>My first App build</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        width: 100,
        height: 100,
        backgroundColor: "black",
        borderRadius: 70,
    },
    text: {
        fontSize: 40,
    },
})
