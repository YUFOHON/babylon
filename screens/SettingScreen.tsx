import React from "react";
import { View, Text, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const SettingPage: React.FC = () => {
  return (
    <View style={{ backgroundColor: "#F3F4F6", flex: 1 }}>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom: 16 }}>Settings</Text>
        <SearchBar/>
        <View style={{ height: 16 }} />
        <View style={{ backgroundColor: "#FFFFFF", borderRadius: 8, shadowColor: "#000000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 4, marginBottom: 16 }}>
          <SettingItem title="Mia Khalifa" subtitle="UserID, Profile Settings" iconName="user" />
          <SettingItem title="Language" iconName="language" />
          <SettingItem title="Personalization" iconName="palette" />
          <SettingItem title="Billing" iconName="credit-card" />
          <SettingItem title="News & Updates" iconName="newspaper" />
          <SettingItem title="Privacy" iconName="lock" />
          <SettingItem title="Notifications" iconName="bell" />
          <SettingItem title="Security" iconName="shield-alt" />
          <SettingItem title="About" iconName="info-circle" />
          <SettingItem title="Help & Support" iconName="question-circle" />
        </View>
      </View>
    </View>
  );
};

const SearchBar: React.FC = () => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", borderBottomWidth: 3, borderRightWidth: 3,borderBottomColor: "#E5E7EB", borderRightColor: "#E5E7EB",borderRadius:8, paddingVertical: 12, paddingHorizontal: 16 }}>
      <FontAwesome5 name="search" size={16} color="#9CA3AF" style={{ marginRight: 8 }} />
      <TextInput style={{ flex: 1, fontSize: 16, color: "#111827" }} placeholder="Search" placeholderTextColor="#9CA3AF" />
    </View>
  );
};

interface SettingItemProps {
  title: string;
  subtitle?: string;
  iconName: string;
}

const SettingItem: React.FC<SettingItemProps> = ({ title, subtitle, iconName }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: "#E5E7EB", paddingVertical: 12, paddingHorizontal: 16 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{width:50, alignItems: "center" }}>
            <FontAwesome5 name={iconName} size={20} color="#4B5563" style={{ marginRight: 15 }} />
        </View>
        <View>
          <Text style={{ fontSize: 16, color: "#111827", textAlign:'left'}}>{title}</Text>
          {subtitle && <Text style={{ fontSize: 14, color: "#6B7280", marginTop: 2 , textAlign:'left' }}>{subtitle}</Text>}
        </View>
      </View>
      <FontAwesome5 name="angle-right" size={20} color="#9CA3AF" />
    </View>
  );
};

export default SettingPage;