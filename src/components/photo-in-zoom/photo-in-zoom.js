import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {connect} from 'react-redux'

const PhotoInZoom = ({navigation, pickPic}) => {
    if (pickPic) {
        return <View style={style.block}>
            <Image source={{uri: pickPic}} style={style.img} resizeMode={'cover'}/>
        </View>
    }
    return (
        <View style={style.block}/>
    )
}
const mapStateToProps = ({pickPic}) => ({pickPic})

export default connect(mapStateToProps)(PhotoInZoom);

const style = StyleSheet.create({
    img: {
        height: '100%',
        width: '100%'
    },
    block: {
        height: '100%',
        width: '100%',
        backgroundColor: '#000'
    }
})