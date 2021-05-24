import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const StudentsUI = (props) => {
  return (
    <View style={styles.container}>
      <Text>Students UI</Text>
      <Button
        title="see your profile"
        onPress={() => {
          props.navigation.navigate({
            routeName: "Profile",
          });
        }}
      ></Button>
    </View>
  );
};

export default StudentsUI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
