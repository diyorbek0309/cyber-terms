import { View, ScrollView, Text } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../services/ThemeContext";
import { styles } from "../styles/HomeStyle";
import { uz, en, ru } from "../data";
import { eColors } from "../types/enum";

const CTermItem = ({ route }) => {
  const { termID } = route.params;
  const { termTitle, termText } = styles;
  const { isLight, language } = useContext(ThemeContext);

  const data = language === "uz" ? uz : language === "en" ? en : ru;

  return (
    <ScrollView
      style={{ backgroundColor: isLight ? eColors.LIGHT : eColors.DARK }}
    >
      <Text
        style={[{ color: isLight ? eColors.DARK : eColors.LIGHT }, termTitle]}
      >
        {data[termID].term}
      </Text>
      <Text
        style={[{ color: isLight ? eColors.DARK : eColors.LIGHT }, termText]}
      >
        {data[termID].description}
      </Text>
    </ScrollView>
  );
};

export default CTermItem;
