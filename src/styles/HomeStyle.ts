import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  searchInput: {
    paddingVertical: 3,
    paddingHorizontal: 7,
    fontSize: 20,
    borderColor: "#03d3fc",
    borderWidth: 2,
    borderStyle: "solid",
    margin: 15,
    borderRadius: 8,
  },
  termButton: {
    paddingTop: 8,
    borderBottomColor: "#029999",
    borderBottomWidth: 1,
  },
  termText: {
    fontSize: 20,
    paddingLeft: 15,
    paddingBottom: 8,
  },
  termTitle: {
    fontSize: 24,
    textAlign: "center",
    textTransform: "uppercase",
    marginVertical: 10,
  },
  noTermText: {
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
  },
});
