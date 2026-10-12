import { Tabs } from "expo-router";

const CustomerLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="customer" options={{ title: "Customer Page" }} />
    </Tabs>
  );
};

export default CustomerLayout;
