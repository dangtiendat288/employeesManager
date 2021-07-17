import _ from 'lodash';
import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {Card} from 'react-native-elements';
import {connect} from 'react-redux';
import * as actions from '../actions/EmployeeActions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.props.employees}
          keyExtractor={item => item.uid}
          renderItem={({item}) => (
            <ListItem employee={item} navigation={this.props.navigation} />
          )}
        />
      </View>
    );
  }
}

const renderEmployee = ({item}) => (
  <View>
    <Text>{item.name}</Text>
    <Text>{item.phone}</Text>
    <Text>{item.shift}</Text>
  </View>
);

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });

  return {employees};
};

export default connect(mapStateToProps, actions)(EmployeeList);
