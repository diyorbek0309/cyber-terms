import { Text, TouchableOpacity, View, TextInput } from "react-native";
import { styles } from "../styles/HomeStyle";

const data = [
  { id: 0, term: "autentifikatsiya" },
  { id: 1, term: "identifikatsiya" },
  { id: 2, term: "avtorizatsiya" },
];

const Home = ({ navigation }) => {
  const { searchInput, termButton, termText } = styles;

  return (
    <View>
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
    </View>
  );
};

export default Home;
