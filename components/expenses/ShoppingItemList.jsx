import React, {useState} from 'react';
import {FlatList} from 'react-native';
import ShoppingItem from './ShoppingItem';
import Title from '../generics/Title';

const ShoppingItemList = ({shoppings, goToShopDetail, deleteShop}) => {
  return (
    <>
      <FlatList //la flatlist funziona come il .map renderizzando la lista
        key={shoppings.id}
        data={shoppings}
        renderItem={({item}) => (
          <ShoppingItem
            shoppingItem={item}
            goToShopDetail={goToShopDetail}
            deleteShop={deleteShop}
          />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Title text="nessun elemento shopping nel database" />
        }
      />
    </>
  );
};
export default ShoppingItemList;
