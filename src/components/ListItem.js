import React, {Component} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {Card} from 'react-native-elements';

class ListItem extends Component {
  onRowPress() {
    const employee = this.props.employee;
    this.props.navigation.navigate('employeeEdit', this.props.employee);
  }

  render() {
    const {name} = this.props.employee;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <Card>
          <Text style={styles.titleStyle}>{name}</Text>
        </Card>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
  },
};

export default ListItem;
