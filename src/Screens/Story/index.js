import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";

import styles from "./style";
import DirectIcon from "../../Components/Icons/DirectIcon";

const Story = ({ route, navigation }) => {
  const { story } = route.params;
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [storyProgress, setStoryProgress] = useState([]);
  const [storyTimer, setStoryTimer] = useState(null);

  useEffect(() => {
    startStoryTimer();

    return () => {
      clearInterval(storyTimer);
    };
  }, [currentStoryIndex]);

  useEffect(() => {
    const currentStory = story.stories[currentStoryIndex];
    const duration = currentStory.duration || 3; // Hikaye süresi varsayılan olarak 3 saniye

    if (storyProgress[currentStoryIndex] >= 1) {
      clearInterval(storyTimer);
      moveToNextStory();
    }
  }, [storyProgress]);

  const startStoryTimer = () => {
    clearInterval(storyTimer);

    const currentStory = story.stories[currentStoryIndex];
    const duration = currentStory.duration || 3; // Hikaye süresi varsayılan olarak 3 saniye

    const initialProgress = storyProgress[currentStoryIndex] || 0;

    const timer = setInterval(() => {
      setStoryProgress((prevProgress) => {
        const updatedProgress = [...prevProgress];
        updatedProgress[currentStoryIndex] =
          prevProgress[currentStoryIndex] + 0.01;
        return updatedProgress;
      });
    }, (duration * 1000) / 100);

    setStoryTimer(timer);
  };

  const moveToNextStory = () => {
    if (currentStoryIndex < story.stories.length - 1) {
      setCurrentStoryIndex((prevIndex) => prevIndex + 1);
    } else {
      navigation.goBack();
    }
  };

  const handleFinish = () => {
    clearInterval(storyTimer);
    navigation.goBack();
  };

  const currentStory = story.stories[currentStoryIndex];

  return (
    <View style={styles.container}>
      <Image style={styles.storyImage} source={{ uri: currentStory }} />
      <View style={styles.header}>
        <View style={styles.topBar}>
          {story.stories.map((story, index) => (
            <View
              style={{
                width: `${storyProgress[index] || 0}%`,
                borderBottomColor: "white",
                borderBottomWidth: 1,
              }}
            ></View>
          ))}
        </View>
        <View style={styles.headerRow}>
          <Image style={styles.userImage} source={{ uri: story.userImage }} />
          <TouchableOpacity
            style={styles.username}
            onPress={() =>
              navigation.navigate("UserProfile", { username: story.username })
            }
          >
            <Text style={styles.usernameText}>{story.username}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="close" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomBar}>
        <View style={styles.bottomBarInputView}>
          <AntDesign name="camera" size={24} color="white" />
          <TextInput
            style={styles.bottomBarInput}
            placeholder="Send Message"
            placeholderTextColor={"white"}
          />
        </View>
        <View style={styles.bottomBarButtonView}>
          <TouchableOpacity style={styles.bottomBarButton}>
            <DirectIcon color={"white"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomBarButton}>
            <Feather name="more-horizontal" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Story;
