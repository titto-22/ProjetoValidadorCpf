import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao Validador de CPF</Text>
            <View style={styles.buttonContainer}>
                <Button title="Cadastrar CPF" onPress={() => navigation.navigate('Cadastrar')} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Lista de CPFs" onPress={() => navigation.navigate('Lista')} />
            </View>
            <View style={styles.buttonContainer}>
                <Button title="Sobre o App" onPress={() => navigation.navigate('Sobre')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 20, marginBottom: 40, textAlign: 'center' },
    buttonContainer: { marginVertical: 10, width: '80%' },
});
