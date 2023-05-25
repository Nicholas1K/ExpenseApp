import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Sizes, Weights} from '../../theme/theme';
import {Swipeable} from 'react-native-gesture-handler';

const CarItem = ({carItem, goToCarDetail, deleteCar}) => {
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
        <TouchableOpacity onPress={onDeleteCar}>
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

  const onDeleteCar = () => {
    deleteCar(carItem);
  };

  const onCarPress = () => {
    goToCarDetail(carItem);
  };

  return (
    <Swipeable renderRightActions={rightActions}>
      <View style={style.view}>
        <TouchableOpacity onPress={onCarPress}>
          <Text key={carItem.id} style={style.description}>
            {carItem.description}
          </Text>
        </TouchableOpacity>
        <Text key={carItem.id} style={style.amount}>
          {carItem.amount} $
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

export default CarItem;
