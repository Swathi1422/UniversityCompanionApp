import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseListScreen from './src/screens/CourseListScreen';
import AssignmentsScreen from './src/screens/AssignmentsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CourseList">
        <Stack.Screen name="CourseList" component={CourseListScreen} options={{ title: 'Courses' }} />
        <Stack.Screen name="Assignments" component={AssignmentsScreen} options={{ title: 'Assignments' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
