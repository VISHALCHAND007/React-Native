import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView
      style={isDarkMode ? styles.safeAreaDark : styles.safeAreaLight}>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.textWhite : styles.textDark}>
          Hello World!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  safeAreaLight: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  safeAreaDark: {
    flex: 1,
    backgroundColor: '#000000',
  },
  textWhite: {
    color: '#FFFFFF',
  },
  textDark: {
    color: '#000000',
  },
});

export default AppPro;
