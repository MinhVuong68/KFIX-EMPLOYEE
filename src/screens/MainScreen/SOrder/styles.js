import { StyleSheet } from "react-native";
import { generalColor, generalStyle } from "../../../generals";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: generalColor.borderColor,
        borderBottomWidth: 4,
        borderRightWidth: 3,
        borderRadius: 10,
        padding: 10,
    },
    contentOrder: {
        flexDirection: "row",
        marginTop: 15,
        alignItems: 'center'
    },
    reasonOrder: {
        marginLeft: 10,
        fontSize: 20
    },
    options: {
        marginTop: 20
    },
    btn: {
        marginBottom: 10
    }
})

export default styles