import { View, type ViewProps } from "react-native";

export interface ButtonGroupProps extends ViewProps {
  children: React.ReactNode;
  direction?: "row" | "column";
  className?: string;
  gap?: number;
}

const directionClasses = {
  row: "flex-row",
  column: "flex-col",
} as const;

const gapClasses = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
} as const;

export function ButtonGroup({
  children,
  direction = "row",
  className = "",
  gap = 3,
  ...props
}: ButtonGroupProps) {
  return (
    <View
      {...props}
      className={`${directionClasses[direction]} ${
        gapClasses[gap as keyof typeof gapClasses] ?? "gap-3"
      } ${className}`}
    >
      {children}
    </View>
  );
}
