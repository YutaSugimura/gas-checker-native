import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const Screen: React.VFC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
