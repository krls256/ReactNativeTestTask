import React from 'react';
import {Image, Text, TouchableOpacity, StyleSheet, View} from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../../actions'

const ListItem = ({data = {}, zoom, pick_image}) => {
    let {name = 'no name',
         description = 'non desctiption', 
         little = null, 
         regular = null}  = data;
    if (!description) {
        description = 'non desctiption';
    } 
    if(name.length > 37) {
        name = name.substr(0, 34) + '...'
    }
    if(description.length > 31) {
        description = description.substr(0, 30) + '...'
    }
    if (little && regular) {
        return (
            <TouchableOpacity style={style.touch} onPress={() => {
                pick_image(regular)
                zoom()
            }}>
                <Image source={{uri: little}} style={style.img}/>
                <View style={style.textWrapper}>
                    <View style={style.line}>
                        <Text style={{...style.text, ...style.label}}>Author:</Text>
                        <Text style={style.text}>{name}</Text>
                    </View>
                    <View style={style.line}>
                        <Text style={{...style.text, ...style.label}}>Description:</Text>
                        <Text style={style.text}>{description}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return null;
}

export default connect(null, actions)(ListItem);

const style = StyleSheet.create({
    text: {
        color: '#fff',
        fontSize: 12,
        lineHeight: 12,
        height: 12,
    },
    label: {
        marginRight: 4,
    },
    touch: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 25,
        marginRight: 7,
    },
    textWrapper: {
        justifyContent: 'center'
    },
    line: {
        marginTop: 7,
        flexDirection: 'row',
        // alignItems: 'center',
    }
})