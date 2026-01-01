export default function (api) {
    api.cache(true);
  
    return {
      presets: [
        ['babel-preset-expo'],
      ],
      plugins: [
        [
          'react-native-unistyles/plugin',
          {
            // root folder where your components live
            root: 'index.ts',
          },
        ],
      ],
    };
  }
  