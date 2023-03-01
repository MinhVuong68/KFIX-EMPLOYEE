import { Image, Text, TouchableOpacity, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import generalStyle from "../../../generals/generalStyle";
import { Avartar, Contact } from "../components";
import styles from "./styles";
import { Button } from "../../../components";
const SOrder = ({received}) => {
  const navigation = useNavigation()

  const handleReceive = () => {
    navigation.navigate('OrderDetail')
  }

  const handleDirect = () => {
    navigation.navigate('SGoogleMap')
  }
  return (
    <View style={generalStyle.container}>
      <View style={styles.container}>
        <Avartar
          width={90}
          height={90}
          link="https://static.wikia.nocookie.net/onepiece/images/b/bd/Yamato_Anime_Infobox.png/revision/latest?cb=20220119060149"
        />
        <View>
          <Text style={generalStyle.txtName}>Mr. Vuong</Text>
          <Contact />
          {/* <TouchableOpacity>
                <AntDesign name="message1" size={25} color="#000" />
            </TouchableOpacity> */}
        </View>
      </View>
      <View>
        <View style={styles.contentOrder}>
          <MaterialIcons name="error" size={25} color="orange" />
          <Text style={styles.reasonOrder}>Mat chia khoa</Text>
        </View>
        <View style={styles.contentOrder}>
          <MaterialIcons name="location-pin" size={25} color="red" />
          <Text style={styles.reasonOrder}>158 Tan Son Nhi, Tan Phu, HCM</Text>
        </View>
        <View style={styles.contentOrder}>
          <MaterialCommunityIcons name="map-marker-distance" size={25} color="green" />
          <Text style={styles.reasonOrder}>12 Km</Text>
        </View>
        <View style={styles.contentOrder}>
          <MaterialIcons name="note" size={25} color="blue" />
          <Text style={styles.reasonOrder}>Den truoc 8h toi gium tois</Text>
        </View>
      </View>
      {
        received ? (
          <View style={styles.options}>
          <Button title="Chỉ đường" customStyle={{backgroundColor: 'blue',...styles.btn}} onPress={handleDirect}/>
          <Button title="Sửa xong" customStyle={{backgroundColor: 'orange',...styles.btn}}/>
        </View>
        ): (
          <View style={styles.options}>
            <Button title="Nhận đơn" customStyle={styles.btn} onPress={handleReceive}/>
            <Button title="Từ chối" customStyle={{backgroundColor: 'red',...styles.btn}}/>
          </View>
        )
      }
      
     
      
    </View>
  );
};

export default SOrder;
