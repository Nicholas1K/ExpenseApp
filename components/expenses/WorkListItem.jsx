import React, { useState } from 'react';
import {FlatList} from 'react-native';
import WorkItem from './WorkItem';
import Title from '../generics/Title';

const WorkListItem = ({works, goToWorkDetail, deleteWork}) => {
  return (
    <>
      <FlatList //la flatlist funziona come il .map renderizzando la lista
        key={works.id}
        data={works}
        renderItem={({item}) => (
          <WorkItem
            workItem={item}
            goToWorkDetail={goToWorkDetail}
            deleteWork={deleteWork}
          />
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={<Title text="nessun elemento work nel database" />}
      />
    </>
  );
};
export default WorkListItem;
