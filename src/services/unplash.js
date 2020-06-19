import axios from 'axios'
class Unplash {
    constructor() {
        this.key = 'gzJkOnstcBrnUsDs2i7PBsmPZo3QFvdJBCzGXij-008'
        this.getPhotos = async (page) => {
          return await axios.get(`https://api.unsplash.com/photos?page=${page}&query=kyiv&client_id=${this.key}`)
                .then(body => {
                       return body.data.map(element => {
                           return {
                            description: element.description,
                            name: element.user.name,
                            little: element.urls.thumb,
                            regular: element.urls.regular
                           }
                        });
                })
        }   
    }
}
export default Unplash