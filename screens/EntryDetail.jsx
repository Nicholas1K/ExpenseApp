import React from 'react';
import {StyleSheet,Text,View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Sizes, Weights} from '../theme/theme';
import Title from '../components/generics/Title';

const EntryDetail = ({route}) => {

    const item = route.params.item;
  return (
    <>
      <SafeAreaView style={style.safeArea}>
        <View style={style.view}>
          <Title text="Detail" />
          <Text style={style.text}>Description: {item.desc}</Text>
          <Text style={style.text}>Amount: {item.amount}</Text>
          <Text style={style.text}>Date: {item.date.toLocaleDateString()}
          </Text>
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
    fontWeight: Weights.light,
  },
});

export default EntryDetail;
