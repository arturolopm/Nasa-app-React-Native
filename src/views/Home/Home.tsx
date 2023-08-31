import { useEffect, useState } from 'react'
import { format, sub } from 'date-fns'
import { StyleSheet, View } from "react-native"
import Header from "../../components/Header/Header"
import fetchApi from "../../utils/fetch"
import TodaysImage from '../../components/TodaysImage'
import LastFiveDaysImages from '../../components/LastFiveDaysImages'
import { type PostImage } from '../../types'

const Home = () => {
    const [todaysImage, setTodaysImage] = useState<PostImage>({})
    const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([])
    useEffect(() => {
        const loadTodaysImage = async () => {
            try {
                const todaysImageResponse = await fetchApi()
                setTodaysImage(todaysImageResponse)
            } catch (error) {
                console.error(error);
                setTodaysImage({})

            }
        }
        const loadLast5DaysImages = async () => {
            try {
                const date = new Date()
                const todaysDate = format(date, 'yyyy-MM-dd')
                const fiveDaysAgoDate = format(sub(date, { days: 5 }), 'yyyy-MM-dd')
                const lastFiveImagesResponse = await fetchApi(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`)
                setLastFiveDaysImages(lastFiveImagesResponse)


            } catch (error) {
                console.error(error)
            }
        }
        loadTodaysImage().catch(null)
        loadLast5DaysImages().catch(null)
    }, [])

    return (
        <View style={styles.container}>
            <Header />
            <TodaysImage {...todaysImage} />
            <LastFiveDaysImages postImages={lastFiveDaysImages} />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    }
})

export default Home