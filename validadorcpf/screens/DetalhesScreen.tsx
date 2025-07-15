import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types';

type Props = {
    route: RouteProp<RootStackParamList, 'Detalhes'>;
};

export default function DetalhesScreen({ route }: Props) {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome:</Text>
            <Text>{item.nome}</Text>
            <Text style={styles.label}>CPF:</Text>
            <Text>{item.cpf}</Text>
            <Text style={styles.label}>Data de cadastro:</Text>
            <Text>{new Date(item.data).toLocaleString()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    label: { fontWeight: 'bold', marginTop: 10 },
});
