import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import AuthForm from "../components/AuthForm";

import Spacer from "../components/spacer";

export default function RegisterScreen({ navigation }: any) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <AuthForm 
            submitButtonText="Cadastrar"   
            //@ts-ignore         
            onSubmit={(user, password) => {console.log(user, password)}}            
            />
                         
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Spacer>
                    <Text style={styles.link}>Já tem uma conta? Faça seu login.</Text>
                </Spacer>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginBottom: 150,
    },    
    link: {
        color:'blue',
    }
});