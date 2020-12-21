import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Alert
} from 'react-native'
import SearchMap from './src/SearchMap'
import ShowMapp from './src/ShowMap'

export class App extends Component {

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
        <Text> Hallo dunia {this.state.region.latitude}</Text>
        <SearchMap
          region={this.state.region}
          lat={this.state.region.latitude}
          long={this.state.region.longitude}
          cari={this.cariAlamat} />
        <View style={styles.map}>
          <ShowMapp onChangeValue={this._onChangeValue} />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  map: {
    backgroundColor: 'red',
    width: 280,
    height: 220
  }
})

export default App
