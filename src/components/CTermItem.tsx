import { View, ScrollView, Text } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../services/ThemeContext";
import { styles } from "../styles/HomeStyle";
import { uz, en } from "../data";

const CTermItem = ({ route }) => {
  const { termID } = route.params;
  const { termTitle, termText } = styles;
  const { isLight, language } = useContext(ThemeContext);

  const data = language === "uz" ? uz : en;

  return (
    <ScrollView>
      <Text style={termTitle}>{data[termID].term}</Text>
      <Text style={termText}>{data[termID].description}</Text>
    </ScrollView>
  );
};

export default CTermItem;
