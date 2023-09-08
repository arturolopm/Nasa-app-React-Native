import { FC } from 'react'
import { Text, View, StyleSheet, ScrollView } from "react-native"
import PostImage from '../PostImage'
import { type PostImage as PostImageTypes } from '../../types'

const LastDaysImages: FC<{ postImages?: PostImageTypes[] }> = ({ postImages }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Last 30 Days</Text>
            <ScrollView style={styles.content}>
                {postImages?.reverse().map(postImage => (
                    <PostImage key={`${postImage.title}`} {...postImage} />
                ))}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8
    },
    title: {
        color: "#fff",
        fontSize: 16,
        marginBottom: 18
    },
    content: {
        paddingHorizontal: 24,

    }
})

export default LastDaysImages