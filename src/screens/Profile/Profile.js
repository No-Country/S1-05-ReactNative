import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons/";
import ProfileTab from "../../components/ProfileTab/ProfileTab";

const Profile = () => {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.avatarContainer}>
        <MaterialCommunityIcons
          color="#4D6CFE"
          name="account-circle"
          size={100}
        />
        <Text style={styles.avatarName}>Juan Perez</Text>
      </View>
      <View style={styles.avatarMenu}>
        <TouchableOpacity style={styles.profileTab1}>
          <MaterialCommunityIcons
            style={styles.icon}
            color="#34AA44"
            name="check"
            size={20}
          />
          <View style={styles.emailText}>
            <Text>Email</Text>
            <Text style={styles.email}>juan.perez@gmail.com</Text>
          </View>
        </TouchableOpacity>
        <ProfileTab
          text={"Change Password"}
          icon={"form-textbox-password"}
          color={"#23286B"}
        />
        <ProfileTab text={"Log Out"} icon={"logout"} color={"#23286B"} />
      </View>
    </View>
  );
};

export default Profile;
