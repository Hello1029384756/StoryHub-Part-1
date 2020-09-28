import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ReadStoryScreen extends React.Component {
    render() {
        return(
            <View>
                <Text style={{textAlign: 'center', backgroundColor: "pink", paddingBottom: 20, paddingTop: 20}}>Story Hub</Text>
                <TextInput
                style={styles.textInput1}
                placeholder={"Story Name"}/>
                <TextInput
                style={styles.textInput2}
                placeholder={"Author"}/>
                <TextInput
                style={styles.textInput3}
                placeholder={"Summary"}/>
                <TouchableOpacity style={styles.submit}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput1: {
        borderWidth: 3, 
        marginTop: 130, 
        width: 450, 
        justifyContent: 'center', 
        alignSelf: 'center', 
        textAlign: 'center'
    },
    textInput2: {
        borderWidth: 3, 
        marginTop: 100, 
        width: 450, 
        justifyContent: 'center', 
        alignSelf: 'center', 
        textAlign: 'center'
    },
    textInput3: {
        borderWidth: 3, 
        marginTop: 100, 
        width: 450,
        height: 450, 
        justifyContent: 'center', 
        alignSelf: 'center', 
        textAlign: 'center'
    },
    submit: {
        borderWidth:2,
        alignSelf: 'center',
        width:90,
        height: 33,
        marginTop:70,
        backgroundColor: "pink"
    },
    buttonText: {
        textAlign: 'center'
    }
})