import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "../Theme/colors";
import Home from "../Screens/Home";
import Add from "../Screens/Add";
import ProfileStack from "../Navigations/ProfileStack";
import Likes from "../Screens/Likes";
import HomeIcon from "../Components/Icons/HomeIcon";
import AddIcon from "../Components/Icons/AddIcon";
import ExploreIcon from "../Components/Icons/ExploreIcon";
import LikesIcon from "../Components/Icons/LikesIcon";
import ExploreStack from "./ExploreStack";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.background },
        tabBarShowLabel: false,
        tabBarActiveTintColor: "black",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => <HomeIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="ExploreStack"
        component={ExploreStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <ExploreIcon color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({ focused, color, size }) => <AddIcon color={color} />,
        }}
      />
      <Tab.Screen
        name="Likes"
        component={Likes}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <LikesIcon color={color} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
