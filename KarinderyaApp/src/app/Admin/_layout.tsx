import { Tabs } from "expo-router";

const AdminLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="dashboard" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="foodMenu" options={{ title: "Menu" }} />
    </Tabs>
  );
};

export default AdminLayout;
