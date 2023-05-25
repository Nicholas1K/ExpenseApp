import React, {useState} from 'react';
import {FlatList} from 'react-native';
import FoodItem from './FoodItem';
import Title from '../generics/Title';

const FoodListItem = ({foods, goToFoodDetail, deleteFood}) => {
  return (
    <>
      <FlatList //la flatlist funziona come il .map renderizzando la lista
        key={foods.id}
        data={foods}
        renderItem={({item}) => (
          <FoodItem
            foodItem={item}
            goToFoodDetail={goToFoodDetail}
            deleteFood={deleteFood}
          />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Title text="nessun elemento food nel database" />}
      />
    </>
  );
};
export default FoodListItem;
