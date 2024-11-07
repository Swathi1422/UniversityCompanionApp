import React from 'react';
import { View, Text, Button } from 'react-native';

const CourseListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Course List Screen</Text>
      <Button
        title="Go to Assignments"
        onPress={() => navigation.navigate('Assignments')}
      />
    </View>
  );
};

export default CourseListScreen;
