import { StyleSheet } from "react-native";
import generalColor from "./colors";

const generalStyle = StyleSheet.create({
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 20,
    borderRadius: 10,
  },
  button: {
    paddingHorizontal: 8,
    width: '100%',
    paddingVertical: 16,
    backgroundColor: "green",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  txtButton: {
    color: generalColor.colorTextbutton,
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: generalColor.white
  },
  containerCenter: {
    justifyContent: "center",
    alignItems: 'center'
  }
});

export default generalStyle;
