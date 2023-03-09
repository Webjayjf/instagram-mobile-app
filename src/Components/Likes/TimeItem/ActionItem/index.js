import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./style";
import { Button } from "react-native";

const ActionItem = ({ data }) => {
  switch (data.type) {
    case "liked":
      return (
        <TouchableOpacity style={styles.timeItemBodyItem}>
          <View style={styles.timeItemBodyItemUserImageView}>
            <Image
              style={styles.timeItemBodyItemUserImage}
              source={{
                uri: data.userImage,
              }}
            />
          </View>
          <View style={styles.timeItemBodyItemBody}>
            <Text style={styles.timeItemBodyItemBodyText}>
              <Text style={{ fontWeight: "bold" }}>{data.username + " "}</Text>
              liked your photo.
            </Text>
            <Text style={styles.timeItemBodyItemBodyDate}>{data.time}</Text>
          </View>
          <View style={styles.timeItemBodyItemBodyPost}>
            <Image
              style={styles.timeItemBodyItemBodyPostImage}
              source={{
                uri: data.postImage,
              }}
            />
          </View>
        </TouchableOpacity>
      );
    case "commented":
      return (
        <TouchableOpacity style={styles.timeItemBodyItem}>
          <View style={styles.timeItemBodyItemUserImageView}>
            <Image
              style={styles.timeItemBodyItemUserImage}
              source={{
                uri: data.userImage,
              }}
            />
          </View>
          <View style={styles.timeItemBodyItemBody}>
            <Text style={styles.timeItemBodyItemBodyText}>
              <Text style={{ fontWeight: "bold" }}>{data.username + " "}</Text>
              commented your photo:{" "}
              {` ` + data.comment.length > 20
                ? data.comment.slice(0, 10) + `...`
                : data.comment}
            </Text>
            <Text style={styles.timeItemBodyItemBodyDate}>{data.time}</Text>
          </View>
          <View style={styles.timeItemBodyItemBodyPost}>
            <Image
              style={styles.timeItemBodyItemBodyPostImage}
              source={{
                uri: data.postImage,
              }}
            />
          </View>
        </TouchableOpacity>
      );
    case "mentioned":
      return (
        <TouchableOpacity style={styles.timeItemBodyItem}>
          <View style={styles.timeItemBodyItemUserImageView}>
            <Image
              style={styles.timeItemBodyItemUserImage}
              source={{
                uri: data.userImage,
              }}
            />
          </View>
          <View style={styles.timeItemBodyItemBody}>
            <Text style={styles.timeItemBodyItemBodyText}>
              <Text style={{ fontWeight: "bold" }}>{data.username + " "}</Text>
              mentioned you in a comment:
              {" " + data.comment.length > 20
                ? data.comment.slice(0, 20) + `...`
                : data.comment}
            </Text>
            <Text style={styles.timeItemBodyItemBodyDate}>{data.time}</Text>
          </View>
          <View style={styles.timeItemBodyItemBodyPost}>
            <Image
              style={styles.timeItemBodyItemBodyPostImage}
              source={{
                uri: data.postImage,
              }}
            />
          </View>
        </TouchableOpacity>
      );
    case "requestedToFollow":
      return (
        <TouchableOpacity style={styles.timeItemBodyItem}>
          <View style={styles.timeItemBodyItemUserImageView}>
            <Image
              style={styles.timeItemBodyItemUserImage}
              source={{
                uri: data.userImage,
              }}
            />
          </View>
          <View style={styles.timeItemBodyItemBody}>
            <Text style={styles.timeItemBodyItemBodyText}>
              <Text style={{ fontWeight: "bold" }}>{data.username + " "}</Text>
              wants to follow you.
            </Text>
            <Text style={styles.timeItemBodyItemBodyDate}>{data.time}</Text>
          </View>
          <View style={styles.timeItemBodyItemBodyPost}>
            <TouchableOpacity style={styles.timeItemBodyItemBodyAccept}>
              <Text style={styles.timeItemBodyItemBodyAcceptText}>Accept</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.timeItemBodyItemBodyReject}>
              <Text style={styles.timeItemBodyItemBodyRejectText}>Reject</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      );
    default:
      break;
  }
  return (
    <View style={styles.timeItemBodyItem}>
      <View style={styles.timeItemBodyItemUserImageView}>
        <Image
          style={styles.timeItemBodyItemUserImage}
          source={{
            uri: data.userImage,
          }}
        />
      </View>
      <View style={styles.timeItemBodyItemBody}>
        {data.type === "like" && (
          <Text style={styles.timeItemBodyItemBodyText}>
            <Text style={{ fontWeight: "bold" }}>{data.username + " "}</Text>
            liked your photo.
          </Text>
        )}
        {data.type === "comment" && (
          <Text style={styles.timeItemBodyItemBodyText}>
            <Text style={{ fontWeight: "bold" }}>{data.username + " "}</Text>
            commented your photo: {` "` + data.comment.slice(0, 10) + `..."`}
          </Text>
        )}
        <Text style={styles.timeItemBodyItemBodyDate}>{data.time}</Text>
      </View>
      <View style={styles.timeItemBodyItemBodyPost}>
        <Image
          style={styles.timeItemBodyItemBodyPostImage}
          source={{
            uri: data.postImage,
          }}
        />
      </View>
    </View>
  );
};

export default ActionItem;
