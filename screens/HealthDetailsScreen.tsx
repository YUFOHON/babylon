import React from "react";
import { View, Text, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const HealthDetailsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          backgroundColor: "#f5f5f5",
          padding: 16,
        }}
      >
        <Text style={{ color: "#007aff" }}>
          <FontAwesome5 name="chevron-left" size={16} /> Settings
        </Text>
      </View>
      <View style={{ flex: 1, padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
          User Attributes
        </Text>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
            First Name
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 4,
              padding: 8,
              marginBottom: 16,
            }}
            placeholder="Enter first name"
          />
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
            Last Name
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 4,
              padding: 8,
              marginBottom: 16,
            }}
            placeholder="Enter last name"
          />
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 8 }}>
            Date of Birth
          </Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 4,
              padding: 8,
            }}
            placeholder="Select date"
          />
        </View>
      </View>
    </View>
  );
};

export default HealthDetailsScreen;