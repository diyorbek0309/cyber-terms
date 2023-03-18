import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  TextInput,
} from "react-native";
import { useState } from "react";
import { data } from "../data";
import { styles } from "../styles/HomeStyle";

const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [termsList, setTermsList] = useState(data);
  const { searchInput, termButton, termText, noTermText } = styles;

  const searchInputHandler = (search: string) => {
    setSearch(search);

    if (search === "") {
      const sortedTerms = data.sort((a, b) => {
        return a.term.localeCompare(b.term);
      });

      setTermsList(sortedTerms);
    } else {
      const newTermsList = data.filter((item) =>
        item.term.includes(search.toLowerCase())
      );

      const sortedTerms = newTermsList.sort((a, b) => {
        const startsWithQuery = a.term
          .toLowerCase()
          .startsWith(search.toLowerCase())
          ? -1
          : 1;
        const nameComparison = a.term.localeCompare(b.term);
        return startsWithQuery || nameComparison;
      });

      setTermsList(sortedTerms);
    }
  };

  return (
    <ScrollView>
      <TextInput
        placeholder="Qidirish"
        style={searchInput}
        value={search}
        onChangeText={(search) => searchInputHandler(search)}
      />
      <View>
        {termsList.length ? (
          termsList.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={termButton}
              onPress={() => {
                navigation.navigate("Termin", { termID: item.id });
              }}
            >
              <Text style={termText}>{item.term}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={noTermText}>Termin topilmadi!</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
