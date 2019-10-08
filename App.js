import * as React from 'react';
import { Alert,Button, View, Text, Linking } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 
import TopUp from './components/TopUp';

class HomeScreenBrowser extends React.Component {

  openBrowser() {
    Linking.openURL("https://buymiles.mileageplus.com/united/united_landing_page/");
  }

  render() {
    Alert.alert('','Your account does not have enough miles to complete the transaction. Please purchase miles or search by price.',[
    {text: 'PURCHASE MILES',onPress: () => this.openBrowser()},{text: 'SEARCH BY PRICE'}
  ]);
  return null;
  }
}

class HomeScreenWebView extends React.Component {

  navigate() {
    this.props.navigation.navigate('TopUp',{
      memberId: "12345",
      balance: 5000,
      email:"mihnea@points.com",
      firstName:"Mihnea",
      lastName:"Galeteanu",
      transactionQuantity: 3000
    });
  }

  render() {
    Alert.alert('','Your account does not have enough miles to complete the transaction. Please purchase miles or search by price.',[
    {text: 'PURCHASE MILES',onPress: () => this.navigate()},{text: 'SEARCH BY PRICE'}
  ]);
  return null;
  }
}

class HomeScreenOld extends React.Component {
  render() {
    Alert.alert('','Your account does not have enough miles to complete the transaction. Please search by price or go to buymiles.mileageplus.com to purchase or transfer miles.',[
    {text: 'CONTINUE'}
  ]);
  return null;
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreenOld,
    TopUp: TopUp,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

// gets the current screen from navigation state
function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route.routeName;
}

export default class App extends React.Component {
  render() {
    return <AppContainer onNavigationStateChange={(prevState, currentState, action) => {
      const currentScreen = getActiveRouteName(currentState);
      const prevScreen = getActiveRouteName(prevState);

      if (currentScreen == "Home") {
        Alert.alert('',"Check for a balance update",[{text: 'REFRESH BALANCE'}]);
      }
    }}/>;
  }
}
