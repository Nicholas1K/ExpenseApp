import React, {useState} from 'react';
import {FlatList} from 'react-native';
import HouseItem from './HouseItem';
import Title from '../generics/Title';

const HouseItemList = ({houses, goToHouseDet, deleteHh}) => {
  return (
    <>
      <FlatList //la flatlist funziona come il .map renderizzando la lista
        key={houses.id}
        data={houses}
        renderItem={({item}) => (
          <HouseItem
            houseItem={item}
            goToHouseDet={goToHouseDet}
            deleteHh={deleteHh}
          />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Title text="nessun elemento food nel database" />}
      />
    </>
  );
};
export default HouseItemList;
