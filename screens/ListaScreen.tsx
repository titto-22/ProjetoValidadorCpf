import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Lista'>;
};

type CPFItem = {
    nome: string;
    cpf: string;
    data: string;
};

export default function ListaScreen({ navigation }: Props) {
    const [cpfs, setCpfs] = useState<CPFItem[]>([]);

    useEffect(() => {
        const carregar = async () => {
            const data = await AsyncStorage.getItem('cpfs');
            if (data) setCpfs(JSON.parse(data));
        };

        const unsubscribe = navigation.addListener('focus', carregar);
        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CPFs Cadastrados</Text>
            <FlatList
                data={cpfs}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { item })}>
                        <Text style={styles.item}>{item.nome} - {item.cpf}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 18, marginBottom: 10 },
    item: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
});
