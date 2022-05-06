import { Image, Dimensions, StyleSheet } from "react-native";
import { TextFontBold } from "../../../../components/Fonts";
import topImage from '../../../../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Top(){
    return(
        <>
            <Image source={topImage} style={styles.top}/>
            <TextFontBold style={styles.title}>Detalhes da cesta</TextFontBold>
        </>
    )
}

const styles = StyleSheet.create({
top: {
    width:"100%",
    height: 578 / 768 * width,        
},
title:{
    width:"100%",
    position: "absolute",
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
    padding: 16,
    lineHeight: 26,        
},
})