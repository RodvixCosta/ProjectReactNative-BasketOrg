import {Text, StyleSheet} from 'react-native';

export function TextFontRegular({children, style}){
    return <Text style={[style, styles.text]}>{children}</Text>
}

export function TextFontBold({children, style}){
    return <Text style={[style, styles.textBold]}>{children}</Text>

}

const styles = StyleSheet.create({
    text:{
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textBold:{
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    },
})