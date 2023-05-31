import { Text, TouchableOpacity, View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../services/ThemeContext";
import { styles } from "../styles/HomeStyle";
import { eColors } from "../types/enum";

const Home = ({ navigation }) => {
  const { isLight, language } = useContext(ThemeContext);

  return (
    <View
      style={{
        backgroundColor: isLight ? eColors.LIGHT : eColors.DARK,
        flex: 1,
      }}
    >
      <Text
        style={{
          ...styles.homeTitle,
          color: isLight ? eColors.BLACK : eColors.WHITE,
        }}
      >
        CyberDict
      </Text>
      <View style={styles.homeBtns}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Terminlar")}
          style={{
            ...styles.homeBtn,
            backgroundColor: isLight ? eColors.DARK : eColors.LIGHT,
          }}
        >
          <Text
            style={{
              ...styles.homeBtnText,
              color: isLight ? eColors.WHITE : eColors.BLACK,
            }}
          >
            {language === "uz"
              ? "Terminlar"
              : language === "en"
              ? "Terms"
              : "Термины"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Dastur haqida")}
          style={{
            ...styles.homeBtn,
            backgroundColor: isLight ? eColors.DARK : eColors.LIGHT,
          }}
        >
          <Text
            style={{
              ...styles.homeBtnText,
              color: isLight ? eColors.WHITE : eColors.BLACK,
            }}
          >
            {language === "uz"
              ? "Dastur haqida"
              : language === "en"
              ? "About app"
              : "О программе"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
