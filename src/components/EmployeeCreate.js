import React, {Component} from 'react';
import _ from 'lodash';

import {Button, Card} from 'react-native-elements';
import {connect} from 'react-redux';
import * as actions from '../actions/EmployeeActions';

import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  onButtonPress() {
    const {name, phone, shift} = this.props;
    // this.props.createEmployee({name, phone, shift});
    this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    this.props.navigation.pop();
  }

  componentDidMount() {
    if (this.props.name) {
      const {name, phone, shift} = this.props;
      //     console.log(name, phone, shift);
      _.each(this.props, (value, prop) => {
        this.props.employeeUpdate({prop, value: ''});
      });
      // this.props.employeeUpdate({prop: 'name', value: ''});
      // this.props.employeeUpdate({prop: 'phone', value: ''});
      // this.props.employeeUpdate({prop: 'shift', value: ''});
      //     console.log(this.props);
    }
  }

  render() {
    console.log(this.props);

    return (
      <Card borderRadius={10}>
        <EmployeeForm />

        <Button
          containerStyle={{margin: 5}}
          title="Create"
          onPress={this.onButtonPress.bind(this)}
        />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, actions)(EmployeeCreate);
