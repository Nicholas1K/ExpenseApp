import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors, Sizes} from '../../theme/theme';

const Title = ({text}) => {
  return (
    <>
      <Text style={style.text}>{text}</Text>
    </>
  );
};

const style = StyleSheet.create({
  text: {
    fontSize: Sizes.large,
    color: Colors.text,
  },
});

export default Title;
