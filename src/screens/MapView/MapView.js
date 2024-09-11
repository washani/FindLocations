import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import ScreenHeader from '../../components/ScreenHeader';
import {Colors} from '../../assets/styles';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {
  responsiveScreenHeight as hp,
  responsiveScreenWidth as wp,
  responsiveScreenFontSize as RF,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from '@ant-design/react-native';
import {setLocationData} from '../../redux/LocationInfo/action';
import {searchResultsInfo} from '../../redux/LocationInfo/selectors';
// import {GOOGLE_MAPS_APIKEY} from '../../../googleMapKey';
import Config from "react-native-config";

const MapViewScreen = props => {
  const dispatch = useDispatch();
  const [indicate, setIndicate] = useState(true);
  const [searchLocationInfo, setSearchLocationInfo] = useState({
    latitude: 3.1342,
    longitude: 101.6861,
    latitudeDelta: 0.0155,
    longitudeDelta: 0.0521,
  });
  const saveLocationResult = useSelector(searchResultsInfo);

  //-----This useEffect is called each time the indicate is set to true-----//
  useEffect(() => {
    setIndicate(false);
    console.log('saveLocationResult', saveLocationResult);
  }, [indicate]);

  //------This code demonstrates how to render items in a FlatList view ------//
  const renderItem = ({item}) => (
    <View style={styles.divider}>
      <Text style={{color: Colors.WHITE}}>{item}</Text>
    </View>
  );

  //-----If the FlatList is empty, this component is triggered-----//
  const dataEmptyComponent = () => {
    return (
      <View style={[{marginTop: hp(2)}]}>
        <Text style={styles.noResultText}>There’s no previous search.</Text>
      </View>
    );
  };

  //----------The user's search results are sent to the Redux store------//
  const gatherUserSearchResults = details => {
    console.log('gatherUserSearchResults', details?.name);
    dispatch(setLocationData(details?.name));
    setIndicate(true);
  };

  return (
    <SafeAreaView style={styles.maincontainer}>
      <ScreenHeader
        navigation={props.navigation}
        headerTitle={'Explore Locations'}
      />

      {indicate ? (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} color={Colors.ASH_COLOR} />
        </View>
      ) : (
        <>
          <View style={styles.container}>
            <MapView
              style={{width: '100%', height: '100%'}}
              provider={PROVIDER_GOOGLE}
              region={searchLocationInfo}>
              <Marker coordinate={searchLocationInfo}>
                <Icon
                  name={'environment'}
                  size={wp(10)}
                  color={'#1f2eb8'}
                />
              </Marker>
            </MapView>
          </View>

          <View>
            <View style={{marginTop: -hp(55)}}>
              <View style={styles.valueinputSearch}>
                <GooglePlacesAutocomplete
                  placeholder="Location Search...."
                  fetchDetails={true}
                  textInputProps={{
                    placeholderTextColor: Colors.WHITE,
                    returnKeyType: 'search',
                  }}
                  styles={{
                    textInput: {
                      height: 40,
                      color: Colors.WHITE,
                      fontSize: RF(1.7),
                      fontWeight: '500',
                      backgroundColor: Colors.BLUE_LIGHT,
                    },
                    row: {
                      backgroundColor: Colors.WHITE,
                    },
                  }}
                  nearbyPlacesAPI={'GoogleReverseGeocoding'}
                  onPress={(data, details, place = null) => {
                    setSearchLocationInfo({
                      latitude: details?.geometry.location.lat,
                      longitude: details?.geometry.location.lng,
                      latitudeDelta: 0.0155,
                      longitudeDelta: 0.1521,
                    });
                    gatherUserSearchResults(details);
                  }}
                  query={{
                    key: Config.GOOGLE_MAPS_APIKEY,
                    language: 'en',
                  }}
                />
              </View>
            </View>

            <View style={styles.locationList}>
              <Text style={styles.headerText}>List of Search Results</Text>
              <FlatList
                data={saveLocationResult}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={dataEmptyComponent}
              />
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default MapViewScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: Colors.BLUE_DARK,
    alignItems: 'center',
  },
  container: {
    height: wp(120),
    width: wp(100),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  valueinputSearch: {
    marginTop: hp(3),
    width: wp(90),
    height: hp(25),
  },
  locationList: {
    flex: 1,
    marginTop: hp(30),
    width: wp(50),
  },
  headerText: {
    color: Colors.WHITE,
    fontSize: RF(2),
    marginBottom: hp(2),
    fontWeight: '700',
  },
  noResultText: {
    color: Colors.ASH_COLOR,
    fontSize: RF(1.6),
    fontWeight: '500',
  },
  divider: {
    padding: hp(1),
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.ASH_COLOR,
  },
});
