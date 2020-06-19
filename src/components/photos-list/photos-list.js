import React, {useEffect} from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import { connect, useDispatch } from 'react-redux';
import Unplash from '../../services/unplash'
import {load_photos, inc_page} from '../../actions'
import ListItem from '../list-item'



const PhotosList = ({navigation, photos, page}) => {
    const dispatch = useDispatch();

    const zoom = () => navigation.navigate('Zoom');
    useEffect(() => {
        dispatch(load_photos());
        }, [page])
    return (
        <FlatList
        style={style.phorolist}
        data={photos}
        renderItem={({ item }) => <ListItem data={item} zoom={zoom}/>}
        keyExtractor={(item, index) => (item.name).concat(index)}
        onEndReached={() => dispatch(inc_page())}
        onEndThreshold={0.3}/>
    )
};
const mapStateToProps = ({photos, page}) => ({photos, page})

export default connect(mapStateToProps)(PhotosList);

const style = StyleSheet.create({
    phorolist: {
        backgroundColor: "#000",
        height: '100%',        
    }
})