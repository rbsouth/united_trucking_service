import { storage } from '../../config/firebase';

export const downloadImage = (image_name) => {
    if( image_name === "/" ) {
        return storage.ref().child("home.jpeg").getDownloadURL();
    } else {
        return storage.ref().child(image_name + ".jpeg").getDownloadURL();
    }
}