import React, { useEffect, useState } from "react"
import Loading from "./components/Loading"
import * as Location from "expo-location"
import { BASE_URL, API_KEY } from "./config/config.json"
import axios from "axios"
import { View, Text, StatusBar } from "react-native"
import Weather from "./Weather"

export default function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [temp, setTemp] = useState()
    const [condition, setCondition] = useState("Snow")
    const getWeather = async (latitude, longitude) => {
        try {
            const {
                data: {
                    main: { temp },
                    weather,
                },
            } = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
            )
            setTemp(temp)
            setCondition(weather[0].main)
            // return data
        } catch (error) {
            console.log(error)
        }
    }

    const getLocation = async () => {
        try {
            await Location.requestPermissionsAsync()
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync({})

            await getWeather(latitude, longitude)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getLocation()
    }, [])

    return isLoading ? (
        <>
            <StatusBar barStyle="dark-content" />
            <Loading />
        </>
    ) : (
        <Weather temp={Math.round(temp)} condition={condition} />
    )
}
