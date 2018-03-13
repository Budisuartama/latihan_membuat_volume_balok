import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Button,
  Text, TextInput,
  View
} from 'react-native';

export default class HitungVolumeBalok extends Component {
  constructor(props){
    super(props)
    this.state = {
      panjang:0,
      lebar:0,
      tinggi:0,
      luas:0
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#FFB74D'}}>

        <View style={{backgroundColor:'#EF6C00'}}>
           <Text style = {{padding: 20, fontSize: 25, color: 'black', textAlign:'center'}} >
            Menghitung Volume balok
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#FFE0B2'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan panjang"
              onChangeText={(panjang)=>this.setState({panjang})}
              keyboardType = 'numeric'
               />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  lebar"
              onChangeText={(lebar)=>this.setState({lebar})}
              keyboardType = 'numeric'
            />

            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Tinggi"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
           />

            <Button
              onPress={()=>this.setState({
                volume: (this.state.panjang*this.state.lebar*this.state.tinggi),
                luas: (2*((this.state.panjang*this.state.lebar)+(this.state.panjang*this.state.tinggi)+(this.state.lebar*this.state.tinggi)))
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
              color="#EF6C00"
            />

       </View>
       <Text style = {{padding: 5, fontSize: 20}} > Menghitung Volume Balok </Text>
        <View style={{margin:20, backgroundColor:'#FF9800'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              panjang =  {this.state.panjang} {"\n"}
              lebar =  {this.state.lebar} {"\n"}
              tinggi =  {this.state.tinggi} {"\n"}
              volume = {this.state.volume}
          </Text>
         </View>
         <Text style = {{padding: 5, fontSize: 20}} > Menghitung Luas Balok </Text>
    <View style={{margin:20, backgroundColor:'#FF9800'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              panjang =  {this.state.panjang} {"\n"}
              lebar =  {this.state.lebar} {"\n"}
              tinggi =  {this.state.tinggi} {"\n"}
              luas = {this.state.luas}
          </Text>
         </View>
   </View>


      );
  }
}
AppRegistry.registerComponent('AppForm2', () => Hitungvolumebalok);
