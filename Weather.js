import React from "react"
import { View, Text, StyleSheet, StatusBar } from "react-native"
import PropTypes from "prop-types"
import { MaterialCommunityIcons, Ionicons, Feather } from "@expo/vector-icons"
import { LinearGradient } from "expo-linear-gradient"

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        backColor: ["#373B44", "#4286f4"],
        title: "천둥이 당신의 집을 습격합니다!",
        subTitle: "",
    },
    Drizzle: {
        iconName: "weather-hail",
        backColor: ["#89F7FE", "#66A6FF"],
        title: "이슬이 똑똑",
        subTitle: "생각이 많아지는 날씨네요",
    },
    Rain: {
        iconName: "weather-rainy",
        backColor: ["#00C6FB", "#005BEA"],
        title: "비가온다!!",
        subTitle: "빗길 차 운전은 항상 조심!",
    },
    Snow: {
        iconName: "weather-snowy",
        backColor: ["#7DE2FC", "#B9B6E5"],
        title: "우와! 눈이 내려요",
        subTitle: "나랑 눈사람 만들래?",
    },
    Atmosphere: {
        iconName: "weather-hail",
        backColor: ["#89F7FE", "#66A6FF"],
        title: "",
        subTitle: "",
    },
    Clear: {
        iconName: "weather-sunny",
        backColor: ["#FF7300", "#FEF253"],
        title: "맑아요!",
        subTitle: "밖에 나가서 놀다오는건 어때요?",
    },
    Clouds: {
        iconName: "weather-cloudy",
        backColor: ["#4c669f", "#3b5998", "#192f6a"],
        title: "구름이 많아요...",
        subTitle: "센치하네요",
    },
}

function Weather({ temp, condition }) {
    return (
        <LinearGradient
            // Button Linear Gradient
            colors={weatherOptions["Snow"].backColor}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={weatherOptions["Snow"].iconName}
                    size={96}
                    color="white"
                />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.title}>{weatherOptions["Snow"].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions["Snow"].subTitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
    ]).isRequired,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 36,
        color: "white",
    },
    title: {
        fontSize: 44,
        color: "white",
        fontWeight: "300",
        marginBottom: 10,
    },
    subTitle: {
        fontWeight: "bold",
        color: "white",
        fontSize: 24,
    },
})

export default Weather
