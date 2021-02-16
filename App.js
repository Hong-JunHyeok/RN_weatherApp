import React, { useEffect, useState } from "react"
import Loading from "./components/Loading"
import * as Location from "expo-location"

export default function App() {
    const [isLoading, setIsLoading] = useState(true)
    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync()
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync({})
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getLocation()
    }, [])

    return isLoading ? <Loading /> : <></>
}
