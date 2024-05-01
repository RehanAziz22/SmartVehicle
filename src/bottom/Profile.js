import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CStyles from '../style'
import Icon from 'react-native-vector-icons/MaterialIcons'
import MapView, { Marker } from 'react-native-maps'

const Profile = () => {
    return (
        <View style={[CStyles.AppBg1, CStyles.pt5, CStyles.alignItemsCenter, { flex: 1 }]}>
            <View style={[CStyles.w95, CStyles.mt1, CStyles.alignItemsStart, CStyles.justifyContentAround, CStyles.p2, CStyles.bgWhite, CStyles.flexRow, CStyles.rounded]}>
                <View style={[CStyles.w70]}>
                    <Text style={[CStyles.fs1, CStyles.textBold, CStyles.textBlack]}>HARIS BUTT</Text>
                    <Text style={[CStyles.fs5, CStyles.textBlack, CStyles.pb1, CStyles.borderBottom1]}>Bike Rider</Text>
                    <Text style={[CStyles.fs5, CStyles.textBold, CStyles.pt1,]}>HONDA MOTORCYCLE 70 CC</Text>
                    <Text style={[CStyles.fs5, CStyles.textBold]}>MODAL - 2019</Text>
                </View>
                <View style={[CStyles.w30, CStyles.alignItemsCenter,]}>
                    <Icon name="two-wheeler" size={100} color={CStyles.AppColorDark} />
                    <Text style={[CStyles.bgGrey, CStyles.p1, CStyles.rounded]}>KIJ 3140</Text>
                </View>
            </View>
            <View style={[CStyles.w95, CStyles.alignItemsStart, CStyles.justifyContentAround, CStyles.p2, CStyles.mt1, CStyles.bgWhite, CStyles.rounded]}>
                <Text style={[CStyles.fs3, CStyles.textCenter, CStyles.w100, CStyles.textBold, CStyles.textBlack]}>DEFINE VALUES</Text>
                <View style={[CStyles.flexRow, CStyles.justifyContentBetween]}>
                    <View style={[CStyles.shadow3, CStyles.w45, CStyles.m1, CStyles.p2, CStyles.rounded, CStyles.AppBg1, CStyles.alignItemsCenter]}>
                        <Text style={[CStyles.fs5, CStyles.textWhite]}>Speed Limit</Text>
                        <Text style={[CStyles.fs2, CStyles.textWhite, CStyles.textBold]}>60km</Text>
                    </View>
                    <View style={[CStyles.shadow3, CStyles.w45, CStyles.m1, CStyles.p2, CStyles.rounded, CStyles.AppBg1, CStyles.alignItemsCenter]}>
                        <Text style={[CStyles.fs5, CStyles.textWhite]}>Distance Limit</Text>
                        <Text style={[CStyles.fs2, CStyles.textWhite, CStyles.textBold]}>700m</Text>
                    </View>
                </View>
                <View style={[CStyles.flexRow, CStyles.alignItemsCenter]}>
                    <Icon name="location-on" color={CStyles.AppColorDark} size={40} />
                    <View>
                        <Text style={[CStyles.fs5, CStyles.textBlack]}>Home Location </Text>
                        <Text style={[CStyles.fs5, CStyles.textBlack, CStyles.textBold]}>North Nazimabad, block 02</Text>
                    </View>
                </View>
                {/* <View style={[CStyles.w100, CStyles.h50]}> */}
                {/* <Icon name="location-on" color={CStyles.AppColorDark} size={40} /> */}
                <MapView
                    style={[CStyles.w100, CStyles.h50]}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.301,
                        latitudeDelta: 0.092,
                        longitudeDelta: 0.0121,
                    }}
                >
                    <Marker coordinate={{
                        latitude: 37.78825,
                        longitude: -122.301,
                    }} >
                        <Icon name="location-on" size={50} color={CStyles._danger} />
                    </Marker>
                </MapView>
                {/* </View> */}

            </View>
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
export default Profile