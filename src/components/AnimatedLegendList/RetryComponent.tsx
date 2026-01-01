import { ThemedSVG } from "@/ThemedSVG";
import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import ThemedText from "../ThemedText/ThemedText";

export type RetryComponentProps = {
  errorMessage?: string;
  RetryButtonComponent?: () => React.JSX.Element;
  onRetry?: () => void;
  Icon?: () => React.JSX.Element;
  description?: string;
  buttonText?: string;
  imageSource?: string;
  containerStyle?: ViewStyle;
  titleClassName?:string
};
export default function RetryComponent({
  errorMessage,
  RetryButtonComponent,
  onRetry,
  description,
  Icon,
  buttonText,
  imageSource,
  containerStyle,
  titleClassName
}: RetryComponentProps) {
  return (
    <View style={[styles.container, containerStyle]}>
      {Icon ? <Icon /> : <ThemedSVG variants="any" />}
      <ThemedText style={styles.title}>
        {errorMessage ?? "Server Error"}
      </ThemedText>
      <ThemedText
        style={styles.description}>
        {description ??
          "If you need further assistance, don’t hesitate to contact our support team!"}
      </ThemedText>
      {RetryButtonComponent ? (
        <RetryButtonComponent />
      ) : (
        <Pressable style={styles.touchableStyle} onPress={onRetry} >
            <ThemedText>{buttonText||"Try again"}</ThemedText>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    display: "flex",
    gap: 16,
  },
  description: {
    textAlign: "center",
  },
  title: {
    textAlign: "center",
  },
  touchableStyle: {
    width: "50%",
  },
});
