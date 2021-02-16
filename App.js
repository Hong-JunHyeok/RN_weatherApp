import React, { useEffect, useState } from "react"
import Loading from "./components/Loading"
import * as Location from "expo-location"
import { BASE_URL, API_KEY } from "./config/config.json"
import axios from "axios"
import { View, Text } from "react-native"
import Weather from "./Weather"

export default function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [temp, setTemp] = useState()

    const getWeather = async (latitude, longitude) => {
        try {
            const { data } = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
            )
            setTemp(data.main.temp)
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

    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} />
}
