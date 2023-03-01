import { StyleSheet } from "react-native";
import generalColor from "../../../../generals/colors";

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: generalColor.primary,
    marginBottom: 30
  },
  status: {
    marginTop: 30,
    fontSize: 30
  }
});

export default styles