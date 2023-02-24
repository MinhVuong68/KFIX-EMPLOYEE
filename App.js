import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { MainScreen, OTP,SConfirmPhoneNum, SForgotPassword, SWelcome } from './src/screens';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (


    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SWelcome"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={'SWelcome'} component={SWelcome} />
        {/* <Stack.Screen name={'SConfirmPhoneNum'} component={SConfirmPhoneNum} options={{animation:'slide_from_right'}}/> */}
        <Stack.Screen name={'OTP'} component={OTP} />
        <Stack.Screen name={'SForgotPassword'} component={SForgotPassword} />
        <Stack.Screen name={'MainScreen'} component={MainScreen} />

      </Stack.Navigator>
      {/* <StatusBar animated={true} backgroundColor={colors.primaryColor}/> */}
    </NavigationContainer>
  );
}

