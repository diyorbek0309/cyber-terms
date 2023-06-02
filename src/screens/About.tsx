import { Text, View, StatusBar } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../services/ThemeContext";
import { styles } from "../styles/HomeStyle";
import { eColors } from "../types/enum";

const About = () => {
  const { isLight, language } = useContext(ThemeContext);

  return (
    <View
      style={{
        backgroundColor: isLight ? eColors.LIGHT : eColors.DARK,
        flex: 1,
      }}
    >
      <StatusBar />
      <Text
        style={{
          ...styles.aboutTitle,
          color: isLight ? eColors.BLACK : eColors.WHITE,
        }}
      >
        {language === "uz"
          ? "Dastur haqida"
          : language === "en"
          ? "About app"
          : "О программе"}
      </Text>
      <Text
        style={{
          ...styles.aboutTitle,
          color: isLight ? eColors.BLACK : eColors.WHITE,
        }}
      >
        {language === "uz"
          ? "Axborot xavfsizligi sohasidagi terminlar va ularning tavsiflari berilgan mobil ilova"
          : language === "en"
          ? "A mobile application with information security terms and their descriptions"
          : "Мобильное приложение с терминами защиты информации и их описанием"}
      </Text>
    </View>
  );
};

export default About;
