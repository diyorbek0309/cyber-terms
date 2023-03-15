import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  TextInput,
} from "react-native";
import { data } from "../data";
import { styles } from "../styles/HomeStyle";

const Home = ({ navigation }) => {
  const { searchInput, termButton, termText } = styles;

  return (
    <ScrollView>
      <TextInput placeholder="Qidirish" style={searchInput} />
      <View>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={termButton}
            onPress={() => {
              navigation.navigate("Termin", { termID: item.id });
            }}
          >
            <Text style={termText}>{item.term}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;
