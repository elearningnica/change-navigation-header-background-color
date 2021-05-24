import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import StudentsUI from "./StudentsUI";
import StudentProfileUI from "./StudentProfileUI";

const Navigation = createStackNavigator({
  Students: {
    screen: StudentsUI,
    navigationOptions: {
      headerTitle: "Students",
      headerStyle: {
        backgroundColor: "#F9FF33",
      },
      headerTintColor: "black",
    },
  },
  Profile: {
    screen: StudentProfileUI,
    navigationOptions: {
      headerTitle: "Profile",
      headerStyle: {
        backgroundColor: "#F9FF33",
      },
      headerTintColor: "black",
    },
  },
});

export default createAppContainer(Navigation);
