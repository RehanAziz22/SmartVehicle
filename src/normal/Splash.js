import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import CStyles from '../style'

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Parent')
        }, 2000)
    }, [])
    return (
        <View style={[CStyles.alignItemsCenter,CStyles.justifyContentCenter,{flex:1}]}>
            <Text>Splash</Text>
        </View>
    )
}

export default Splash