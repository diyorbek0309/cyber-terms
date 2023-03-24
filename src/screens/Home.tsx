import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  TextInput,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../services/ThemeContext";
import { uz, en } from "../data";
import { styles } from "../styles/HomeStyle";

const Home = ({ navigation }) => {
  const { isLight, language } = useContext(ThemeContext);
  const data = language === "uz" ? uz : en;
  const [search, setSearch] = useState("");
  const { searchInput, termButton, termText, noTermText } = styles;
  const [termsList, setTermsList] = useState(uz);

  useEffect(() => {
    const languageResources = { uz, en };
    setTermsList(languageResources[language]);
  }, [language]);

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
        {termsList && termsList.length ? (
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
          <Text style={noTermText}>
            {language === "uz" ? "Termin topilmadi!" : "Terms are not found!"}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default Home;
