import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

import AuthStack from "./src/Navigations/AuthStack";
import { store } from "./src/Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}
