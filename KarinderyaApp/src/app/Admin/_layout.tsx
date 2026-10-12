import { Tabs } from "expo-router";

const AdminLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="admin" options={{ title: "Admin Page" }} />
    </Tabs>
  );
};

export default AdminLayout;
