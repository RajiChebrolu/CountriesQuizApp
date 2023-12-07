import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";

function AppTextInput({icon, autoCompleteType, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput 
        autoCompleteType={autoCompleteType} 
        style={defaultStyles.text} 
        {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
    
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 15,
    flexDirection: "row",
    width: "100%",
    height: 50,
    padding: 15,
    marginVertical: 10,    
    alignItems: "center",
    
  },
  icon: {
    marginRight: 10,
  },

  
});

export default AppTextInput;
