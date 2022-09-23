import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import styles from "../imageGallery/imageGallery.module.css"

const ImageGallery = ({ images }) => {
    return (
        <ul className={styles.gallery}>
            {images.map(({ id, webformatURL, tags }) =>
            (  < ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                tags={tags}
            />
            ))}        
                
        </ul>
    )
}

export default ImageGallery;

