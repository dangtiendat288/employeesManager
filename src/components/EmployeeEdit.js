import React, {Component} from 'react';
import _ from 'lodash';
import {Button, Card} from 'react-native-elements';
import {connect} from 'react-redux';
import * as actions from '../actions/EmployeeActions';
import Communications from 'react-native-communications';

import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  componentDidMount() {
    _.each(this.props.route.params, (value, prop) => {
      this.props.employeeUpdate({prop, value});
    });
  }
  onButtonPress() {
    const {name, phone, shift} = this.props;
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.route.params.uid,
    });
    console.log(name, phone, shift);
    this.props.navigation.pop();
  }

  onTextPress() {
    const {phone, shift} = this.props;

    Communications.text(phone, `Your upcoming shift is ${shift}`);
  }

  render() {
    console.log(this.props);
    return (
      <Card borderRadius={10}>
        <EmployeeForm />

        <Button
          containerStyle={{margin: 5}}
          title="Save Changes"
          onPress={this.onButtonPress.bind(this)}
        />

        <Button
          containerStyle={{margin: 5}}
          title="Text Schedule"
          onPress={this.onTextPress.bind(this)}
        />
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, actions)(EmployeeEdit);
