import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
    Alert
} from 'react-native'

export class SearchMap extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: this.props.lat,
            longitude: this.props.long
        }
    }



    cariAlamat() {
        let data = "aris"
        Alert.alert(`lat ${data}`)
    }

    render() {
        let { latitude } = this.state;
        let lat = JSON.stringify(latitude);
        return (
            <View style={styles.container}>
                <View style={{ width: "44%" }}>
                    <Text>Lat </Text><Text style={{ fontWeight: 'bold' }}>{this.props.lat.toFixed(7)}</Text>
                    {/* <TextInput
                        style={styles.input}
                        onChangeText={(e) => this.setState({ latitude: e })}
                        value={this.state.lat}
                        placeholder="enter latitude" /> */}
                </View>
                <View style={{ width: "1%" }}>

                </View>
                <View style={{ width: "40%" }}>
                    <Text>Long </Text><Text style={{ fontWeight: 'bold' }}>{this.props.long.toFixed(7)}</Text>
                    {/* <Text>Lng:{this.state.region.longitude}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(e) => this.setState({ region: e })}
                        value={this.state.region.longitude}
                        placeholder="enter longitude " /> */}
                </View>
                <View style={{ width: "1%" }}>

                </View>
                {/* <View style={{ marginTop: 18 }}>
                    <TouchableOpacity
                        onPress={this.props.cari}
                        style={{ backgroundColor: 'salmon', padding: 8 }}>
                        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>
                            Cari
                        </Text>
                    </TouchableOpacity>

                </View> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    input: {
        borderWidth: 1,
        padding: 3,
        paddingHorizontal: 10
    }
})

export default SearchMap;
