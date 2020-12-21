import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native'

const InputData = ({ label,
    placeholder,
    keyboardType,
    isTextArea,
    onChangeText,
    namaState,
    value
}) => {

    if (isTextArea) {
        return (
            <>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    style={styles.textInputArea}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    value={value}
                    onChangeText={(text) => onChangeText(namaState, text)}
                />
            </>
        )
    }

    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={value}
                onChangeText={(text) => onChangeText(namaState, text)}
            />
        </>
    )
}

export default InputData

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        marginBottom: 5

    },
    textInput: {
        borderWidth: 1,
        width: "90%",
        borderColor: 'grey',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    textInputArea: {
        textAlignVertical: 'top',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
})
