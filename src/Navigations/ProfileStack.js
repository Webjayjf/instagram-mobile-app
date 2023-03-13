import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";

import Profile from "../Screens/Profile";
import PostDetails from "../Screens/PostDetails";
import { colors } from "../Theme/colors";
import PostList from "../Screens/PostList";

const Stack = createNativeStackNavigator();

const ExploreStack = ({ navigation, route }) => {
  useLayoutEffect(() => {
    if (getFocusedRouteNameFromRoute(route) == "PostDetails") {
      navigation.setOptions({
        tabBarStyle: {
          display: "none",
        },
      });
    } else {
      navigation.setOptions({
        tabBarStyle: { display: "flex", backgroundColor: colors.background },
      });
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostList"
        component={PostList}
        options={{ title: "Posts" }}
      />
    </Stack.Navigator>
  );
};

export default ExploreStack;
