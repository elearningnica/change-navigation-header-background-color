import React from "react";
import { StyleSheet, Text, View } from "react-native";

const StudentProfileUI = () => {
  return (
    <View style={styles.container}>
      <Text>StudentProfileUI</Text>
    </View>
  );
};

export default StudentProfileUI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
