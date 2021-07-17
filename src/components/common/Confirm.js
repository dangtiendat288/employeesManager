import React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {Card, Button} from 'react-native-elements';
// import Modal from 'react-native-modal';

const Confirm = ({children, visible, onAccept, onDecline}) => {
  const {textStyle, cardStyle, containerStyle} = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}>
      <View style={containerStyle}>
        <Card style={cardStyle}>
          <Text style={textStyle}>{children}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Button
              onPress={onAccept}
              title="Yes"
              containerStyle={{marginEnd: 10, width: 100}}
            />
            <Button
              onPress={onDecline}
              title="No"
              containerStyle={{width: 100}}
            />
          </View>
        </Card>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  cardStyle: {
    justifyContent: 'center',
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
});

export default Confirm;
