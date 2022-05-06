import {View, Image, StyleSheet} from 'react-native'
import logo from '../../../../../assets/logo.png';
import {TextFontRegular, TextFontBold} from "../../../../components/Fonts";

export default function Details(){
    return(
        <>
            <TextFontBold style={styles.name}>Cesta de Verduras</TextFontBold>
            <View style={styles.farm}>
                <Image source={logo} style={styles.imageFarm}/>
                <TextFontBold style={styles.nameFarm}>Jenny Jack Farm</TextFontBold>
            </View>                
            <TextFontRegular style={styles.description}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha!</TextFontRegular>
            <TextFontBold style={styles.price}>R$ 40,00</TextFontBold>
        </>
    )
}

const styles = StyleSheet.create({
name:{
    color: "#464646",
    fontSize: 26,
    lineHeight:42,
},
farm:{
    flexDirection: "row",
    paddingVertical: 12,
}
,
imageFarm:{
    width: 32,
    height: 32,
},
nameFarm:{
    fontSize: 16,
    lineHeight: 26,
    color: "#A3A3A3",
    marginLeft: 12,        
},
description:{
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
},
price:{
    color: "#2A9F85",
    fontSize: 16,
    lineHeight: 26,        
},
})