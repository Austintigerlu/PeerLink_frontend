import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <View className='flex-1 items-center justify-center'>
          <Text className='text-2xl font-bold'>Sign In</Text>
          <Text className='mt-4 text-gray-600'>Please enter your credentials to sign in.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn