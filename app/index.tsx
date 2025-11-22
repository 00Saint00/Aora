import CustomButton from "@/components/custom-button";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";

const Welcome = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[85vh] px-4 items-center justify-center">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[130px] h-[130px]"
          />
          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w-[300px] w-full h-[300px]"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[130px] h-[15px] absolute -bottom-2 -right-[5px]
             "
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue to Email"
            handlepress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />

          {/* <ThemedText
            className="text-pblack"
            style={{ fontSize: 40 }}
            type="title"
          >
            Aora!
          </ThemedText> */}
          <StatusBar backgroundColor="#161622" style="light" />
          {/* <Link href="/home" style={{ color: "blue" }}>
            {" "}
            Go to Home
          </Link> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
