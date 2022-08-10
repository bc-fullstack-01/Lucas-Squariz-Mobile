import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import AuthForm from "../components/AuthForm";

import Spacer from "../components/spacer";

export default function LoginScreen({ navigation }: any) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <AuthForm 
            submitButtonText="Login" 
            //@ts-ignore           
            onSubmit={(user, password) => {console.log(user, password)}}            
            />
                         
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Spacer>
                    <Text style={styles.link}>Não tem uma conta? Faça seu cadastro aqui.</Text>
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
        marginBottom: 150,
    },    
    link: {
        color:'blue',
    }
});