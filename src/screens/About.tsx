import { Text, View } from "react-native";
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
    </View>
  );
};

export default About;
