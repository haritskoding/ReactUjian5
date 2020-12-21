import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Alert
} from 'react-native'
import SearchMap from '../SearchMap'
import ShowMapp from '../ShowMap'

class TeguhMap extends Component {
    constructor() {
        super();
        this.state = {
            region: {
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0321,
                latitude: -6.2229669,
                longitude: 106.8494566,
            }
        }
    }

    cariAlamat = () => {
        Alert.alert("lat: " + JSON.stringify(this.state.region.latitude
            // + "long: " + JSON.stringify(this.state.region.longitude
        ))
        // alert(JSON.stringify(region))
        this.setState({
            region
        })
    }

    _onChangeValue = region => {
        alert(JSON.stringify(region))
        this.setState({
            region
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchMap
                    region={this.props.region}
                    lat={this.props.region.latitude}
                    long={this.props.region.longitude}
                    cari={this.props.cariAlamat} />
                <View style={styles.map}>
                    <ShowMapp
                        onChangeValue={this.props.onChangeValue}
                        region={this.state.region} />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 29,
    },
    map: {
        backgroundColor: 'red',
        width: 295,
        height: 220
    }
})

export default TeguhMap
