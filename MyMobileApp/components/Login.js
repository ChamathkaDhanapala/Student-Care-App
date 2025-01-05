import React, { useState } from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import { Text, TextInput, Button, List } from 'react-native-paper';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'admin' && password === '1234') {
            Alert.alert('Success', 'Login successful!');
            navigation?.navigate('Profile'); // Ensure navigation is passed correctly
        } else {
            Alert.alert('Error', 'Invalid username or password');
        }
    };

    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>UoV Student Care</Text>
            </View>
            <View style={styles.body}>
                <View style={styles.inlineContainer}>
                    <View style={styles.logoContainer}>
                        <Image
                            source={require('../assets/images/logo.png')}
                            style={styles.logo}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.listContainer}>
                        <List.Subheader style={styles.listItem}>வவுனியாப் பல்கலைக்கழகம், இலங்கை</List.Subheader>
                        <List.Subheader style={styles.listItem}>වවුනියා විශ්වවිද්‍යාලය, ශ්‍රී ලංකාව</List.Subheader>
                        <List.Subheader style={styles.listItem}>University of Vavuniya, Sri Lanka</List.Subheader>
                    </View>
                </View>
                <Text style={styles.headerTitle}>STUDENT LOGIN</Text>
                <View style={styles.textContainer}>
                    <TextInput
                        label="Username"
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Button mode="contained" onPress={handleLogin}>
                        Login
                    </Button>
                </View>
            </View>
            <View style={styles.footer} />
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#800080',
        padding: 20,
        alignItems: 'center',
        width: '100%',
        height: 100,
    },
    headerText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
    },
    inlineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        gap: 20,
    },
    listContainer: {
        justifyContent: 'center',
    },
    listItem: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#800080',
        marginVertical: 2,
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: '500',
        textAlign: 'center',
        marginVertical: 20,
    },
    textContainer: {
        width: '90%',
        gap: 15,
    },
    body: {
        margin: 20,
        height: 500,
    },
    footer: {
        backgroundColor: '#800080',
        padding: 20,
        width: '100%',
    },
});

export default Login;
