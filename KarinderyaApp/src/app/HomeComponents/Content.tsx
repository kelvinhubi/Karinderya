import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Carousel } from "../Components";

type Ulam = {
  id: string;
  name: string;
  description: string;
  price: number;
  emoji: string;
};

const featuredUlam: readonly Ulam[] = [
  {
    id: "adobo",
    name: "Chicken Adobo",
    description: "Classic soy and vinegar braised chicken",
    price: 85,
    emoji: "🍗",
  },
  {
    id: "sinigang",
    name: "Pork Sinigang",
    description: "Tamarind broth with fresh vegetables",
    price: 95,
    emoji: "🍲",
  },
  {
    id: "tortang-talong",
    name: "Tortang Talong",
    description: "Grilled eggplant omelet with tomato",
    price: 65,
    emoji: "🍳",
  },
  {
    id: "adobo2",
    name: "Chicken Adobo",
    description: "Classic soy and vinegar braised chicken",
    price: 85,
    emoji: "🍗",
  },
  {
    id: "sinigang2",
    name: "Pork Sinigang",
    description: "Tamarind broth with fresh vegetables",
    price: 95,
    emoji: "🍲",
  },
  {
    id: "tortang-talong2",
    name: "Tortang Talong",
    description: "Grilled eggplant omelet with tomato",
    price: 65,
    emoji: "🍳",
  },
  {
    id: "adobo3",
    name: "Chicken Adobo",
    description: "Classic soy and vinegar braised chicken",
    price: 85,
    emoji: "🍗",
  },
  {
    id: "sinigang3",
    name: "Pork Sinigang",
    description: "Tamarind broth with fresh vegetables",
    price: 95,
    emoji: "🍲",
  },
  {
    id: "tortang-talong3",
    name: "Tortang Talong",
    description: "Grilled eggplant omelet with tomato",
    price: 65,
    emoji: "🍳",
  },
];

export const HomeContent = () => {
  return (
    <SafeAreaView className="flex-1 bg-background px-4 pt-6">
      <Text className="mb-1 text-2xl font-bold text-primaryText">
        Featured ulams
      </Text>
      <Text className="mb-5 text-base text-secondaryText">
        Swipe to see what is available today.
      </Text>

      <Carousel<Ulam>
        data={featuredUlam}
        keyExtractor={(item) => item.id}
        gap={4}
        showIndicators
        showNavigation
        autoPlayInterval={4000}
        itemClassName="w-72"
        renderItem={({ item }) => (
          <View className="rounded-3xl bg-surface p-5">
            <View className="mb-5 h-32 items-center justify-center rounded-2xl bg-background">
              <Text className="text-6xl">{item.emoji}</Text>
            </View>
            <Text className="text-xl font-bold text-primaryText">
              {item.name}
            </Text>
            <Text className="mt-2 min-h-12 text-sm leading-5 text-secondaryText">
              {item.description}
            </Text>
            <Text className="mt-4 text-lg font-bold text-accent">
              ₱{item.price}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default HomeContent;
