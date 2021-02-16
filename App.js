import React, { useEffect } from "react"
import Loading from "./components/Loading"
import * as Location from "expo-location"

export default function App() {
    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync()
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync({})
            console.log(latitude, longitude)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLocation()
    }, [])
    return <Loading />
}
