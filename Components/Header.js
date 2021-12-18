import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Color from '../constants/Color'
const Header = () => {
    return (
        <View style={styles.headingContainer}>
      <Text style={styles.heading}>EXPENSE TRACKER</Text>
      </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headingContainer: {
        // borderBottomWidth: 3,
        marginBottom : 30,
        width : '100%',
        alignItems: 'center',
        padding: 10,
        backgroundColor: Color.secondary,
        height: 90,
      },
      heading: {
        // borderBottomWidth: 5,
        fontSize: 30,
        marginTop: 35,
        fontWeight:"bold",
        //color:Color.primary
        color: "white",
      },
})
