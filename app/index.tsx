import { ThemedText } from '@/src/components';
import { Link } from 'expo-router';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function Index() {
  return (
    <View style={styles.container}>
      <ThemedText >This is a modal</ThemedText>
      <Link href="/" dismissTo style={styles.link}>
        <ThemedText>Go to home screen</ThemedText>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create((theme)=>({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
}));
