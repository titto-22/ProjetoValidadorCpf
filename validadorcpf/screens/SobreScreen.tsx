import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SobreScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sobre o App</Text>
            <Text>Este aplicativo foi criado com React Native e TypeScript usando Expo.</Text>
            <Text>Seu objetivo é validar CPFs usando um microsserviço Node.js e armazenar os dados localmente com AsyncStorage.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
});
