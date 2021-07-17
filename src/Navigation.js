import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginForm}
          options={{title: 'Please log in!'}}
        />
        <Stack.Screen
          name="employeeList"
          component={EmployeeList}
          options={({navigation}) => ({
            title: 'Employees',
            headerLeft: '',
            headerRight: () => (
              <TouchableOpacity
                style={{marginEnd: 10}}
                onPress={() => {
                  navigation.navigate('employeeCreate');
                }}>
                <Icon name="plus" type="feather" color="black" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="employeeCreate"
          component={EmployeeCreate}
          options={{title: 'Create Employee'}}
        />
        <Stack.Screen
          name="employeeEdit"
          component={EmployeeEdit}
          options={{title: 'Edit Employee'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
