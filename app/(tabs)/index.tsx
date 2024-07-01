import { Link } from "expo-router";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

export default function HomeScreen() {
  const [text, setText] = useState<string>();
  const [inputActive, setInputActive] = useState<boolean>(false);
  return (
    <View>
      <Text>hello </Text>
    </View>
  );
}
