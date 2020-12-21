/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MapView, { PROVIDER_GOOGLE, Marker, Heatmap, Circle, Polyline, Polygon } from 'react-native-maps'

import { locations } from '../../Data/Data/'
import CustomMarker from '../../source/CustomMarker'


const latitudeDelta = 0.922;
const longitudeDelta = 0.821;

export default class ShowMap extends Component {

    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0321,
                latitude: -6.2229669,
                longitude: 106.8494566,
            }
        }
    }




    render() {
        return (
            <View style={styles.container}>
                <MapView
                    // provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={this.state.region}
                    onRegionChangeComplete={this.props.onChangeValue}
                // initialRegion={{

                //   latitude: -6.2898426,
                //   longitude: 106.7240504,
                //   latitudeDelta: 0.0022,
                //   longitudeDelta: 0.0021,
                // }}
                >

                    {/* {
                        locations.map(marker => (
                            <Polygon fillColor={'#A3BE80'} coordinates={locations} />

                            // <Circle center={{latitude: marker.latitude, longitude: marker.longitude}} radius= {550}
                            // fillColor = {'#A3BE80'} />
                        ))
                    } */}



                    {/* <Heatmap points={locations} /> */}

                    {/* {
                        locations.map(marker => (
                            <Marker
                                coordinate={{
                                    latitude: marker.latitude,
                                    longitude: marker.longitude
                                }}
                            >

                                <CustomMarker item={marker} />
                            </Marker>
                        ))
                    } */}


                </MapView>
                <View style={{
                    top: '50%',
                    left: '50%',
                    marginLeft: -24,
                    marginTop: -48,
                    zIndex: 1,
                    position: 'absolute',

                }}>

                    <Image
                        style={{ width: 50, height: 50 }}
                        source={require('../assets/marker.png')}

                    />

                    {/* <Image
              source={{ uri: 'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png' }}
              style={{ width: 500, height: 500 }}
            /> */}
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    map: {
        flex: 1
    }
})