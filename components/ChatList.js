import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { FlatList } from "react-native-gesture-handler";
import CharRow from "./CharRow";
import tw from "tailwind-react-native-classnames";

const ChatList = () => {
  const [Matches, setMatches] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "matches"),
        where("usersMatched", "array-contains", user.uid)
      ),
      (snapShot) =>
        setMatches(
          snapShot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
    );
    return unsubscribe;
  }, [user]);
  return Matches.length > 0 ? (
    <FlatList
      style={tw.style("h-full")}
      data={Matches}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CharRow matchDetails={item} />}
    />
  ) : (
    <View style={tw.style("p-5")}>
      <Text style={tw.style("text-center text-lg")}>
        No matches at this moment
      </Text>
    </View>
  );
};

export default ChatList;
