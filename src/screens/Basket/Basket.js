import { Image, StyleSheet, Dimensions, Text, View } from "react-native";
import React from 'react';
import TextFont from "../../components/Text";
import top from '../../../assets/topo.png';
import logo from '../../../assets/logo.png';


const width = Dimensions.get('screen').width;

export default function Basket(){
    return(
        <>
            <Image source={top} style={styles.top}/>
            <Text style={styles.title}>Detalhes da cesta</Text>
            <View style={styles.basket}>
                <Text style={styles.name}>Cesta de Verduras</Text>
                <View style={styles.farm}>
                    <Image source={logo} style={styles.imageFarm}/>
                    <Text style={styles.nameFarm}>Jenny Jack Farm</Text>
                </View>                
                <Text style={styles.description}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha!</Text>
                <Text style={styles.price}>R$ 40,00</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    top: {
        width:"100%",
        height: 578 / 768 * width,
        fontFamily: "Montserrat"
    },
    title:{
        width:"100%",
        position: "absolute",
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        padding: 16,
        lineHeight: 26,
        fontWeight: "bold"
    },
    basket:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontFamily: "MontserratBold",
    },
    name:{
        color: "#464646",
        fontSize: 26,
        lineHeight:42,
        fontFamily: "MontserratBold",
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
        fontFamily: "MontserratBold"
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
        fontWeight: "bold",
    },
});