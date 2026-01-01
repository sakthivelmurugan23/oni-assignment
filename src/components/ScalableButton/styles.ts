import { StyleSheet } from 'react-native-unistyles'

export const styles = StyleSheet.create(theme => ({
  base: {
    paddingVertical: 16,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  black: {
    backgroundColor: theme.colors.blackButton,
  },
  variant: (variant: 'outlined' | 'yellow' | 'black') => ({
    outlined: {
      backgroundColor: theme.colors.outlinedButton,
      borderWidth: 1,
      borderColor: theme.colors.outlinedButtonBorder,
    },
    yellow: {
      backgroundColor: theme.colors.yellow,
    },
    black: {
      backgroundColor: theme.colors.blackButton,
    },
  }[variant]),

  textBase: {
    fontSize: 18,
    fontFamily: theme.fonts.jakarta500,
  },

  textVariant: (variant: 'outlined' | 'yellow' | 'black') => ({
    outlined: { color: theme.colors.outlinedButtonText },
    yellow: { color: theme.colors.yellowButtonText },
    black: { color: theme.colors.blackButtonText },
  }[variant]),

  leftIcon: {
    marginRight: 4,
  },

  rightIcon: {
    marginLeft: 4,
  },
}))
