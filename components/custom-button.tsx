import React from "react";
import { Text, TouchableOpacity } from "react-native";

type CustomButtonProps = {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
  handlepress: () => void;
};

const CustomButton = ({
  title,
  handlepress,
  containerStyles,
  textStyles,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlepress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center mt-8 ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
