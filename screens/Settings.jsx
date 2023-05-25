import React, { useContext } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Sizes, Weights} from '../theme/theme';
import Title from '../components/generics/Title';
import { TextInput } from 'react-native-gesture-handler';
import { MoneyContext } from '../context/MoneyContext';

const Settings = () => {

  const context = useContext(MoneyContext);
  const username = context.username;

  return (
    <>
      <SafeAreaView style={style.safeArea}>
        <View style={style.view}>
          <Title text="Settings" />
          <View style={{marginTop:20}}>
            <Text style={style.text}>Username</Text>
            <TextInput
              style={style.input}
              value={username.get}
              onChangeText={text => username.set(text)}
            />
          </View>
        </View>
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
    fontWeight:Weights.light,
  },
  input: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: Colors.disabled,
    padding: 12,
    fontSize: Sizes.medium,
    color: Colors.text,
  },
});

export default Settings;
