import { View, type ViewProps } from "react-native";

export interface CardProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
}

export function Card({
  children,
  className = "",
  elevated = true,
  ...props
}: CardProps) {
  return (
    <View
      {...props}
      className={`rounded-2xl bg-surface p-4 ${
        elevated ? "shadow-sm shadow-black/10" : ""
      } ${className}`}
    >
      {children}
    </View>
  );
}
