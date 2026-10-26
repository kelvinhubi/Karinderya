import { Tabs } from "expo-router";

const AdminLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="dashboard"
        options={{ title: "Dashboard", headerShown: false }}
      />
      <Tabs.Screen
        name="foodMenu"
        options={{ title: "Menu", headerShown: false }}
      />
    </Tabs>
  );
};

export default AdminLayout;
