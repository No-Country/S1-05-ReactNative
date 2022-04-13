import { Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons/";

// eslint-disable-next-line react/prop-types
const ProfileTab = ({ text, icon, color }) => {
  return (
    <TouchableOpacity style={styles.profileTab}>
      <MaterialCommunityIcons
        style={styles.icon}
        color={color}
        name={icon}
        size={20}
      />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default ProfileTab;
