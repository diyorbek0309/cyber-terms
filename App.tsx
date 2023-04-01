import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity, Image, View } from "react-native";
import CTermItem from "./src/components/CTermItem";
import HomeScreen from "./src/screens/Home";
import { eColors, eImages } from "./src/types/enum";
import { ThemeContext } from "./src/services/ThemeContext";

const { Navigator, Screen, Group } = createNativeStackNavigator();

function App() {
  const [isLight, setIsLight] = useState(true);
  const [language, setLanguage] = useState("uz");
  const languages = [
    { label: "UZ", value: "uz" },
    { label: "EN", value: "en" },
  ];

  return (
    <NavigationContainer>
      <ThemeContext.Provider value={{ isLight, language }}>
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
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 160,
                  }}
                >
                  <Picker
                    selectedValue={language}
                    onValueChange={(itemValue) => setLanguage(itemValue)}
                    style={{
                      width: 105,
                      color: isLight ? eColors.BLACK : eColors.WHITE,
                    }}
                    dropdownIconColor={isLight ? eColors.BLACK : eColors.WHITE}
                  >
                    {languages.map((lang) => (
                      <Picker.Item
                        key={lang.value}
                        label={lang.label}
                        value={lang.value}
                      />
                    ))}
                  </Picker>
                  <TouchableOpacity
                    onPress={() => setIsLight(!isLight)}
                    style={{ marginTop: 10 }}
                  >
                    <Image source={isLight ? eImages.MOON : eImages.SUN} />
                  </TouchableOpacity>
                </View>
              ),
              headerTintColor: isLight ? eColors.BLACK : eColors.WHITE,
            })}
          >
            <Screen
              name="Bosh sahifa"
              component={HomeScreen}
              options={{ title: language === "uz" ? "Bosh sahifa" : "Home" }}
            />
            <Screen
              name="Termin"
              component={CTermItem}
              options={{ title: language === "uz" ? "Termin" : "Term" }}
            />
          </Group>
        </Navigator>
      </ThemeContext.Provider>
    </NavigationContainer>
  );
}

export default App;
