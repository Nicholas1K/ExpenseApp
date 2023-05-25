import React, {useState} from 'react';
import {FlatList} from 'react-native';
import ServiceItem from './ServiceItem';
import Title from '../generics/Title';

const ServiceItemList = ({services, goToServDet, deleteServ}) => {
  return (
    <>
      <FlatList //la flatlist funziona come il .map renderizzando la lista
        key={services.id}
        data={services}
        renderItem={({item}) => (
          <ServiceItem
            serviceItem={item}
            goToServDet={goToServDet}
            deleteServ={deleteServ}
          />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Title text="nessun elemento service nel database" />}
      />
    </>
  );
};
export default ServiceItemList;
