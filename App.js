import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import AuthStack from "./src/Navigations/AuthStack";
import TabNavigation from "./src/Navigations/TabNavigation";
import { store } from "./src/Redux/store";

export default function App() {
  const [user] = useState(true);
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          {user ? <TabNavigation /> : <AuthStack />}
          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}
