import { TranslationKeys, useCustomTranslation } from "@/locale";
import { ThemedSVG } from "@/ThemeSvg";
import { ThemedSVGProps } from "@/ThemeSvg/ThemedSvg";
import React, { ComponentProps } from "react";
import { useController } from "react-hook-form";
import {
  Pressable,
  StyleProp,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { StyleSheet } from "react-native-unistyles";

/* -----------------------------------------------------
 * Types
 * ---------------------------------------------------*/

type InputVariant = "light";

interface CustomInputProps extends ComponentProps<typeof TextInput> {
  name: string;
  label?: TranslationKeys;
  variant?: InputVariant;
  containerStyle?: StyleProp<ViewStyle>;
  RightIconVariant?: ThemedSVGProps["variants"];
  onRightPress?: () => void;
  placeHolder: TranslationKeys;
  isStableEmail?:boolean;
  
}

/* -----------------------------------------------------
 * Component
 * ---------------------------------------------------*/

export default function CustomInput({
  name,
  label,
  variant = "light",
  containerStyle,
  RightIconVariant,
  placeHolder,
  onRightPress,
  isStableEmail,
  ...rest
}: CustomInputProps) {
  const {
    field: { value, onBlur, onChange },
    fieldState: { error },
  } = useController({ name });

  const t = useCustomTranslation();

  const translatedPlaceHolder = t(placeHolder);
  const translatedLabel = label ? t(label) : undefined;

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {/* LABEL */}
      {translatedLabel && (
        <Text testID={translatedLabel} style={styles.label}>
          {translatedLabel}
        </Text>
      )}

      {/* INPUT WRAPPER */}
      <View
        style={[
          styles.inputContainer,
          error && styles.inputErrorBorder,
        ]}
      >
       <TextInput
  {...rest}
  value={value}
  testID={`${name}-input`}
  onChangeText={onChange}
  onBlur={onBlur}
  placeholder={translatedPlaceHolder}
  placeholderTextColor={stylesVars.placeholderColor}
  style={[
    styles.input,
    isStableEmail === false && styles.inputUnstable,
  ]}
/>


        {/* RIGHT ICON */}
        {RightIconVariant && (
          <Pressable
            testID="eye-button"
            onPress={onRightPress}
            hitSlop={10}
            style={styles.iconWrapper}
          >
            <ThemedSVG
              variants={RightIconVariant}
              width={20}
              height={20}
            />
          </Pressable>
        )}
      </View>

      {/* ERROR MESSAGE */}
      {error?.message && (
        <Text
          testID={`${name}-input-error-message`}
          style={styles.errorText}
        >
          {error.message}
        </Text>
      )}
    </View>
  );
}

const stylesVars = {
  placeholderColor: "#CBD0D6",
};

const styles = StyleSheet.create(theme => ({
  /* ---------- Wrapper ---------- */

  wrapper: {
    flexDirection: "column",
    gap: 6,
  },

  /* ---------- Label ---------- */

  label: {
    fontSize: 15,
    fontFamily: theme.fonts.jakarta500,
    color: theme.colors.black,
  },

  /* ---------- Input Container ---------- */

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 50,
    paddingHorizontal: 18,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.colors.grayBorder,
    backgroundColor: theme.colors.screen,
  },

  inputErrorBorder: {
    borderColor: theme.colors.warningRed,
  },

  /* ---------- TextInput ---------- */

  input: {
    flex: 1,
    fontSize: 16,
    fontFamily: theme.fonts.jakarta400,
    color: theme.colors.black, // ✅ default
  },

  inputUnstable: {
    color: theme.colors.lightMediumGray, // ✅ when not stable
  },

  /* ---------- Right Icon ---------- */

  iconWrapper: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },

  /* ---------- Error Text ---------- */

  errorText: {
    marginLeft: 4,
    fontSize: 12,
    fontFamily: theme.fonts.jakarta400,
    color: theme.colors.warningRed,
  },
}));
