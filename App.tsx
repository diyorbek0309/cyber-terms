import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { TouchableOpacity, Image } from "react-native";
import CTermItem from "./src/components/CTermItem";
import HomeScreen from "./src/screens/Home";
import { eColors, eImages } from "./src/types/enum";
import { ThemeContext } from "./src/services/ThemeContext";

const { Navigator, Screen, Group } = createNativeStackNavigator();

function App() {
  const [isLight, setIsLight] = useState(true);

  return (
    <NavigationContainer>
      <ThemeContext.Provider value={{ isLight }}>
        <Navigator>
          <Group
            screenOptions={({ navigation }) => ({
              headerStyle: {
                backgroundColor: isLight ? eColors.WHITE : eColors.BLACK,
              },
              headerTitleStyle: {
                color: isLight ? eColors.BLACK : eColors.WHITE,
              },
              headerRight: () => (
                <TouchableOpacity onPress={() => setIsLight(!isLight)}>
                  <Image source={isLight ? eImages.MOON : eImages.SUN} />
                </TouchableOpacity>
              ),
              headerTintColor: isLight ? eColors.BLACK : eColors.WHITE,
            })}
          >
            <Screen name="Bosh sahifa" component={HomeScreen} />
            <Screen name="Termin" component={CTermItem} />
          </Group>
        </Navigator>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
}

export default App;
