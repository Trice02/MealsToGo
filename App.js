import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { StatusBar, SafeAreaView, StyleSheet, Text, View , Platform} from 'react-native';
import React from 'react';
import { SearchBar } from 'react-native-paper';

console.log(StatusBar.currentHeight);
export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <SearchBar />
      </View>
      <View style={styles.body}>
        <Text>List</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  search: {
    padding: 16,

  },
  body: {
    flex: 1, 
    padding: 16,
  },

});