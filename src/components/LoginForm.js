import React, {Component} from 'react';
import {Button, Card, Input} from 'react-native-elements';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
// import {emailChanged} from '../actions';
import RNPickerSelect from 'react-native-picker-select';
import * as actions from '../actions';
import Test from '../test';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChanged(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{backgroundColor: 'white'}}>
          <Text style={{color: 'red', alignSelf: 'center', fontSize: 18}}>
            {this.props.error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    return (
      <Button
        containerStyle={{margin: 5}}
        title="Log in"
        onPress={this.onButtonPress.bind(this)}
      />
    );
  }

  componentDidUpdate() {
    if (this.props.user) {
      this.props.navigation.navigate('employeeList');
    }
  }

  render() {
    console.log(this.props);
    // if (this.props.user) {
    //   this.props.navigation.navigate('employeeList');
    // }
    return (
      <Card borderRadius={10}>
        <Input
          value={this.props.email}
          label="Email"
          placeholder="email@gmail.com"
          onChangeText={this.onEmailChange.bind(this)}
        />
        <Input
          value={this.props.password}
          secureTextEntry={true}
          label="Password"
          placeholder="password"
          onChangeText={this.onPasswordChanged.bind(this)}
        />
        {this.renderError()}
        {this.renderButton()}
      </Card>

      // <Test />
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading,
    user: state.auth.user,
  };
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

export default connect(mapStateToProps, actions)(LoginForm);
