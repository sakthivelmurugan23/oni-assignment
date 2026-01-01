import { TranslationKeys, useCustomTranslation } from '@/locale'
import { Text, TextProps, TextStyle } from 'react-native'
import { StyleSheet } from 'react-native-unistyles'

type FontWeight = TextStyle["fontWeight"]

interface ThemedTextProps extends TextProps {
  textContent?: TranslationKeys
  weight?: FontWeight // 👈 replaces text-plus-jakarta-*
}

export default function ThemedText({
  textContent,
  weight = 500, // 👈 default like before
  style,
  ...rest
}: ThemedTextProps) {
  const t = useCustomTranslation()

  const content = textContent ? t(textContent) : rest.children

  return (
    <Text
      {...rest}
      style={[
        styles.base,
        styles.weight(weight),
        style,
      ]}
    >
      {content}
    </Text>
  )
}
const styles = StyleSheet.create(theme => ({
    base: {
      color: theme.colors.text,
    },
  
    weight: (w:FontWeight) => ({
      fontWeight:w
    }),
  }))
  