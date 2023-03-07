import { useEffect, useState } from "react";
import { Pressable, Switch, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
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
        
      <Pressable style={styles.notification} onPress={() => navigation.navigate('SNotifications')}>
        <FontAwesome
           name="bell"
          size={35}
          color="#000"
          style={styles.bellIcon}
        />
        <View style={styles.new}>
          <Text style={styles.textNew}>1</Text>
        </View>
      </Pressable>
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
