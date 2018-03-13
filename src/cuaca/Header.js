import React from 'react';
import { Text, View } from 'react-native';

const Header = () =>{
  return (
    <View style={styles.contHeader}>
      <Text style={styles.textHeader}>Header Ne</Text>
    </View>
  );
};
const styles = {
  contHeader: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    height: 60,
    position: 'relative'
  },
  textHeader: {
    fontSize: 20,
    color: 'white'
  }
};


export default Header;
