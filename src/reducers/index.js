import {combineReducers} from 'redux';
import photosReducer from './photos-reducer';
import pageReduser from './page-reducer';
import pickPicReducer from './pick-pic-reducer';

export default combineReducers({
    photos: photosReducer,
    page: pageReduser,
    pickPic: pickPicReducer,
})