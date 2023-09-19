import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function SafeArea({children}) {
  return (
    <SafeAreaView>
        {children}
    </SafeAreaView>
  )
}