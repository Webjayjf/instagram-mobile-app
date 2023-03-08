import { useSelector } from "react-redux";

import Loading from "./Components/Loading";
import AuthStack from "./Navigations/AuthStack";
import TabNavigation from "./Navigations/TabNavigation";

export default function App() {
  const { user, isLoading } = useSelector((state) => state.auth);
  return (
    <>
      {user ? <TabNavigation /> : <AuthStack />}
      {isLoading && <Loading />}
    </>
  );
}
