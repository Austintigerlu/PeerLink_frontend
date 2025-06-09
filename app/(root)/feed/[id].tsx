import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const posts = () => {

    const {posts} = useLocalSearchParams()
  return (
    <View>
      <Text> posts</Text>
    </View>
  )
}

export default posts