/**
 * Simple React Native App for Refactory preparation (1st task)
 * https://github.com/wlisrausr/refactory-id-app
 * @author Wanda Ichsanul Isra
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class RefactoryIdApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.profileImg}
          source={require('./imgs/wlisra-profile.jpg')}
        />

        <Text style={styles.textData}>
          Wanda Ichsanul Isra{'\n'}
          Luciano (Batch 4)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  textData: {
    fontSize: 22,
    textAlign: 'center',
    margin: 20,
    fontWeight: 'bold',
    color: '#586069',
  },
  profileImg: {
    height: 180,
    width: 180,
    borderRadius: 90
  }
});

AppRegistry.registerComponent('RefactoryIdApp', () => RefactoryIdApp);
