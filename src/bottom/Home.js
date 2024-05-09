import { View, Text, StyleSheet, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons'
import CStyles from '../style';

const Home = ({ navigation }) => {
  const [mlat, setMLat] = useState(37.78825)
  const [mlong, setMLong] = useState(-122.301)
  return (
    <View style={[CStyles.positionRelative, { flex: 1, justifyContent: "center", alignItems: "center" }]}>
      
      <View style={[CStyles.positionAbsolute,CStyles.justifyContentCenter, CStyles.w100,CStyles.p1, CStyles.h30, CStyles.rounded, CStyles.bgWhite, { zIndex: 1, bottom: 0 }]}>
      
        <View style={[CStyles.flexRow,CStyles.justifyContentAround,CStyles.my1]}>
          <TouchableOpacity onPress={() => navigation.navigate("Outofrange")} style={[CStyles.flexRow, CStyles.w45, CStyles.AppBg1, CStyles.p2, CStyles.rounded, CStyles.alignItemsCenter,]}>
            <Icon name="location-on" size={30} color={CStyles._white} />
            <View style={[CStyles.mx1]}>
              <Text style={[CStyles.fs6, CStyles.textWhite]}>Distance</Text>
              <Text style={[CStyles.fs5, CStyles.textWhite, CStyles.textBold]}>78m</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Outofrange")} style={[CStyles.flexRow, CStyles.w45, CStyles.AppBg1, CStyles.p2, CStyles.rounded, CStyles.alignItemsCenter,]}>
            <Icon name="speed" size={30} color={CStyles._white} />
            <View style={[CStyles.mx1]}>
              <Text style={[CStyles.fs6, CStyles.textWhite]}>Max Speed</Text>
              <Text style={[CStyles.fs5, CStyles.textWhite, CStyles.textBold]}>50km/h</Text>
            </View>
          </TouchableOpacity>
        </View >
        <View style={[CStyles.flexRow,CStyles.justifyContentAround]}>

          <TouchableOpacity onPress={() => navigation.navigate("Outofrange")} style={[CStyles.flexRow, CStyles.w45, CStyles.AppBg1, CStyles.p2, CStyles.rounded, CStyles.alignItemsCenter,]}>
            <Icon name="schedule" size={30} color={CStyles._white} />
            <View style={[CStyles.mx1]}>
              <Text style={[CStyles.fs6, CStyles.textWhite]}>Time</Text>
              <Text style={[CStyles.fs5, CStyles.textWhite, CStyles.textBold]}>1h 26min</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Outofrange")} style={[CStyles.flexRow, CStyles.w45, CStyles.AppBg1, CStyles.p2, CStyles.rounded, CStyles.alignItemsCenter,]}>
            <Icon name="speed" size={30} color={CStyles._white} />
            <View style={[CStyles.mx1]}>
              <Text style={[CStyles.fs6, CStyles.textWhite]}>Avg Speed</Text>
              <Text style={[CStyles.fs5, CStyles.textWhite, CStyles.textBold]}>43km/h</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: mlat,
          longitude: mlong,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{
            latitude: mlat,
            longitude: mlong,
          }}
          title={"bike"}
        // onPress={() => {
        //   setSelectedBike(bike);
        //   // setModalVisible(true);
        //   openModal();
        // }}
        />
        {/* <View style={[CStyles.bgDanger,CStyles.roundedPill,{padding:4}]}>
          <Icon name="two-wheeler" size={50} color={CStyles._white} />
        </View> */}
        {/* <Image source={imagePath.icBike} style={{ width: 70, height: 70, }} /> */}
        {/* </Marker> */}
      </MapView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: "auto",
    width: "auto",
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

});

export default Home