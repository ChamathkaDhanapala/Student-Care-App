import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
//import Logo from '../components/Logo';
//import Footer from '../components/Footer';
import { Divider, DataTable } from 'react-native-paper';
import { subjects,courses,marks } from '../../data';

export default function Courses({route}) {

  const {user} = route.params;

  const userSubjects = subjects.filter(subject => subject.course_id === user.course_id);
  const userMarks = marks.filter(mark => mark.student_id === user.id);
  
  const matchMarks = (subjectId) => {
    const mark = userMarks.find(m => m.subject_id === subjectId);
    return mark ? mark.marks : '-';
  };


  const average = () => {
    let sum = 0;
    userMarks.forEach((arr) => sum += arr["marks"]);
    return Math.round(sum/3);
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <View style={styles.centerContainer}>
          <View style={styles.card}>
            <Text style={styles.title}>{courses.find(c => c.id === user.course_id).name}</Text>
            <Text style={styles.description}>{userSubjects.length} Subjects | Average: {average()}</Text>
            <Divider style={{ width: '80%', marginVertical: 20, backgroundColor: '#ccc' }} />
            <View style={styles.marksInfo}>
              <Text style={styles.subtitle}>Marks Information</Text>
              <DataTable style={{paddingBottom:20}}>
                <DataTable.Header>
                  <DataTable.Title>Subject</DataTable.Title>
                  <DataTable.Title numeric>Mark</DataTable.Title>
                </DataTable.Header>

                {userSubjects.map(subject => (
                  <DataTable.Row key={subject.id}>
                    <DataTable.Cell>{subject.name}</DataTable.Cell>
                    <DataTable.Cell numeric>{matchMarks(subject.id)}</DataTable.Cell>
                  </DataTable.Row>
                ))}
              </DataTable>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </SafeAreaView>
  );}

const styles = StyleSheet.create({
   
});