import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useLayoutEffect } from "react";

import Home from "../Screens/Home";
import PostDetails from "../Screens/PostDetails";
import PostList from "../Screens/PostList";
import Story from "../Screens/Story";
import UserProfile from "../Screens/UserProfile";
import { colors } from "../Theme/colors";
import Direct from "../Screens/Direct";

const Stack = createNativeStackNavigator();

const HomeStack = ({ navigation, route }) => {
  useLayoutEffect(() => {
    if (
      ["PostDetails", "Story", "Direct"].includes(
        getFocusedRouteNameFromRoute(route)
      )
    ) {
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
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PostDetails"
        component={PostDetails}
        options={{ title: "Explore" }}
      />
      <Stack.Screen name="UserProfile" component={UserProfile} />
      <Stack.Screen
        name="PostList"
        component={PostList}
        options={{ title: "Posts" }}
      />
      <Stack.Screen
        name="Story"
        component={Story}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Direct"
        component={Direct}
        options={{
          animationTypeForReplace: "push", // ekran değiştirirken kayma animasyonu
          animation: "slide_from_right", // ekran geçiş animasyonu }}
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
