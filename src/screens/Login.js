import React from "react";
import { View, Text, Button, StyleSheet, Dimensions, TextInput, } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput style={styles.input} placeholder="Usuario" inputMode="email" />
            <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true}/> 
         <View style={styles.buttonContainer}>
            <Button
             title="Entrar"
             // onPress={() => navigation.navigate('')}
             />
         </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff'
    },
    title: {
        fontSize: 24,
        marginBottom: 20
    },
    buttonContainer: {
        backgroundColor: '#add8e6',
        margin: 10,
        width: windowWidth * 0.4,
        borderRadius: 5
    },
    input: {
        width: windowWidth * 0.6,
        borderWidth: 0.5,
        margin: 5,
    }
});