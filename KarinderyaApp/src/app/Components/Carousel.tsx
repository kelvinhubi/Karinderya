import { useCallback, useEffect, useRef, useState } from "react";
import {
  FlatList,
  Pressable,
  Text,
  View,
  type FlatListProps,
  type ListRenderItem,
} from "react-native";

export interface CarouselProps<ItemT>
  extends Omit<
    FlatListProps<ItemT>,
    "data" | "renderItem" | "horizontal" | "showsHorizontalScrollIndicator"
  > {
  data: readonly ItemT[];
  renderItem: ListRenderItem<ItemT>;
  className?: string;
  itemClassName?: string;
  showIndicators?: boolean;
  showNavigation?: boolean;
  autoPlayInterval?: number;
  loop?: boolean;
  gap?: number;
}

const gapClasses = {
  0: "mr-0",
  1: "mr-1",
  2: "mr-2",
  3: "mr-3",
  4: "mr-4",
  5: "mr-5",
  6: "mr-6",
  8: "mr-8",
} as const;

export function Carousel<ItemT>({
  data,
  renderItem,
  className = "",
  itemClassName = "",
  showIndicators = false,
  showNavigation = true,
  autoPlayInterval = 0,
  loop = true,
  gap = 4,
  ...props
}: CarouselProps<ItemT>) {
  const flatListRef = useRef<FlatList<ItemT>>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultipleItems = data.length > 1;

  const goToIndex = useCallback((index: number) => {
    if (!hasMultipleItems) {
      return;
    }

    const nextIndex = loop
      ? (index + data.length) % data.length
      : Math.max(0, Math.min(index, data.length - 1));

    setActiveIndex(nextIndex);
    flatListRef.current?.scrollToIndex({
      index: nextIndex,
      animated: true,
    });
  }, [data.length, hasMultipleItems, loop]);

  useEffect(() => {
    if (!hasMultipleItems || autoPlayInterval <= 0) {
      return;
    }

    const timer = setInterval(() => {
      goToIndex(activeIndex + 1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [activeIndex, autoPlayInterval, goToIndex, hasMultipleItems]);

  return (
    <View className={className}>
      {showNavigation && hasMultipleItems ? (
        <View className="mb-3 flex-row justify-end gap-2">
          <Pressable
            accessibilityLabel="Previous carousel item"
            accessibilityRole="button"
            className="h-10 w-10 items-center justify-center rounded-full bg-surface active:opacity-70"
            onPress={() => goToIndex(activeIndex - 1)}
          >
            <Text className="text-xl font-bold text-accent">‹</Text>
          </Pressable>
          <Pressable
            accessibilityLabel="Next carousel item"
            accessibilityRole="button"
            className="h-10 w-10 items-center justify-center rounded-full bg-accent active:opacity-70"
            onPress={() => goToIndex(activeIndex + 1)}
          >
            <Text className="text-xl font-bold text-white">›</Text>
          </Pressable>
        </View>
      ) : null}
      <FlatList
        {...props}
        ref={flatListRef}
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={props.keyExtractor}
        onViewableItemsChanged={({ viewableItems }) => {
          const index = viewableItems[0]?.index;
          if (index !== null && index !== undefined) {
            setActiveIndex(index);
          }
        }}
        viewabilityConfig={{ itemVisiblePercentThreshold: 60 }}
        renderItem={(info) => (
          <View
            className={`${gapClasses[gap as keyof typeof gapClasses] ?? "mr-4"} ${itemClassName}`}
          >
            {renderItem(info)}
          </View>
        )}
      />
      {showIndicators ? (
        <View className="mt-3 flex-row justify-center gap-1.5">
          {data.map((item, index) => (
            <View
              key={props.keyExtractor?.(item, index) ?? String(index)}
              className={`h-1.5 w-1.5 rounded-full ${
                index === activeIndex ? "bg-accent" : "bg-secondaryText"
              }`}
            />
          ))}
        </View>
      ) : null}
    </View>
  );
}
