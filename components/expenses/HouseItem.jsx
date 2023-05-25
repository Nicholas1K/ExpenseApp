import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Sizes, Weights} from '../../theme/theme';
import {Swipeable} from 'react-native-gesture-handler';

const HouseItem = ({houseItem, deleteHh, delHouse}) => {
  const rightActions = () => {
    return (
      <View
        style={{
          backgroundColor: Colors.danger,
          justifyContent: 'center',
          borderRadius: 50,
          marginLeft: 5,
          padding: 5,
        }}>
        <TouchableOpacity onPress={onDelHouse}>
          <Text
            style={{
              color: Colors.white,
              fontSize: Sizes.tiny,
              fontWeight: Weights.bold,
            }}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const onDelHouse = () => {
    delHouse(houseItem);
  };

  const housePress = () => {
    deleteHh(houseItem);
  };

  return (
    <Swipeable renderRightActions={rightActions}>
      <View style={style.view}>
        <TouchableOpacity onPress={housePress}>
          <Text key={houseItem.id} style={style.description}>
            {houseItem.description}
          </Text>
        </TouchableOpacity>
        <Text key={houseItem.id} style={style.amount}>
          {houseItem.amount} $
        </Text>
      </View>
    </Swipeable>
  );
};

//CSS
const style = StyleSheet.create({
  view: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.text,
    borderRadius: 25,
    padding: 20,
    marginVertical: 10,
  },
  description: {
    flexGrow: 3,
    fontSize: Sizes.medium,
    fontWeight: Weights.medium,
    color: Colors.text,
  },
  amount: {
    fontSize: Sizes.medium,
    fontWeight: Weights.bold,
    color: Colors.text,
    flexGrow: 1,
    textAlign: 'right',
  },
});

export default HouseItem;
