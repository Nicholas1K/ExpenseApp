import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors, Sizes} from '../../theme/theme';

const Info = ({text}) => {
  return (
    <>
      <Text style={style.text}>{text}</Text>
    </>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: Sizes.medium,
    color: Colors.white,
  },
});

export default Info;
