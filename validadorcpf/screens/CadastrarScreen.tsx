import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Cadastrar'>;
};

export default function CadastrarScreen({ navigation }: Props) {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');

    async function handleSalvar() {
        if (!nome || !cpf) {
            Alert.alert('Erro', 'Preencha nome e CPF');
            
            return;
        }

        try {
            const response = await axios.post('http://192.168.61.113:3333/validar-cpf', { cpf });

            if (response.data.valido) {
                const novo = { nome, cpf, data: new Date().toISOString() };
                const lista = JSON.parse(await AsyncStorage.getItem('cpfs') || '[]');
                lista.push(novo);
                await AsyncStorage.setItem('cpfs', JSON.stringify(lista));
                Alert.alert('Sucesso', 'CPF válido e salvo!');
                navigation.navigate('Lista');
            } else {
                Alert.alert('Erro', 'CPF inválido');
            }
        } catch (error) {
            Alert.alert('Erro', 'Erro ao validar CPF com o servidor.');
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome:</Text>
            <TextInput style={styles.input} value={nome} onChangeText={setNome} placeholder="Digite o nome" />
            <Text style={styles.label}>CPF:</Text>
            <TextInput style={styles.input} value={cpf} onChangeText={setCpf} placeholder="Digite o CPF" keyboardType="numeric" />
            <Button title="Validar e Salvar" onPress={handleSalvar} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, gap: 10 },
    label: { fontWeight: 'bold' },
    input: { borderWidth: 1, padding: 10, borderRadius: 5, borderColor: '#ccc' },
});
