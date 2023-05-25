import React, {useContext, useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Sizes, Weights} from '../theme/theme';
import {ScrollView} from 'react-native-gesture-handler';


const AddNew = ({navigation}) => {

  const onAddWork = () => {
    navigation.navigate('AddWork')
  }
  const onAddFood = () => {
      navigation.navigate('AddFood');
  };
  const onAddcar = () => {
    navigation.navigate('AddCar');
  };
  const onAddShopping = () => {
    navigation.navigate('AddShopping');
  };
  const onAddService = () => {
    navigation.navigate('AddService');
  };
  const onAddHouse = () => {
    navigation.navigate('AddHouse');
  };


  return (
    <>
      <SafeAreaView style={style.safeArea}>
        <ScrollView>
          <View>
            <TouchableOpacity style={style.button} onPress={onAddWork}>
              <Text style={{color: Colors.white, fontSize: Sizes.medium}}>
                {' '}
                work
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={style.button} onPress={onAddFood}>
              <Text style={{color: Colors.white, fontSize: Sizes.medium}}>
                {' '}
                food
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={style.button} onPress={onAddcar}>
              <Text style={{color: Colors.white, fontSize: Sizes.medium}}>
                {' '}
                car
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={style.button} onPress={onAddShopping}>
              <Text style={{color: Colors.white, fontSize: Sizes.medium}}>
                {' '}
                shopping
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={style.button} onPress={onAddService}>
              <Text style={{color: Colors.white, fontSize: Sizes.medium}}>
                {' '}
                service
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={style.button} onPress={onAddHouse}>
              <Text style={{color: Colors.white, fontSize: Sizes.medium}}>
                {' '}
                house
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  view: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 10,
  },
  text: {
    fontSize: Sizes.medium,
    color: Colors.text,
    fontWeight: Weights.light,
  },
  input: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: Colors.disabled,
    padding: 12,
    fontSize: Sizes.medium,
    color: Colors.text,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 12,
    alignItems: 'center',
    borderRadius: 50,
    marginTop:10,
  },
});

export default AddNew;
