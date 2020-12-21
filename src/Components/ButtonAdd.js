import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const ButtonAdd = ({ title }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default ButtonAdd

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'salmon',
        width: 110,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: 80,
        marginTop: 30
    },
    text: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold',
        justifyContent: 'center'
    }
})
