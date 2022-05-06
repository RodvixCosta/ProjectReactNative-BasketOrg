import { StatusBar, SafeAreaView, View } from 'react-native';
import Basket from './src/screens/Basket/Basket';
import {useFonts, Montserrat_400Regular, Montserrat_700Bold} from "@expo-google-fonts/montserrat"

export default function App() {
  const [loadFont] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  if(!loadFont){
    return <View/>
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Basket/>
    </SafeAreaView>
  );
}
;
