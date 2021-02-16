import { StatusBar } from "expo-status-bar"
import React from "react"
import { Alert, StyleSheet, Text, View } from "react-native"

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.greenView}>
                <Text style={styles.text}>Hello</Text>
            </View>
            <View style={styles.blueView}>
                <Text style={styles.text}>World</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
    },
    greenView: {
        backgroundColor: "green",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    blueView: {
        backgroundColor: "blue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 40,
    },
})
