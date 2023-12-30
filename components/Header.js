import { View, Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Foundation, Ionicons } from "@expo/vector-icons";

const Header = ({ title, callEnabled }) => {
  console.log("Header",title, callEnabled);
  const navigation = useNavigation();
  return (
    <View style={tw.style("p-2 flex-row items-center justify-between")}>
      <View style={tw.style("flex flex-row items-center")}>
        <TouchableOpacity
          style={tw.style("p-2")}
          onPress={() => navigation.goBack()}
        >
          {/* <Ionicons name="chevron-black-outline" size={34} color="#FF5864" /> */}
          <Ionicons name="chevron-back" size={34} color="#FF5864" />
        </TouchableOpacity>
        <Text style={tw.style("text-2xl font-bold pl-2")}>{title}</Text>
      </View>
      {callEnabled && (
        <TouchableOpacity style={tw.style("rounded-full mr-4 p-3 bg-red-200")}>
          <Foundation name="telephone" size={20} color="red" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
