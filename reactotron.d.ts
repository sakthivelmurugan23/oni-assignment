// src/types/reactotron.d.ts
import Reactotron from 'reactotron-react-native'; // Or 'reactotron-core-client' for web

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}
