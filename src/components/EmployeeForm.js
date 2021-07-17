import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import {connect} from 'react-redux';
import * as actions from '../actions/EmployeeActions';

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <Input
          value={this.props.name}
          label="Name"
          placeholder="Jane"
          onChangeText={text =>
            this.props.employeeUpdate({prop: 'name', value: text})
          }
        />

        <Input
          value={this.props.phone}
          label="Phone"
          placeholder="555-555-5555"
          onChangeText={text =>
            this.props.employeeUpdate({prop: 'phone', value: text})
          }
        />
        <RNPickerSelect
          style={pickerSelectStyles}
          value={this.props.shift}
          placeholder={{
            label: 'Select a shift',
            color: '#CDCDCD',
          }}
          onValueChange={value =>
            this.props.employeeUpdate({prop: 'shift', value})
          }
          items={[
            {label: 'Monday', value: 'Monday'},
            {label: 'Tuesday', value: 'Tuesday'},
            {label: 'Wednesday', value: 'Wednesday'},
            {label: 'Thursday', value: 'Thursday'},
            {label: 'Friday', value: 'Friday'},
            {label: 'Saturday', value: 'Saturday'},
            {label: 'Sunday', value: 'Sunday'},
          ]}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;

  return {name, phone, shift};
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    marginBottom: 15,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default connect(mapStateToProps, actions)(EmployeeForm);
