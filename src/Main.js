import { useSelector } from "react-redux";

import Loading from "./Components/Loading";
import FocusPost from "./Components/Profile/FocusPost";
import AuthStack from "./Navigations/AuthStack";
import TabNavigation from "./Navigations/TabNavigation";

export default function App() {
  const { user, isLoading } = useSelector((state) => state.auth);
  const profileFocusPost = useSelector((state) => state.profile).focusPost;
  const exploreFocusPost = useSelector((state) => state.explore).focusPost;

  return (
    <>
      {user ? <TabNavigation /> : <AuthStack />}
      {isLoading && <Loading />}
      {exploreFocusPost && <FocusPost post={exploreFocusPost} />}
      {profileFocusPost && <FocusPost post={profileFocusPost} />}
    </>
  );
}
