import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Colors} from '../../assets/styles';
import {
  responsiveScreenHeight as hp,
  responsiveScreenWidth as wp,
  responsiveScreenFontSize as RF,
} from 'react-native-responsive-dimensions';


//------------------ Custome screen header ------------//
const ScreenHeader = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.headerSection}>
          <Text style={styles.headingText}>{props.headerTitle}</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/userCircle.png')}
            style={styles.userIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.BLUE_DARK,
    height: wp(13),
    width: wp(90),
  },
  userIcon: {
    width: wp(8),
    height: wp(8),
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    color: Colors.WHITE,
    fontSize: RF(1.8),
    fontWeight: '400',
    marginLeft: wp(3),
  },
  headerSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
