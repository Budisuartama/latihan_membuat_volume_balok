import React from 'react';
import { Text, View } from 'react-native';

export default class PerkiraanCuaca extends react.Component {
  constructor(props) {
  super(props);
  this.state ={
    kota: ''

  };
};
reader(){
  return(
    <View>
     <Text> masukkan nama kota lalu tekan Enter </Text>
     <TextInput
  onSubmitEditing={
    (event) => this.serState({kota:event.nativeEvent.text})
  }
  />
  <Text>Kota : {this.state.kota}</Text>
  </View>
);
}
}
