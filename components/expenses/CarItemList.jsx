import React, {useState} from 'react';
import {FlatList} from 'react-native';
import CarItem from './CarItem';
import Title from '../generics/Title';

const CarItemList = ({cars, goToCarDetail, deleteCar}) => {
  return (
    <>
      <FlatList //la flatlist funziona come il .map renderizzando la lista
        key={cars.id}
        data={cars}
        renderItem={({item}) => (
          <CarItem
            carItem={item}
            goToCarDetail={goToCarDetail}
            deleteCar={deleteCar}
          />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Title text="nessun elemento car nel database" />}
      />
    </>
  );
};
export default CarItemList;
