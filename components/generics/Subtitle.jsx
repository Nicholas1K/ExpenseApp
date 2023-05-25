import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors, Sizes} from '../../theme/theme';

const Subtitle = ({text}) => {
  return (
    <>
      <Text style={style.text}>{text}</Text>
    </>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: Sizes.small,
    color: Colors.text,
  },
});

export default Subtitle;
