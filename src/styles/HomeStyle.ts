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
  homeBtn: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 8,
  },
  homeBtns: {
    marginTop: 200,
    display: "flex",
    alignItems: "center",
  },
  homeBtnText: {
    fontSize: 24,
  },
  homeTitle: {
    fontSize: 60,
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 100,
  },
  aboutTitle: {
    fontSize: 24,
    textAlign: "center",
    marginVertical: 10,
  },
  darkBG: {
    backgroundColor: "#12355b",
  },
  lightText: {
    color: "#baf5f5",
  },
  created: {
    textAlign: "right",
    color: "#022a54",
  },
  author: {
    textAlign: "right",
    fontStyle: "italic",
    textDecorationLine: "underline",
    color: "#022a54",
  },
  authorWrap: {
    marginTop: 100,
    marginRight: 20,
  },
});
