import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import React, { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import * as MediaLibrary from "expo-media-library";
import * as ImagePicker from "expo-image-picker";

import styles from "./style";

const Add = ({ navigation }) => {
  // hide tabBar
  navigation.setOptions({
    tabBarStyle: { display: "none" },
  });

  const [hasGalleryPermission, setHasGalleryPermission] = React.useState(null);
  const [userGalleryMedia, setUserGalleryMedia] = React.useState(null);

  const [selectedImage, setSelectedImage] = React.useState(null);

  useEffect(() => {
    (async () => {
      try {
        const galleryStatus =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        setHasGalleryPermission(galleryStatus.status === "granted");
        if (galleryStatus.status == "granted") {
          const response = await MediaLibrary.getAssetsAsync({
            mediaType: "photo",
            sortType: "newest",
          });
          setUserGalleryMedia(response.assets);
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  useEffect(() => {
    if (userGalleryMedia) {
      setSelectedImage(userGalleryMedia[0]);
    }
  }, [userGalleryMedia]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("Home")}
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>New Post</Text>
        <TouchableOpacity style={styles.nextButton}>
          <AntDesign name="arrowright" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {selectedImage && (
          <FlatList
            style={styles.mediaList}
            data={userGalleryMedia}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  opacity: item == selectedImage ? 0.5 : 1,
                }}
                onPress={() => {
                  setSelectedImage(item);
                }}
              >
                <Image style={styles.image} source={{ uri: item.uri }} />
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index}
            numColumns={3}
            ListHeaderComponent={() => (
              <Image
                style={styles.bigImage}
                source={{
                  uri: selectedImage.uri,
                }}
              />
            )}
            removeClippedSubviews
            maxToRenderPerBatch={3}
            initialNumToRender={3}
            windowSize={3}
          />
        )}
        {/* */}
      </View>
    </View>
  );
};

export default Add;
