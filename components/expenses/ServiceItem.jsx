import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Sizes, Weights} from '../../theme/theme';
import {Swipeable} from 'react-native-gesture-handler';

const ServiceItem = ({serviceItem, goToServDet, deleteServ}) => {
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
        <TouchableOpacity onPress={onDelServ}>
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

  const onDelServ = () => {
    deleteServ(serviceItem);
  };

  const onServPress = () => {
    goToServDet(serviceItem);
  };

  return (
    <Swipeable renderRightActions={rightActions}>
      <View style={style.view}>
        <TouchableOpacity onPress={onServPress}>
          <Text key={serviceItem.id} style={style.description}>
            {serviceItem.description}
          </Text>
        </TouchableOpacity>
        <Text key={serviceItem.id} style={style.amount}>
          {serviceItem.amount} $
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

export default ServiceItem;
