// src/theme/colors.ts

export const lightThemeColors = {
    // ---- Base ----
    accent: "#7E22CE",
    screen: "#000000",
    subtle: "#1A1A1A",
    text: "#FFFFFF",
    black: "#141313",
    primary: "#000000",
  };
  
  export const darkThemeColors: typeof lightThemeColors = {
    ...lightThemeColors,
  };
  
  export type ColorName = keyof typeof lightThemeColors;
  