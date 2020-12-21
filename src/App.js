import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import AddUser from './Screens/AddUser'
import TeguhMap from './TeguhMap.js'

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AddUser />
            </View>
        )
    }
}

const styles = StyleSheet.create({

})
