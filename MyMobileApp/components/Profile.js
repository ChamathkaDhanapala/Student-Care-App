import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import { students } from '../../data';

export default function Profile() {
    const student = students[0]; 

    return (
        <View style= {styles.container}>
            <Text variant="bodyLarge" style = {styles.title}> {student.name}</Text>
            <Text variant="bodyMedium" style = {styles.info}> Age : {student.age} | Gender : {student.gender}</Text>
            
            <Divider/>

        
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={require('../assets/images/1.jpg')}
                    style={styles.profile}
                    resizeMode="contain"
                />
            </View>

            <Text variant="bodyMedium" style = {styles.subtitle}> Contact Information </Text>

            <Text variant="bodyMedium" style = {styles.info}> Email : {student.email}</Text>
            <Text variant="bodyMedium" style = {styles.info}> Phone : {student.phone}</Text>
            <Text variant="bodyMedium" style = {styles.info}> Address : {student.address}</Text>

            <Divider/>

            <Text variant="bodyMedium" style = {styles.subtitle}> BiologicalInformation </Text>

            <Text variant="bodyMedium" style = {styles.info}> Gender : {student.gender}</Text>
            <Text variant="bodyMedium" style = {styles.info}> Age : {student.age}</Text>
            <Text variant="bodyMedium" style = {styles.info}> Blood Group : {student.blood_group}</Text>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    profileContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    profile: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: '#800080',
    },
    contactContainer: {
        marginVertical: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 2,
    },
    bioContainer: {
        marginVertical: 20,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 2,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#800080',
    },
});
