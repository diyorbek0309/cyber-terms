import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CTermItem from "./src/components/CTermItem";
import HomeScreen from "./src/screens/Home";

const { Navigator, Screen } = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Bosh sahifa" component={HomeScreen} />
        <Screen name="Termin" component={CTermItem} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
