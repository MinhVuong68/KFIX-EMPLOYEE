import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { SConfirmPhoneNum, SWelcome } from './src/screens';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (


    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SWelcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={'SWelcome'} component={SWelcome} />
        <Stack.Screen name={'SConfirmPhoneNum'} component={SConfirmPhoneNum} options={{animation:'slide_from_right'}}/>
      </Stack.Navigator>
      {/* <StatusBar animated={true} backgroundColor={colors.primaryColor}/> */}
    </NavigationContainer>
  );
}

