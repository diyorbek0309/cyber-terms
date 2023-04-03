import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  TextInput,
} from "react-native";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../services/ThemeContext";
import { uz, en, ru } from "../data";
import { styles } from "../styles/HomeStyle";
import { eColors } from "../types/enum";

const Home = ({ navigation }) => {
  const { isLight, language } = useContext(ThemeContext);
  const data = language === "uz" ? uz : language === "en" ? en : ru;
  const [search, setSearch] = useState("");
  const { searchInput, termButton, termText, noTermText } = styles;
  const [termsList, setTermsList] = useState(uz);

  useEffect(() => {
    const languageResources = { uz, en, ru };
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
    <View
      style={{
        backgroundColor: isLight ? eColors.LIGHT : eColors.DARK,
        flex: 1,
      }}
    >
      <TextInput
        placeholder={
          language === "uz"
            ? "Qidirish"
            : language === "en"
            ? "Search"
            : "Поиск"
        }
        style={[
          {
            backgroundColor: isLight ? "#fff" : eColors.DARK,
            color: isLight ? eColors.DARK : eColors.LIGHT,
          },
          searchInput,
        ]}
        value={search}
        onChangeText={(search) => searchInputHandler(search)}
        placeholderTextColor={isLight ? "#aaa" : eColors.LIGHT}
      />
      <ScrollView>
        {termsList && termsList.length ? (
          termsList.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                { backgroundColor: isLight ? eColors.LIGHT : eColors.DARK },
                termButton,
              ]}
              onPress={() => {
                navigation.navigate("Termin", { termID: item.id });
              }}
            >
              <Text
                style={[
                  { color: isLight ? eColors.DARK : eColors.WHITE },
                  termText,
                ]}
              >
                {item.term}
              </Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text
            style={[
              { color: isLight ? eColors.DARK : eColors.LIGHT },
              noTermText,
            ]}
          >
            {language === "uz" ? "Termin topilmadi!" : "Terms are not found!"}
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
