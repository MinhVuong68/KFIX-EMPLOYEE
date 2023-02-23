import { Text, TextInput, TouchableOpacity, View } from "react-native";
import generalColor from "../../generals/colors";
import generalStyle from "../../generals/generalStyle";

const SConfirmPhoneNum = () => {
  return (
    <View style={generalStyle.container}>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          style={generalStyle.input}
          keyboardType="numeric"
          placeholder="Số điện thoại"
        />
        <Text style={{ color: generalColor.error }}>
          Số điện thoại không hợp lệ!
        </Text>
      </View>
      <TouchableOpacity
        style={generalStyle.button}
      >
        <Text
          style={generalStyle.txtButton}
        >
          Tiếp tục
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SConfirmPhoneNum;
