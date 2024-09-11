import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image} from 'react-native';
import {
  responsiveScreenHeight as hp,
  responsiveScreenWidth as wp,
  responsiveScreenFontSize as RF,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../assets/styles';
import {Icon} from '@ant-design/react-native';

const Splash = (props: any) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('MapView');
    }, 2000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Icon name={'global'} size={wp(14)} color={Colors.LIGHT_BLUE} />
        <Text style={styles.loadingTxt}>Loading.....</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLUE_DARK,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: wp(31),
    height: wp(25.5),
  },
  loadingTxt: {
    color: Colors.LIGHT_BLUE,
    marginTop: wp(2),
    fontSize: RF(2),
  },
});
