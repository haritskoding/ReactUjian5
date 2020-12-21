import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Picker,
    TouchableOpacity,
    ScrollView,
    Alert,
    Image,
    Button
} from 'react-native'
import ButtonAdd from '../Components/ButtonAdd';
import InputData from '../Components/InputData';
import TeguhMap from '../TeguhMap.js';

class AddUser extends Component {

    constructor(props) {
        super(props)

        this.state = {
            nama: '',
            gender: 'Male',
            umur: '',
            lat: '',
            long: '',
            status: 'Singel',
            region: {
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0321,
                latitude: -6.2229669,
                longitude: 106.8494566,
            }
        }
    }

    onChangeGender = (value, index) => {
        this.setState(
            {
                "gender": value
            },
            () => {
                // here is our callback that will be fired after state change.
                Alert.alert("gender ", this.state.gender);
            }
        );
    }

    onChangeStatus = (value, index) => {
        this.setState(
            {
                "status": value
            },
            () => {
                // here is our callback that will be fired after state change.
                Alert.alert("status ", this.state.status);
            }
        );
    }



    onChangeText = (namaState, value) => {
        this.setState({
            [namaState]: value
        })
    }

    _onChangeValue = region => {
        alert(JSON.stringify(region))
        this.setState({
            region
        })
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


    onSubmit = () => {
        if (this.state.nama && this.state.umur) {
            console.log('hallo', this.state);
        } else {
            Alert('Diisi seumanya ya friend')
        }
    }

    render() {


        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.judul}>ini list user</Text>
                    <Text style={styles.subJudul}>&copy; Teguh Aris</Text>
                    <View style={styles.form}>

                        <InputData
                            label="Nama"
                            placeholder="Masukan Nama"
                            onChangeText={this.onChangeText}
                            value={this.state.nama}
                            namaState="nama"
                        />

                        <Text style={styles.label}>Gender</Text>
                        <Picker
                            selectedValue={this.state.gender}
                            style={styles.input}
                            onValueChange={this.onChangeGender}
                        >
                            <Picker.Item label="Male" value="male" />
                            <Picker.Item label="Female" value="female" />
                        </Picker>

                        <InputData
                            label="Umur"
                            placeholder="Masukan Umur e.g 23"
                            onChangeText={this.onChangeText}
                            value={this.state.umur}
                            namaState="umur"
                        // keyboardType="number-pad"
                        />

                        <Text style={styles.label}>Status</Text>
                        <Picker
                            selectedValue={this.state.status}
                            style={styles.input}
                            onValueChange={this.onChangeStatus}
                        >
                            <Picker.Item label="Single" value="single" />
                            <Picker.Item label="Married" value="married" />
                        </Picker>

                        <View style={styles.columnImage}>
                            <View>
                                <Text style={{ color: 'red' }}>sjn</Text>
                            </View>
                            <View>
                                <Text>ks</Text>
                            </View>
                        </View>


                    </View>

                    <TeguhMap
                        latitude={this.state.region.latitude}
                        longitude={this.state.region.longitude}
                        onChangeValue={this._onChangeValue}
                        cariAlamat={this.cariAlamat}
                        region={this.state.region} />

                    <TouchableOpacity
                        onPress={() => this.onSubmit()}
                        style={styles.tombol}>
                        <Text style={styles.textTombol}>Tambah Pegawai</Text>
                    </TouchableOpacity>


                </View>
            </ScrollView >




        )
    }
}

export default AddUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex'
    },
    judul: {
        fontWeight: 'bold',
        fontSize: 28,
        marginLeft: 115,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tombol: {
        backgroundColor: 'salmon',
        padding: 12,
        borderRadius: 5,
        marginTop: 10,
        width: "90%"
    },
    textTombol: {
        color: "white",
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 16
    },
    subJudul: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 115,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        marginTop: 10,
        marginLeft: 30,
    },
    input: {
        borderWidth: 2,
        width: "90%",
        borderRadius: 10,
        marginTop: 5,
        paddingHorizontal: 12,
        paddingVertical: 8
    },
    label: {
        marginTop: 12
    },
    columnImage: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between'
    }
})
