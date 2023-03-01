import { useEffect, useState } from "react";
import { Switch, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import generalColor from "../../../generals/colors";
import generalStyle from "../../../generals/generalStyle";
import styles from "./styles/stylesSHome";

const SHome = () => {
    const navigation = useNavigation()
  const [isEnabled, setIsEnabled] = useState(false);
  //const [status,setStatus] = useState()
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if(isEnabled === false) {
        navigation.navigate('SOrder')
    }
  }

  
  return (
    <View style={generalStyle.container}>
        
      <View style={styles.content}>
      <Text style={styles.title}>KFIX</Text>
        <Switch
          trackColor={{ false: "#767577", true: generalColor.primary }}
          thumbColor={isEnabled ? generalColor.border : generalColor.border}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ transform: [{ scaleX: 3 }, { scaleY: 3 }] }}
        />
        <Text style={styles.status}>{isEnabled ? 'Online': 'Offline'}</Text>
      </View>
    </View>
  );
};

export default SHome;
