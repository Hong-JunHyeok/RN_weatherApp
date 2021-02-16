import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loading the weather...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 50,
        paddingVertical: 130,
        backgroundColor: "#fdf6aa",
    },
    text: {
        color: "#2c2c2c",
        fontSize: 40,
    },
})
