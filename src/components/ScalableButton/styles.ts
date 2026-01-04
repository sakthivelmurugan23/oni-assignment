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
    backgroundColor: theme.colors.black,
  },
  variant: (variant: 'outlined' | 'yellow' | 'black') => ({
    outlined: {
      backgroundColor: theme.colors.text,
      borderWidth: 1,
      borderColor: theme.colors.black,
    },
    yellow: {
      backgroundColor: theme.colors.black,
    },
    black: {
      backgroundColor: theme.colors.primary,
    },
  }[variant]),

  textBase: {
    fontSize: 18,
  },

  textVariant: (variant: 'outlined' | 'yellow' | 'black') => ({
    outlined: { color: theme.colors.black },
    yellow: { color: theme.colors.black },
    black: { color: theme.colors.black },
  }[variant]),

  leftIcon: {
    marginRight: 4,
  },

  rightIcon: {
    marginLeft: 4,
  },
}))
