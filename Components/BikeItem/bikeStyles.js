import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bikeContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },

  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },

  bikeName: {
    fontSize: 18,
  },

  title: {
    fontSize: 35,
    fontWeight: "500",
  },

  subTitle: {
    fontSize: 16,
    color: "#5c5e62",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",

  },
  buttonWrapper: {
    position: "absolute",
    width: "100%",
    bottom: 60,
  },
});

export default styles;