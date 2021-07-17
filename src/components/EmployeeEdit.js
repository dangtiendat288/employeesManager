import React, {Component} from 'react';
import _ from 'lodash';
import {Button, Card} from 'react-native-elements';
import {connect} from 'react-redux';
import * as actions from '../actions/EmployeeActions';
import Communications from 'react-native-communications';
import Confirm from './common/Confirm';

import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = {showModal: false};
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

  onAccept() {
    // console.log(this.props.route.params.uid);
    const {uid} = this.props.route.params;
    this.props.employeeDelete({uid});
    this.props.navigation.pop();
  }

  onDecline() {
    this.setState({showModal: false});
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
        <Button
          containerStyle={{margin: 5}}
          title="Fire Employee"
          onPress={() => {
            this.setState({showModal: !this.state.showModal});
          }}
        />

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}>
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift};
};

export default connect(mapStateToProps, actions)(EmployeeEdit);
