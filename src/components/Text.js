import {Text, StyleSheet} from 'react-native';
export default function TextFont({children}){
    return <Text style={[styles,styles.text]}>{children}</Text>
}

const styles = StyleSheet.create({
    text:{
        fontFamily: "MontserratRegular",
    },
    textBold:{
        fontFamily: "MontserratBold",
    },
})