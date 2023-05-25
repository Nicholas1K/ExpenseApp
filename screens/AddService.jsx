import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Sizes, Weights} from '../theme/theme';
import Title from '../components/generics/Title';
import {ScrollView} from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';

const AddService = () => {

      const [amount, setAmount] = useState('');
      const [description, setDescription] = useState('');
      const [date, setDate] = useState(new Date());

      const service = {
        amount: amount,
        description: description,
        date: date,
      };

      //TODO fare la post
      const handelSave = () =>{
        fetch('http://localhost:8080/api/serviceS/create', {
          method: 'POST',
          body: JSON.stringify(service),
          headers: {'Content-Type': 'application/json'},
        });
      }

    const onChangeAmount = value => {
      setAmount(value);
    };
    const onChangeDescription = value => {
      setDescription(value);
    };
    const onChangeDate = value => {
      setDate(value);
    };
  return (
    //TODO gestire il Piker per la selezione di guadagno o spesa
    <>
      <SafeAreaView style={style.safeArea}>
        <ScrollView>
          <View style={style.view}>
            <Title text="Add new expend for Service" />
            <Text style={style.text}> Amount: </Text>
            <TextInput
              style={style.input}
              value={amount}
              keyboardType="numeric"
              onChangeText={onChangeAmount}
            />
            <Text style={style.text}> Description: </Text>
            <TextInput style={style.input} onChangeText={onChangeDescription} />
            <Text style={style.text}>Date</Text>
            <DatePicker
              mode="date"
              locale="it"
              date={date}
              onDateChange={onChangeDate}
            />
            <TouchableOpacity style={style.button} onPress={handelSave}>
              <Text style={{color: Colors.white, fontSize: Sizes.medium}}>
                {' '}
                conferma
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  view: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 10,
  },
  text: {
    fontSize: Sizes.medium,
    color: Colors.text,
    fontWeight: Weights.light,
  },
  input: {
    marginVertical: 5,
    borderWidth: 1,
    borderColor: Colors.disabled,
    padding: 12,
    fontSize: Sizes.medium,
    color: Colors.text,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 12,
    alignItems: 'center',
    borderRadius: 50,
  },
});

export default AddService;
