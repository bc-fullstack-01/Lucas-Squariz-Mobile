import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Input, Button } from '@rneui/base';

import Spacer from "../components/spacer";
import logo from '../assets/images/logo.png';

interface Props{
    submitButtonText: string;
    onSubmit: any;
}

export default function AuthForm({ submitButtonText, onSubmit}: Props) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <Spacer>
                <Image source={logo} style={styles.image}/>
            </Spacer>
            <Input
                label='Usuário'
                value={user}
                onChangeText={setUser}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer />
            <Input
                secureTextEntry
                label='Password'
                value={password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
            />
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({user, password})} />
            </Spacer>
        </>
    )
};

const styles = StyleSheet.create({
    image: {
        width: 120,
        height: 120,
        marginBottom: 5,
    },
})