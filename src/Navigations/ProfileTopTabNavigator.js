import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Posts from "../Components/Profile/Posts";
import GridIcon from "../Components/Icons/GridIcon";
import TagsUserIcon from "../Components/Icons/TagsUserIcon";

const Tab = createMaterialTopTabNavigator();

const ProfileTopTabNavigator = ({ posts }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Posts"
        children={() => <Posts posts={posts} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <GridIcon color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Posts}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TagsUserIcon color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default ProfileTopTabNavigator;
