import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import icons from "../../constants/icons";
import "../../global.css";

type TabIconsProps = {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
};

const TabIcon = ({ icon, color, name, focused }: TabIconsProps) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="h-5 w-5"
        style={{ width: 20, height: 20 }}
      />
      <Text
        className={`${focused ? "font-semibold" : "font-regular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarActiveTintColor: "#ffa001",
        tabBarInactiveTintColor: "#cdcde0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          paddingTop: 5,
        },
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          // title: "Home",

          tabBarIcon: ({ color, focused }) => (
            // <IconSymbol size={28} name="house.fill" color={color} />
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          // title: "Bookmark",
          tabBarIcon: ({ color, focused }) => (
            // <IconSymbol size={28} name="paperplane.fill" color={color} />
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Saved"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          // title: "Create",
          tabBarIcon: ({ color, focused }) => (
            // <IconSymbol size={28} name="paperplane.fill" color={color} />
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Create"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          // title: "Create",
          tabBarIcon: ({ color, focused }) => (
            // <IconSymbol size={28} name="paperplane.fill" color={color} />
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
