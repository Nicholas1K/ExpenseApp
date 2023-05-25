import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Sizes, Weights} from '../theme/theme';
import Title from '../components/generics/Title';

const HouseDetail = ({route}) => {
  const statistic = route.params.houseItem;

  return (
    <>
      <SafeAreaView style={style.safeArea}>
        <View style={style.view}>
          <Title text="Food Detail" />
          <Text style={style.text}>Description: {statistic.description}</Text>
          <Text style={style.text}>Amount: {statistic.amount}</Text>
          <Text style={style.text}>Date: {statistic.date}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

//CSS
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
export default HouseDetail;
