import {
  ActivityIndicator,
  Pressable,
  Text,
  type PressableProps,
} from "react-native";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends Omit<
  PressableProps,
  "children" | "onPress" | "onHoverIn"
> {
  children: React.ReactNode;
  onPress?: PressableProps["onPress"];
  onHover?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  className?: string;
  textClassName?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-accent active:bg-accent",
  secondary: "bg-surface active:bg-surface",
  outline: "border border-accent bg-transparent active:bg-surface",
  ghost: "bg-transparent active:bg-surface",
  danger: "bg-accent active:bg-danger",
};

const textVariantClasses: Record<ButtonVariant, string> = {
  primary: "text-white",
  secondary: "text-primaryText",
  outline: "text-accent",
  ghost: "text-primaryText",
  danger: "text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 py-2",
  md: "min-h-11 px-4 py-3",
  lg: "min-h-14 px-6 py-4",
};

const textSizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export function Button({
  children,
  onPress,
  onHover,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
  textClassName = "",
  style,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      {...props}
      style={style}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled, busy: loading }}
      disabled={isDisabled}
      onHoverIn={onHover}
      onPress={onPress}
      className={`items-center justify-center rounded-xl ${sizeClasses[size]} ${variantClasses[variant]} ${
        isDisabled ? "opacity-50" : ""
      } ${className}`}
    >
      {loading ? (
        <ActivityIndicator
          color={
            variant === "secondary" ||
            variant === "outline" ||
            variant === "ghost"
              ? "#1F1F1F"
              : "#ffffff"
          }
        />
      ) : typeof children === "string" ? (
        <Text
          className={`font-semibold ${textSizeClasses[size]} ${textVariantClasses[variant]} ${textClassName}`}
        >
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  );
}
