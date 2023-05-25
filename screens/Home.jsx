import React, {useCallback, useContext, useEffect, useState} from 'react';
import {StyleSheet, View, RefreshControl, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, Sizes} from '../theme/theme';
import Title from '../components/generics/Title';
import Subtitle from '../components/generics/Subtitle';
import Info from '../components/generics/Info';
import {MoneyContext} from '../context/MoneyContext';
import WorkListItem from '../components/expenses/WorkListItem';
import FoodListItem from '../components/expenses/FoodListItem';
import CarItemList from '../components/expenses/CarItemList';
import ServiceItemList from '../components/expenses/ServiceItemList';
import ShoppingItemList from '../components/expenses/ShoppingItemList';
import { ScrollView } from 'react-native-gesture-handler';
import HouseItemList from '../components/expenses/HouseItemList';

const Home = ({navigation}) => {
  const context = useContext(MoneyContext);
  const username = context.username.get;

  //funzione che mi mostra le statistiche inndettaglio degli elementi di work
  const goToWorkDetail = workItem => {
    navigation.navigate('Work Detail', {workItem});
  };
  const goToFoodDetail = foodItem => {
    navigation.navigate('Food Detail', {foodItem});
  };
  const goToCarDetail = carItem => {
    navigation.navigate('Car Detail', {carItem});
  };
  const goToShopDetail = shoppingItem => {
    navigation.navigate('Shopping Detail', {shoppingItem});
  };
  const goToServDet = serviceItem => {
    navigation.navigate('Service Detail', {serviceItem});
  };
  const goToHouseDet = houseItem => {
    navigation.navigate('House Detail', {houseItem});
  };

  const getSortedItems = () => {
    return work.sort((a, b) => new Date(b.date) - new Date(a.date)); // qui ordiniamo gli elementi in base alla data di immissione dal più recente al meno recente
  };

  const getLastMonthExpanses = () => {
    //questa funzione serve a controllare l'ultima spesa del mese, prendendo gli items
    const currentMonth = new Date().getMonth() + 1; //qui prendo il mese corrente
    return work
      .filter(item => {
        // qui prende gli items e poi li filtra
        const itemMonth = new Date(item.date).getMonth() + 1; //gli items filtrati vengono filtrati in base alla data in mesi
        if (itemMonth === currentMonth) {
          // e qui si fa un controllo per capire se coincidono gli items del mese con il mese corrente
          return item;
        }
      })
      .reduce((prev, cur) => {
        // con il reduce controlliamo e calcoliamo l'ammount stando attenti alle spese in etrate o in uscite
        const amount = Number(cur.amount);
        return cur === 'income' ? prev + amount : prev - amount; // forma contratta di scrivere un if else con ? in questa parte di codice farà il conteggio tra le entrate e le uscite dando l'attuale balance
      }, 0);
  };

  //useState per la get work
  const [work, setWork] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // use state per i food
  const [food, setFood] = useState([]);
  const [isLoadingF, setIsLoadingF] = useState(true);
  const [errorF, setErrorF] = useState(null);

  // use state per le car
  const [car, setCar] = useState([]);
  const [isLoadingC, setIsLoadingC] = useState(true);
  const [errorC, setErrorC] = useState(null);

  // use state per i shopping
  const [shopping, setShopping] = useState([]);
  const [isLoadingS, setIsLoadingS] = useState(true);
  const [errorS, setErrorS] = useState(null);

  // use state per i service
  const [service, setService] = useState([]);
  const [isLoadingSe, setIsLoadingSe] = useState(true);
  const [errorSe, setErrorSe] = useState(null);

  // use state per i house
  const [house, setHouse] = useState([]);
  const [isLoadingH, setIsLoadingH] = useState(true);
  const [errorH, setErrorH] = useState(null);

  // FUNZIONI PER FARE LE GET

  //funzione per fare la get delle statistiche di work
  async function fetchGetAllWork() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8080/api/work/all');

      if (!response.ok) {
        throw new Error('request filed');
      }

      const dataWork = await response.json();
      const trasformdataWork = dataWork.map(w => {
        return {
          id: w.id,
          amount: w.amount,
          description: w.description,
          date: w.date,
        };
      });

      setWork(trasformdataWork);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }

  //fetch per fare la get di tutti gli elementi dentro food
  async function fetchGetAllFood() {
    setIsLoadingF(true);
    setErrorF(null);

    try {
      const response = await fetch('http://localhost:8080/api/food/all');

      if (!response.ok) {
        throw new Error('request filed');
      }

      const dataFood = await response.json();
      const trasformdataFood = dataFood.map(f => {
        return {
          id: f.id,
          amount: f.amount,
          description: f.description,
          date: f.date,
        };
      });

      console.log(trasformdataFood);

      setFood(trasformdataFood);
    } catch (error) {
      setErrorF(errorF.message);
    }

    setIsLoadingF(false);
  }

  //fetch per fare la get di tutti gli elementi dentro car
  async function fetchGetAllCar() {
    setIsLoadingC(true);
    setErrorC(null);

    try {
      const response = await fetch('http://localhost:8080/api/car/all');

      if (!response.ok) {
        throw new Error('request filed');
      }

      const dataCar = await response.json();
      const trasformdataCar = dataCar.map(c => {
        return {
          id: c.id,
          amount: c.amount,
          description: c.description,
          date: c.date,
        };
      });

      setCar(trasformdataCar);
    } catch (error) {
      setErrorC(errorC.message);
    }

    setIsLoadingC(false);
  }

  //fetch per fare la get di tutti gli elementi dentro Shopping
  async function fetchGetAllShopping() {
    setIsLoadingS(true);
    setErrorS(null);

    try {
      const response = await fetch('http://localhost:8080/api/shopping/all');

      if (!response.ok) {
        throw new Error('request filed');
      }

      const dataShop = await response.json();
      const trasformdataShop = dataShop.map(s => {
        return {
          id: s.id,
          amount: s.amount,
          description: s.description,
          date: s.date,
        };
      });

      setShopping(trasformdataShop);
    } catch (error) {
      setErrorS(errorS.message);
    }

    setIsLoadingS(false);
  }

  //fetch per fare la get di tutti gli elementi dentro service
  async function fetchGetAllServices() {
    setIsLoadingSe(true);
    setErrorSe(null);

    try {
      const response = await fetch('http://localhost:8080/api/serviceS/all');

      if (!response.ok) {
        throw new Error('request filed');
      }

      const dataService = await response.json();
      const trasformdataService = dataService.map(se => {
        return {
          id: se.id,
          amount: se.amount,
          description: se.description,
          date: se.date,
        };
      });

      setService(trasformdataService);
    } catch (error) {
      setErrorSe(errorSe.message);
    }

    setIsLoadingSe(false);
  }

  //fetch per fare la get di tutti gli elementi dentro house
  async function fetchGetAllHouse() {
    setIsLoadingH(true);
    setErrorH(null);

    try {
      const response = await fetch('http://localhost:8080/api/house/all');

      if (!response.ok) {
        throw new Error('request filed');
      }

      const dataHouse = await response.json();
      const trasformdataHouse = dataHouse.map(h => {
        return {
          id: h.id,
          amount: h.amount,
          description: h.description,
          date: h.date,
        };
      });

      setHouse(trasformdataHouse);
    } catch (error) {
      setErrorH(errorH.message);
    }

    setIsLoadingH(false);
  }

  //questa funzione farà comparire a schermo tutte le get
  useEffect(() => {
    fetchGetAllWork();
    fetchGetAllFood();
    fetchGetAllCar();
    fetchGetAllShopping();
    fetchGetAllServices();
    fetchGetAllHouse();
  }, []);

  //funzioni per fare le DELETE

  //funzione per eliminare le statistic dei lavori
  async function fetchDeleteWork(workItem) {
    try {
      const response = await fetch(
        'http://localhost:8080/api/work/delete/' + workItem.description,
        {
          method: 'DELETE',
        },
      );
    } catch (error) {
      console.error(error);
    }
    console.log(workItem.description); //con questo console stampo nel terminale l'elemento che vado a cancellare
  }

  //fetch per fare la delete del food
  async function fetchDeleteFood(foodItem) {
    try {
      const response = await fetch(
        'http://localhost:8080/api/food/delete/' +
          foodItem.description +
          '/' +
          foodItem.amount,
        {
          method: 'DELETE',
        },
      );
    } catch (error) {
      console.error(errorF);
    }
  }

  //fetch per fare la delete del car
  async function fetchDeleteCar(carItem) {
    try {
      const response = await fetch(
        'http://localhost:8080/api/car/delete/' +
          carItem.description +
          '/' +
          carItem.amount,
        {
          method: 'DELETE',
        },
      );
    } catch (error) {
      console.error(errorC);
    }
  }

  //fetch per fare la delete del shopping
  async function fetchDeleteShopping(shoppingItem) {
    try {
      const response = await fetch(
        'http://localhost:8080/api/shopping/delete/' +
          shoppingItem.description +
          '/' +
          shoppingItem.amount,
        {
          method: 'DELETE',
        },
      );
    } catch (error) {
      console.error(errorS);
    }
  }

  //fetch per fare la delete del service
  async function fetchDeleteService(serviceItem) {
    try {
      const response = await fetch(
        'http://localhost:8080/api/serviceS/delete/' +
          serviceItem.description +
          '/' +
          serviceItem.amount,
        {
          method: 'DELETE',
        },
      );
    } catch (error) {
      console.error(errorSe);
    }
  }

  //fetch per fare la delete del house
  async function fetchDeleteHouse(houseItem) {
    try {
      const response = await fetch(
        'http://localhost:8080/api/house/delete/' +
          houseItem.description +
          '/' +
          houseItem.amount,
        {
          method: 'DELETE',
        },
      );
    } catch (error) {
      console.error(errorH);
    }
  }

  //CONTENT PER MOSTRARE LE GET A SCHERMO

  // MOSTRA A SCHERMO I WORK
  let contentWork = <Text>*** Found Element ***</Text>;
  if (work.length == 0) {
    contentWork = <Text>*** Element not found ***</Text>;
  }
  if (work.length > 0) {
    contentWork = (
      <WorkListItem
        items={getSortedItems()}
        works={work}
        deleteWork={fetchDeleteWork}
        goToWorkDetail={goToWorkDetail}
      />
    );
  }
  if (isLoading) {
    contentWork = <Text>*** Loading data ***</Text>;
  }
  if (error) {
    contentWork = <Text>{error}</Text>;
  }

  // MOSTRA A SCHERMO I FOOD

  let contentFood = <Text>*** Found Element ***</Text>;
  if (food.length == 0) {
    contentFood = <Text>*** Element not found ***</Text>;
  }
  if (food.length > 0) {
    contentFood = (
      <FoodListItem
        items={getSortedItems()}
        foods={food}
        deleteFood={fetchDeleteFood}
        goToFoodDetail={goToFoodDetail}
      />
    );
  }
  if (isLoadingF) {
    contentFood = <Text>*** Loading data ***</Text>;
  }
  if (error) {
    contentFood = <Text>{errorF}</Text>;
  }

  // MOSTRA A SCHERMO I CAR

  let contentCar = <Text>*** Found Element ***</Text>;
  if (car.length == 0) {
    contentCar = <Text>*** Element not found ***</Text>;
  }
  if (car.length > 0) {
    contentCar = (
      <CarItemList
        items={getSortedItems()}
        cars={car}
        deleteCar={fetchDeleteCar}
        goToCarDetail={goToCarDetail}
      />
    );
  }
  if (isLoadingC) {
    contentCar = <Text>*** Loading data ***</Text>;
  }
  if (error) {
    contentCar = <Text>{errorC}</Text>;
  }

  // MOSTRA A SCHERMO I SHOPPING

  let contentShop = <Text>*** Found Element ***</Text>;
  if (shopping.length == 0) {
    contentShop = <Text>*** Element not found ***</Text>;
  }
  if (shopping.length > 0) {
    contentShop = (
      <ShoppingItemList
        items={getSortedItems()}
        shoppings={shopping}
        deleteShop={fetchDeleteShopping}
        goToShopDetail={goToShopDetail}
      />
    );
  }
  if (isLoadingS) {
    contentShop = <Text>*** Loading data ***</Text>;
  }
  if (error) {
    contentShop = <Text>{errorS}</Text>;
  }

  // MOSTRA A SCHERMO I SERVICE

  let contentService = <Text>*** Found Element ***</Text>;
  if (service.length == 0) {
    contentService = <Text>*** Element not found ***</Text>;
  }
  if (service.length > 0) {
    contentService = (
      <ServiceItemList
        items={getSortedItems()}
        services={service}
        deleteServ={fetchDeleteService}
        goToServDet={goToServDet}
      />
    );
  }
  if (isLoadingSe) {
    contentService = <Text>*** Loading data ***</Text>;
  }
  if (error) {
    contentService = <Text>{errorSe}</Text>;
  }

    let contentHouse = <Text>*** Found Element ***</Text>;
    if (house.length == 0) {
      contentHouse = <Text>*** Element not found ***</Text>;
    }
    if (house.length > 0) {
      contentHouse = (
        <HouseItemList
          items={getSortedItems()}
          houses={house}
          deleteHh={fetchDeleteHouse}
          goToHouseDet={goToHouseDet}
        />
      );
    }
    if (isLoadingH) {
      contentHouse = <Text>*** Loading data ***</Text>;
    }
    if (error) {
      contentHouse = <Text>{errorH}</Text>;
    }

  // use state per fare il refreshing della pagina
  const [refreshing, setRefreshing] = useState(false);

  //funzione per fare ricaricare la pagina che impiega 1 secondi per ricaricare
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <SafeAreaView
      style={style.safeArea}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <ScrollView>
        <View style={style.view}>
          {/*Subtitle e Title sono componenti generici creati da me*/}
          <View style={style.headerView}>
            <Subtitle text="il tuo resconto" />
            {/*con il $ si richiama l'oggetto o la funzione */}
            <Title text={`Bentornato, ${username}`} />
            <Info text={`Spese ultimo mese: ${getLastMonthExpanses()} $`} />
          </View>
          <View style={style.listView}>
            <Subtitle text="Expense Work" />
            {/*gli items arrivano da fuori precisamente dal useState scritto in App.jsx */}
            {/*goToDetail è una funzione scritta dentro questa pagina poi estesa alla lista del componente e poi al componente nel componente lo abbiamo inserito all'interno del onPressItem che sarà il collegamento dell'onPress dela tachableOpacity */}
            <View style={style.listView}>{contentWork}</View>
            <Subtitle text="Expense Food" />
            <View style={style.listView}>{contentFood}</View>
            <Subtitle text="Expense Car" />
            <View style={style.listView}>{contentCar}</View>
            <Subtitle text="Expense Shopping" />
            <View style={style.listView}>{contentShop}</View>
            <Subtitle text="Expense Service" />
            <View style={style.listView}>{contentService}</View>
            <Subtitle text="Expense House" />
            <View style={style.listView}>{contentHouse}</View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  },
  text: {
    fontSize: Sizes.large,
    color: Colors.text,
  },
  listView: {
    marginBottom: 70,
    marginTop: 10,
    margin: 20,
  },
  headerView: {
    padding: 20,
    height: 120,
    backgroundColor: Colors.primary,
  },
});

export default Home;
