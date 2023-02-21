import { Text, View } from "react-native"
import IntroduceSlider from "./components/IntroduceSlide"
import styles from "./styles/stylesSWelcome"

const Welcome = () => {
    return (
        <View style={styles.container}>
            <IntroduceSlider/>
            <Text>Welcome screen</Text>
        </View>
    )
}

export default Welcome