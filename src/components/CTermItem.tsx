import { View, ScrollView, Text } from "react-native";
import { styles } from "../styles/HomeStyle";
import { data } from "../data";

const CTermItem = ({ route }) => {
  const { termID } = route.params;
  const { termTitle, termText } = styles;

  return (
    <ScrollView>
      <Text style={termTitle}>{data[termID].term}</Text>
      <Text style={termText}>{data[termID].description}</Text>
    </ScrollView>
  );
};

export default CTermItem;
