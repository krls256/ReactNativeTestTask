import Unplash from './services/unplash'

export const push_photos = (payload) => ({type: 'PUSH_PHOTOS', payload});

export const inc_page = () => ({type: 'PAGE'});

export const pick_image = (payload) => ({type: 'PICK_PIC', payload});

export const load_photos = () => (dispatch, getState) => {
    const unplash = new Unplash();
          unplash.getPhotos(getState().page)
          .then((arr = []) => dispatch(push_photos(arr)))
          .catch(err => {/*error handler*/})
}